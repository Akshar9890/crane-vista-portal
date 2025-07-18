import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import heroCrane from "@/assets/hero-crane.jpg";

const Hero = () => {
  const stats = [
    { icon: Award, label: "25+ Years", description: "Experience" },
    { icon: Users, label: "500+", description: "Projects Completed" },
    { icon: Clock, label: "24/7", description: "Support Available" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCrane}
          alt="Professional Crane Services"
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Professional <span className="text-secondary">Crane Services</span> for Every Project
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              From construction sites to industrial projects, we provide reliable, safe, and efficient crane solutions. 
              Our experienced operators and modern fleet ensure your project success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="industrial" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('cranes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Fleet
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center shadow-card hover:shadow-industrial transition-shadow duration-300">
                  <stat.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img
                src={heroCrane}
                alt="Professional Crane"
                className="rounded-2xl shadow-industrial w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;