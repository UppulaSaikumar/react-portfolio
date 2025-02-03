import { AcademicCapIcon, BuildingLibraryIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Bachelor of Technology (B.Tech)",
    description:
      "Completed B.Tech from 2020 to May 2024 with expertise in Full Stack Development and Problem Solving.",
    icon: AcademicCapIcon, // Relevant icon for B.Tech
  },
  {
    name: "Pre-University Course (PUC)",
    description:
      "Pursued PUC from 2018 to 2020, building a strong foundation in Mathematics and Computer Science.",
    icon: BuildingLibraryIcon, // Updated to BuildingLibraryIcon
  },
  {
    name: "Schooling",
    description:
      "Completed schooling in 2018, developing a keen interest in technology and problem-solving.",
    icon: BuildingLibraryIcon, // Updated to BuildingLibraryIcon
  },
  {
    name: "Continuous Learning",
    description:
      "Actively expanding knowledge in Full Stack Development, DevOps, and System Design through projects and certifications.",
    icon: LightBulbIcon, // Relevant icon for continuous learning
  },
];



export default function Education() {
  return (
    <div className="bg-white py-12 sm:py-12" id='education'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Educational Journey
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-2xl lg:text-balance">
            A solid foundation in technology and problem-solving
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            From my schooling in 2018 to completing my B.Tech in 2024, I have
            built a strong understanding of Full Stack Development, algorithms,
            and continuous learning. My education shaped my passion for
            technology and drives me to create impactful solutions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
