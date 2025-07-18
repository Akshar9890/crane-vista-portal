import { Truck, Building2, Factory, Wrench, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction Support",
      description: "Professional crane services for residential and commercial construction projects.",
      features: ["Steel erection", "Concrete pours", "Material lifting", "Site preparation"]
    },
    {
      icon: Factory,
      title: "Industrial Projects",
      description: "Heavy-duty crane solutions for manufacturing and industrial installations.",
      features: ["Equipment installation", "Factory setup", "Maintenance support", "Emergency service"]
    },
    {
      icon: Truck,
      title: "Transportation & Rigging",
      description: "Complete transportation and rigging services for oversized equipment.",
      features: ["Heavy haul transport", "Precision rigging", "Route planning", "Permit assistance"]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All operations follow strict safety protocols with certified operators"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Emergency crane services available around the clock"
    },
    {
      icon: Wrench,
      title: "Expert Maintenance",
      description: "Regular maintenance ensures reliable equipment performance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive crane services tailored to meet your specific project requirements 
            with safety, efficiency, and reliability.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-16 w-16 text-primary mx-auto mb-4 p-3 bg-secondary/10 rounded-full" />
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;