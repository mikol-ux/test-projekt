import ClientFAQ from '../../../../components/Section-components/theQuestion';

const FAQSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col py-20 px-6 tpk-contained text-black dark:text-white">
      <div>
        <p className="px-5 py-2 bg-[#141414] text-white text-xs 2xl:text-2xl w-max text-left ml-0">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="text-4xl xl:text-4xl 2xl:text-6xl font-normal mt-6 mb-10 text-left max-w-xl">
          FIND ANSWERS TO YOUR QUESTIONS HERE
        </h2>
      </div>
      <ClientFAQ />
    </section>
  );
};

export default FAQSection;
