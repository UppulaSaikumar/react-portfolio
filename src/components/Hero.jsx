import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import dp from './profile3.webp'

const features = [
  {
    name: 'Efficient Problem Solving.',
    description:
      'Skilled in breaking down complex problems and designing optimized solutions for scalable applications.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure & Scalable Development.',
    description: 'Implementing role-based access, data security, and best practices for reliable web applications.',
    icon: LockClosedIcon,
  },
  {
    name: 'Performance & Optimization.',
    description: 'Ensuring smooth application performance with clean code, debugging, and efficient system design.',
    icon: ServerIcon,
  },
];

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id='about'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Sai Kumar</h2>
              <p className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
               Full Stack Developer | Problem Solver |
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              passionate about building scalable applications and solving complex problems. Enthusiastic about DevOps, system design, and continuous learning.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}<br></br>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* <img
            alt="Product screenshot"
            src={dp}
            // className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 h-[800px]"
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 h-[600px]"
          /> */}
          <div className="flex items-end justify-end">
            <img
              alt="Profile Picture"
              src={dp}
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10 h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
