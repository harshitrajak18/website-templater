import { useState } from "react";

const items = [
  { question: `Can I cancel anytime?`, answer: `Yes, you can cancel your subscription at any time from your billing dashboard. No questions asked.` },
  { question: `Do you offer discounts for open source projects?`, answer: `Absolutely! We love open source. Contact us for a free Pro license for your open source project.` },
  { question: `What payment methods do you accept?`, answer: `We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.` },
  { question: `Is there a free trial?`, answer: `Yes, all paid plans come with a 14-day free trial. No credit card required.` },
];

export function PricingFaq3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
<p className="mt-4 text-lg text-slate-600">Can't find what you're looking for? Contact us.</p>        </div>
        
        <div className="divide-y divide-slate-200">
          {items.map((item, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-base leading-7 text-slate-600 pr-12">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
