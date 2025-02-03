const links = [
  { name: "Leetcode", href: "https://leetcode.com/u/Saikumar_12345/" },
  { name: "CodeChef", href: "https://github.com/your-username" },
  { name: "CodeForces", href: "https://codeforces.com/profile/Saikumar_12345" },
  { name: "HackerRank", href: "https://www.hackerrank.com/profile/20311A05E9" },
  { name: "GitHub", href: "https://github.com/UppulaSaikumar/" },
  { name: "LinkedIn", href: "http://www.linkedin.com/in/sai-kumar-uppula-5a436921b" },
  { name: "Contact Me", href: "mailto:uppulasaikumar123@gmail.com" },
];

const stats = [
  { name: "Years of Experience", value: "1½" },
  { name: "Projects Completed", value: "20+" },
  {
    name: "Languages & Frameworks",
    value: "C, C++, Java, JavaScript, ReactJS, NodeJS, and more",
  },
  { name: "Interests", value: "Technology, Photography, Guitar, Sports" },
];

export default function Aboutus() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-3xl">
            Building Tomorrow, Today
          </h2>
          <p className="mt-8 text-pretty text-sm font-small text-gray-500 sm:text-xl/8">
            I’m not just a developer – I’m an architect of ideas, building the
            future one line of code at a time. I bring together the power of
            logic and creativity to build digital experiences that not only
            function, but inspire. I’m constantly challenging myself to push the
            boundaries of what’s possible in tech, eager to dive into the
            unknown and turn complex problems into elegant solutions. It’s not
            just about the code – it’s about the impact it makes.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-500">{stat.name}</dt>
                <dd className="text-xl font-semibold tracking-tight text-black">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
