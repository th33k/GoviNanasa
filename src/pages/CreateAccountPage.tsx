import { Lock, Key, Phone, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

export function CreateAccountPage() {
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md border-green-100">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl text-center text-gray-900">
              Create Farmer Account
            </CardTitle>
            <CardDescription className="text-center">
              Join Sri Lanka's Agricultural Network
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
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-green-600" />
                Telephone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter mobile number"
                className="focus-visible:ring-green-600"
                pattern="[0-9]{10}"
                title="Enter 10-digit Sri Lankan phone number"
                required
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
                placeholder="At least 8 characters"
                className="focus-visible:ring-green-600"
                minLength={8}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="confirm-password"
                className="flex items-center gap-1"
              >
                <Lock className="w-4 h-4 text-green-600" />
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Re-enter your password"
                className="focus-visible:ring-green-600"
                onChange={(e) =>
                  validatePassword(
                    (document.getElementById("password") as HTMLInputElement)
                      .value,
                    e.target.value
                  )
                }
                required
              />
              {passwordError && (
                <span className="text-red-600 text-sm">{passwordError}</span>
              )}
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
              Create Account <UserPlus className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="text-sm text-center">
              <span className="text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-green-600 hover:underline hover:text-green-700"
                >
                  Sign In
                </Link>
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Sri Lankan Theme Decoration */}
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-green-600" />
    </div>
  );
}
