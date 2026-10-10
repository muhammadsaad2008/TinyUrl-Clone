import { useState } from "react";
import { Link } from "react-router-dom";
import loginSide from "../../assets/login-side.png";

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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);

  const canSubmit = email.trim() !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canSubmit) return;

    alert("Login functionality is not connected yet.");
  };

  return (
    <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Close Button */}
      <Link
        to="/"
        aria-label="Close and return to home"
        title="Back to Home"
        className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-half bg-gray-800 text-white transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0d7a96] sm:right-8 sm:top-8"
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

      {/* Left Side - Login Form */}
      <section className="flex flex-col bg-slate-50 px-6 py-8 sm:px-12 lg:px-16 xl:px-24">
        <Link
          to="/"
          className="text-2xl font-black uppercase tracking-widest text-[#0d7a96]"
        >
          TinyURL
        </Link>

        <div className="mx-auto mt-10 w-full max-w-xl flex-1 lg:mt-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Log In
          </h1>

          <p className="mb-5 mt-3 text-slate-700">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#0d7a96] hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <Divider text="continue with" />

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#0d7a96] focus:outline-none focus:ring-2 focus:ring-[#0d7a96]/30"
              />
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
                  autoComplete="current-password"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white py-3 pl-4 pr-12 text-slate-900 placeholder:text-slate-400 focus:border-[#0d7a96] focus:outline-none focus:ring-2 focus:ring-[#0d7a96]/30"
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
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-3 text-slate-800">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-400 accent-[#0d7a96]"
                />
                Keep me logged in
              </label>

              <Link
                to="/forgot-password"
                className="text-[#0d7a96] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-md bg-[#0d7a96] py-3 font-semibold text-white transition hover:bg-[#0b6a82] disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              Log In
            </button>
          </form>

          {/* Alternative Login */}
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
                  alert(`${ social.label } login is not configured yet.`)
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
            src={loginSide}
            alt="Welcome back to TinyURL"
            className="h-full w-full object-contain"
          />
        </div>

        <h2 className="mt-10 text-2xl font-bold">Welcome Back!</h2>

        <p className="mt-4 text-xl font-bold">
          Your Links Have Missed You
        </p>
      </aside>
    </div>
  );
}
