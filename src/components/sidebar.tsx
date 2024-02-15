import Image from "next/image";
import { Home as HomeIcon, Search , Library, SkipBack ,SkipForward, Play, Shuffle, Repeat , Mic2 , List, Volume1, Fullscreen} from "lucide-react"

export default function SideBar(){
    return(
        <aside className="w-72 bg-zinc-900 p-6">
        <nav className="space-y-4">
            <a href="#" className="flex items-center gap-2 textxs font-semibold text-zinc-100">
          <HomeIcon/>
          Home
          </a>
            <a href="#" className="flex items-center gap-2 flex items-center gap-2 textxs font-semibold text-zinc-100">
          <Search/>
          Busca
          </a>
          <a href="#" className="flex items-center  gap-2 textxs font-semibold text-zinc-100">
          <Library/>
          Sua Biblioteca
          </a>
       <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-4">
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Top hits 2023</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Top hits 2022</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Melhores funks 2023</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Music Awards 2023</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Minha playlist Rock</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Top 10 melhores musicas</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Carnaval 2024</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Rock 1980</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Musicas Brasileiras</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Musicas para programar</a>
        <a href="#" className="text-sm text-zinc-100 hover:text-zinc-400">Phonk Playlist</a>
  
       </nav>
      </nav>
        </aside>
    )

}