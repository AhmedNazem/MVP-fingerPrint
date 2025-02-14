"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { EyeOff, ShieldCheck, Globe } from "lucide-react";

export default function VisitorInfo() {
  const [expanded, setExpanded] = useState(false);

  const visitorData = {
    id: "123456",
    visitCount: 5,
    browser: "Chrome",
    location: "Iraq, Ramadi",
    incognito: false,
    ip: "12.345.67.8",
    vpn: true,
    history: [
      { date: "2024-02-13", location: "Ramadi, Iraq" },
      { date: "2024-02-14", location: "baghdad, Iraq" },
    ],
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800">
        Welcome to Spotter,
      </h2>
      <p className="text-sm text-gray-600">
        Visitor
        <span className="text-[#FF6633] font-semibold">{visitorData.id}</span>
      </p>

      {/* Typewriter Effect */}
      <p className="mt-3 text-gray-700 font-medium">
        <Typewriter
          words={[
            "Welcome to Spotter",
            "Visitor someUserID😁!",
            `This is visit number 4 using Chrome`,
            " It’s great to have you here.",
            " Your current IP suggests you’re in",
            `Your current IP suggests you're in user IP ADDRESS.`,
            "What a beautiful place!",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </p>

      {/* Visit Summary */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="p-4 bg-gray-50 border rounded-md">
          <p className="font-semibold">Your Visit Summary</p>
          <p>{visitorData.visitCount} visits</p>
        </div>
        <div className="p-4 bg-gray-50 border rounded-md">
          <p className="font-semibold">Incognito</p>
          <p>{visitorData.incognito ? "Detected" : "0 sessions"}</p>
        </div>
        <div className="p-4 bg-gray-50 border rounded-md">
          <p className="font-semibold">IP Address</p>
          <p>{visitorData.ip}</p>
        </div>
        <div className="p-4 bg-gray-50 border rounded-md">
          <p className="font-semibold">Geolocation</p>
          <p>{visitorData.location}</p>
        </div>
      </div>

      {/* Visit History */}
      <div className="mt-6">
        <button
          className="flex items-center text-[#FF6633] font-medium"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide" : "Show"} Visit History
        </button>
        {expanded && (
          <div className="mt-4 border-t pt-4">
            {visitorData.history.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <p className="text-sm">{entry.date}</p>
                <p className="text-sm text-gray-600">{entry.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Security Status */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-4 border rounded-md bg-green-100">
          <Globe className="mx-auto w-6 h-6 text-green-600" />
          <p className="text-xs mt-2">Location</p>
          <p className="text-xs font-medium">{visitorData.location}</p>
        </div>
        <div className="p-4 border rounded-md bg-yellow-100">
          <EyeOff className="mx-auto w-6 h-6 text-yellow-600" />
          <p className="text-xs mt-2">Incognito</p>
          <p className="text-xs font-medium">
            {visitorData.incognito ? "Detected" : "Not Detected"}
          </p>
        </div>
        <div className="p-4 border rounded-md bg-blue-100">
          <ShieldCheck className="mx-auto w-6 h-6 text-blue-600" />
          <p className="text-xs mt-2">VPN</p>
          <p className="text-xs font-medium">
            {visitorData.vpn ? "Detected" : "Not Detected"}
          </p>
        </div>
      </div>
    </div>
  );
}
