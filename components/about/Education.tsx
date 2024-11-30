// props
import { EducationField } from "@/props";

const Education = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-2xl font-bold text-secondary mb-3 text-left w-full">Education</h2>

      <div className="flex flex-wrap gap-7">
        <EducationField
          institute="CY-Tech, Paris"
          degree="Master's Degree in Computer Science"
          startDate="SEP 2023"
          endDate="SEP 2025"
          info="Minor : Cybersecurity"
        />

        <EducationField
          institute="CY-Tech, Paris"
          degree="Bachelor's Degree in Computer Science"
          startDate="SEP 2020"
          endDate="SEP 2023"
          info="Major : Computer Science"
        />

        <EducationField
          institute="Lycée Chaptal, Paris"
          degree="French Baccalauréat (Scientific Stream)"
          startDate="SEP 2017"
          endDate="SEP 2020"
          info="Mention Bien (with honors)"
        />
      </div>
    </section>
  );
};

export default Education;
