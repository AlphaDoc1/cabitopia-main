import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CarListing, { Car } from '@/components/booking/CarListing';
import BookingForm, { BookingFormData } from '@/components/booking/BookingForm';
import RouteSelection, { Route } from '@/components/booking/RouteSelection';

// Sample car data
const carData: Car[] = [
  {
    id: "1",
    name: "Premium Sedan",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1549399542-7e8f2e928464?q=80&w=2069&auto=format&fit=crop",
    pricePerKm: 18,
    seats: 4,
    rating: 4.8,
    features: [
      "Air Conditioning",
      "Leather Seats",
      "Music System",
      "Bottled Water",
      "Charging Points",
      "Luggage Space"
    ]
  },
  {
    id: "2",
    name: "Luxury SUV",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    pricePerKm: 25,
    seats: 6,
    rating: 4.9,
    features: [
      "Air Conditioning",
      "Leather Seats",
      "Music System",
      "Bottled Water",
      "Charging Points",
      "Extra Luggage Space",
      "Sunroof"
    ]
  },
  {
    id: "3",
    name: "Economy Hatchback",
    type: "Hatchback",
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?q=80&w=2070&auto=format&fit=crop",
    pricePerKm: 12,
    seats: 4,
    rating: 4.6,
    features: [
      "Air Conditioning",
      "Music System",
      "Charging Points",
      "Compact & Fuel Efficient"
    ]
  },
  {
    id: "4",
    name: "Luxury Van",
    type: "Van",
    image: "https://images.unsplash.com/photo-1606431382386-d451913a047d?q=80&w=2071&auto=format&fit=crop",
    pricePerKm: 30,
    seats: 8,
    rating: 4.7,
    features: [
      "Air Conditioning",
      "Comfortable Seating",
      "Music System",
      "Bottled Water",
      "Charging Points",
      "Large Luggage Space",
      "Perfect for Groups"
    ]
  }
];

// Kashmir route data
const routeData: Route[] = [
  {
    id: "1",
    name: "Airport to Houseboat/Hotel",
    description: "Transfer from Srinagar Airport to your houseboat or hotel in the city",
    estimatedDistance: 15,
    estimatedPrice: 1200
  },
  {
    id: "2",
    name: "Hotel to Pahalgam",
    description: "Journey from Srinagar to the beautiful valley of Pahalgam",
    estimatedDistance: 90,
    estimatedPrice: 3500
  },
  {
    id: "3",
    name: "Pahalgam to Srinagar",
    description: "Return journey from Pahalgam to Srinagar city",
    estimatedDistance: 90,
    estimatedPrice: 3500
  },
  {
    id: "4",
    name: "Pahalgam to Gulmarg",
    description: "Scenic route from Pahalgam to the meadows of Gulmarg",
    estimatedDistance: 140,
    estimatedPrice: 5000
  },
  {
    id: "5",
    name: "Gulmarg to Srinagar",
    description: "Journey from Gulmarg back to Srinagar city",
    estimatedDistance: 50,
    estimatedPrice: 2500
  },
  {
    id: "6",
    name: "Gulmarg to Sonamarg",
    description: "Scenic mountain route from Gulmarg to Sonamarg",
    estimatedDistance: 120,
    estimatedPrice: 4500
  },
  {
    id: "7",
    name: "Sonamarg to Srinagar",
    description: "Return journey from Sonamarg to Srinagar city",
    estimatedDistance: 80,
    estimatedPrice: 3000
  },
  {
    id: "8",
    name: "Sonamarg to Airport",
    description: "Transfer from Sonamarg to Srinagar Airport for departure",
    estimatedDistance: 95,
    estimatedPrice: 3500
  }
];

const Booking = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "Book a Cab - Glacier Way Cabs";
  }, []);

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
    // Scroll to route selection if on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const routeSelection = document.getElementById('route-selection');
        if (routeSelection) {
          routeSelection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleSelectRoute = (route: Route) => {
    setSelectedRoute(route);
    // Scroll to booking form if on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const bookingForm = document.getElementById('booking-form');
        if (bookingForm) {
          bookingForm.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleFormSubmit = (formData: BookingFormData) => {
    setIsFormSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Booking Form Data:', formData);
      console.log('Selected Car:', selectedCar);
      console.log('Selected Route:', selectedRoute);
      
      // Show success message
      toast.success('Booking submitted successfully!', {
        description: 'We will contact you shortly to confirm your booking.',
        duration: 5000,
      });
      
      setIsFormSubmitting(false);
      
      // In a real application, this would submit to a backend API
      // and handle the response accordingly
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-cab-50 py-16">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Kashmir Journey</h1>
              <p className="text-lg text-muted-foreground">
                Select your preferred vehicle and route to explore the breathtaking beauty of Kashmir with Glacier Way Cabs.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Booking Section */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Car Selection */}
              <div className="lg:col-span-2">
                <CarListing
                  cars={carData}
                  onSelectCar={handleSelectCar}
                  selectedCarId={selectedCar?.id}
                />
                
                {/* Route Selection */}
                <div id="route-selection" className="mt-12">
                  {selectedCar && (
                    <RouteSelection
                      routes={routeData}
                      onSelectRoute={handleSelectRoute}
                      selectedRouteId={selectedRoute?.id || null}
                    />
                  )}
                </div>
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <AnimatedSection animation="fade-up" className="bg-white rounded-xl shadow-md border border-border p-6">
                    <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
                    
                    {selectedCar ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-border">
                          <span className="font-medium">{selectedCar.name}</span>
                          <span className="text-primary font-bold">₹{selectedCar.pricePerKm}/km</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type</span>
                            <span>{selectedCar.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Capacity</span>
                            <span>{selectedCar.seats} Passengers</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rating</span>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-yellow-400 mr-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{selectedCar.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {selectedRoute && (
                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center justify-between pb-2">
                              <span className="font-medium">Selected Route</span>
                            </div>
                            <div className="text-sm space-y-2">
                              <p className="font-medium">{selectedRoute.name}</p>
                              <p className="text-muted-foreground">{selectedRoute.description}</p>
                              <div className="flex justify-between pt-2">
                                <span>Estimated Distance</span>
                                <span className="font-medium">{selectedRoute.estimatedDistance} km</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Estimated Price</span>
                                <span className="font-medium text-primary">₹{selectedRoute.estimatedPrice}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="pt-4 text-sm text-muted-foreground">
                          <p>Complete the booking form below to confirm your reservation.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="py-8 text-center text-muted-foreground">
                        <p>Please select a vehicle to continue with your booking</p>
                      </div>
                    )}
                  </AnimatedSection>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div id="booking-form" className="mt-8">
              <BookingForm
                selectedCar={selectedCar}
                onFormSubmit={handleFormSubmit}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
