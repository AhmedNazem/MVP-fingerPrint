"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, UserCheck, Shield } from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/HeroSection";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Page() {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-[#FF6633]" />,
      title: "Any browser, any device.",
      description:
        "Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#FF6633]" />,
      title: "Identify all anonymous visitors.",
      description:
        "Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#FF6633]" />,
      title: "Delight your trusted users.",
      description:
        "Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <main className="pt-24 mb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-3  flex flex-col items-center justify-center  border rounded-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#FF6633]/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardTitle className="text-xl font-semibold mb-2">
                  {feature.title}
                </CardTitle>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* cards features */}
      </main>
    </div>
  );
}
