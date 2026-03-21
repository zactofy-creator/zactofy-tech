export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0f172a]">

      <div className="text-center">

        {/* logo / text */}
        <h1 className="text-4xl font-bold text-white tracking-widest">
          ZACTOFY
        </h1>

        {/* loader */}
        <div className="mt-8 flex gap-3 justify-center">
          <div className="w-4 h-4 bg-[#4b5ae4] rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-[#4b5ae4] rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-[#4b5ae4] rounded-full animate-bounce delay-300"></div>
        </div>

        <p className="text-gray-400 mt-6">
          Preparing your growth experience...
        </p>

      </div>

    </div>
  )
}