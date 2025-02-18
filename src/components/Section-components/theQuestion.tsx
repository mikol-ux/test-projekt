"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string | { text: string; list: string[] };
}

const FAQComponent: React.FC<{ faq: FAQ; index: number }> = ({
  faq,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={index} className="w-full">
      <div className="group bg-gradient-to-r from-pitch-dark-blue via-deep-blue to-sky-blue p-[1px] rounded-[4px] cursor-pointer">
        <div
          className={`py-2 text-black dark:text-white transition-colors rounded-[4px] ${
            isOpen ? "bg-gradient-to-r from-black to-deep-blue" : "bg-black"
          }`}
        >
          <button
            className="w-full flex gap-8 justify-start items-center px-6 py-4 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="tpk-text-lg">{isOpen ? "−" : "+"}</span>
            <span className="text-left tpk-text-lg font-normal">
              {faq.question}
            </span>
          </button>
          {isOpen && (
            <div className="px-6 py-4 tpx-text-sm text-black dark:text-white font-light">
              {typeof faq.answer === "string" ? (
                <p>{faq.answer}</p>
              ) : (
                <>
                  <p>{faq.answer.text}</p>
                  <ul className="list-disc list-inside mt-2">
                    {faq.answer.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
