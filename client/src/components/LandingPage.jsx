// src/components/LandingPage.jsx
import React from "react";
import phoneMock from "/public/aboutuspic/A-2.jpg";
import baby from "/public/aboutuspic/A-2.jpg";
import hospital from "/public/aboutuspic/A-2.jpg";
import elderly from "/public/aboutuspic/A-2.jpg";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* FLOW / HERO */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Why Choose SmartGuard?</h1>
          <p className="text-sm text-gray-500 mt-2">Advanced technology for complete safety monitoring</p>
        </div>
      </section>

      {/* WHY CHOOSE US CARDS */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 mx-auto rounded-lg bg-pink-100 flex items-center justify-center mb-4">🔔</div>
              <h3 className="font-semibold">Real-Time Alerts</h3>
              <p className="text-xs text-gray-500 mt-2">Instant notifications on your phone when motion or sound is detected.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 mx-auto rounded-lg bg-blue-100 flex items-center justify-center mb-4">🎤</div>
              <h3 className="font-semibold">Motion & Sound Detection</h3>
              <p className="text-xs text-gray-500 mt-2">Advanced PIR sensors and digital microphone detect movement and audio.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 mx-auto rounded-lg bg-purple-100 flex items-center justify-center mb-4">☁️</div>
              <h3 className="font-semibold">Cloud Dashboard</h3>
              <p className="text-xs text-gray-500 mt-2">Access your device data from anywhere through our secure cloud platform.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 mx-auto rounded-lg bg-green-100 flex items-center justify-center mb-4">🔒</div>
              <h3 className="font-semibold">Secure Firebase Connection</h3>
              <p className="text-xs text-gray-500 mt-2">Enterprise-grade security ensures your data stays private and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEE HOW IT WORKS */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">See How It Works</h2>
          <p className="text-sm text-gray-500 mt-2 mb-6">Simple setup, reliable monitoring — 3 easy steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold mb-2">1</div>
              <h4 className="font-semibold">Install</h4>
              <p className="text-xs text-gray-500 mt-2">Mount the device and plug it in.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold mb-2">2</div>
              <h4 className="font-semibold">Connect</h4>
              <p className="text-xs text-gray-500 mt-2">Link to Wi-Fi and the mobile app.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-2xl font-bold mb-2">3</div>
              <h4 className="font-semibold">Monitor</h4>
              <p className="text-xs text-gray-500 mt-2">Receive alerts and check cloud history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFECT FOR EVERY CARE SCENARIO */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Perfect For Every Care Scenario</h2>
          <p className="text-sm text-gray-500 mt-2 mb-6">Trusted by families, hospitals, and care facilities</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md text-left">
              <img src={baby} alt="baby" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Parents & Infants</h4>
                <p className="text-xs text-gray-500 mt-2">Monitor your baby's sleep patterns, detect crying, and ensure safety.</p>
                <ul className="mt-3 text-xs text-teal-600">
                  <li>• Sleep pattern tracking</li>
                  <li>• Crying detection</li>
                  <li>• Movement alerts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md text-left">
              <img src={hospital} alt="hospital" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Healthcare Facilities</h4>
                <p className="text-xs text-gray-500 mt-2">Enhance patient care with continuous monitoring and quick response.</p>
                <ul className="mt-3 text-xs text-teal-600">
                  <li>• Patient monitoring</li>
                  <li>• Call for help detection</li>
                  <li>• Emergency alerts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md text-left">
              <img src={elderly} alt="elderly" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Elderly Care</h4>
                <p className="text-xs text-gray-500 mt-2">Provide peace of mind with 24/7 monitoring and instant fall detection.</p>
                <ul className="mt-3 text-xs text-teal-600">
                  <li>• Fall detection</li>
                  <li>• Activity monitoring</li>
                  <li>• Family notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET THE APP */}
      <section className="py-12 bg-teal-500 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Get the SmartGuard App</h3>
            <p className="text-sm mt-2">Download our mobile app & stay connected. Available for Android and iOS.</p>

            <div className="mt-4 flex gap-3 justify-center md:justify-start">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-sm text-sm flex items-center gap-2">▶ Google Play</button>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-sm text-sm flex items-center gap-2"> App Store</button>
            </div>

            <div className="mt-4 text-xs text-teal-100 flex gap-4 justify-center md:justify-start">
              <span>• Real-time notifications</span>
              <span>• Multi-device support</span>
              <span>• Cloud history</span>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg w-64 h-auto flex items-center">
              <img src={phoneMock} alt="phone" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-white text-center text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-6">© 2025 SmartGuard — All rights reserved</div>
      </footer>
    </div>
  );
}
