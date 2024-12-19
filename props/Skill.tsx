import Image from "next/image";

// interfaces
import { SkillProps } from "@/interfaces";

const Skill = ({ domain, tech, logo, url }: SkillProps) => {
  return (
    <div className="bg-dark/75 dark:bg-dark rounded-3xl p-5 flex flex-col gap-3 mx-auto text-light">
      <p className="text-center text-lg">{domain}</p>

      <div className="flex flex-wrap gap-5 justify-center items-center h-full md:w-196">
        {Array.from({ length: logo.length }).map((_, i) => (
          <a
            key={i}
            href={url[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-light p-3 rounded-full flex items-center justify-center"
          >
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-dark rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {tech[i]}
            </span>
            <Image
              src={logo[i]}
              alt={tech[i]}
              width={100}
              height={100}
              className="h-10 w-10"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skill;
