import { Link } from 'react-router-dom';
import { Cloud, BarChart2, ShoppingBag, BookOpen, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';

function Card({ title, icon: Icon, description }: { title: string; icon: any; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ModernApp
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your all-in-one platform for managing everything that matters
        </p>
        <Link to="/login">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Weather Widget"
          icon={Cloud}
          description="Stay updated with real-time weather information for your location"
        />
        <Card
          title="Statistics Dashboard"
          icon={BarChart2}
          description="Track your performance with detailed analytics and insights"
        />
        <Card
          title="Marketplace"
          icon={ShoppingBag}
          description="Discover and trade items in our dynamic marketplace"
        />
        <Card
          title="Educational Portal"
          icon={BookOpen}
          description="Access learning resources and track your progress"
        />
        <Card
          title="Notifications"
          icon={Bell}
          description="Stay informed with real-time updates and alerts"
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of users who are already enjoying our platform
        </p>
        <Link to="/login">
          <Button size="lg">Sign Up Now</Button>
        </Link>
      </div>
    </div>
  );
}