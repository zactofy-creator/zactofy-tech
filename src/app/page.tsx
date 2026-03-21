"use client"

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal"



export default function Home() {
   const cards = [
    { color: "bg-[#4b5ae4]", smw:"sm:w-[70px]",bg:"bg-white", smh:"sm:h-[70px]", mdw:"md:w-[150px]", mdh:"md:h-[140px]", w: "w-[150px]", h: "h-[140px]" , link:"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { color: "bg-[#4b5ae4]", smw:"sm:w-[70px]",bg:"bg-white", smh:"sm:h-[70px]", mdw:"md:w-[150px]", mdh:"md:h-[140px]", w: "w-[150px]", h: "h-[140px]" , link:"./google.png"},
    { color: "bg-[#4b5ae4]", smw:"sm:w-[70px]",bg:"bg-white", smh:"sm:h-[70px]", mdw:"md:w-[150px]", mdh:"md:h-[140px]", w: "w-[150px]", h: "h-[140px]" , link:"./react.png"},
    { color: "bg-[#0ea5e9]", smw:"sm:w-[70px]",bg:"bg-white", smh:"sm:h-[70px]", mdw:"md:w-[150px]", mdh:"md:h-[140px]", w: "w-[150px]", h: "h-[140px]", link:"./node-js.png" },
    { color: "bg-[#0ea5e9]", smw:"sm:w-[70px]",bg:"bg-white", smh:"sm:h-[70px]", mdw:"md:w-[150px]", mdh:"md:h-[140px]", w: "w-[150px]", h: "h-[140px]", link:"./social.png" },
  ]

  const loopCards = [...cards, ...cards]
  return (
    <div className="text-center    bg-[#fcfdf2]   px-2 py-6 ">
      <Reveal>
        <div className="left    text-center">
        
        <h1 className="text-gray-900 text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight ">We create modern <span className="text-white rounded-2xl px-2 capitalize bg-[#4b5ae4]">websites</span> and deliver strategic <span className="text-white rounded-2xl px-2 capitalize bg-[#4b5ae4]">social media marketing</span> solutions that help businesses expand their reach, attract more customers, and <span className="text-white rounded-2xl px-2 capitalize bg-[#4b5ae4]">increase revenue.</span></h1>
      </div>
      </Reveal>
     

 <div className="w-full overflow-hidden py-8 bg-[#fcfdf2]">
  <motion.div
    className="flex gap-6 w-max "
    animate={{ x: [0, "-50%"] }}
    transition={{
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...loopCards, ...loopCards].map((card, i) => (
      <img
        key={i}
        src={card.link}
        alt="Website development agency dashboard"
        className={` ${card.smh} ${card.mdh} ${card.smw} ${card.mdw}  ${card.w} ${card.h} ${card.bg}  shrink-0 rounded-3xl shadow-2xl`}
      />
    ))}
  </motion.div>
</div>

<Reveal>
  <div className="third   sm:flex-col md:flex shrink-0 lg:flex-row items-center justify-center gap-15">
  <div className="left  sm:w-full md:w-[60%] lg:w[60%]">
  <h1 className="text-gray-900 text-4xl md:text-6xl lg:text-6xl font-bold">If you're Not Getting the Results You Expect Online <span className="bg-[#4b5ae4] text-white px-2 rounded-2xl">Zactofy Technologies</span> Can Fix That. </h1>
  <p className="text-gray-900 text-2xl md:text-4xl  font-medium ">Most businesses struggle to get the results they expect online because they don’t have a clear strategy or the right tools to execute it. At Zactofy Technologies, we understand these challenges and offer comprehensive digital marketing solutions that can help you achieve your goals.
  </p>
  </div>
  <div className="right sm:w-full md:w-[40%] lg:w-[40%]  flex items-center justify-center">
  <img src="./second.png" alt="Website development agency dashboard" className="h-130"/>
  </div>
</div>
</Reveal>

<Reveal> 
  <div className="w-full py-12  px-6 lg:px-20">

  {/* heading */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Our Services
    </h2>
    <p className="text-gray-600 mt-4 text-lg">
      We help businesses grow faster online with powerful digital solutions
      designed to increase visibility, engagement and sales.
    </p>
  </div>

  {/* services */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

    {/* card */}
    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="w-14 h-14 bg-[#4b5ae4] rounded-2xl mb-6"></div>
      <h3 className="text-2xl font-semibold text-gray-900">Website Development</h3>
      <p className="text-gray-600 mt-3">
        Modern, fast and conversion-focused websites that help your business
        attract more customers and build trust online.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="w-14 h-14 bg-green-500 rounded-2xl mb-6"></div>
      <h3 className="text-2xl font-semibold text-gray-900">Social Media Marketing</h3>
      <p className="text-gray-600 mt-3">
        Strategic content and paid advertising campaigns that increase brand
        awareness, engagement and sales.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="w-14 h-14 bg-orange-500 rounded-2xl mb-6"></div>
      <h3 className="text-2xl font-semibold text-gray-900">Performance Marketing</h3>
      <p className="text-gray-600 mt-3">
        Data-driven ad campaigns on Google and Meta that deliver measurable ROI
        and consistent lead generation.
      </p>
    </div>

  </div>

</div>
</Reveal>

{/*why chhose */}
<Reveal>
<div className="w-full  px-6 lg:px-20 ">

  {/* heading */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Why Choose Zactofy Technologies
    </h2>
    <p className="text-gray-600 mt-4 text-lg">
      We don’t just provide services — we deliver real business growth with
      proven strategies, creative execution and performance-focused marketing.
    </p>
  </div>

  {/* points */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

    <div className="bg-[#f8fafc] p-8 rounded-3xl text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl font-bold text-[#4b5ae4]">200+</div>
      <h3 className="text-xl font-semibold mt-3">Projects Delivered</h3>
      <p className="text-gray-600 mt-2">
        Successfully completed websites and marketing campaigns for growing businesses.
      </p>
    </div>

    <div className="bg-[#f8fafc] p-8 rounded-3xl text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl font-bold text-green-500">3X</div>
      <h3 className="text-xl font-semibold mt-3">Growth Focused</h3>
      <p className="text-gray-600 mt-2">
        Our strategies are designed to increase leads, sales and online visibility.
      </p>
    </div>

    <div className="bg-[#f8fafc] p-8 rounded-3xl text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl font-bold text-orange-500">ROI</div>
      <h3 className="text-xl font-semibold mt-3">Performance Driven</h3>
      <p className="text-gray-600 mt-2">
        We focus on measurable results that bring real return on your investment.
      </p>
    </div>

    <div className="bg-[#f8fafc] p-8 rounded-3xl text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl font-bold text-blue-500">24/7</div>
      <h3 className="text-xl font-semibold mt-3">Dedicated Support</h3>
      <p className="text-gray-600 mt-2">
        Our team is always available to guide you and optimize your growth strategy.
      </p>
    </div>

  </div>

</div>
  </Reveal> 

<Reveal>
  <div className="w-full py-12 px-6 lg:px-20 ">

  {/* heading */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Our Process
    </h2>
    <p className="text-gray-600 mt-4 text-lg">
      A simple, proven and result-focused workflow that helps your business
      grow faster and achieve measurable success online.
    </p>
  </div>

  {/* steps */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

    {/* step */}
    <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="absolute -top-5 left-8 w-12 h-12 bg-[#4b5ae4] text-white flex items-center justify-center rounded-2xl font-bold text-lg">
        01
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mt-6">
        Strategy & Research
      </h3>
      <p className="text-gray-600 mt-3">
        We understand your business goals, audience and competitors to build
        a strong growth strategy.
      </p>
    </div>

    <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="absolute -top-5 left-8 w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-2xl font-bold text-lg">
        02
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mt-6">
        Design & Development
      </h3>
      <p className="text-gray-600 mt-3">
        Our team creates high-converting websites and marketing creatives
        tailored to your brand.
      </p>
    </div>

    <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="absolute -top-5 left-8 w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-2xl font-bold text-lg">
        03
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mt-6">
        Launch & Marketing
      </h3>
      <p className="text-gray-600 mt-3">
        We launch campaigns and optimize your online presence to generate
        traffic, leads and sales.
      </p>
    </div>

    <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300">
      <div className="absolute -top-5 left-8 w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-2xl font-bold text-lg">
        04
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mt-6">
        Scale & Optimize
      </h3>
      <p className="text-gray-600 mt-3">
        Continuous monitoring and improvements help scale your business
        sustainably.
      </p>
    </div>

  </div>

</div>
</Reveal>

<Reveal>
  <div className="w-full py-12 mt-8 px-6 lg:px-20 ">

  {/* heading */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      What Our Clients Say
    </h2>
    <p className="text-gray-600 mt-4 text-lg">
      Real feedback from businesses who trusted Zactofy Technologies to grow
      their online presence and increase sales.
    </p>
  </div>

  {/* testimonials */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

    {/* card */}
    <div className=" p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300">
      <p className="text-gray-700">
        “Zactofy completely transformed our online presence. Within 3 months,
        our leads increased significantly and sales improved.”
      </p>
      <div className="flex items-center gap-4 mt-6">
        <img src="/client1.jpg" className="w-12 h-12 rounded-full object-cover"/>
        <div>
          <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
          <p className="text-gray-500 text-sm">Business Owner</p>
        </div>
      </div>
    </div>

    <div className="bg-[#f8fafc] p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300">
      <p className="text-gray-700">
        “Their marketing strategy helped us reach the right audience. Our ROI
        improved and brand awareness grew fast.”
      </p>
      <div className="flex items-center gap-4 mt-6">
        <img src="/client2.jpg" className="w-12 h-12 rounded-full object-cover"/>
        <div>
          <h4 className="font-semibold text-gray-900">Ankit Verma</h4>
          <p className="text-gray-500 text-sm">Startup Founder</p>
        </div>
      </div>
    </div>

    <div className="bg-[#f8fafc] p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300">
      <p className="text-gray-700">
        “Highly professional team. Our website performance and conversion rate
        improved a lot after working with Zactofy.”
      </p>
      <div className="flex items-center gap-4 mt-6">
        <img src="/client3.jpg" className="w-12 h-12 rounded-full object-cover"/>
        <div>
          <h4 className="font-semibold text-gray-900">Priya Singh</h4>
          <p className="text-gray-500 text-sm">Marketing Manager</p>
        </div>
      </div>
    </div>

  </div>


  <div className="w-full py-28 px-6 lg:px-20 bg-[#0f172a] relative overflow-hidden">

  {/* glow */}
  <div className="absolute w-125 h-125 bg-[#4b5ae4]/30 blur-[140px] rounded-full -top-37.5 left-[20%]"></div>

  <div className="relative text-center max-w-4xl mx-auto">

    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
      Ready to Grow Your Business Online?
    </h2>

    <p className="text-gray-300 text-lg md:text-xl mt-6">
      Let Zactofy Technologies help you generate more leads, increase sales and
      build a powerful online presence with result-driven strategies.
    </p>

    {/* buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

     <a
  href="https://wa.me/917800610280?text=Hi%20Zactofy%20I%20want%20a%20free%20strategy%20call"
  target="_blank"
  className="bg-[#4b5ae4] hover:bg-[#3b49d1] text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl transition"
>
  Book Free Strategy Call
</a>

      <a
  href="https://wa.me/917800610280?text=Hi%20I%20want%20a%20free%20website%20audit"
  target="_blank"
  className="border border-white text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white hover:text-[#0f172a] transition"
>
  Get Free Website Audit
</a>

    </div>

    {/* trust line */}
    <p className="text-gray-400 mt-8">
      No long-term contracts. No hidden charges. Just real growth.
    </p>

  </div>

</div>

</div>
</Reveal>

    </div>
  );
}