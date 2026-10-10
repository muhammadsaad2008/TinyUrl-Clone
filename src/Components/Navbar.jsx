import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
    { label: "Plans", to: "/" },
    { label: "Features", to: "/" },
    { label: "Domains", to: "/" },
    { label: "Resources", to: "/" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    // close the mobile menu whenever the page changes
    useEffect(() => setOpen(false), [pathname]);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#0d7a96] to-[#02213f] text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-8 lg:gap-10">
                    <Link to="/" className="text-2xl font-black uppercase tracking-widest sm:text-3xl">
                        TinyURL
                    </Link>
                    <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
                        {links.map((l) => (
                            <NavLink key={l.label} to={l.to} className="font-medium hover:underline">
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="hidden items-center gap-5 md:flex">
                    <Link to="/login" className="font-medium hover:underline">Log In</Link>
                    <Link to="/SignUp" className="rounded-md bg-[#0e7490] px-5 py-3 font-semibold hover:bg-[#0b6a82]">
                        Sign Up
                    </Link>
                </div>

                <button
                    type="button"
                    className="rounded-md p-2 hover:bg-white/10 md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((o) => !o)}
                >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" className={(open ? "flex" : "hidden") + " flex-col gap-1 border-t border-white/15 bg-[#02213f] px-6 py-4 md:hidden"}>
                {links.map((l) => (
                    <NavLink key={l.label} to={l.to} className="rounded-md px-3 py-3 font-medium hover:bg-white/10">
                        {l.label}
                    </NavLink>
                ))}
                <div className="mt-2 flex gap-3 border-t border-white/15 pt-4">
                    <Link to="/login" className="flex-1 rounded-md border border-white/30 py-3 text-center font-medium">Log In</Link>
                    <Link to="/SignUp" className="flex-1 rounded-md bg-[#0e7490] py-3 text-center font-semibold">Sign Up</Link>
                </div>
            </div>
        </header>
    );
}
