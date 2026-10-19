
import React from "react";
import ZanabImg from "../assets/Zanab.jpeg";
import NehaImg from"../assets/nehamam.jpeg";

const faculty = [
//   {
//     name: "Deepak Yadav",
//     role: "Director",
//     description: "Leading the institute with a focus on quality education and student success.",
//     icon: "👨‍💼",
//   },
  {
    name: "Neha Yadav",
    role: "Manager",
    description: "Leading the institute with a focus on quality education and student success.",
    image: NehaImg,
  },
  {
    name: "Zenab Khan",
    role: "Teacher",
    description: "Helping students build strong computer skills through practical learning.",
    image: ZanabImg,
  },
//   {
//     name: "Farah Khan",
//     role: "Teacher",
//     description: "Supporting students with computer education and skill development.",
//     icon: "👩‍🏫",
//   },
//   {
//     name: "Chanchal Thakur",
//     role: "Receptionist",
//     description: "Assisting students and visitors with enquiries and institute information.",
//     icon: "👩‍💻",
//   },
];

const Faculty = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[4px] text-blue-600">
            Meet Our Team
          </p>

          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Our Faculty
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Meet our dedicated team committed to quality education,
            practical learning, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, index) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-50 w-50 items-center justify-center rounded-full bg-blue-100 text-5xl transition duration-300 group-hover:scale-105">
               <img  
                src={member.image}
                 className="w-full h-full border border-3 rounded-[50%] "
                />
              </div>

              <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
                {member.role}
              </span>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {member.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {member.description}
              </p>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
