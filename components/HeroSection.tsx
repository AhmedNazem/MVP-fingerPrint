import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import VisitorInfo from "./VisitorSummary";
import Faq from "./Faq";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import ProfitCard from "./profetsCard";

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Accuracy Over Time",
      data: [95, 92, 88, 85, 75, 65],
      borderColor: "#FF4F40",
      backgroundColor: "rgba(255, 79, 64, 0.1)",
      tension: 0.4,
    },
    {
      label: "Industry Average",
      data: [90, 85, 75, 65, 55, 45],
      borderColor: "#E2E8F0",
      backgroundColor: "rgba(226, 232, 240, 0.1)",
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#F1F5F9",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
          <div className="space-y-6 mx-auto">
            <h1 className="text-[3rem] md:text-[3.5rem] font-bold leading-tight">
              Identify <span className="text-[#FF6633]">Every Visitor 😄</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl">
              Stop fraud, detect bots, or delight customers. Identify good and
              bad visitors with industry-leading accuracy—even if they&apos;re
              anonymous.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={"/#"}>
              <Button
                size="lg"
                className="px-8 bg-[#FF6633] hover:bg-[#CC522A]"
              >
                Get Started
              </Button>
            </Link>
            <Link href={"/"}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-[#FF6633] border-[#FF6633] hover:bg-orange-100"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <div className="mt-5 md:mt-0">
            <VisitorInfo />
          </div>
        </div>
      </section>

      {/* Internet Accuracy Section */}
      <div className="space-y-6 text-center md:text-right px-5 md:px-24 mt-10">
        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold leading-snug">
          The internet&apos;s most{" "}
          <span className="text-[#FF6633]">Accurate</span>
          <br className="hidden md:block" />
          visitor identifier
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Industry-leading accuracy that lasts for months or years,
          <br className="hidden md:block" /> even when cookies are cleared.
        </p>
        <Button className="bg-[#FF6633] text-white hover:bg-[#FF6633]/90">
          Learn More
        </Button>
      </div>

      {/* Build Safe Products Section */}
      <section className="mt-16">
        <div className="space-y-6 px-5 md:px-24">
          <div className="space-y-6">
            <h1 className="text-[2.5rem] md:text-[2.7rem] font-bold leading-snug">
              Build <span className="text-[#FF6633]">safe</span> <br />
              and <span className="text-[#FF6633]">seamless</span> products
            </h1>
            <p className="max-w-[600px] text-gray-700 md:text-xl">
              The device intelligence platform for visitor intent. Reduce
              friction for the good guys. Stop the bad guys.
            </p>
          </div>
          <div className="flex justify-start space-x-4">
            <Link href={"/#"}>
              <Button
                variant={"outline"}
                size="lg"
                className="px-8 hover:bg-gray-100"
              >
                See All Use Cases
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & Chart Section */}
      <section className="mt-16 px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Section */}
          <div className="max-w-md md:pl-24">
            <Faq />
          </div>

          {/* Chart Section */}
          <div className="relative bg-white p-6 shadow-md rounded-lg">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </section>

      {/* Fraud Prevention Section */}
      <div className="space-y-6 text-center md:text-left px-5 md:px-24 mt-16">
        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold leading-snug">
          Fight fraud with <span className="text-[#FF6633]">Spotter</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          See how our customers stop fraud in real time for real results.
        </p>
        <Button
          variant="outline"
          className="text-gray-700 hover:bg-gray-100/90"
        >
          See All Case Studies
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center mt-10">
        <Image
          src={"/console.png"}
          alt="console pic"
          width={1220}
          height={1000}
          className="max-w-full h-auto"
        />
      </div>

      <ProfitCard />
    </>
  );
};

export default HeroSection;
