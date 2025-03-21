
import { Car, Clock, Shield, Map, Settings, Award } from 'lucide-react';
import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';

const features = [
  {
    icon: <Car className="h-6 w-6 text-primary" />,
    title: 'Premium Fleet',
    description: 'Choose from our selection of luxury vehicles for any occasion or need.',
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Punctual Service',
    description: 'We value your time with on-time pickups and efficient travel.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Safety First',
    description: 'Our drivers are trained and vehicles regularly maintained for your safety.',
  },
  {
    icon: <Map className="h-6 w-6 text-primary" />,
    title: 'Extensive Coverage',
    description: 'Travel to popular destinations with our wide service network.',
  },
  {
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: 'Customizable Packages',
    description: 'Tailor your travel experience with our flexible booking options.',
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: 'Professional Drivers',
    description: 'Our experienced and courteous drivers ensure a pleasant journey.',
  },
];

const ServiceOverview = () => {
  return (
    <section className="section-padding bg-cab-50">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Exceptional Service, Every Mile</h2>
          <p className="text-lg text-muted-foreground">
            Discover the perfect blend of luxury, comfort, and reliability with our premium cab services tailored to your needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="bg-white rounded-xl p-8 shadow-sm border border-border/40 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" className="mt-16 lg:mt-24 relative">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Cabitopia?</h2>
                <p className="text-muted-foreground mb-6">
                  We've redefined the cab experience with our commitment to excellence, attention to detail, and customer-first approach.
                </p>
                <ul className="space-y-4">
                  {[
                    'Luxurious vehicles for a premium experience',
                    'Professionally trained and courteous drivers',
                    'Transparent pricing with no hidden fees',
                    'Rigorous safety protocols and vehicle maintenance',
                    '24/7 customer support for your convenience',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-primary text-white p-1 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/images/gon.jpg"
                  alt="Premium cab service experience"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} />
                      ))}
                    </div>
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The most professional cab service I've ever used. Impeccable service from booking to destination."
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Business Executive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

export default ServiceOverview;
