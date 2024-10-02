import Experience, { ExperienceProps } from "@/components/Experience";
import Link from "next/link";

const experiences: ExperienceProps[] = [
  {
    id: 1,
    title: "Data Engineer",
    company: "Sopra Steria",
    period: "2023 - 2024",
    description:
      "Maintained, developed and deploy pipelines for Airbus, I used all the tools from Azure (DataFactory/Databricks/DevOps/ML/DataLake) and PySpark for Big Data.",
  },
  {
    id: 2,
    title: "Full Stack Developper",
    company: "Sopra Steria",
    period: "2022 - 2023",
    description:
      "Maintained, developed and deploy applications for Crédit Agricole a french bank using various stacks (Java/Angular/React/Typescript/Spring/Struts2).",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Vitesco Technologies",
    period: "2021 - 2022",
    description:
      "Developed a newer version of a tool that analyze configuration of C projects in Python and produce a detailed report.",
  },
];

export default function Timeline() {
  return (
    <div
      className="flex flex-col w-full h-screen justify-center items-center px-4 py-8"
      id="experiences"
    >
      <div className="w-full max-w-4xl">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">
            My Experience Timeline
          </h2>
          <p className="text-center text-lg sm:text-base">
            These are my professional experiences. We can discuss further via{" "}
            <Link
              href="https://www.linkedin.com/in/augustin-laurent-204ab6196/"
              className="hover:text-emerald-600"
            >
              LinkedIn
            </Link>{" "}
            or with the{" "}
            <Link href="/#contact" className="hover:text-emerald-600">
              contact form.
            </Link>
          </p>
        </div>
        <div className="relative mt-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300" />
          {experiences.map((experience, index) => (
            <Experience
              key={experience.id}
              experience={experience}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
