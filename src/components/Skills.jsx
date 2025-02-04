import { useState } from "react";

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white" id="experience">
      <div className="pb-20 pt-16 sm:pb-24 sm:pt-24 lg:pb-32 lg:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              My Tech Stack & Expertise
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-500">
              As a Full Stack Developer, I work with modern technologies to
              build robust and scalable applications. Here are the tools and
              frameworks I specialize in:
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className=" grid grid-cols-2 place-items-center">
            {[
              {
                name: "React",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              },
              {
                name: "Node.js",
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
              },
              {
                name: "Express",
                src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
              },
              {
                name: "Docker",
                src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
              },
              {
                name: "MongoDB",
                src: "https://www.svgrepo.com/show/331488/mongodb.svg",
              },
              {
                name: "Kubernetes",
                src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="h-24 overflow-hidden rounded-lg flex justify-center items-center"
              >
                <img
                  alt={tech.name}
                  src={tech.src}
                  className="size-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* View My Work Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-md border border-transparent bg-indigo-600 px-6 py-2 sm:px-8 sm:py-3 text-center font-medium text-white hover:bg-indigo-700 transition"
            >
              View My Experience
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4 sm:p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Experience
            </h2>
            <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-100">
              <h3 className="text-lg font-semibold">
                Softforce Consultants Pvt Ltd
              </h3>
              <p className="text-gray-600">
                Software Engineer Trainee | Hyderabad | 02/2024 - Present
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 text-sm sm:text-base">
                <li>
                  Developed and maintained backend services using JavaScript and
                  NodeJS.
                </li>
                <li>
                  Implemented RESTful APIs and microservices to improve
                  scalability.
                </li>
                <li>
                  Built and enhanced user interfaces using JavaScript and React.
                </li>
                <li>
                  Managed NoSQL databases like MongoDB and Redis, optimizing
                  performance.
                </li>
                <li>
                  Implemented CI/CD pipelines using Docker and Kubernetes for
                  seamless deployments.
                </li>
                <li>
                  Monitored system performance and automated infrastructure
                  management using DevOps tools.
                </li>
              </ul>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
