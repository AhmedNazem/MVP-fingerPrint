import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

const features = [
  {
    amount: "+150",
    description: "countries and territories where we identified devices",
  },
  {
    amount: "2 Billion +",
    description: "unique browsers and mobile devices identified",
  },
  {
    amount: "500 Million +",
    description: "real-time device intelligence API events per day processed",
  },
];

const ProfitCard = () => {
  return (
    <div className="flex justify-center mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 w-72 flex flex-col items-center text-center shadow-lg border border-gray-200 rounded-xl"
          >
            <CardTitle className="text-3xl text-[#FF6633] font-semibold mb-3">
              {feature.amount}
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfitCard;
