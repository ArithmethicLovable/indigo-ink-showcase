import { Card } from "@/components/ui/card";
import painting1 from "@/assets/painting1.jpg";
import painting2 from "@/assets/painting2.jpg";
import painting3 from "@/assets/painting3.jpg";
import painting4 from "@/assets/painting4.jpg";

const paintings = [
  {
    id: 1,
    title: "Abstract Depths",
    image: painting1,
    description: "An exploration of texture and movement in blue and black",
    year: "2024"
  },
  {
    id: 2,
    title: "Portrait in Blue",
    image: painting2,
    description: "Classical technique meets contemporary vision",
    year: "2023"
  },
  {
    id: 3,
    title: "Storm's Edge",
    image: painting3,
    description: "Landscape painting capturing nature's raw power",
    year: "2024"
  },
  {
    id: 4,
    title: "Geometric Harmony",
    image: painting4,
    description: "Modern abstract composition with bold geometry",
    year: "2023"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Works
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            A selection of paintings that showcase the evolution of contemporary artistry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {paintings.map((painting) => (
            <Card 
              key={painting.id} 
              className="group bg-card border-border hover:border-primary transition-[var(--transition-smooth)] overflow-hidden cursor-pointer hover:shadow-[var(--shadow-blue)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={painting.image} 
                  alt={painting.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-[var(--transition-smooth)]"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
                    {painting.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {painting.year}
                  </span>
                </div>
                <p className="text-elegant leading-relaxed">
                  {painting.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;