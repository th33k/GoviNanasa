import { Lock, User, Key, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md border-green-100">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl text-center text-gray-900">
              Welcome to ගොවි නැණස
            </CardTitle>
            <CardDescription className="text-center">
              Agricultural Gateway to Modern Farming
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="nic" className="flex items-center gap-1">
                <Key className="w-4 h-4 text-green-600" />
                NIC Number
              </Label>
              <Input 
                id="nic" 
                type="text" 
                placeholder="Enter your NIC number" 
                className="focus-visible:ring-green-600"
                pattern="[0-9Vv]{10,12}"
                title="Enter valid Sri Lankan NIC (10 or 12 digits)"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="password" className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-green-600" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="focus-visible:ring-green-600"
              />
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
              Sign In <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="text-sm text-center">
              <a 
                href="#forgot-password" 
                className="text-green-600 hover:underline hover:text-green-700"
              >
                Forgot Password?
              </a>
            </div>
            
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  New to ගොවි නැණස?
                </span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full flex gap-2 text-green-600 hover:text-green-700"
            >
              <User className="w-4 h-4" />
              <Link to="/createaccount">Create New Account</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Sri Lankan Theme Decoration */}
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-green-600" />
    </div>
  );
}