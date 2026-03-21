export default function AboutPage() {
  
  return (

    
    <div className="w-full bg-[#fcfdf2]">

      {/* HERO */}
      <div className="py-24 px-6 lg:px-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          About Zactofy Technologies
        </h1>
        <p className="text-gray-600 text-lg mt-6">
          We are a growth-focused digital agency helping businesses build a
          strong online presence, generate quality leads and increase sales.
        </p>
      </div>

      {/* STORY */}
      <div className="grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-20 pb-24">
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Zactofy Technologies was founded with a simple mission — to help
            businesses grow faster using modern websites and performance-driven
            marketing strategies. We believe that every business deserves a
            powerful digital presence that brings real results.
          </p>

          <p className="text-gray-600 mt-4 text-lg">
            Our team focuses on strategy, creativity and data to deliver
            measurable growth and long-term success for our clients.
          </p>
          <h3 className="text-gray-600 mt-4 text-xl" >Sheikh Shahil ~ CEO at Zactofy</h3>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-white py-20 px-6 lg:px-20 grid md:grid-cols-3 gap-10 text-center">

        <div>
          <div className="text-5xl font-bold text-[#4b5ae4]">200+</div>
          <p className="text-gray-600 mt-2">Projects Completed</p>
        </div>

        <div>
          <div className="text-5xl font-bold text-green-500">150+</div>
          <p className="text-gray-600 mt-2">Happy Clients</p>
        </div>

        <div>
          <div className="text-5xl font-bold text-orange-500">3X</div>
          <p className="text-gray-600 mt-2">Average Growth Delivered</p>
        </div>

      </div>

      {/* CTA */}
      <div className="py-24 px-6 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Let’s Grow Your Business Together
        </h2>

        <a
          href="https://wa.me/917800610280?text=Hi%20I%20want%20to%20grow%20my%20business"
          target="_blank"
          className="inline-block mt-8 bg-[#4b5ae4] text-white px-10 py-5 rounded-2xl font-semibold hover:bg-[#3b49d1] transition"
        >
          Talk to Our Team
        </a>
      </div>

    </div>
  )
}