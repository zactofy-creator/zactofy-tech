export default function Footer(){
    return (
        <div className="">
            <div className="w-full bg-[#0f172a] text-white px-6 lg:px-20 pt-20 pb-10">

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

    {/* brand */}
    <div>
      <h2 className="text-3xl font-bold">Zactofy</h2>
      <p className="text-gray-400 mt-4">
        We help businesses grow online with powerful websites, marketing
        strategies and performance driven campaigns.
      </p>
    </div>

    {/* services */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Services</h3>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-white cursor-pointer">Website Development</li>
        <li className="hover:text-white cursor-pointer">Social Media Marketing</li>
        <li className="hover:text-white cursor-pointer">Performance Marketing</li>
        <li className="hover:text-white cursor-pointer">SEO Optimization</li>
      </ul>
    </div>

    {/* company */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-400">
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Our Process</li>
        <li className="hover:text-white cursor-pointer">Case Studies</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* contact */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact</h3>
      <p className="text-gray-400">📞 +91 7800610280</p>
      <p className="text-gray-400 mt-2">✉️ info@zactofy.com</p>

      <a
        href="https://wa.me/917800610280"
        target="_blank"
        className="inline-block mt-4 bg-[#4b5ae4] px-6 py-3 rounded-xl hover:bg-[#3b49d1] transition"
      >
        Chat on WhatsApp
      </a>
    </div>

  </div>

  {/* divider */}
  <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between">

    <p className="text-gray-400">
      © 2026 Zactofy Technologies. All rights reserved.
    </p>

    <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
      <a href="https://www.instagram.com/zactofy/" className="hover:text-white cursor-pointer">Instagram</a>
      <span className="hover:text-white cursor-pointer">LinkedIn</span>
      <span className="hover:text-white cursor-pointer">Twitter</span>
    </div>

  </div>

</div>
        </div>
    )
}