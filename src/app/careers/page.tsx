export default function CareerPage() {
  return (
    <div className="w-full bg-[#fcfdf2]">

      {/* HERO */}
      <div className="py-24 px-6 lg:px-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Join Zactofy Technologies
        </h1>
        <p className="text-gray-600 text-lg mt-6">
          Be part of a fast-growing digital agency where creativity,
          innovation and growth go hand in hand.
        </p>
      </div>

      {/* WHY WORK WITH US */}
      <div className="grid md:grid-cols-3 gap-8 px-6 lg:px-20 pb-24">

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">
            Growth Opportunities
          </h3>
          <p className="text-gray-600 mt-3">
            Work on real projects and enhance your skills in website
            development and performance marketing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">
            Flexible Environment
          </h3>
          <p className="text-gray-600 mt-3">
            Remote-friendly culture focused on productivity and creativity.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">
            Impactful Work
          </h3>
          <p className="text-gray-600 mt-3">
            Help businesses grow and see the direct impact of your work.
          </p>
        </div>

      </div>

      {/* OPEN ROLES */}
      <div className="px-6 lg:px-20 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Open Positions
        </h2>

        <div className="mt-12 space-y-6 max-w-4xl mx-auto">

          {/* role */}
          <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Frontend Developer
              </h3>
              <p className="text-gray-600 mt-2">
                React / Next.js experience required.
              </p>
            </div>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20want%20to%20apply%20for%20Frontend%20Developer"
              target="_blank"
              className="bg-[#4b5ae4] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3b49d1] transition"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Social Media Manager
              </h3>
              <p className="text-gray-600 mt-2">
                Experience in content strategy and ad campaigns.
              </p>
            </div>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20want%20to%20apply%20for%20Social%20Media%20Manager"
              target="_blank"
              className="bg-[#4b5ae4] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3b49d1] transition"
            >
              Apply Now
            </a>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-24">
        <h2 className="text-3xl font-bold text-gray-900">
          Don’t see a suitable role?
        </h2>

        <a
          href="https://wa.me/917800610280?text=Hi%20I%20want%20to%20join%20Zactofy"
          target="_blank"
          className="inline-block mt-6 bg-green-500 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-600 transition"
        >
          Send Resume on WhatsApp
        </a>
      </div>

    </div>
  )
}