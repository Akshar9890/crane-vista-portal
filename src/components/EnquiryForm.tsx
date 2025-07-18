import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    craneType: "",
    projectDate: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      craneType: "",
      projectDate: "",
      location: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available 24/7 for emergency services"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@cranemax.com",
      description: "Get a quote within 2 hours"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Industrial Ave, Construction City, CC 12345",
      description: "Visit our facility and fleet"
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 6AM-8PM, Sat-Sun: 8AM-6PM",
      description: "Emergency services available 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get started? Fill out our enquiry form and we'll provide you with a 
            detailed quote tailored to your specific project needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-card h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <info.icon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">{info.label}</h4>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Project Enquiry Form</CardTitle>
                <CardDescription>
                  Provide us with your project details for an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="craneType">Crane Type Required</Label>
                      <Select value={formData.craneType} onValueChange={(value) => handleChange("craneType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crane type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tower">Tower Crane</SelectItem>
                          <SelectItem value="mobile">Mobile Crane</SelectItem>
                          <SelectItem value="crawler">Crawler Crane</SelectItem>
                          <SelectItem value="not-sure">Not Sure / Need Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="projectDate">Project Start Date</Label>
                      <Input
                        id="projectDate"
                        type="date"
                        value={formData.projectDate}
                        onChange={(e) => handleChange("projectDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Project Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      placeholder="City, State or full address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details & Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your project requirements, load specifications, duration, and any special considerations..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;