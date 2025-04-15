import { CloudRain, Store, Calculator, ArrowRight, LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  imagePath: string;
}

interface StatCardProps {
  value: string;
  label: string;
}

const FeatureCard = ({ title, icon: Icon, description, imagePath }: FeatureCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="h-48 overflow-hidden rounded-t-lg mb-4">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-green-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-green-600">{value}</CardTitle>
        <CardDescription className="text-lg">{label}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
          ගොවි නැණස
            <span className="block text-2xl text-green-600 mt-2">
              Empowering Sri Lankan Agriculture
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform connecting farmers with modern agricultural solutions,
            market opportunities, and financial support
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login" className="w-full">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
            </Link>
            
          </div>
        </div>

        {/* Feature Carousel for Mobile */}
        <div className="md:hidden mb-8">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <FeatureCard
                  title="Climate Smart Farming"
                  icon={CloudRain}
                  description="Access real-time weather data, climate predictions, and smart resource management tools tailored for your region"
                  imagePath='assets/weather.png'
                />
              </CarouselItem>
              <CarouselItem>
                <FeatureCard
                  title="Digital market"
                  icon={Store}
                  description="Connect directly with buyers, access fair prices, and sell your produce without intermediaries"
                  imagePath='assets/marketplace.png'
                  
                />
              </CarouselItem>
              <CarouselItem>
                <FeatureCard
                  title="Financial Support"
                  icon={Calculator}
                  description="Easy access to loans, subsidies, and insurance specially designed for agricultural needs"
                  imagePath='assets/financial.png'
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Feature Cards for Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Climate Smart Farming"
            icon={CloudRain}
            description="Access real-time weather data, climate predictions, and smart resource management tools tailored for your region"
            imagePath='assets/weather.png'
          />
          <FeatureCard
            title="Digital market"
            icon={Store}
            description="Connect directly with buyers, access fair prices, and sell your produce without intermediaries"
            imagePath='assets/marketplace.png'
          />
          <FeatureCard
            title="Financial Support"
            icon={Calculator}
            description="Easy access to loans, subsidies, and insurance specially designed for agricultural needs"
            imagePath='assets/financial.png'
          />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard value="10,000+" label="Registered Farmers" />
          <StatCard value="25" label="Districts Covered" />
          <StatCard value="LKR 50M+" label="Trading Volume" />
        </div>

        {/* CTA Section */}
        <Card className="bg-green-50 border-green-100">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Start Growing with Us</CardTitle>
            <CardDescription className="text-lg text-center max-w-2xl mx-auto">
              Join thousands of Sri Lankan farmers who are already benefiting from our platform's
              innovative solutions and support services
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Register Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}