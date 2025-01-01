import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="flex flex-col items-center bg-[#fafafa] m-4">
            {/* Header Section */}
            <div className="text-center pb-4">
                <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
                <p className="text-sm text-gray-600">
                    <span>Download the app to access everything Nike.</span>{" "}
                    <Link href="/" className="text-blue-600 underline">
                        Get Your Great
                    </Link>
                </p>
            </div>

            {/* Hero Image Section */}
            <div
                className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            ></div>

            {/* Content Section */}
            <div className="flex flex-col items-center text-center p-6 lg:p-10">
                <p className="text-sm uppercase tracking-wide text-gray-500">First Look</p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase my-3">Nike Air Max Pulse</h2>
                <p className="text-sm leading-6 max-w-md md:max-w-2xl text-gray-700">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—
                    designed to push you past your limits and help you go to the max.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
                    <Button>Notify Me</Button>
                    <Button>Shop Air Max</Button>
                </div>
            </div>
        </section>
    );
}
