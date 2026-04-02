import React from "react";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for getting started",
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
        buttonText: "Get Started Free",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$29",
        description: "Best for professionals",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
        buttonText: "Start Pro Trial",
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "For teams and businesses",
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
        buttonText: "Contact Sales",
        highlight: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 mb-10">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-6 shadow-md border ${plan.highlight
                                ? "bg-linear-to-r from-purple-600 to-purple-500 text-white scale-105"
                                : "bg-white"
                            }`}
                    >
                        {plan.highlight && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p
                            className={`text-sm mb-4 ${plan.highlight ? "text-purple-100" : "text-gray-500"
                                }`}
                        >
                            {plan.description}
                        </p>

                        <h2 className="text-3xl font-bold mb-4">
                            {plan.price}
                            <span className="text-sm font-normal">/Month</span>
                        </h2>

                        <ul className="space-y-2 mb-6 text-left">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-green-500">✔</span>
                                    <span
                                        className={plan.highlight ? "text-white" : "text-gray-700"}
                                    >
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-2 rounded-full font-medium transition ${plan.highlight
                                    ? "bg-white text-purple-600 hover:bg-gray-100"
                                    : "bg-linear-to-r from-purple-600 to-purple-500 text-white hover:opacity-90"
                                }`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;