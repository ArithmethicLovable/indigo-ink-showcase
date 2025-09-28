import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Interested in commissioning a piece or learning more about the collection?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Exhibition Info</h3>
            <div className="space-y-4 text-elegant">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Gallery Hours</h4>
                <p>Tuesday - Sunday: 10:00 AM - 6:00 PM</p>
                <p>Monday: Closed</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p>123 Art District Avenue</p>
                <p>Creative Quarter, ART 12345</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <p>info@artgallery.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Artist Statement</h3>
            <p className="text-elegant leading-relaxed mb-6">
              Through the interplay of light and shadow, color and form, each painting 
              tells a story of human experience. The use of blue tones represents depth, 
              emotion, and the infinite possibilities that exist within each moment.
            </p>
            <Button 
              variant="default"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-blue)] transition-[var(--transition-smooth)] w-full"
            >
              Schedule a Viewing
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;