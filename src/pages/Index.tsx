
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#FDE1D3]">
      {/* Header section with logo */}
      <div className="w-full max-w-6xl mx-auto pt-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-white p-4 mb-2">
            <img src="/lovable-uploads/d2e9bddf-75de-4737-9d1f-061b63589b7d.png" alt="Book icon" className="w-10 h-10" />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold uppercase text-[#5C3D2E]">BRINCADEIRAS</h2>
            <p className="text-sm text-[#5C3D2E]">INFANTIS</p>
          </div>
        </div>

        {/* Main title */}
        <div className="text-center mt-12 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3A2618]">Guia Completo da Maternidade</h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button 
            className="bg-[#8B4513] hover:bg-[#6b3003] text-white font-medium px-8 py-6 rounded-full text-lg"
          >
            Quero Acessar o eBook
          </Button>
        </div>

        {/* Activity cards section - Updated for mobile to show 2 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-20">
          <ActivityCard 
            title="Brincadeiras" 
            subtitle="exploração sensorial" 
            image="/lovable-uploads/4975a274-3732-4a51-aaf8-83d87904d7a5.png" 
          />
          <ActivityCard 
            title="Criando" 
            subtitle="Garrafa sensorial" 
            image="/lovable-uploads/dfda74d2-abe0-4172-9e34-ebe0df3e48b0.png" 
          />
          <ActivityCard 
            title="Montando" 
            subtitle="Encaixe e tira" 
            image="/lovable-uploads/c0fde4a8-6f28-4d70-8fb4-bdd32616d3e4.png" 
          />
          <ActivityCard 
            title="Pescaria" 
            subtitle="De objetos" 
            image="/lovable-uploads/74f30199-8b6a-4da4-bc94-b45246b30c72.png" 
          />
          <ActivityCard 
            title="Transferência" 
            subtitle="Com colheres" 
            image="/lovable-uploads/4a86d49d-83a0-4f7d-8bca-74578e4585e6.png" 
          />
        </div>

        {/* Bonus section - Updated for mobile to show 2 columns */}
        <div className="py-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#3A2618]">BÔNUS:</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            <ActivityCard 
              title="Brincando" 
              subtitle="Macarrão no palito" 
              image="/lovable-uploads/026f9c4d-c3f8-4fa9-8f47-cd107766c5e9.png" 
            />
            <ActivityCard 
              title="Pintura" 
              subtitle="Comestível" 
              image="/lovable-uploads/5da9bd62-84f6-4e0c-bee9-f32ff7c43c64.png" 
            />
            <ActivityCard 
              title="Transferência" 
              subtitle="Com colheres" 
              image="/lovable-uploads/fb16708b-c6d0-4d43-9c71-b5c4b8b21d36.png" 
            />
            <ActivityCard 
              title="Cabaninha" 
              subtitle="Passa-passa" 
              image="/lovable-uploads/010b62d4-4948-4cb2-9067-2a685ba21569.png" 
            />
          </div>

          {/* Second CTA Button */}
          <div className="flex justify-center mb-16">
            <Button 
              className="bg-[#8B4513] hover:bg-[#6b3003] text-white font-medium px-8 py-6 rounded-full text-lg"
            >
              Quero todas essas receitas
            </Button>
          </div>
        </div>

        {/* Price section */}
        <div className="bg-[#B5D5B0] rounded-lg py-16 px-4 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618]">Afinal, quanto custa?</h2>
          </div>

          {/* Product showcase */}
          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/dee5da29-e190-4189-85f8-b7859a201f27.png" 
              alt="Product mockups" 
              className="max-w-full md:max-w-lg" 
            />
          </div>

          {/* Final CTA Button */}
          <div className="flex justify-center">
            <Button 
              className="bg-[#D16B6B] hover:bg-[#b85555] text-white font-medium px-8 py-6 rounded-full text-lg"
            >
              Quero adquirir agora
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#C28E60] text-white py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/b0dacc9c-b59b-44fd-96df-f5f638048dd4.png" 
              alt="Logo" 
              className="h-16 mb-4" 
            />
            <div className="text-2xl font-bold tracking-widest">
              IZAMAMAEDEGEMEOS
            </div>
          </div>
          <div className="text-center text-lg font-light tracking-wider">
            TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </footer>
    </div>
  );
};

// Activity card component
const ActivityCard = ({ title, subtitle, image }: { title: string; subtitle: string; image: string }) => {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-square">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white text-center p-4">
        <p className="text-sm font-light">{title}</p>
        <p className="text-lg font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default Index;
