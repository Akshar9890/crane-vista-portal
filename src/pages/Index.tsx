import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CraneTypes from "@/components/CraneTypes";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CraneTypes />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
