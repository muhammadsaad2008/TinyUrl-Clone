import { useState } from "react";
import { Link } from "react-router-dom";
import signUp from "../../assets/sing-up.png";

const socials = [
    {
        label: "Google",
        icon: <span className="font-bold text-red-500">G</span>,
    },
    {
        label: "Facebook",
        icon: <span className="font-bold text-blue-600">f</span>,
    },
    {
        label: "X (Twitter)",
        icon: <span className="font-black">X</span>,
    },
    {
        label: "Microsoft",
        icon: (
            <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" aria-hidden="true">
                <rect width="5.5" height="5.5" fill="#f25022" />
                <rect x="6.5" width="5.5" height="5.5" fill="#7fba00" />
                <rect y="6.5" width="5.5" height="5.5" fill="#00a4ef" />
                <rect x="6.5" y="6.5" width="5.5" height="5.5" fill="#ffb900" />
            </svg>
        ),
    },
];

const Divider = ({ text }) => (
    <div className="flex items-center gap-4 text-sm text-slate-700">
        <span className="h-px flex-1 bg-slate-300" />
        <span>{text}</span>
        <span className="h-px flex-1 bg-slate-300" />
    </div>
);

// Password strength checker
const strength = (password) => {
    if (!password) return 0;

    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
};

const levels = [
    { label: "", bar: "bg-slate-300", width: "w-0" },
    { label: "Weak", bar: "bg-red-500", width: "w-1/4" },
    { label: "Fair", bar: "bg-orange-500", width: "w-2/4" },
    { label: "Good", bar: "bg-yellow-500", width: "w-3/4" },
    { label: "Strong", bar: "bg-green-600", width: "w-full" },
];

const fieldCls =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#0d7a96] focus:outline-none focus:ring-2 focus:ring-[#0d7a96]/30";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    const score = strength(password);
    const level = levels[score];

    const validEmail = /^\S+@\S+\.\S+$/.test(email.trim());

    const canSubmit =
        name.trim() !== "" &&
        validEmail &&
        password.length >= 8;

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        if (!canSubmit) {
            setMessage("Please enter valid details and a password of at least 8 characters.");
            return;
        }

        setMessage("Signup functionality is not connected yet.");
    };

    return (
        <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">

            {/* Close Button */}
            <Link
                to="/"
                aria-label="Close and return to home"
                title="Back to Home"
                className="absolute right-4 top-4 z-50 flex h-5 w-5 items-center justify-center rounded-half bg-gray-800 text-slate-700 shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#0d7a96] sm:right-8 sm:top-8"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </Link>

            {/* Left Side - Signup Form */}
            <section className="flex flex-col bg-slate-50 px-6 py-8 sm:px-12 lg:px-16 xl:px-24">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-black uppercase tracking-widest text-[#0d7a96]"
                >
                    TinyURL
                </Link>

                <div className="mx-auto mt-8 w-full max-w-xl flex-1 lg:mt-10">

                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Sign Up
                    </h1>

                    <p className="mb-5 mt-3 text-slate-700">
                        Already a user?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-[#0d7a96] hover:underline"
                        >
                            Log In
                        </Link>
                    </p>

                    <Divider text="continue with" />

                    {/* Signup Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 space-y-5"
                        noValidate
                    >

                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block font-medium text-slate-800"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Enter Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={fieldCls}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block font-medium text-slate-800"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={fieldCls}
                                required
                                aria-invalid={email.length > 0 && !validEmail}
                            />

                            {email.length > 0 && !validEmail && (
                                <p className="mt-1 text-sm text-red-600">
                                    Please enter a valid email address.
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block font-medium text-slate-800"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={show ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-describedby="pw-strength"
                                    className={`${ fieldCls } pr - 12`}
                                    required
                                    minLength={8}
                                />

                                {/* Show / Hide Password */}
                                <button
                                    type="button"
                                    onClick={() => setShow((previous) => !previous)}
                                    aria-label={show ? "Hide password" : "Show password"}
                                    aria-pressed={show}
                                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-600 hover:text-slate-900"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        aria-hidden="true"
                                    >
                                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                                        <circle cx="12" cy="12" r="3" />
                                        {show && <path d="M3 3l18 18" />}
                                    </svg>
                                </button>
                            </div>

                            {/* Password Strength Indicator */}
                            <div
                                id="pw-strength"
                                className="mt-3 flex items-center gap-3"
                                aria-live="polite"
                            >
                                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-300">
                                    <div
                                        className={`h - full rounded - full transition - all ${ level.bar } ${ level.width } `}
                                    />
                                </div>

                                <span className="flex items-center gap-1 text-sm text-slate-700">
                                    Security{level.label ? `: ${ level.label } ` : ":"}

                                    <span
                                        tabIndex={0}
                                        role="img"
                                        aria-label="Use 8 or more characters with uppercase and lowercase letters, numbers, and symbols"
                                        title="Use 8 or more characters with uppercase and lowercase letters, numbers, and symbols"
                                        className="inline-flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-slate-700 text-[10px] font-bold"
                                    >
                                        i
                                    </span>
                                </span>
                            </div>

                            {password.length > 0 && password.length < 8 && (
                                <p className="mt-1 text-sm text-red-600">
                                    Password must contain at least 8 characters.
                                </p>
                            )}
                        </div>

                        {/* Terms and Privacy */}
                        <p className="pt-2 text-sm text-slate-800">
                            By signing up, you agree to our{" "}
                            <Link to="/" className="text-[#0d7a96] underline">
                                Terms of Service
                            </Link>
                            ,{" "}
                            <Link to="/" className="text-[#0d7a96] underline">
                                Privacy Policy
                            </Link>
                            , and{" "}
                            <Link to="/" className="text-[#0d7a96] underline">
                                Use of Cookies
                            </Link>
                            .
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!canSubmit}
                            className="w-full rounded-md bg-[#0d7a96] py-3 font-semibold text-white transition hover:bg-[#0b6a82] disabled:cursor-not-allowed disabled:bg-slate-500"
                        >
                            Sign Up
                        </button>

                        {message && (
                            <p
                                role="status"
                                className="rounded-md bg-slate-100 px-4 py-3 text-sm text-slate-700"
                            >
                                {message}
                            </p>
                        )}
                    </form>

                    {/* Alternative Signup */}
                    <div className="mt-6">
                        <Divider text="or" />
                    </div>

                    {/* Social Buttons */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3 pb-6">
                        {socials.map((social) => (
                            <button
                                key={social.label}
                                type="button"
                                onClick={() =>
                                    alert(`${ social.label } signup is not configured yet.`)
                                }
                                className="flex items-center gap-2 rounded border border-slate-400 bg-white px-4 py-2 text-sm text-slate-800 transition hover:bg-slate-100"
                            >
                                {social.icon}
                                {social.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Right Side - Image Panel */}
            <aside className="hidden flex-col items-center justify-center bg-gradient-to-br from-[#0d7a96] to-[#02213f] px-10 text-center text-white lg:flex">
                <div className="flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-white/5">
                    <img
                        src={signUp}
                        alt="Welcome to TinyURL"
                        className="h-full w-full object-contain"
                    />
                </div>

                <h2 className="mt-10 max-w-md text-2xl font-bold">
                    Amplify Your Success with Data-Driven Shortened Links
                </h2>
            </aside>
        </div>
    );
}
