import SolidBtn from "@/components/Buttons/SolidBtn";
import FAQComponent from "../../../../components/Section-components/theQuestion";

interface FAQ {
  question: string;
  answer: string | { text: string; list: string[] };
}

const faqs: FAQ[] = [
  {
    question: "WHAT SEPARATES THE PROJEKT FROM OTHER COMPANIES?",
    answer:
      "We provide a unique approach tailored to each client, ensuring quality, efficiency, and innovation.",
  },
  {
    question: "DO YOU WORK WITH CLIENTS IN DIFFERENT TIMEZONES?",
    answer: {
      text: "Yes, we work with clients globally and adjust our schedules to ensure seamless collaboration.",
      list: [
        "When you choose us, you collaborate directly with our dedicated team, get access to founders who have worked with us and genuinely care about your success.",
        "Our cofounders oversee every project, while a design director leads the way, ensuring thorough design reviews and involvement in project details.",
        "We have a hiring division that allows our clients (partners) who have remote-friendly businesses to hire vetted and qualified off-shore employees.",
        "Communication and transparency drive all our interactions, guaranteeing a premium client experience from start to finish. Our agility stems from working with a diverse set of businesses, and our refined project management approach comes from years of experience.",
      ],
    },
  },
  {
    question: "HOW MUCH DOES HIRING YOU FOR A CUSTOM PROJEKT COST?",
    answer: {
      text: "We don’t just blindly build a good-looking website for our clients. We dive deep into market research to test whether their idea even makes sense.",
      list: [
        "When you choose us, you collaborate directly with our dedicated team, get access to founders who have worked with us and genuinely care about your success.",
        "Our cofounders oversee every project, while a design director leads the way, ensuring thorough design reviews and involvement in project details.",
        "We have a hiring division that allows our clients (partners) who have remote-friendly businesses to hire vetted and qualified off-shore employees.",
        "Communication and transparency drive all our interactions, guaranteeing a premium client experience from start to finish.",
      ],
    },
  },
];

const FAQSection = () => {
  return (
    <section className="w-full flex flex-col py-20 px-6 tpk-contained text-black dark:text-white">
      <div>
        <SolidBtn href="/" className="tpk-text-sm">
          FREQUENTLY ASKED QUESTIONS
        </SolidBtn>
        <h2 className="tpk-text-2xl font-normal mt-6 mb-10 text-left max-w-xl">
          FIND ANSWERS TO YOUR QUESTIONS HERE
        </h2>
      </div>
      <div className="mt-8 w-full">
        {faqs.map((faq, index) => (
          <FAQComponent key={index} faq={faq} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
