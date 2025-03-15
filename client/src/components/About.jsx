import React from 'react';
import { Brain, Zap, CheckCircle2, Code, MessageSquareText, Settings, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-4 md:p-8">
      {/* Neural Network Decoration - Top */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden opacity-20">
        <div className="w-full h-full bg-repeat"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto pt-8 pb-4">
        <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 border border-blue-500/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4">
            <div className="bg-blue-500 rounded-full p-2 shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300">
              AI Writing Assistant
            </h1>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Powered by Mistral-7B modeling technology to deliver intelligent, 
              human-like writing assistance at your fingertips.
            </p>
            <div className="inline-flex items-center bg-white/10 px-6 py-3 rounded-full text-blue-100 backdrop-blur-sm border border-blue-300/20">
              <Sparkles className="h-5 w-5 mr-2 text-blue-300" />
              <span className="font-medium">Crafting perfection in every sentence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-6xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-100 text-center mb-12">Advanced AI Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-blue-500/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-100 mb-4">Smart Rephrasing</h3>
            <p className="text-blue-200 text-center">
              Our Mistral-7B model analyzes context and semantics to rephrase your content while 
              preserving your original meaning and enhancing clarity.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-blue-500/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl shadow-lg">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-100 mb-4">Grammar Perfection</h3>
            <p className="text-blue-200 text-center">
              Our neural network identifies and corrects complex grammatical issues with 
              human-like understanding of language nuances and rules.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-blue-500/30 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-4 rounded-2xl shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-100 mb-4">Context Awareness</h3>
            <p className="text-blue-200 text-center">
              The Mistral-7B architecture enables deep understanding of context, producing 
              suggestions that fit perfectly with your unique writing style.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 max-w-6xl mx-auto py-8">
        <div className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-10 text-center">Mistral-7B Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-400/40 to-purple-500/20"></div>
            
            <div className="relative bg-gradient-to-br from-blue-950/70 to-blue-900/40 rounded-xl p-6 text-center border border-blue-700/30 z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-3 shadow-lg">
                  <MessageSquareText className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mt-4 mb-3">Input Processing</h3>
              <p className="text-blue-200 text-sm">
                Your text is tokenized and processed through our neural attention layers for deep analysis.
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-950/70 to-blue-900/40 rounded-xl p-6 text-center border border-blue-700/30 z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg">
                  <Settings className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mt-4 mb-3">Neural Processing</h3>
              <p className="text-blue-200 text-sm">
                Mistral-7B's 7 billion parameter model identifies patterns and applies contextual understanding.
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-950/70 to-blue-900/40 rounded-xl p-6 text-center border border-blue-700/30 z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full p-3 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-100 mt-4 mb-3">Optimized Output</h3>
              <p className="text-blue-200 text-sm">
                The refined content is generated with enhanced clarity while maintaining your unique voice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-6xl mx-auto py-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/40 border border-blue-500/30 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h3 className="text-5xl font-extrabold text-blue-100 mb-2">7B+</h3>
            <p className="text-blue-200">Neural Parameters</p>
          </div>
          
          <div className="bg-purple-900/40 border border-purple-500/30 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h3 className="text-5xl font-extrabold text-blue-100 mb-2">99.8%</h3>
            <p className="text-blue-200">Grammar Accuracy</p>
          </div>
          
          <div className="bg-indigo-900/40 border border-indigo-500/30 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h3 className="text-5xl font-extrabold text-blue-100 mb-2">20+</h3>
            <p className="text-blue-200">Languages Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;