import Image from "next/image";
import { Home as HomeIcon, Search , Library, SkipBack ,SkipForward, Play, Shuffle, Repeat , Mic2 , List, Volume1, Fullscreen} from "lucide-react"

export default function Footer() {
    return (
      
        <footer className="bg-zinc-800 border-t border-zinc-700 p-0 bottom-0 w-full flex flex-row justify-between items-center ">
    <div className="flex flex-row gap-2 ">
    <div className="flex flex-row gap-5 items-center ">
    <Image src="/as_if_was.jpeg" width={150} height={150} alt="spotify"/>
    <nav className="flex flex-col ">
    
    <strong className="flex flex-row">As if Was</strong>
      <span>Harry Styles</span>
    </nav>
    </div>
    </div>
    <div className="flex flex-col gap-2 items-center ">
  
      <div className="flex flex-row gap-5 items-center justify-center ">
      <button><Shuffle/></button>
      <button><SkipBack/></button>
      <button className="w-12 h-12 rounded-full bg-white justify-center items-center flex hover:bg-gray-100/60 transition-colors">
      <Image src="/Play.png" width={24} height={24} alt="play"/> 
      </button>
    <button><SkipForward/></button>
    <button><Repeat/></button>
      </div>
        <div className="flex flex-row gap-5 items-center ">
          <span className="text-gray-300/80 text-xs">0:32</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-100 w-60 h-1 rounded-full"></div>
          </div>
          <span className="text-gray-300/80 text-xs">2:10</span>
        </div>
    </div>
    <div className="flex items-center gap-2 mr-10">
      <Mic2 height={20} width={20}/>
      <List height={20} width={20}/>
      <Volume1 height={20} width={20}/>
      <div className="h-1 rounded-full w-36 bg-zinc-600">
            <div className="bg-zinc-100 w-28 h-1 rounded-full"></div>
          </div>
      <Fullscreen height={20} width={20}/>
      
    </div>
  </footer>
    )
}