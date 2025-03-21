import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PlaceCard from '@/components/places/PlaceCard';
import { Link } from 'react-router-dom';

const places = [
  {
    id: "1",
    name: "Srinagar",
    image: "/images/download.jpeg",
    description: "Experience the beauty of the Dal Lake, Mughal gardens, and the vibrant Kashmiri culture.",
    rating: 4.9,
    popularDestinations: ["Dal Lake", "Shankaracharya Temple", "Mughal Gardens", "Hazratbal Shrine"]
  },
  {
    id: "2",
    name: "Pahalgam",
    image: "/images/down.jpeg",
    description: "A serene valley known for its breathtaking landscapes, lush greenery, and the Lidder River.",
    rating: 4.8,
    popularDestinations: ["Betaab Valley", "Aru Valley", "Lidder River", "Chandanwari"]
  },
  {
    id: "3",
    name: "Sonamarg",
    image: "/images/dow.jpeg",
    description: "The Meadow of Gold, famous for its glaciers, alpine meadows, and stunning scenery.",
    rating: 4.7,
    popularDestinations: ["Thajiwas Glacier", "Zoji La Pass", "Vishansar Lake", "Baltal Valley"]
  },
  {
    id: "4",
    name: "Gulmarg",
    image: "/images/image.jpeg",
    description: "A paradise for adventure lovers with its skiing slopes, cable car rides, and breathtaking views.",
    rating: 4.9,
    popularDestinations: ["Gondola Ride", "Apharwat Peak", "Khilanmarg", "Maharani Temple"]
  },
  {
    id: "5",
    name: "Drung",
    image: "/images/do.jpeg",
    description: "A hidden gem near Gulmarg, known for its frozen waterfalls and scenic beauty.",
    rating: 4.8,
    popularDestinations: ["Frozen Waterfall", "Drung Valley", "Trekking Trails", "Scenic Landscapes"]
  }
];

const Places = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Popular Destinations - Cabitopia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-cab-50 py-16 md:py-24">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Popular Destinations</h1>
              <p className="text-lg text-muted-foreground">
                Discover the most sought-after destinations that we serve with our premium cab services, from historic cities to scenic retreats.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Places Grid */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {places.map((place, index) => (
                <PlaceCard
                  key={place.id}
                  name={place.name}
                  image={place.image}
                  description={place.description}
                  rating={place.rating}
                  popularDestinations={place.popularDestinations}
                  delay={index * 100}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Service Network</h2>
              <p className="text-muted-foreground">
                We operate across Kashmir with dedicated services to these popular destinations and many more.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5384643.502723047!2d74.67417117922283!3d34.083670799795566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10132f76e5b55%3A0x9083f1b2dc5e5e3e!2sKashmir!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Service Area Map"
              ></iframe>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Explore These Destinations?</h2>
              <p className="text-muted-foreground mb-8">
                Book our premium cab service now and start your journey to these amazing places.
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

export default Places;
