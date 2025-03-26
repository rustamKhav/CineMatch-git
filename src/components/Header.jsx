export default function Header() {
  return (
<div className="mx-auto mt-[34px] mb-[67px] h-[60px] w-[1140px] bg-black px-4 flex justify-between items-center border border-solid border-[rgba(255,255,255,0.2)] rounded-2xl">        
<h1 className="text-white text-xl font-bold">
  🎬 CineMatch<span className="align-top">™</span>
</h1>        <nav className="flex items-center gap-8">
          <span className="text-white">Top Filmlisten</span>
          <span className="text-white">Filmgeschmack</span>
          <button className="bg-[#EDB244] text-black px-6 py-2 rounded-lg">
            Jetzt spielen
          </button>
        </nav>
      </div>
  )
}