import analyticsImg from "../assets/analytics.png";
import brandedImg from "../assets/branded-domains.png";
import bulkImg from "../assets/bulk-urls.png";
import managementImg from "../assets/link-management.png";

const features = [
    {
        title: "Detailed Link Analytics",
        text: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
        img: analyticsImg,
    },
    {
        title: "Fully Branded Domains",
        text: "Customize every part of your links with branded domains — say goodbye to default link shortening!",
        img: brandedImg,
    },
    {
        title: "Bulk Short URLs",
        text: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
        img: bulkImg,
    },
    {
        title: "Link Management",
        text: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
        img: managementImg,
    },
];

export default function PlansInclude() {
    return (
        <section className="bg-slate-50 py-12 text-slate-900 sm:py-16 lg:py-20" aria-labelledby="plans-include">
            <div className="mx-auto max-w-6xl px-6">
                <h2 id="plans-include" className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
                    TinyURL Plans Include:
                </h2>

                {/* 1 column on phones, 2 on tablets, 4 on desktop */}
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {features.map((f) => (
                        <article key={f.title} className="flex flex-col">
                            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{f.title}</h3>
                            <p className="mt-4 flex-1 text-base leading-relaxed sm:text-lg">{f.text}</p>
                            <div className="mt-8 flex justify-center sm:justify-start">
                                <img
                                    src={f.img}
                                    alt=""
                                    loading="lazy"
                                    className="h-auto w-full max-w-[240px] object-contain transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:drop-shadow-xl motion-reduce:transition-none motion-reduce:hover:transform-none sm:max-w-[260px]"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}