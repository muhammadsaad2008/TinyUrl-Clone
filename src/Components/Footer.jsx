const columns = [
    {
        title: "Features",
        links: [
            { label: "Link Editor", href: "/" },
            { label: "Link Management", href: "/" },
            { label: "Branded Links", href: "/" },
            { label: "Short URL Tracking", href: "/" },
            { label: "QR Code Generator", href: "/" },
            { label: "Short URL API", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "/" },
            { label: "For Developers", href: "/" },
            { label: "Our Proven Process", href: "/" },
            { label: "About Us", href: "/" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { label: "Help Desk", href: "/" },
            { label: "Contact Sales", href: "/" },
            { label: "Contact Support", href: "/" },
            { label: "Report Abuse", href: "/" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms of Service", href: "/" },
            { label: "Privacy Policy", href: "/" },
            { label: "Cookie Policy", href: "/" },
            { label: "Accessibility Statement", href: "/" },
            { label: "Privacy Manager", href: "/" },
        ],
    },
];

const socials = [
    {
        label: "Facebook",
        href: "#",
        path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
    },
    {
        label: "Instagram",
        href: "#",
        path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z",
    },
    {
        label: "LinkedIn",
        href: "#",
        path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.25H3zM9.5 9.75h3.83v1.54h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z",
    },
    {
        label: "X",
        href: "#",
        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0d7a96] to-[#02213f] text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-12 md:grid-cols-4 lg:grid-cols-[repeat(4,auto)_1fr] lg:gap-x-12 lg:py-16">
                {columns.map((col) => (
                    <nav key={col.title} aria-label={col.title}>
                        <h3 className="mb-4 text-lg font-bold sm:text-xl">{col.title}</h3>
                        <ul className="space-y-3">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm hover:underline sm:text-base">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}

                {/* Brand block: full row on mobile/tablet, right-aligned on desktop */}
                <div className="col-span-2 flex flex-col gap-4 md:col-span-4 lg:col-span-1 lg:items-end lg:justify-end lg:text-right">
                    <div className="-ml-2 flex lg:ml-0">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/15"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                    <p className="text-3xl font-black uppercase tracking-widest sm:text-4xl">TinyURL</p>
                    <p className="text-sm">
                        © 2026 TinyURL LLC
                        <br />
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}