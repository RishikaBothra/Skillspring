import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { EyeOff, Eye } from 'lucide-react';
import { useState } from "react";


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    return (
      <div className="flex justify-center items-center h-screen ">
  
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Create your account today and unlock access to top-notch courses tailored for your success! </CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="Name" className="mb-4 p-2 border border-gray-300 rounded-lg " />
            <Input placeholder="Email" className="mb-4 p-2 border border-gray-300 rounded-lg " />
            <div className="relative">
              <Input placeholder="Password" type={showPassword ? "text" : "password"} className="mb-4 p-2 border border-gray-300 rounded-lg " />
              <button onClick={togglePassword} className="flex items-center px-3 absolute right-0 inset-y-0">{showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}</button>
            </div>
            <Button className="w-full mt-4">Submit</Button>
          </CardContent>
          <CardFooter>
  
            <Label>
              Don't have an account? <Link to="/login" className="text-blue-900 hover:underline" >Login</Link>
            </Label>
          </CardFooter>
        </Card>
  
      </div>
  
    );
  }
  
  export default Signup;