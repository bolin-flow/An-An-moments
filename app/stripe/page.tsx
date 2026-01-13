import { Plan } from "@/database";
import Link from "next/link";
import { Check } from "lucide-react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function StripePage() {
  return (
    <div className="min-h-screen bg-gray-50/90 flex flex-col items-center py-20 px-6 rounded-xl">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Upgrade your Mind Training
        </h1>
        <p className="text-xl text-gray-600">
          Unlock premium features and deepen your practice with our membership plans.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Free Plan */}
        <div className="bg-white/70 rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Basic</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$0</span>
              <span className="ml-1 text-gray-500">/month</span>
            </div>
            <p className="mt-4 text-gray-500">Everything you need to get started.</p>
          </div>
          
          <ul className="flex-1 space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">Access to basic books</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">Limited Mind Train exercises</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">Community support</span>
            </li>
          </ul>

          {/* Use RegisterLink for Sign Up/Get Started actions */}
          <RegisterLink 
            className="block w-full text-center bg-gray-100/80 hover:bg-gray-200/80 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Start Free Plan
          </RegisterLink>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-white/70 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col">
          {/* Badge */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md md:translate-x-0 md:mr-8">
            Most Popular
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-600">Premium</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$19</span>
              <span className="ml-1 text-gray-500">/month</span>
            </div>
            <p className="mt-4 text-gray-500">Unlock your full potential.</p>
          </div>
          
          <ul className="flex-1 space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">All advanced books included</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">Unlimited Mind Train sessions</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">Priority support</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">Exclusive monthly webinars</span>
            </li>
          </ul>

          {/* Use RegisterLink for Upgrading (auth first, then payment logic later) */}
          <RegisterLink 
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm"
          >
            Upgrade to Premium
          </RegisterLink>
        </div>

      </div>
      
      <div className="mt-12 text-lg font-bold text-gray-500">
        Already a member? 
        {/* Replace standard Link with LoginLink */}
        <LoginLink className="text-blue-600 hover:underline ml-1">
          Sign in
        </LoginLink>
      </div>    </div>
  );
}