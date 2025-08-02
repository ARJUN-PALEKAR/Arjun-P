import { memo } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const Projects = memo(function Projects() {
  const mainProjects = [
    {
      title: "FILM ARCHIEVE",
      description:
        "Film Archive is a collaborative movie database web application featuring third-party API integration for seamless access to film data. It leverages the TMDb API to deliver real-time movie information, including titles, images, and metadata, enabling easy integration into applications, websites, or research projects.",
      image: "/p1img.jpg?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript", "TMDB API"],
      liveUrl: "https://arjun-palekar.github.io/FILM-ARCHIVE/",
      githubUrl: "https://github.com/ARJUN-PALEKAR/FILM-ARCHIVE",
    },
    {
      title: "AI CHATBOT",
      description:
        "NeuroTalk is an AI-powered chatbot built using React and Vite, integrated with OpenAI's language model to enable dynamic and intelligent conversations. It is designed for web applications, offering fast performance and a clean, modern user interface.",
      image: "/p2img.jpg?height=400&width=600",
      technologies: ["React + Vite", "Node.js", "Tailwind CSS", "Open AI API", "Vercel"],
      liveUrl: "https://arjun-palekar.github.io/NeuroTalk/",
      githubUrl: "https://github.com/ARJUN-PALEKAR/NeuroTalk",
    },
    {
      title: "TEXT SENTIMENT ANALYSER USING C++ ",
      description:
        "Text Sentiment Analyzer is a Next.js web application with a C++ backend compiled to WebAssembly, enabling fast, client-side sentiment analysis using native performance in the browser. It delivers efficient and lightweight text processing through WebAssembly, combining the power of C++, Next.js, and browser-based execution for real-time feedback and high responsiveness.",
      image: "/p3img.jpg?height=400&width=600",
      technologies: ["Next JS", "Typescript", "Tailwind CSS", "Node.js", "C++", "Vercel"],
      liveUrl: "https://oodpprojectarjun.vercel.app/",
      githubUrl: "https://github.com/ARJUN-PALEKAR/OODPPROJECT",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-2xl gpu-accelerated [text-shadow:_2px_2px_4px_#000,_-2px_-2px_4px_#000]">
  Featured Projects
</h2>



        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-200 group gpu-accelerated"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Projects
