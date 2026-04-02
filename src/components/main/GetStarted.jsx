import { FaUser, FaBox, FaRocket } from "react-icons/fa";

const steps = [
    {
        id: "01",
        title: "Create Account",
        description:
            "Sign up for free in seconds. No credit card required to get started.",
        icon: <FaUser />,
    },
    {
        id: "02",
        title: "Choose Products",
        description:
            "Browse our catalog and select the tools that fit your needs.",
        icon: <FaBox />,
    },
    {
        id: "03",
        title: "Start Creating",
        description:
            "Download and start using your premium tools immediately.",
        icon: <FaRocket />,
    },
];

const GetStarted = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Get Started In 3 Steps
                </h2>
                <p className="text-gray-500 mt-2">
                    Start using premium digital tools in minutes, not hours.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition"
                        >

                            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {step.id}
                            </span>

                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl mb-4">
                                {step.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GetStarted;