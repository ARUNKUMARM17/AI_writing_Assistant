import React from "react";
import { FaPencilAlt, FaMagic, FaRobot, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          About ErrorFree
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            ErrorFree is an innovative tool designed to perfect your writing. With advanced AI capabilities, our platform ensures grammatical accuracy, corrects spelling mistakes, and enhances readability.
          </p>
          <p className="text-xl text-gray-700">
            Whether you're a student, professional, or anyone looking to refine their writing, ErrorFree provides real-time suggestions and improvements tailored to your needs.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            icon={<FaPencilAlt className="text-blue-500" />}
            title="Grammar Perfection"
            description="Our AI detects and corrects grammatical errors, ensuring flawless writing."
          />
          <FeatureCard
            icon={<FaMagic className="text-purple-500" />}
            title="Advanced Spell Check"
            description="Identifies and corrects spelling mistakes, enhancing the clarity of your text."
          />
          <FeatureCard
            icon={<FaRobot className="text-green-500" />}
            title="Smart Rewriting"
            description="Get intelligent rewording suggestions to improve sentence flow and impact."
          />
          <FeatureCard
            icon={<FaChartLine className="text-red-500" />}
            title="Writing Insights"
            description="Track improvements with writing analytics and refine your style over time."
          />
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Writing Today!
          </h2>
          <p className="text-xl mb-6">
            Join thousands of users improving their writing with ErrorFree.
          </p>
          <Link
            to="/write"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
