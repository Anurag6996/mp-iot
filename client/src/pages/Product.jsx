import React from "react";
import deviceImg from "/public/aboutuspic/A-2.jpg";
import boardImg from "/public/aboutuspic/A-2.jpg";

export default function Product() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="pr-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              SmartGuard Device
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              The Smart Monitoring Device designed for child and patient care with advanced ESP32
              technology and real-time cloud connectivity.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full px-5 py-3 shadow-md"
                aria-label="Buy Now"
              >
                Buy Now - $199
              </button>
              <button className="bg-white border border-gray-200 hover:shadow-md text-gray-700 rounded-full px-5 py-3">
                Download Manual
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={deviceImg}
                alt="SmartGuard Device"
                className="object-contain w-full h-full p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">Technical Overview</h2>
          <p className="mt-2 text-gray-500">Advanced technology for reliable monitoring</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <FeatureCard
            title="ESP32 Based"
            text="Powerful dual-core processor with built-in Wi-Fi and Bluetooth"
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M7 8h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
          />

          <FeatureCard
            title="Motion Detection"
            text="PIR sensors with 120° detection angle and 7-meter range"
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3 12a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
          />

          <FeatureCard
            title="Sound Sensors"
            text="High-sensitivity microphone with noise filtering algorithms"
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M8 7a4 4 0 0 0 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
          />

          <FeatureCard
            title="Wi-Fi Connectivity"
            text="Secure 802.11 b/g/n with Firebase cloud integration"
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8a10 10 0 0 1 20 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M6 12a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M10 16a2 2 0 0 1 4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Device Components */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold">Device Components</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold">ESP32 Microcontroller</div>
                  <div className="text-sm text-gray-500">Dual-core Tensilica LX6 processor running at 240MHz with 520KB SRAM</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M7 7h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold">PIR Motion Sensor</div>
                  <div className="text-sm text-gray-500">Passive infrared sensor with adjustable sensitivity and detection range</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5 21h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold">Digital Microphone</div>
                  <div className="text-sm text-gray-500">MEMS microphone with built-in amplifier and digital signal processing</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 7v-2h10v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold">Power Management</div>
                  <div className="text-sm text-gray-500">USB-C charging with backup battery for 48-hour operation</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <img src={boardImg} alt="Board" className="object-contain w-[360px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Technical Specifications</h3>
          <p className="text-gray-500 mt-2">Complete device specifications</p>
        </div>

        <div className="mt-8 bg-white border border-gray-100 rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4">Hardware</h4>
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <SpecRow label="Processor" value="ESP32 Dual-core 240MHz" />
                <SpecRow label="Memory" value="520KB SRAM, 4MB Flash" />
                <SpecRow label="Connectivity" value="Wi-Fi 802.11 b/g/n" />
                <SpecRow label="Power Input" value="USB-C 5V/2A" />
                <SpecRow label="Battery" value="3000mAh Li-ion" />
                <SpecRow label="Dimensions" value="85 x 55 x 25mm" />
                <SpecRow label="Weight" value="120g" />
              </tbody>
            </table>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sensors & Features</h4>
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <SpecRow label="Motion Detection" value="PIR 120° / 7m range" />
                <SpecRow label="Sound Detection" value="MEMS Microphone" />
                <SpecRow label="Temperature" value="-10°C to 60°C" />
                <SpecRow label="Humidity" value="10% to 90% RH" />
                <SpecRow label="LED Indicators" value="RGB Status LEDs" />
                <SpecRow label="Cloud Storage" value="Firebase Integration" />
                <SpecRow label="Operating Time" value="48 hours (battery)" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Use Cases</h3>
          <p className="text-gray-500 mt-2">Versatile monitoring for different environments</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseCard
            title="Infant Monitoring"
            items={["Sleep pattern tracking", "Crying detection", "Movement alerts", "Temperature monitoring"]}
            bg="bg-blue-50"
            accent="bg-blue-600"
          />
          <UseCaseCard
            title="Patient Care"
            items={["Bed-ridden patient monitoring", "Call for help detection", "Activity tracking", "Emergency alerts"]}
            bg="bg-emerald-50"
            accent="bg-emerald-600"
          />
          <UseCaseCard
            title="Elderly Care"
            items={["Fall detection", "Daily activity monitoring", "Medication reminders", "Family notifications"]}
            bg="bg-purple-50"
            accent="bg-purple-600"
          />
        </div>
      </section>

      {/* Easy Setup */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 text-center">
          <h3 className="text-2xl font-bold">Easy Setup Process</h3>
          <p className="text-gray-500 mt-2">Get started in minutes</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SetupStep number="1" title="Power On" text="Connect the device to power using the included USB-C cable." />
            <SetupStep number="2" title="Connect Wi-Fi" text="Use the setup mode to connect your device to your home network." />
            <SetupStep number="3" title="Pair Device" text="Download the app and scan the QR code to pair your device." />
            <SetupStep number="4" title="Start Monitoring" text="Configure your preferences and begin receiving real-time alerts." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 text-center rounded-tl-xl rounded-tr-xl">
          <h3 className="text-2xl font-semibold text-white">Ready to Order?</h3>
          <p className="text-teal-100 mt-2">Get your SmartGuard device today and start protecting your loved ones</p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="bg-white text-teal-700 font-medium rounded-full px-5 py-3 shadow">
              Order Now - $199
            </button>
            <button className="bg-transparent border border-teal-200 text-teal-100 rounded-full px-5 py-3">
              Download Manual
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-md flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                </svg>
              </div>
              <span className="font-semibold text-white">SmartGuard</span>
            </div>
            <p className="text-sm text-gray-400 mt-4 max-w-sm">
              Smart safety solutions for your loved ones
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Product</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Small helper components ---------- */

function FeatureCard({ title, text, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-teal-600">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <tr className="border-t border-gray-100">
      <td className="py-3 text-sm text-gray-600 w-1/2">{label}</td>
      <td className="py-3 text-sm text-gray-800 font-medium">{value}</td>
    </tr>
  );
}

function UseCaseCard({ title, items = [], bg = "bg-white", accent = "bg-teal-600" }) {
  return (
    <div className={`${bg} rounded-xl p-6 shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className={`${accent} w-10 h-10 rounded-md flex items-center justify-center text-white`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="3" />
          </svg>
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SetupStep({ number, title, text }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
        {number}
      </div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-gray-500 text-center max-w-xs">{text}</div>
    </div>
  );
}
