// Faq.jsx — "Frequently Asked Questions" accordion (React + Tailwind CSS)
// Click a question to open its answer; clicking it again (or another one) closes it.
import { useState } from "react";

const faqs = [
    {
        q: "What Is a URL Shortener?",
        a: "A URL shortener turns a long web address into a short link that is easier to share. When someone opens the short link, they are sent straight to the original page.",
    },
    {
        q: "How Does a URL Shortener Work?",
        a: "When you submit a long URL, the service saves it together with a short code and gives you a short link. When someone visits that link, the service looks up the code and redirects the visitor to the original address.",
    },
    {
        q: "What Are the Benefits of Using a Short URL?",
        a: "Short links are easier to share, fit into messages and posts with limited space, and look cleaner. They can also be tracked, so you can see how many people click them.",
    },
    {
        q: "What Is a Custom URL Shortener?",
        a: "A custom URL shortener lets you use your own domain and alias, such as yourbrand.com/sale, so your links show your brand instead of a generic domain.",
    },
    {
        q: "How Do I Shorten a URL for Free?",
        a: "Paste your long URL into the box at the top of the page, add an optional alias, and click Shorten Link. Then copy the short link and share it anywhere.",
    },
    {
        q: "How Do I Know Your Service Is Reliable and Scalable?",
        a: "We have been shortening links since 2002 and handle billions of redirects every month. Enterprise plans also include formal, SLA-backed uptime guarantees.",
    },
    {
        q: "Can I Use a Domain I Already Own?",
        a: "Yes. With a paid plan you can connect your own domain and create branded short links on it.",
    },
];

const Chevron = ({ open }) => (
    <svg
        viewBox="0 0 24 24"
        className={"h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none " + (open ? "rotate-180" : "")}
        fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

export default function Faq() {
    const [open, setOpen] = useState(null); // index of the open question, or null

    return (
        <section className="bg-slate-50 py-12 text-slate-900 sm:py-16 lg:py-20" aria-labelledby="faq-title">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_2.4fr] lg:gap-12">
                <h2 id="faq-title" className="text-3xl font-bold leading-tight lg:self-center">
                    Frequently Asked Questions
                </h2>

                <div className="border-t border-slate-200">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={f.q} className="border-b border-slate-200">
                                <h3>
                                    <button
                                        type="button"
                                        id={`faq-q-${i}`}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-a-${i}`}
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between gap-4 px-2 py-5 text-left text-base font-bold hover:text-[#0d7a96] sm:px-6"
                                    >
                                        {f.q}
                                        <Chevron open={isOpen} />
                                    </button>
                                </h3>

                                {/* grid-rows 0fr -> 1fr animates the height smoothly */}
                                <div
                                    id={`faq-a-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-q-${i}`}
                                    className={
                                        "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none " +
                                        (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                                    }
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-2 pb-5 pr-10 text-base leading-relaxed text-slate-700 sm:px-6 sm:pr-14">{f.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}