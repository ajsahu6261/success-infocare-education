
import React from 'react';
import {
  Monitor,
  Code2,
  BookOpen,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Computer Education',
    description:
      'Build your computer knowledge, from basic computer operations to essential digital skills.',
  },
  {
    icon: Code2,
    title: 'Practical Learning',
    description:
      'Learn through practical exercises and develop skills you can apply in real-world situations.',
  },
  {
    icon: Users,
    title: 'Student Support',
    description:
      'Get guidance and support throughout your learning journey.',
  },
  {
    icon: Target,
    title: 'Career Development',
    description:
      'Improve your digital confidence and prepare for future education and career opportunities.',
  },
];

const About = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* Hero Section */}
      <section className="relative bg-[#0D1C42] px-6 py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-transparent to-indigo-500/20" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-blue-300">
            About Our Institute
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Welcome to{' '}
            <span className="text-blue-300">
              Success Infocare Education
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Empowering learners with computer knowledge, practical skills,
            and the confidence to grow in a digital world.
          </p>

          <a
            href="/#courses"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Explore Our Courses <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* About Institute */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-blue-500" />

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
            alt="Students learning digital skills"
            className="relative h-[300px] w-full rounded-2xl object-cover shadow-xl md:h-[430px]"
          />

          <div className="absolute -bottom-5 right-4 rounded-xl bg-blue-600 p-5 text-white shadow-lg md:right-8">
            <BookOpen size={30} />
            <p className="mt-2 font-bold">Learn & Grow</p>
            <p className="text-sm text-blue-100">Build your skills</p>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D1C42] md:text-4xl">
            Building Digital Skills for a Brighter Future
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Success Infocare Education aims to help learners develop
            computer knowledge and digital skills. Our focus is on making
            learning accessible, practical, and useful for students who
            want to improve their technical abilities.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you are beginning your computer learning journey or
            looking to strengthen your existing skills, we encourage you
            to keep learning, practising, and moving towards your goals.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              'Focus on practical computer skills',
              'Supportive learning environment',
              'Continuous learning and improvement',
              'Digital and career-oriented knowledge',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  className="mt-1 shrink-0 text-blue-600"
                  size={20}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0D1C42] md:text-4xl">
            Learning That Moves You Forward
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Develop useful skills with a learning approach focused on
            understanding, practice, and personal growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0D1C42]">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0D1C42] px-6 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready to Start Learning?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Take the next step towards improving your computer skills.
            Connect with Success Infocare Education to learn more.
          </p>

          <a
            href="/#Enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-7 py-3.5 font-bold transition hover:bg-blue-600"
          >
            Enquire Now <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </main>
  );
};

export default About;
