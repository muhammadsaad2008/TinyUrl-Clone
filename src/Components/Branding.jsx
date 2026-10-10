
import { Link } from "react-router-dom";
import centerImg from "../assets/Plane.png";

const left = [
    { title: "Unlimited Tracked Clicks", text: "We don't believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!" },
    { title: "Detailed Link Analytics", text: "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters." },
    { title: "Branded Domains", text: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable." },
];
const right = [
    { title: "Fully Custom Links", text: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive." },
    { title: "Bulk Short URLs", text: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API." },
    { title: "Link Management", text: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features." },
];

const Card = ({ title, text }) => (
    <article className="rounded-lg p-5 transition-colors duration-300 hover:bg-sky-100/70 sm:p-6">
        <h3 className="text-xl font-bold leading-snug">{title}</h3>
        <p className="mt-4 text-base leading-relaxed">{text}</p>
    </article>
);

export default function BrandingSection() {
    return (
        <section className="bg-slate-50 py-12 text-slate-900 sm:py-16 lg:py-20" aria-labelledby="one-stop">
            <div className="mx-auto max-w-6xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 id="one-stop" className="text-2xl font-bold sm:text-3xl">
                        Your One-Stop Solution for Branding and Managing Links
                    </h2>
                    <p className="mt-4 text-base sm:text-lg">
                        We offer a comprehensive suite of premium features to allow users to brand and manage links conveniently and confidently.
                    </p>
                    <Link to="/" className="mt-6 inline-block rounded-md bg-[#0d7a96] px-5 py-3 font-medium text-white hover:bg-[#0b6a82]">
                        View Plans
                    </Link>
                </div>

                {/* Phones: image on top, cards in 1 column. Tablets: 2 columns. Desktop: cards | image | cards */}
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-[1fr_1.25fr_1fr] lg:gap-8">
                    <div className="flex justify-center md:col-span-2 lg:order-2 lg:col-span-1">
                        <img src={centerImg} alt="" loading="lazy" className="h-auto w-full max-w-sm object-contain lg:max-w-none" />
                    </div>

                    <div className="contents lg:order-1 lg:flex lg:flex-col lg:justify-between lg:gap-6">
                        {left.map((f) => <Card key={f.title} {...f} />)}
                    </div>

                    <div className="contents lg:order-3 lg:flex lg:flex-col lg:justify-between lg:gap-6">
                        {right.map((f) => <Card key={f.title} {...f} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}