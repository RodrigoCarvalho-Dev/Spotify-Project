import Image from "next/image";
import { Home as HomeIcon, Search , Library, SkipBack ,SkipForward, Play, Shuffle, Repeat , Mic2 , List, Volume1, Fullscreen} from "lucide-react"


export default function Main() {
 return(
  <main className="flex-1 p-6  flex flex-col gap-10" >
  <div className="flex items-center gap-4 p-2 ">
    <button className="w-10 h-10 rounded-full bg-black/20 p-2 hover:bg-zinc-700/50"> 
      <SkipBack/>
    </button>
    <button className="w-10 h-10 rounded-full bg-black/20 p-2 hover:bg-zinc-700/50">
      <SkipForward/>
    </button>
  </div>
  <h1 className="font-bold text-5xl">Bem Vindo!</h1>

  <div className="grid grid-cols-3 gap-4">
    <a  href="#" className="bg-white/5 gap-4 flex items-center  rounded rounded overflow-hidden hover:bg-zinc-500/50 transition-colors group  ">
      <Image src="/tailor_swift.webp" width={130} height={130} alt="foto de album"/>
      <strong>Tailor Swift - 1989</strong>
        <button className="w-12 h-12 rounded-full bg-green-500 text-zinc-900 flex items-center justify-center ml-auto mr-10 hover:bg-green-600  invisible group-hover:visible transition-colors">
        <Image src="/Play.png" width={24} height={24} alt="play"/>  
        </button>
    </a>
    <a href="#" className="bg-white/5 gap-4 flex items-center rounded rounded overflow-hidden hover:bg-zinc-500/50 group transition-colors">
      <Image src="/Jeff-Rosenstock-Hellmode.webp" width={130} height={130} alt="foto de album"/>
      <strong>Jeff Rosenstock - HELLMODE</strong>
        <button className="w-12 h-12 rounded-full bg-green-500 text-zinc-900 flex items-center justify-center ml-auto mr-10 hover:bg-green-600  invisible group-hover:visible transition-colors">
        <Image src="/Play.png" width={24} height={24} alt="play"/>          
        </button>
    </a>
    <a  href="#" className="bg-white/5 gap-4 flex items-center rounded rounded overflow-hidden hover:bg-zinc-500/50 group transition-colors">
      <Image src="/After_hours.jpg" width={130} height={130} alt="foto de album"/>
      <strong>The Weeknd - After Hours</strong>
        <button className="w-12 h-12 rounded-full bg-green-500 text-zinc-900 flex items-center justify-center ml-auto mr-10 hover:bg-green-600  invisible group-hover:visible transition-colors">
        <Image src="/Play.png" width={24} height={24} alt="play"/>
      </button>
    </a>
    <a  href="#" className="bg-white/5 gap-4 flex items-center rounded rounded overflow-hidden hover:bg-zinc-500/50 group transition-colors">
      <Image src="/X_cover.png" width={130} height={130} alt="foto de album"/>
      <strong>Ed Sheeran - X</strong>
        <button className="w-12 h-12 rounded-full bg-green-500 text-zinc-900 flex items-center justify-center ml-auto mr-10 hover:bg-green-600  invisible group-hover:visible transition-colors">
        <Image src="/Play.png" width={24} height={24} alt="play"/>
      </button>
    </a>
    <a  href="#" className="bg-white/5 gap-4 flex items-center rounded rounded overflow-hidden hover:bg-zinc-500/50 group transition-colors">
      <Image src="/Sour_-_Olivia_Rodrigo.png" width={130} height={130} alt="foto de album"/>
      <strong>Olivia Rodrigo - Sour</strong>
      <button className="w-12 h-12 rounded-full bg-green-500 text-zinc-900 flex items-center justify-center ml-auto mr-10 hover:bg-green-600  invisible group-hover:visible transition-colors">
      <Image src="/Play.png" width={24} height={24} alt="play"/>
      </button>
      
    </a>
    <a  href="#" className="bg-white/5 gap-4 flex items-center rounded rounded overflow-hidden hover:bg-zinc-500/50 group transition-colors">
      <Image src="/Post-Malone.jpg" width={130} height={130} alt="foto de album"/>
      <strong>Post Malone - 
Beerbongs & Bentleys</strong>
        <button className="w-12 h-12 rounded-full bg-green-500 text-zinc-900 flex items-center justify-center ml-auto mr-10 hover:bg-green-600  invisible group-hover:visible transition-colors">
        <Image src="/Play.png" width={24} height={24} alt="play"/>
      </button>
    </a>
  </div>
  <div className=" flex gap-10 border-t mt-5 pt-10 border-zinc-700 flex-row ">
  <h1 className="font-bold text-4xl">Escute suas músicas favoritas</h1>
  <button className="ml-auto text-white hover:text-zinc-100/50 transition-colors">Show All</button>
  </div>
  
  <div className="grid grid-cols-6 gap-4 p-8" >
    <div className="bg-white/5 border border-gray-900 hover:bg-white/10 p-2 flex flex-col gap-2 group">
      <Image src="/as_if_was.jpeg " className="w-full" width={300} height={180} alt="foto de album"/>
      <strong>As if Was</strong>
      <span className="text-gray-300/50">Harry Styles</span>
        <a href="#" className="w-12 h-12 rounded-full bg-green-400/100 text-zinc-900 flex items-center justify-center mr-auto flex-col  mr-10 hover:bg-gray-900/20 transition-colors invisible group-hover:visible">
        <Image   src="/Play.png" width={24} height={24} alt="play"/>
      </a>
    </div>
    <div className="bg-white/5 border border-gray-900 hover:bg-white/10 p-2 flex flex-col gap-2 group">
      <Image src="/starboy.jpeg" className="w-full" width={400} height={400} alt="foto de album"/>
      <strong>StarBoy</strong>
      <span className="text-gray-300/50">The Weeknd</span>
        <a href="#" className="w-12 h-12 rounded-full bg-green-400/100 text-zinc-900 flex items-center justify-center mr-auto flex-col  mr-10 hover:bg-gray-900/20 transition-colors invisible group-hover:visible">
        <Image   src="/Play.png" width={24} height={24} alt="play"/>
      </a>
    </div>
    <div className="bg-white/5 border border-gray-900 hover:bg-white/10 p-2 flex flex-col gap-2 group">
      <Image src="/the_world_is_yours.jpeg" className="w-full" width={400} height={400} alt="foto de album"/>
      <strong>The World is Yours</strong>
      <span className="text-gray-300/50">Nas</span>
        <a href="#" className="w-12 h-12 rounded-full bg-green-400/100 text-zinc-900 flex items-center justify-center mr-auto flex-col  mr-10 hover:bg-gray-900/20 transition-colors invisible group-hover:visible">
        <Image   src="/Play.png" width={24} height={24} alt="play"/>
      </a>
    </div>
    <div className="bg-white/5 border border-gray-900 hover:bg-white/10 p-2 flex flex-col gap-2 group  ">
      <Image src="/purpose.png" className="w-full" width={400} height={400} alt="foto de album"/>
      <strong>Purpose</strong>
      <span className="text-gray-300/50">Justin Bieber</span>
        <a href="#" className="w-12 h-12 rounded-full bg-green-400/100 text-zinc-900 flex items-center justify-center mr-auto flex-col  mr-10 hover:bg-gray-900/20 transition-colors invisible group-hover:visible">
        <Image   src="/Play.png" width={24} height={24} alt="play"/>
      </a>
    </div>
    <div className="bg-white/5 border border-gray-900 hover:bg-white/10 p-2 flex flex-col gap-2 group  ">
      <Image src="/blonde.jpeg" className="w-full" width={400} height={400} alt="foto de album"/>
      <strong>Blonde </strong>
      <span className="text-gray-300/50">Watch all music here</span>
        <a href="#" className="w-12 h-12 rounded-full bg-green-400/100 text-zinc-900 flex items-center justify-center mr-auto flex-col  mr-10 hover:bg-gray-900/20 transition-colors invisible group-hover:visible">
        <Image   src="/Play.png" width={24} height={24} alt="play"/>
      </a>
    </div>
    <div className="bg-white/5 border border-gray-900 hover:bg-white/10 p-2 flex flex-col gap-2 group  ">
      <Image src="/Scorpion_Drake.jpg" className="w-full" width={400} height={400} alt="foto de album"/>
      <strong>Scorpion</strong>
      <span className="text-gray-300/50">Drake</span>
        <a href="#" className="w-12 h-12 rounded-full bg-green-400/100 text-zinc-900 flex items-center justify-center mr-auto flex-col  mr-10 hover:bg-gray-900/20 transition-colors invisible group-hover:visible">
        <Image   src="/Play.png" width={24} height={24} alt="play"/>
      </a>
    </div>
  </div>
  </main>
 )

}