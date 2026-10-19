
import React from "react";

const courses = [
  {
    title: "DCA",
    subtitle: "Diploma in Computer Application",
    description:
      "Learn computer fundamentals, MS Office, internet, Tally and practical computer skills.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    color: "border-blue-500",
    button: "bg-blue-600 hover:bg-blue-500",
    tag: "text-blue-400",
  },
  {
    title: "PGDCA",
    subtitle: "Post Graduate Diploma in Computer Application",
    description:
      "Develop advanced computer knowledge, programming skills and application development.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    color: "border-purple-500",
    button: "bg-purple-600 hover:bg-purple-500",
    tag: "text-purple-400",
  },
  {
    title: "Basic Computer",
    subtitle: "Fundamental Computer Knowledge",
    description:
      "Start learning computer basics, typing, MS Office, internet and everyday digital skills.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    color: "border-emerald-500",
    button: "bg-emerald-600 hover:bg-emerald-500",
    tag: "text-emerald-400",
  },
  {
    title: "PDCTT",
    subtitle: "Professional Diploma in Computer Teacher Training",
    description:
      "Learn teaching techniques, lesson planning and computer education fundamentals.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    color: "border-orange-500",
    button: "bg-orange-500 hover:bg-orange-400",
    tag: "text-orange-400",
  },
  {
    title: "CorelDRAW",
    subtitle: "Graphic Designing",
    description:
      "Create logos, banners, posters and professional vector graphics designs.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    color: "border-pink-500",
    button: "bg-pink-600 hover:bg-pink-500",
    tag: "text-pink-400",
  },
  {
    title: "Photoshop",
    subtitle: "Photo Editing & Design",
    description:
      "Learn photo editing, image manipulation, creative effects and graphic design.",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800",
    color: "border-cyan-500",
    button: "bg-cyan-600 hover:bg-cyan-500",
    tag: "text-cyan-400",
  },
  {
    title: "Tally",
    subtitle: "Accounting & Business Management",
    description:
      "Learn accounting, GST, inventory management, billing and financial records.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    color: "border-violet-500",
    button: "bg-violet-600 hover:bg-violet-500",
    tag: "text-violet-400",
  },
];

const Courses = () => {
  const handleExplore = (course) => {
    // Replace this with your enquiry form or course details page.
    alert(`You selected ${course}. Please contact us for details.`);
  };

  return (
    <section
      id="courses"
      className="min-h-screen bg-[#06132e] px-5 py-20 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 font-bold tracking-[4px] text-sky-400">
            OUR COURSES
          </p>

          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Learn New Skills,{" "}
            <span className="text-sky-400">
              Build Your Future
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Explore our computer, accounting and graphic designing
            courses to develop practical skills and grow your career.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`group overflow-hidden rounded-2xl border ${course.color} bg-[#0b1b3a] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Course Image */}
              <div className="overflow-hidden p-2">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-48 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Course Details */}
              <div className="flex flex-col p-5 pt-2">
                <h2 className="text-2xl font-bold text-white">
                  {course.title}
                </h2>

                <p className={`mt-2 text-sm font-semibold ${course.tag}`}>
                  {course.subtitle}
                </p>

                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-300">
                  {course.description}
                </p>

               <a href="/#Enquiry"> <button
                  type="button"
                 
                  className={`mt-5 w-full rounded-full ${course.button} px-4 py-3 font-semibold text-white transition-colors`}
                >
                  Explore Course →
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
