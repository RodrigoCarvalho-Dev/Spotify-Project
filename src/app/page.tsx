import Image from "next/image";
import "./globals.css"
import SideBar from "@/components/sidebar";
import Main from "@/components/main";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from "@/components/footer";


export default function Spotify_home() {
  return (
<div className="h-screen flex flex-col">
  <div className="flex flex-1 ">
 <SideBar/>
  <Main/>
  </div>
<Footer/>
</div>
  );
}
