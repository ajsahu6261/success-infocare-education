
import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const courseList = [
  "DCA",
  "PGDCA",
  "Basic Computer",
  "PDCTT",
  "CorelDRAW",
  "Photoshop",
  "Tally",
];

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const requestedCourse = searchParams.get("course");

  const [form, setForm] = useState({
    student_name: "",
    student_phone: "",
    student_email: "",
    course_name: courseList.includes(requestedCourse)
      ? requestedCourse
      : "DCA",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const name = form.student_name.trim();
    const phone = form.student_phone.replace(/[\s-]/g, "");
    const email = form.student_email.trim();

    if (!/^[a-zA-Z\s.'-]{2,80}$/.test(name)) {
      setStatus({
        type: "error",
        message: "Please enter a valid student name.",
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus({
        type: "error",
        message: "Enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          student_name: name,
          student_phone: phone,
          student_email: email || "Not provided",
          course_name: form.course_name,
          message: form.message.trim() || "No additional message",
        },
        { publicKey }
      );

      setStatus({
        type: "success",
        message: "Your enquiry has been submitted successfully!",
      });

      setForm({
        student_name: "",
        student_phone: "",
        student_email: "",
        course_name: form.course_name,
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Unable to send enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Enquiry"className="min-h-screen bg-[#06132e] px-5 py-16 text-white">
      <div className="mx-auto max-w-2xl">

        <div className="mt-8 rounded-2xl border border-sky-500/30 bg-[#0b1b3a] p-6 shadow-2xl sm:p-10">
          <p className="font-bold tracking-[3px] text-sky-400">
            COURSE ENQUIRY
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's Get You Started
          </h1>

          <p className="mt-3 text-slate-300">
            Fill in your details. Our institute will contact you
            about your selected course.
          </p>

          {status.type === "success" ? (
            <div
              role="status"
              className="mt-8 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-6"
            >
              <h2 className="text-xl font-bold text-emerald-400">
                ✓ Thank You!
              </h2>

              <p className="mt-3 text-slate-200">
                {status.message}
              </p>

              <Link
                to="/courses"
                className="mt-5 inline-block rounded-lg bg-sky-600 px-5 py-3 font-semibold hover:bg-sky-500"
              >
                Explore More Courses
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="student_name" className="mb-2 block text-sm">
                  Student Name *
                </label>
                <input
                  id="student_name"
                  name="student_name"
                  value={form.student_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-[#06132e] px-4 py-3 outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label htmlFor="student_phone" className="mb-2 block text-sm">
                  Mobile Number *
                </label>
                <input
                  id="student_phone"
                  name="student_phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={form.student_phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={14}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-[#06132e] px-4 py-3 outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label htmlFor="student_email" className="mb-2 block text-sm">
                  Email Address
                </label>
                <input
                  id="student_email"
                  name="student_email"
                  type="email"
                  autoComplete="email"
                  value={form.student_email}
                  onChange={handleChange}
                  placeholder="Enter your email (optional)"
                  maxLength={150}
                  className="w-full rounded-lg border border-slate-600 bg-[#06132e] px-4 py-3 outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label htmlFor="course_name" className="mb-2 block text-sm">
                  Select Course *
                </label>
                <select
                  id="course_name"
                  name="course_name"
                  value={form.course_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-[#06132e] px-4 py-3 outline-none focus:border-sky-400"
                >
                  {courseList.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ask about fees, duration or batches..."
                  rows={4}
                  maxLength={1000}
                  className="w-full rounded-lg border border-slate-600 bg-[#06132e] px-4 py-3 outline-none focus:border-sky-400"
                />
              </div>

              {status.message && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-500/10 p-3 text-sm text-red-300"
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-sky-600 px-5 py-3 font-bold transition hover:bg-sky-500 disabled:opacity-60"
              >
                {loading ? "Sending Enquiry..." : "Submit Enquiry →"}
              </button>

              <p className="text-center text-xs text-slate-400">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
