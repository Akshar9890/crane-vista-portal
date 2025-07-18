import { Download, Eye, Truck, Building, Cog } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import craneTypes from "@/assets/crane-types.jpg";

const CraneTypes = () => {
  const cranes = [
    {
      icon: Building,
      name: "Tower Cranes",
      capacity: "5-80 Tons",
      height: "Up to 265ft",
      description: "Perfect for high-rise construction and urban projects with limited space.",
      applications: ["High-rise buildings", "Urban construction", "Residential towers"],
      specifications: {
        "Max Load": "80 tons",
        "Working Radius": "60m",
        "Hook Height": "80m"
      }
    },
    {
      icon: Truck,
      name: "Mobile Cranes",
      capacity: "25-500 Tons",
      height: "Up to 180ft",
      description: "Versatile and quick to deploy for various construction and industrial tasks.",
      applications: ["Construction sites", "Industrial maintenance", "Emergency rescue"],
      specifications: {
        "Max Load": "500 tons",
        "Boom Length": "60m",
        "Travel Speed": "85 km/h"
      }
    },
    {
      icon: Cog,
      name: "Crawler Cranes",
      capacity: "40-650 Tons",
      height: "Up to 200ft",
      description: "Heavy-duty cranes for the most demanding industrial and construction projects.",
      applications: ["Heavy industry", "Bridge construction", "Power plants"],
      specifications: {
        "Max Load": "650 tons",
        "Boom Length": "91m",
        "Ground Pressure": "Low"
      }
    }
  ];

  return (
    <section id="cranes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Crane Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of modern cranes, each designed for specific applications 
            and equipped with the latest safety features.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <img
            src={craneTypes}
            alt="Different types of cranes"
            className="rounded-2xl shadow-industrial w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Crane Types Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cranes.map((crane, index) => (
            <Card key={index} className="shadow-card hover:shadow-industrial transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <crane.icon className="h-12 w-12 text-secondary" />
                  <Badge variant="secondary" className="font-semibold">
                    {crane.capacity}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary">{crane.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {crane.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Specifications */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Specifications</h4>
                  <div className="space-y-2">
                    {Object.entries(crane.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {crane.applications.map((app, appIndex) => (
                      <Badge key={appIndex} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      // Scroll to contact form for detailed consultation
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      // In a real application, this would download a PDF brochure
                      alert(`${crane.name} brochure download will be available soon!`);
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Need Help Choosing the Right Crane?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts will help you select the perfect crane for your project requirements. 
            Contact us for a personalized consultation.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Expert Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CraneTypes;