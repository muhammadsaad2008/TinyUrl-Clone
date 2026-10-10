import { useEffect, useRef, useState } from "react";
import State from "../assets/State.png";

// `to` = number that counts up; `text` = a fixed word shown as is
const stats = [
    { text: "Billions", label: "of redirects per month" },
    { to: 24, suffix: " years", label: "of shortening URLs", duration: 1800 },
    { to: 32823824637, label: "TinyURLs created", duration: 2600 },
];

const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function CountUp({ to, suffix = "", duration = 2000, start }) {
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!start) return;
        if (prefersReducedMotion()) { setN(to); return; }
        let raf;
        let t0;
        const tick = (t) => {
            if (t0 === undefined) t0 = t;
            const p = Math.min((t - t0) / duration, 1);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); // ease-out
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [start, to, duration]);

    const final = to.toLocaleString("en-US") + suffix;
    return (
        <>
            <span aria-hidden="true" className="tabular-nums">{n.toLocaleString("en-US")}{suffix}</span>
            <span className="sr-only">{final}</span>
        </>
    );
}

export default function StatsSection() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    // start counting once, when at least 30% of the section is on screen
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) { setVisible(true); return; }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={ref} className="grid grid-cols-1 bg-[#00203f] text-white md:grid-cols-2" aria-labelledby="transforming">
            {/* Text + stats (first on phones, left half from md up) */}
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 md:px-12 lg:px-20 lg:py-16">
                <h2 id="transforming" className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                    Transforming the Digital Landscape Since &lsquo;02
                </h2>
                <p className="mt-6 max-w-lg text-base sm:text-lg">
                    TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.
                </p>

                <dl className="mt-8 space-y-6">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col gap-1 sm:grid sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-center sm:gap-6">
                            <dt className="break-words text-2xl font-bold sm:text-3xl">
                                {s.to !== undefined ? <CountUp to={s.to} suffix={s.suffix} duration={s.duration} start={visible} /> : s.text}
                            </dt>
                            <dd className="text-base">{s.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Photo (below the text on phones, right half from md up) */}
            <div className="h-64 sm:h-80 md:h-auto">
                <img src={State} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
        </section>
    );
}