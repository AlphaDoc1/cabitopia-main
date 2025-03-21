
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/services/ServiceCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "1",
    title: "City Rides",
    description: "Navigate the urban landscape with our comfortable city rides. Perfect for daily commutes, meetings, or exploring the city at your pace.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Professional drivers with local knowledge",
      "Multiple vehicle options to suit your needs",
      "Real-time tracking and transparent pricing",
      "Air-conditioned comfort and amenities",
      "24/7 availability with minimal wait times"
    ]
  },
  {
    id: "2",
    title: "Airport Transfers",
    description: "Start or end your journey with our reliable airport transfer service. Punctual pickups, comfortable rides, and stress-free travel.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    features: [
      "Flight tracking to adjust for schedule changes",
      "Meet & greet service with name board",
      "Assistance with luggage handling",
      "Fixed transparent pricing with no hidden fees",
      "Premium vehicles with extra luggage space"
    ]
  },
  {
    id: "3",
    title: "Outstation Trips",
    description: "Explore beyond city limits with our comfortable outstation services. Long-distance travel made enjoyable with premium cars and experienced drivers.",
    image: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Well-maintained vehicles for long journeys",
      "Experienced drivers familiar with highways",
      "Flexible packages for one-way or round trips",
      "Rest stops and customized itineraries",
      "24/7 customer support throughout your journey"
    ]
  },
  {
    id: "4",
    title: "Corporate Travel",
    description: "Elevate your business travel experience with our dedicated corporate services. Reliability, professionalism, and comfort for executives.",
    image: "/images/bi.jpeg",
    features: [
      "Corporate accounts with centralized billing",
      "Professionally dressed chauffeurs",
      "Premium fleet for executive transport",
      "Discreet and confidential service",
      "Priority booking and dedicated support"
    ]
  }
];

const Services = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Update document title
    document.title = "Our Services - Cabitopia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-cab-50 py-16 md:py-24">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
              <p className="text-lg text-muted-foreground">
                Discover our range of premium transportation services designed to meet your every need with exceptional comfort and reliability.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="space-y-20">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  features={service.features}
                  reversed={index % 2 !== 0}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
              <p className="text-muted-foreground mb-8">
                Book your premium cab service now and enjoy a comfortable, reliable journey to your destination.
              </p>
              <Link
                to="/booking"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md inline-block"
              >
                Book Now
              </Link>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
