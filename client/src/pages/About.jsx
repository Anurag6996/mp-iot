import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[520px]">
        {/* Background Image */}
        <img
          src="/smartguardpic/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Color Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-emerald-700/30 to-amber-700/20"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            SmartGuard — Intelligent Home & Care Monitoring
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-100/90">
            Simple setup, real-time alerts and secure cloud history — designed for families,
            care facilities and hospitals who need reliable monitoring and peace of mind.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="mailto:contact@smartguard.io?subject=Request%20Demo"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg transition"
            >
              📩 Request a Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full border border-white/20 transition"
            >
              📞 Contact Us
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            Trusted by families & care facilities • Learn more about integrations:{" "}
            <a className="underline" href="https://firebase.google.com" target="_blank" rel="noreferrer">
              Firebase
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-emerald-700">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SmartGuard exists to protect vulnerable people and simplify monitoring for caregivers.
            We build practical, privacy-first monitoring solutions that deliver timely alerts,
            easy-to-read cloud dashboards and multi-device access — so families and facilities
            can respond faster and worry less.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            From motion and sound detection to secure data storage and real-time push notifications,
            SmartGuard focuses on reliability, clarity and real-world usefulness for everyday care.
          </p>

          {/* Icons List */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">🔔</div>
              <div>
                <div className="font-semibold">Real-time Alerts</div>
                <div className="text-xs text-gray-500">Instant push notifications</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-50 p-2 text-amber-600">☁️</div>
              <div>
                <div className="font-semibold">Secure Cloud</div>
                <div className="text-xs text-gray-500">Encrypted history & access control</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">🔒</div>
              <div>
                <div className="font-semibold">Privacy-first</div>
                <div className="text-xs text-gray-500">Data stays private by design</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-pink-50 p-2 text-pink-600">⏰</div>
              <div>
                <div className="font-semibold">24/7 Support</div>
                <div className="text-xs text-gray-500">Fast help when you need it</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Image */}
        <div className="flex-1">
          <div className="w-full h-[360px] rounded-lg overflow-hidden shadow-lg border">
            <img src="/smartguardpic/mission.jpg" alt="Mission" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-tr from-white to-emerald-50">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              name: "Nisha Verma",
              role: "Founder & CEO",
              desc: "Product visionary focused on caregiving tech and trust-first design.",
              img: "/smartguardpic/team1.jpg",
            },
            {
              name: "Rohit Sharma",
              role: "Head of Engineering",
              desc: "Builds the device integration layer and cloud backend.",
              img: "/smartguardpic/team2.jpg",
            },
            {
              name: "Meera Joshi",
              role: "Design Lead",
              desc: "Designs app flows and accessible dashboards for caregivers.",
              img: "/smartguardpic/team3.jpg",
            },
            {
              name: "Amit Rao",
              role: "Operations & Support",
              desc: "Runs deployments, hospital partnerships and support teams.",
              img: "/smartguardpic/team4.jpg",
            },
          ].map((member, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-lg text-center hover:scale-105 transform transition">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-emerald-100">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-amber-600 text-sm mt-1">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey (Timeline) */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-200 h-full"></div>

          {[
            {
              year: "2019",
              title: "SmartGuard Founded (Bengaluru)",
              desc: "Started as a small pilot to build easy-to-use monitoring for families.",
            },
            {
              year: "2020",
              title: "First Device Prototype",
              desc: "Launched the initial motion+sound device used by caregivers in pilot homes.",
            },
            {
              year: "2021",
              title: "Cloud Dashboard & App",
              desc: "Released mobile app with secure cloud history and push alerts.",
            },
            {
              year: "2023",
              title: "Healthcare Partnerships",
              desc: "Integrated with a network of clinics and care facilities for pilots.",
            },
            {
              year: "2024",
              title: "Scale & Expansion",
              desc: "Expanded distribution across major Indian cities and improved regional languages.",
            },
          ].map((item, idx) => (
            <div key={idx} className="mb-12 flex items-start md:items-center">
              <div className={`flex-none w-1/2 pr-8 ${idx % 2 === 0 ? "text-right md:text-right md:pr-12" : ""}`}>
                <div className="inline-block px-3 py-2 rounded-md bg-emerald-600 text-white font-semibold">
                  {item.year}
                </div>
              </div>

              <div className="flex-1 bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-emerald-700">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-16 bg-emerald-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Impact by Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white/10 rounded-xl shadow">
            <h3 className="text-4xl font-extrabold">25,000+</h3>
            <p className="mt-2">Devices Deployed</p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow">
            <h3 className="text-4xl font-extrabold">300+</h3>
            <p className="mt-2">Care Facilities</p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow">
            <h3 className="text-4xl font-extrabold">99.98%</h3>
            <p className="mt-2">Cloud Uptime</p>
          </div>
        </div>
        <p className="mt-6 text-sm">Secure storage and clear alerts — trusted by caregivers across India.</p>
      </section>

      {/* Get in Touch */}
      <section id="contact" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Want SmartGuard for your home or facility? Fill a short form or contact our India support team.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-sm text-gray-600 mt-2">support@smartguard.io</p>
            <a className="mt-4 inline-block text-amber-500" href="mailto:support@smartguard.io">Send Email →</a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm text-gray-600 mt-2">+91-80-1234-5678</p>
            <a className="mt-4 inline-block text-amber-500" href="tel:+918012345678">Call Now →</a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-semibold">Visit Us</h3>
            <p className="text-sm text-gray-600 mt-2">SmartGuard HQ, 11 Secure Lane, Bengaluru, India</p>
            <a className="mt-4 inline-block text-amber-500" href="https://www.google.com/maps" target="_blank" rel="noreferrer">Open in Maps →</a>
          </div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input className="p-3 border rounded-lg" placeholder="Your name" />
            <input className="p-3 border rounded-lg" placeholder="Email" />
            <input className="p-3 border rounded-lg" placeholder="Phone" />
            <textarea className="p-3 border rounded-lg md:col-span-3" rows={4} placeholder="How can we help?" />
            <button className="md:col-span-3 bg-amber-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-white">SmartGuard</h3>
            <p className="text-sm text-gray-400 mt-1">Home & Care Monitoring — India</p>
          </div>

          <div className="flex gap-4 text-sm">
            <a href="https://firebase.google.com" target="_blank" rel="noreferrer" className="hover:underline">Firebase</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
