import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Bot, CreditCard, Lock, Smartphone } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "Account takeover",
    answer:
      "Identify and block login attempts using stolen credentials while recognizing legitimate users.",
    icon: <Lock className="w-5 h-5 text-[#FF6633]" />,
  },
  {
    id: "item-2",
    question: "Payment fraud",
    answer:
      "Reduce fraudulent transactions and increase legitimate conversions with device intelligence signals.",
    icon: <CreditCard className="w-5 h-5 text-[#FF6633]" />,
  },
  {
    id: "item-3",
    question: "SMS fraud",
    answer:
      "Prevent SMS pumping fraud attacks and SIM swapping scams with mobile device intelligence signals.",
    icon: <Smartphone className="w-5 h-5 text-[#FF6633]" />,
  },
  {
    id: "item-4",
    question: "Bot detection",
    answer:
      "Detect malicious bots, automation tools, and other sophisticated threats to prevent real-time attacks.",
    icon: <Bot className="w-5 h-5 text-[#FF6633]" />,
  },
];

const Faq = () => {
  return (
    <div className="max-w-lg text-left  ">
      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>
              <div className="flex items-center gap-2 text-xl text-gray-700">
                {item.icon}
                {item.question}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
