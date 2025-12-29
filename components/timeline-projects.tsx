"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Github, Globe } from "lucide-react";

export default function TimelineProjects() {
  const data = [
    // --- PROJECT 1: TEXT SENTIMENT ANALYSER ---
    {
      title: "Sentiment Analyzer",
      content: (
        <div>
          <p className="mb-8 text-sm text-neutral-300 font-medium leading-relaxed">
            Text Sentiment Analyzer is a Next.js web application with a C++ backend compiled to WebAssembly, enabling fast, client-side sentiment analysis using native performance in the browser.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* --- IMAGE STYLING ONLY --- */}
            {/* Rounded edges, border, shadow, and hover zoom applied here */}
            <div className="relative group shrink-0">
               <img
                src="/p1img.jpeg?height=400&width=600"
                alt="Text Sentiment Analyzer"
                className="w-full md:w-80 h-auto rounded-2xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-6">
              <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-2 marker:text-neutral-500">
                <li>Next.js & TypeScript</li>
                <li>C++ & WebAssembly</li>
                <li>Tailwind CSS</li>
              </ul>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/ARJUN-PALEKAR/OODPPROJECT"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900/50 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://oodpprojectarjun.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // --- PROJECT 2: AI CHATBOT ---
    {
      title: "AI Chatbot",
      content: (
        <div>
          <p className="mb-8 text-sm text-neutral-300 font-medium leading-relaxed">
            NeuroTalk is an AI-powered chatbot built using React and Vite, integrated with OpenAI&apos;s language model to enable dynamic and intelligent conversations with a clean UI.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group shrink-0">
              <img
                src="/p2img.jpeg?height=400&width=600"
                alt="NeuroTalk AI Chatbot"
                className="w-full md:w-80 h-auto rounded-2xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-6">
              <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-2 marker:text-neutral-500">
                <li>React + Vite</li>
                <li>OpenAI API</li>
                <li>Node.js & Tailwind</li>
              </ul>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/ARJUN-PALEKAR/NeuroTalk"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900/50 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://arjun-palekar.github.io/NeuroTalk/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // --- PROJECT 3: FILM ARCHIVE ---
    {
      title: "Film Archive",
      content: (
        <div>
          <p className="mb-8 text-sm text-neutral-300 font-medium leading-relaxed">
            A collaborative movie database web application featuring third-party API integration (TMDb) for seamless access to real-time film data, images, and metadata.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="relative group shrink-0">
               <img
                  src="/p3img.jpeg?height=400&width=600"
                  alt="Film Archive"
                  className="w-full md:w-80 h-auto rounded-2xl border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col gap-6">
              <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-2 marker:text-neutral-500">
                <li>HTML, CSS, JavaScript</li>
                <li>TMDB API Integration</li>
                <li>Responsive UI</li>
              </ul>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/ARJUN-PALEKAR/FILM-ARCHIVE"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900/50 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://arjun-palekar.github.io/FILM-ARCHIVE/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // --- PROJECT 4 (2022) ---
    // {
    //   title: "2022",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-sm text-neutral-300 font-medium">
    //         The beginning of the coding journey
    //       </p>
    //       <div className="flex flex-col md:flex-row gap-6 items-start">
    //         <img
    //           src="https://assets.aceternity.com/templates/startup-4.webp"
    //           alt="Coding Journey"
    //           className="w-full md:w-48 h-32 object-cover rounded-lg shadow-lg border border-neutral-800"
    //         />
    //         <div className="flex flex-col gap-4">
    //           <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-2">
    //             <li>Started with HTML, CSS, and basic JavaScript.</li>
    //             <li>Solved algorithmic problems on LeetCode.</li>
    //             <li>Built static landing pages.</li>
    //           </ul>
    //           {/* NEW SLEEK BUTTONS */}
    //           <div className="flex gap-3 mt-2">
    //             <a
    //               href="#"
    //               target="_blank"
    //               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900/50 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
    //             >
    //               <Github className="w-4 h-4" />
    //               GitHub
    //             </a>
    //             <a
    //               href="#"
    //               target="_blank"
    //               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-100 hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
    //             >
    //               <Globe className="w-4 h-4" />
    //               Live Demo
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
    //  Adding a new project later on dots auto created when below container created
    // {
    //   title: "2021", // Change this to your year
    //   content: (
    //     <div>
    //       <p className="mb-4 text-sm text-neutral-300 font-medium">
    //         Your Project Title Here
    //       </p>
    //       <div className="flex flex-col md:flex-row gap-6 items-start">
    //         <img
    //           src="YOUR_IMAGE_URL_HERE"
    //           alt="Project Description"
    //           className="w-full md:w-48 h-32 object-cover rounded-lg shadow-lg border border-neutral-800"
    //         />
    //         <div className="flex flex-col gap-4">
    //           <ul className="list-disc pl-5 text-sm text-neutral-300 space-y-2">
    //             <li>Feature one description.</li>
    //             <li>Feature two description.</li>
    //             <li>Feature three description.</li>
    //           </ul>
    //           {/* Buttons */}
    //           <div className="flex gap-3 mt-2">
    //             <a
    //               href="#"
    //               target="_blank"
    //               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900/50 border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
    //             >
    //               <Github className="w-4 h-4" />
    //               GitHub
    //             </a>
    //             <a
    //               href="#"
    //               target="_blank"
    //               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-100 hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
    //             >
    //               <Globe className="w-4 h-4" />
    //               Live Demo
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black text-white"
    >
      <div className="absolute inset-0 bg-black z-0" />
      <div className="relative z-10 pt-0 pb-10">
        <Timeline data={data} />
      </div>
    </section>
  );
}