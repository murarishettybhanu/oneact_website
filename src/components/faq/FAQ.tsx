import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is my script really safe on OneAct?',
    answer: 'Absolutely. Scripts are stored in private AWS S3 buckets with encryption. Every view is watermarked with viewer details, logged, and requires NDA acceptance. You have complete control and visibility.',
  },
  {
    question: 'What happens if someone steals my script?',
    answer: 'Our watermarking and access logs create a clear audit trail proving when and by whom your script was viewed. This serves as legal evidence of IP ownership under IT Act 2000.',
  },
  {
    question: 'Can producers copy or download my script?',
    answer: 'No. The secure viewer prevents copying, pasting, downloading, and right-clicking. Producers can only view in the restricted reader. They can request contact details if interested.',
  },
  {
    question: 'What formats do you accept?',
    answer: 'PDF only. This is intentional—PDFs are industry standard, watermarkable, and legally admissible. No DOCX, TXT, or other formats.',
  },
  {
    question: 'How long does a script stay on OneAct?',
    answer: 'As long as you want. You can archive, delete, or publish scripts anytime. No automatic removal—full control is yours.',
  },
  {
    question: 'Is there a subscription cost?',
    answer: 'Free initially for writers and producers. Future paid features like "Unlock Contact" or premium analytics coming soon. Early users get grandfathered rates.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition"
      >
        <h3 className="text-lg font-semibold text-gray-900 text-left">{question}</h3>
        <span className={`ml-4 text-2xl text-green-600 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about OneAct</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
