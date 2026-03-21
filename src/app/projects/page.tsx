export default function ProjectsPage() {
  return (
    <div className="w-full bg-[#fcfdf2]">

      {/* HERO */}
      <div className="py-24 px-6 lg:px-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Our Recent Projects
        </h1>
        <p className="text-gray-600 text-lg mt-6">
          Explore how we helped businesses build powerful websites and
          achieve measurable growth through strategic marketing.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="px-6 lg:px-20 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* project */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1606429766776-d2babe660aaf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Real Estate Website
            </h3>
            <p className="text-gray-600 mt-2">
              Modern lead generation website designed to increase inquiries.
            </p>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20want%20similar%20website"
              target="_blank"
              className="inline-block mt-4 text-[#4b5ae4] font-semibold"
            >
              Build Similar →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition">
          <img src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              E-commerce Store
            </h3>
            <p className="text-gray-600 mt-2">
              High-converting product store with performance marketing setup.
            </p>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20want%20ecommerce%20store"
              target="_blank"
              className="inline-block mt-4 text-[#4b5ae4] font-semibold"
            >
              Get Quote →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition">
          <img src="https://images.unsplash.com/photo-1737134871761-bdf132724a7f?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Restaurant Marketing
            </h3>
            <p className="text-gray-600 mt-2">
              Social media campaigns that increased local footfall and orders.
            </p>

            <a
              href="https://wa.me/917800610280?text=Hi%20I%20need%20marketing"
              target="_blank"
              className="inline-block mt-4 text-[#4b5ae4] font-semibold"
            >
              Grow My Business →
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}