export default function ServicesPage() {
  return (
    <div className="w-full bg-[#fcfdf2]">

      {/* HERO */}
      <div className="py-24 px-6 lg:px-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Our Digital Growth Services
        </h1>
        <p className="text-gray-600 text-lg mt-6">
          We provide powerful website development and performance marketing
          solutions that help businesses grow faster, generate leads and
          increase revenue.
        </p>
      </div>

      {/* SERVICES LIST */}
      <div className="px-6 lg:px-20 pb-24 space-y-20">

        {/* service 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Website Development
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We build fast, modern and conversion-focused websites that
              establish trust and turn visitors into paying customers.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✅ Business Websites</li>
              <li>✅ Landing Pages</li>
              <li>✅ E-commerce Stores</li>
              <li>✅ Speed Optimization</li>
            </ul>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20need%20website%20development"
              target="_blank"
              className="inline-block mt-8 bg-[#4b5ae4] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#3b49d1] transition"
            >
              Get Website Quote
            </a>
          </div>
        </div>

        {/* service 2 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Social Media Marketing
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Strategic content creation and paid campaigns that increase
              engagement, followers and brand awareness.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✅ Instagram Growth</li>
              <li>✅ Content Strategy</li>
              <li>✅ Ad Campaign Management</li>
              <li>✅ Lead Generation</li>
            </ul>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20need%20social%20media%20marketing"
              target="_blank"
              className="inline-block mt-8 bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 transition"
            >
              Start Marketing
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-3xl shadow-xl"
          />

        </div>

        {/* service 3 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Performance Marketing
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              ROI-focused ad campaigns on Google & Meta that generate high
              quality leads and measurable sales growth.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✅ Google Ads</li>
              <li>✅ Meta Ads</li>
              <li>✅ Funnel Optimization</li>
              <li>✅ Conversion Tracking</li>
            </ul>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20need%20performance%20marketing"
              target="_blank"
              className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition"
            >
              Get Leads Now
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}