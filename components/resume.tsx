"use client";

import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-2xl gpu-accelerated [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
          Resume
        </h2>

        {/* Updated: bg-neutral-900/50 and border-neutral-800 for matte black look */}
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800/50 rounded-lg">
                    <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Arjun Resume</h3>
              </div>
              
              <a
                href="https://drive.google.com/file/d/1s-vI9potEmXH62ppQ43dmKf7KP2oWJd8/view?usp=sharing"
                download
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-bold hover:bg-neutral-200 hover:scale-105 transition-all shadow-lg"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>

          {/* Image Preview Area */}
          <div className="p-6">
            {/* Added a border around the image wrapper for better definition */}
            <div className="bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 shadow-inner">
              <img
                src="/resume-image.jpg" // Ensure this image path is correct
                alt="Resume Preview"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-neutral-400 text-sm mt-6 text-center">
              Trouble viewing the resume?{" "}
              <a
                href="https://drive.google.com/file/d/1s-vI9potEmXH62ppQ43dmKf7KP2oWJd8/view?usp=sharing"
                className="text-white hover:text-neutral-200 underline underline-offset-4 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Click here to download
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}