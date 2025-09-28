import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Art Gallery
        </h1>
        <p className="text-xl md:text-2xl text-elegant mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover a curated collection of contemporary paintings that explore the depth 
          of human emotion through bold strokes and vibrant compositions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-6 text-lg font-semibold hover:shadow-[var(--shadow-blue)] transition-[var(--transition-smooth)]"
          >
            View Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-gallery-hover px-8 py-6 text-lg font-semibold transition-[var(--transition-smooth)]"
          >
            About Artist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;