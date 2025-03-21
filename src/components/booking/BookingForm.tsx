import { useState } from 'react';
import { CarFront, Calendar, Users, CalendarCheck, Pen, Clock } from 'lucide-react';
import { format } from 'date-fns';
import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';
import ImageUpload from '../ui/ImageUpload';
import { Car } from './CarListing';
import { cn } from '@/lib/utils';

interface BookingFormProps {
  selectedCar: Car | null;
  onFormSubmit: (formData: BookingFormData) => void;
}

export interface BookingFormData {
  name: string;
  aadhaarImage: File | null;
  visitDate: Date | null;
  returnDate: Date | null;
  passengers: number;
  travelTime: string;
  specialRequests: string;
}

const BookingForm = ({ selectedCar, onFormSubmit }: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    aadhaarImage: null,
    visitDate: null,
    returnDate: null,
    passengers: 1,
    travelTime: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleImageChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, aadhaarImage: file }));
    
    // Clear error when field is updated
    if (errors.aadhaarImage) {
      setErrors((prev) => ({ ...prev, aadhaarImage: undefined }));
    }
  };

  const handleDateChange = (field: 'visitDate' | 'returnDate', dateStr: string) => {
    const date = dateStr ? new Date(dateStr) : null;
    setFormData((prev) => ({ ...prev, [field]: date }));
    
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.aadhaarImage) {
      newErrors.aadhaarImage = 'Aadhaar image is required';
    }
    
    if (!formData.visitDate) {
      newErrors.visitDate = 'Visit date is required';
    }
    
    if (formData.passengers <= 0) {
      newErrors.passengers = 'At least 1 passenger is required';
    }
    
    if (
      selectedCar &&
      formData.passengers > selectedCar.seats
    ) {
      newErrors.passengers = `Maximum ${selectedCar.seats} passengers allowed for this vehicle`;
    }
    
    if (!formData.travelTime) {
      newErrors.travelTime = 'Travel time is required';
    }
    
    // If return date is before visit date
    if (
      formData.visitDate &&
      formData.returnDate &&
      formData.returnDate < formData.visitDate
    ) {
      newErrors.returnDate = 'Return date cannot be before visit date';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    onFormSubmit(formData);
  };

  return (
    <AnimatedSection animation="fade-up" className="mt-10">
      <div className="bg-white rounded-xl shadow-md border border-border p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
        
        {selectedCar ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-border pb-4 mb-6">
              <p className="text-sm text-muted-foreground">Selected Vehicle:</p>
              <div className="flex items-center space-x-3 mt-2">
                <CarFront className="h-5 w-5 text-primary" />
                <span className="font-medium">{selectedCar.name}</span>
                <span className="text-sm text-muted-foreground">({selectedCar.type})</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Client Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Pen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={cn(
                      "w-full pl-10 py-2 border rounded-lg focus:ring-1 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all",
                      errors.name ? "border-destructive" : "border-input"
                    )}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>
              
              {/* Number of Passengers */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Number of Passengers <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    min="1"
                    max={selectedCar.seats}
                    className={cn(
                      "w-full pl-10 py-2 border rounded-lg focus:ring-1 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all",
                      errors.passengers ? "border-destructive" : "border-input"
                    )}
                  />
                </div>
                {errors.passengers ? (
                  <p className="text-sm text-destructive">{errors.passengers}</p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Max {selectedCar.seats} passengers
                  </p>
                )}
              </div>
              
              {/* Visit Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Visit Date <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate ? format(formData.visitDate, 'yyyy-MM-dd') : ''}
                    onChange={(e) => handleDateChange('visitDate', e.target.value)}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    className={cn(
                      "w-full pl-10 py-2 border rounded-lg focus:ring-1 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all",
                      errors.visitDate ? "border-destructive" : "border-input"
                    )}
                  />
                </div>
                {errors.visitDate && (
                  <p className="text-sm text-destructive">{errors.visitDate}</p>
                )}
              </div>
              
              {/* Return Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Return Date (Optional)
                </label>
                <div className="relative">
                  <CalendarCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate ? format(formData.returnDate, 'yyyy-MM-dd') : ''}
                    onChange={(e) => handleDateChange('returnDate', e.target.value)}
                    min={formData.visitDate ? format(formData.visitDate, 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd')}
                    className={cn(
                      "w-full pl-10 py-2 border rounded-lg focus:ring-1 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all",
                      errors.returnDate ? "border-destructive" : "border-input"
                    )}
                  />
                </div>
                {errors.returnDate && (
                  <p className="text-sm text-destructive">{errors.returnDate}</p>
                )}
              </div>
              
              {/* Travel Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Preferred Time <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <select
                    name="travelTime"
                    value={formData.travelTime}
                    onChange={handleChange}
                    className={cn(
                      "w-full pl-10 py-2 border rounded-lg focus:ring-1 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all appearance-none bg-transparent",
                      errors.travelTime ? "border-destructive" : "border-input"
                    )}
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (6AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                    <option value="night">Night (8PM - 12AM)</option>
                  </select>
                </div>
                {errors.travelTime && (
                  <p className="text-sm text-destructive">{errors.travelTime}</p>
                )}
              </div>
              
              {/* Special Requests */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests or instructions for your trip"
                  rows={3}
                  className="w-full p-3 border border-input rounded-lg focus:ring-1 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all"
                />
              </div>
              
              {/* Aadhaar Image Upload */}
              <div className="md:col-span-2">
                <ImageUpload
                  label="Aadhaar Card Photo"
                  description="Please upload a clear photo of your Aadhaar card for verification"
                  onChange={handleImageChange}
                  required
                  error={errors.aadhaarImage}
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <button 
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 shadow-md"
              >
                Complete Booking
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground mb-4">Please select a vehicle to continue with your booking</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Choose a Vehicle
            </button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default BookingForm;
