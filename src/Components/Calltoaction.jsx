import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="bg-[#00203f] px-6 py-14 text-center text-white sm:py-16 lg:py-20" aria-labelledby="cta-title">
            <div className="mx-auto max-w-3xl">
                <h2 id="cta-title" className="text-2xl font-bold sm:text-3xl">
                    Ready for Shorter, Smarter Links?
                </h2>
                <p className="mt-4 text-base sm:text-lg">
                    Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
                </p>
                <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                    <Link to="/" className="rounded-md bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-100">
                        View Plans
                    </Link>
                    {/* Goes to the Sign Up page */}
                    <Link to="/signup" className="rounded-md bg-[#0e7490] px-6 py-3 font-medium text-white hover:bg-[#0b6a82]">
                        Create Free Account
                    </Link>
                </div>
            </div>
        </section>
    );
}