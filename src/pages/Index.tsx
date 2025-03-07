
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Welcome to Your Application</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A responsive design that works on all your devices, from mobile to desktop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="w-full">
              <CardHeader>
                <CardTitle>Feature {i}</CardTitle>
                <CardDescription>Everything you need in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card adapts responsively to different screen sizes.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Built with responsive design principles for all device sizes
          </p>
          <Button size="lg" variant="outline">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
