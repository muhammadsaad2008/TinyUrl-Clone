import { useState } from "react";
import { Link } from "react-router-dom";
import contactSide from "../../assets/contact-side.png";

const departments = ["Sales", "Marketing", "Engineering", "IT", "Legal", "Other"];
const methods = ["Email", "Phone"];
const volumes = ["Under 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000 – 1 million", "Over 1 million"];
const useCases = ["Marketing campaigns", "Social media", "SMS & email", "Product or app links", "Other"];
const benefits = [
    "Formal, SLA-backed uptime guarantees",
    "Round-the-clock support from a dedicated customer success agent",
    "Higher limits for trackable links and branded domains",
    "Custom pricing, solutions, and services",
    "Solutions matching your compliance needs",
];

const inputCls =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-500 focus:border-[#0d7a96] focus:outline-none focus:ring-2 focus:ring-[#0d7a96]/30";

const Label = ({ htmlFor, required, children }) => (
    <label htmlFor={htmlFor} className="mb-2 block font-semibold text-slate-800">
        {children} {required && <span className="ml-1 text-red-700" aria-hidden="true">*</span>}
    </label>
);

const Select = ({ id, value, onChange, placeholder, options }) => (
    <div className="relative">
        <select id={id} name={id} value={value} onChange={onChange} className={inputCls + " appearance-none pr-10"}>
            <option value="">{placeholder}</option>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
        </svg>
    </div>
);

const empty = {
    firstName: "", lastName: "", company: "", email: "", department: "",
    contactMethod: "", volume: "", useCase: "", notes: "",
};
const required = ["firstName", "lastName", "company", "email", "department", "contactMethod", "volume", "useCase"];

export default function ContactSales() {
    const [form, setForm] = useState(empty);
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        setSent(false);
        if (required.some((k) => !form[k].trim())) return setError("Please fill in all required fields.");
        if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Enter a valid email address.");
        setError("");
        // TODO: send `form` to your backend / email service here
        console.log(form);
        setSent(true);
        setForm(empty);
    };

    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_1fr]">
            {/* Left: form */}
            <section className="bg-slate-50 px-6 py-8 sm:px-12 lg:px-12 xl:px-20">
                <Link to="/" className="text-2xl text-[#0D7693] font-black uppercase tracking-widest sm:text-3xl">
                    TinyURL
                </Link>

                <div className="mx-auto mt-8 w-full max-w-lg lg:ml-0 lg:mt-10">
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Request a Quote</h1>
                    <p className="mb-6 mt-2 text-lg text-slate-600">Submit your details using the form for a custom quote.</p>

                    <form onSubmit={submit} noValidate className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="firstName" required>First Name</Label>
                                <input id="firstName" name="firstName" placeholder="Enter First Name" autoComplete="given-name" value={form.firstName} onChange={change} className={inputCls} />
                            </div>
                            <div>
                                <Label htmlFor="lastName" required>Last Name</Label>
                                <input id="lastName" name="lastName" placeholder="Enter Last Name" autoComplete="family-name" value={form.lastName} onChange={change} className={inputCls} />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="company" required>Company Name</Label>
                            <input id="company" name="company" placeholder="Enter Company Name" autoComplete="organization" value={form.company} onChange={change} className={inputCls} />
                        </div>

                        <div>
                            <Label htmlFor="email" required>Email</Label>
                            <input id="email" name="email" type="email" placeholder="Enter Email Address" autoComplete="email" value={form.email} onChange={change} className={inputCls} />
                        </div>

                        <div>
                            <Label htmlFor="department" required>Department</Label>
                            <Select id="department" value={form.department} onChange={change} placeholder="Select a Department" options={departments} />
                        </div>

                        <div>
                            <Label htmlFor="contactMethod" required>Preferred Contact Method</Label>
                            <Select id="contactMethod" value={form.contactMethod} onChange={change} placeholder="Select a Contact Method" options={methods} />
                        </div>

                        <div>
                            <Label htmlFor="volume" required>Expected Monthly Links</Label>
                            <Select id="volume" value={form.volume} onChange={change} placeholder="Select an Expected Volume" options={volumes} />
                        </div>

                        <div>
                            <Label htmlFor="useCase" required>Primary Use Case</Label>
                            <Select id="useCase" value={form.useCase} onChange={change} placeholder="Select a Use Case" options={useCases} />
                        </div>

                        <div>
                            <Label htmlFor="notes">Notes</Label>
                            <textarea id="notes" name="notes" rows={5} value={form.notes} onChange={change}
                                placeholder="Have a use case outside of our list or product related question? Let us know"
                                className={inputCls + " resize-y"} />
                        </div>

                        <p role="alert" className="min-h-[1.25rem] text-sm text-red-700">{error}</p>
                        {sent && <p role="status" className="rounded-md bg-green-100 px-4 py-3 text-sm text-green-800">Thanks! Our team will contact you soon.</p>}

                        <button type="submit" className="w-full rounded-md bg-[#0d7a96] py-3 font-semibold text-white hover:bg-[#0b6a82]">
                            Submit
                        </button>

                        <p className="pb-6 pt-2 text-sm text-slate-800">
                            By submitting, you agree to our{" "}
                            <Link to="/" className="text-[#0d7a96] underline">Terms of Service</Link>,{" "}
                            <Link to="/" className="text-[#0d7a96] underline">Privacy Policy</Link>, and{" "}
                            <Link to="/" className="text-[#0d7a96] underline">Use of Cookies</Link>.
                        </p>
                    </form>
                </div>
            </section>

            {/* Right: info + image — hidden on screens smaller than lg */}
            <aside className="hidden bg-gradient-to-br from-[#0d7a96] to-[#02213f] px-12 py-16 text-white lg:block xl:px-20">
                <div className="mx-auto max-w-xl">
                    <h2 className="text-3xl font-bold leading-tight xl:text-4xl">
                        Unlock the Full Potential of Your Links With Enterprise-Grade Service
                    </h2>
                    <p className="mt-6 text-lg">
                        Work with our solutions experts to build an enterprise agreement that works perfectly for your business needs.
                    </p>
                    <h3 className="mt-10 text-xl">Get access to:</h3>
                    <ul className="mt-5 list-disc space-y-4 pl-6 text-lg">
                        {benefits.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <img src={contactSide} alt="" className="mx-auto mt-12 w-full max-w-md object-contain" />
                </div>
            </aside>
        </div>
    );
}