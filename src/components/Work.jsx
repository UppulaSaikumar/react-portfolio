const projects = [
  {
    id: 1,
    title: 'Affiliation Management System',
    href: '#',
    description:
      'Developed a system with role-based authentication for Admin, Super Admin, and Institute Login, integrating payment processing.',
    date: '2024',
    category: { title: 'Full Stack Development', href: '#' },
    techStack: 'React, Node.js, MongoDB, Tailwind',
  },
  {
    id: 2,
    title: 'University Login System',
    href: '#',
    description:
      'Implemented role-based sidebar rendering for different user types in a university portal.',
    date: '2024',
    category: { title: 'Frontend Development', href: '#' },
    techStack: 'React, Tailwind, Redux',
  },
  {
    id: 3,
    title: 'Food Waste Reduction Platform',
    href: '#',
    description:
      'Designed a platform to connect food donors with recipients to reduce food waste.',
    date: '2024',
    category: { title: 'Social Impact', href: '#' },
    techStack: 'MERN Stack',
  },
  {
    id: 4,
    title: 'AI-Based Job Recommendation System',
    href: '#',
    description:
      'Built an AI-driven system to recommend jobs based on user profiles and preferences.',
    date: '2024',
    category: { title: 'Machine Learning', href: '#' },
    techStack: 'Python, TensorFlow, MongoDB',
  }
];

export default function Work() {
  return (
    <div className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">My Projects</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Explore some of the projects I've worked on.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{project.date}</time>
                <a
                  href={project.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {project.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{project.description}</p>
              </div>
              <div className="relative mt-8 text-sm/6 text-gray-600">
                <span className="font-semibold">Tech Stack:</span> {project.techStack}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
