import { useState } from "react";
import { Link } from "react-router-dom";

const inputCls =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#0d7a96] focus:outline-none focus:ring-2 focus:ring-[#0d7a96]/30";

const Svg = ({ children, fill }) => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);
const LinkIcon = () => <Svg><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" /></Svg>;
const QrIcon = () => <Svg fill><path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm10-2h2v2h-2zm4 0h2v4h-4v-2h2zm-4 4h2v4h-2zm4 2h2v2h-2z" /></Svg>;
const ArrowIcon = () => <Svg fill><path d="M3 11l19-9-9 19-2-8z" /></Svg>;
const PinIcon = () => <Svg fill><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></Svg>;
const GlobeIcon = () => <Svg><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></Svg>;
const PenIcon = () => <Svg><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></Svg>;
const AlertIcon = () => <Svg fill><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2zm0-4h-2V7h2z" /></Svg>;

// Set showError={false} to hide the red banner
export default function Hero({ showError = true }) {
    const [tab, setTab] = useState("link"); // "link" | "qr"
    const [dir, setDir] = useState(1); // slide direction for the animation
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");

    const isLink = tab === "link";
    const hasUrl = url.trim() !== "";
    const action = isLink ? "Shorten Link" : "Generate QR Code";

    const switchTab = (t) => {
        if (t === tab) return;
        setDir(t === "qr" ? 1 : -1);
        setTab(t);
    };

    const tabBtn = (active) =>
        "relative z-10 flex items-center justify-center gap-2 px-3 py-4 text-sm font-bold transition-colors duration-300 sm:text-base " +
        (active ? "text-slate-900" : "text-white");

    return (
        <section className="flex min-h-[calc(100vh-4.5rem)] items-center bg-[#00203f] text-white">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
                {/* keyframes live here so the component is self-contained */}
                <style>{`
        @keyframes tabIn { from { opacity: 0; transform: translateX(calc(var(--dir) * 24px)); } to { opacity: 1; transform: none; } }
        .tab-in { animation: tabIn .35s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .tab-in { animation: none; } }
      `}</style>

                {/* Headline */}
                <div className="min-w-0 text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        URL Shortener, Branded Short Links &amp; Analytics
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-lg lg:mx-0">
                        Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.
                    </p>
                    <p className="mx-auto mt-4 max-w-xl text-lg lg:mx-0">
                        You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Link to="/" className="rounded-md bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100">View Plans</Link>
                        <Link to="/signup" className="rounded-md bg-[#0e7490] px-5 py-3 font-medium text-white hover:bg-[#0b6a82]">Create Free Account</Link>
                    </div>
                </div>

                {/* Banner + card */}
                <div className="mx-auto flex w-full min-w-0 max-w-xl flex-col gap-4 lg:max-w-none">
                    

                    <div className="overflow-hidden rounded-xl bg-slate-50 text-slate-900 shadow-lg">
                        {/* Tabs with a sliding highlight */}
                        <div className="relative grid grid-cols-2 bg-[#0e7490]" role="tablist">
                            <span
                                aria-hidden="true"
                                className={"absolute inset-y-0 left-0 w-1/2 bg-slate-50 transition-transform duration-300 ease-out motion-reduce:transition-none " + (isLink ? "translate-x-0" : "translate-x-full")}
                            />
                            <button type="button" role="tab" aria-selected={isLink} className={tabBtn(isLink)} onClick={() => switchTab("link")}>
                                <LinkIcon /> Shorten a Link
                            </button>
                            <button type="button" role="tab" aria-selected={!isLink} className={tabBtn(!isLink)} onClick={() => switchTab("qr")}>
                                <QrIcon /> Generate QR Code
                            </button>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="p-5 sm:p-6">
                            {/* key={tab} re-runs the slide/fade animation on every switch */}
                            <div key={tab} className="tab-in space-y-5" style={{ "--dir": dir }}>
                                <div>
                                    <label htmlFor="long-url" className="mb-2 flex items-center gap-2 font-medium">
                                        {isLink ? <ArrowIcon /> : <PinIcon />}
                                        {isLink ? "Long URL" : "Destination URL"} <span className="text-red-700">*</span>
                                    </label>
                                    <input id="long-url" className={inputCls} placeholder="Paste long URL here" value={url} onChange={(e) => setUrl(e.target.value)} />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
                                    <div>
                                        <label htmlFor="domain" className="mb-2 flex items-center gap-2 font-medium"><GlobeIcon /> Domain</label>
                                        <select id="domain" className={inputCls}>
                                            <option>tinyurl.com</option>
                                        </select>
                                    </div>
                                    <span className="hidden pt-12 text-xl sm:block">/</span>
                                    <div>
                                        <label htmlFor="alias" className="mb-2 flex items-center gap-2 font-medium"><PenIcon /> Alias (optional)</label>
                                        <input id="alias" className={inputCls} placeholder="Add alias here" value={alias} onChange={(e) => setAlias(e.target.value)} />
                                        <p className="mt-1 text-xs text-slate-500">Must be at least 5 characters</p>
                                    </div>
                                </div>

                                {/* Grey until a URL is typed, then green */}
                                <button
                                    type="submit"
                                    disabled={!hasUrl}
                                    className="w-full rounded-md bg-[#1f7a35] py-3 font-semibold text-white transition-colors hover:bg-[#186a2c] disabled:cursor-not-allowed disabled:bg-[#737373]"
                                >
                                    {action}
                                </button>

                                <p className="text-xs italic text-slate-600">
                                    By clicking {action}, you agree with our{" "}
                                    <Link to="/" className="text-[#0d7a96] not-italic hover:underline">Terms of Service</Link>,{" "}
                                    <Link to="/" className="text-[#0d7a96] hover:underline">Privacy Policy</Link>, and{" "}
                                    <Link to="/" className="text-[#0d7a96] hover:underline">Use of Cookies</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}