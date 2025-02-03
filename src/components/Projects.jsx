import microsoft from "./microsoft.jpg";
import aws from "./aws.png";
import hackerrank from "./hackerrank.jpg";
import pearson from "./pearson.png";
const certifications = [
  {
    name: "KSI India Microsoft DataScience Certificate",
    description:
      "A comprehensive certification on data science fundamentals and techniques, recognized by Microsoft.",
  },
  {
    name: "AWS Cloud Computing Certificate",
    description:
      "Validates expertise in cloud computing services, architecture, and deployment using AWS.",
  },
  {
    name: "HackerRank Software Engineer Intern Certificate",
    description:
      "Awarded for completing an internship program focusing on problem solving and algorithmic coding challenges.",
  },
  {
    name: "MePro Pearson Proficiency Certificate",
    description:
      "Demonstrates proficiency in various skills through the Pearson MePro assessment.",
  },
];

export default function Projects() {
  return (
    <div className="bg-white" id="certifications">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Certifications
          </h2>
          <p className="mt-4 text-gray-500">
            Here are some of the certifications I've earned to validate my
            expertise in various technical fields:
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{cert.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {cert.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Add any relevant images if necessary */}
          <a href="https://www.credly.com/badges/2879faf6-ff55-487e-81c3-92ade915f808/public_url">
            <img
              alt="AWS Certificate."
              src={aws}
              className="rounded-lg bg-gray-100"
            />
          </a>
          <a href="https://drive.google.com/file/d/16oHMDLsMZ6X7NBkZqhLOj8axJKKRBHHh/view?usp=sharing">
            <img
              alt="Microsoft Certificate."
              src={microsoft}
              className="rounded-lg bg-gray-100"
            />
          </a>
          <a href="https://www.hackerrank.com/certificates/898d8dcf9dea"><img
            alt="Hackerrank SEI Certificate."
            src={hackerrank}
            className="rounded-lg bg-gray-100"
          /></a>
          <a href="https://www.credly.com/badges/6b360d0e-099e-46ec-a93a-8fc6a325a3e7/public_url"><img
            alt="Pearson Certificate."
            src={pearson}
            className="rounded-lg bg-gray-100"
          /></a>
          {/* You can add more images or leave it out if not needed */}
        </div>
      </div>
    </div>
  );
}
