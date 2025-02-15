import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, BarChart2, ShoppingBag, BookOpen, Bell, Clock } from 'lucide-react';
import { useAuthStore } from '../store/auth';

function DashboardCard({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ActivityItem({ time, description }: { time: string; description: string }) {
  return (
    <div className="flex items-start space-x-3 py-3">
      <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
      <div>
        <p className="text-sm text-gray-600">{time}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user.name}!
        </h1>
        <p className="text-gray-600">Here's what's happening today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Weather" icon={Cloud}>
          <div className="text-center">
            <p className="text-4xl font-bold">72°F</p>
            <p className="text-gray-600">Sunny</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Statistics" icon={BarChart2}>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Views</span>
              <span className="font-semibold">1,234</span>
            </div>
            <div className="flex justify-between">
              <span>Engagement</span>
              <span className="font-semibold">85%</span>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="market" icon={ShoppingBag}>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Recent Transactions</p>
            <p className="font-semibold">5 new orders</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Education" icon={BookOpen}>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Current Course</p>
            <p className="font-semibold">React Advanced Patterns</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Notifications" icon={Bell}>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">3 unread messages</p>
            <p className="text-sm text-gray-600">2 pending approvals</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Activity" icon={Clock}>
          <div className="space-y-1">
            <ActivityItem
              time="2 hours ago"
              description="Completed project milestone"
            />
            <ActivityItem
              time="5 hours ago"
              description="Reviewed team submissions"
            />
            <ActivityItem
              time="Yesterday"
              description="Updated profile settings"
            />
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}