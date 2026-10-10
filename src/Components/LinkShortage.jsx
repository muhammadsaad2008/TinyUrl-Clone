import { Link } from "react-router-dom";
import linkshortening from "../assets/link-shortening.png";

export default function LinkShortening() {
    return (
        <section className="grid grid-cols-1 bg-[#0d7a96] text-white md:grid-cols-2" aria-labelledby="quick-easy">
            {/* Image: on top for phones, left half from md up */}
            <div className="h-64 sm:h-80 md:h-auto">
                <img src={linkshortening} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 lg:px-20 lg:py-16">
                <h2 id="quick-easy" className="max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                    Link Shortening Done Quick and Easy
                </h2>
                <p className="mt-6 max-w-md text-base sm:text-lg">
                    Our URL shortener is not only among the first-ever link shorteners on the Internet — it&apos;s the best out there.
                </p>
                <p className="mt-4 max-w-md text-base sm:text-lg">
                    Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.
                </p>
                <p className="mt-4 max-w-md text-base sm:text-lg">
                    Wave goodbye to long, clunky links and give your audiences the experiences they deserve!
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link to="/" className="rounded-md bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100">
                        View Plans
                    </Link>
                    <Link to="/contact-sales" className="rounded-md bg-[#00203f] px-5 py-3 font-medium text-white hover:bg-gray-900">
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
}