
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            Contact <span className="text-gradient-primary">Me</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mb-12">
            Have a project in mind or want to discuss potential collaboration?
            Get in touch using the contact form below.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
