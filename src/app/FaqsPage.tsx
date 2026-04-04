import { Link } from "react-router";
import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { faqCategories } from "./faqs";

function FaqCategorySection({
  title,
  items,
  openIndex,
  onToggle,
}: {
  title: string;
  items: { question: string; answer: string }[];
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <section className="relative rounded-2xl border border-[#2d3c4a] bg-[rgba(19,26,32,0.78)] p-5 md:p-7 backdrop-blur-[12px]">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#f46739]" />
        <h2 className="font-['DM_Sans'] font-bold text-white text-2xl md:text-[32px] leading-[1.2]">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((faq, index) => (
          <div
            key={faq.question}
            className="overflow-hidden rounded-xl border border-[#3e4c59] bg-[#131a20]"
          >
            <button
              onClick={() => onToggle(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-[rgba(245,247,250,0.02)] transition-colors"
            >
              <h3 className="font-['DM_Sans'] font-bold text-white text-lg leading-[1.4]">
                {faq.question}
              </h3>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-[#f46739] transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5">
                <p className="font-['DM_Sans'] font-medium text-[#e4e7eb] text-base leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FaqsPage() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  return (
    <div className="min-h-screen bg-[#131a20] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-4 py-8 md:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 border-b border-[#2d3c4a] pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[820px]">
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 font-['DM_Sans'] font-medium text-[#f46739] text-sm hover:text-[#ff8a63] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              Back to home
            </Link>
            <p className="mb-3 font-['DM_Sans'] font-medium text-[#f46739] text-sm uppercase tracking-[0.2em]">
              Meetwith FAQs
            </p>
            <h1 className="font-['DM_Sans'] font-bold text-white text-4xl md:text-5xl lg:text-[56px] leading-[1.1]">
              Everything people ask before they switch to Meetwith
            </h1>
            <p className="mt-4 font-['DM_Sans'] font-medium text-[#9aa5b1] text-base leading-[1.7]">
              This page expands the FAQ from the landing page with deeper answers about groups,
              scheduling, payments, branding, privacy, and integrations.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2d3c4a] bg-[rgba(244,103,57,0.08)] px-5 py-4">
            <p className="font-['DM_Sans'] font-bold text-white text-xl leading-[1.2]">
              {faqCategories.reduce((total, category) => total + category.items.length, 0)} questions
            </p>
            <p className="mt-1 font-['DM_Sans'] font-medium text-[#e4e7eb] text-sm leading-[1.5]">
              Organized by topic for faster browsing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {faqCategories.map((category) => (
            <FaqCategorySection
              key={category.title}
              title={category.title}
              items={category.items}
              openIndex={openItems[category.title] ?? null}
              onToggle={(index) =>
                setOpenItems((current) => ({
                  ...current,
                  [category.title]: current[category.title] === index ? null : index,
                }))
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
