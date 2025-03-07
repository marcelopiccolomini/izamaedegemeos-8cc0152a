
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#FDE1D3]">
      {/* Header section with logo */}
      <div className="w-full max-w-6xl mx-auto pt-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-white p-4 mb-2">
            <img src="/public/lovable-uploads/e6487d3d-6b28-43fa-b5ab-c433d5795c53.png" alt="Book icon" className="w-10 h-10" />
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

        {/* Activity cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-20">
          <ActivityCard 
            title="Brincadeiras" 
            subtitle="exploração sensorial" 
            image="/public/lovable-uploads/f9c01421-3b6b-4ae8-ba47-d9d40ee0daa1.png" 
          />
          <ActivityCard 
            title="Criando" 
            subtitle="Garrafa sensorial" 
            image="/public/lovable-uploads/5da323ef-ea1a-4ea5-80bf-06cccc6f270d.png" 
          />
          <ActivityCard 
            title="Montando" 
            subtitle="Encaixe e tira" 
            image="/public/lovable-uploads/8f7f237d-350d-458b-98c2-4454b9a22e0b.png" 
          />
          <ActivityCard 
            title="Pescaria" 
            subtitle="De objetos" 
            image="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
          />
          <ActivityCard 
            title="Transferência" 
            subtitle="Com colheres" 
            image="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
          />
        </div>

        {/* Bonus section */}
        <div className="py-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#3A2618]">BÔNUS:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            <ActivityCard 
              title="Brincando" 
              subtitle="Macarrão no palito" 
              image="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
            />
            <ActivityCard 
              title="Pintura" 
              subtitle="Comestível" 
              image="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
            />
            <ActivityCard 
              title="Transferência" 
              subtitle="Com colheres" 
              image="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
            />
            <ActivityCard 
              title="Cabaninha" 
              subtitle="Passa-passa" 
              image="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
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
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d" 
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
