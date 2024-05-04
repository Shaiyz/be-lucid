'use client'

import Link from "next/link"
import { useState } from 'react'
import Button from "./Button";
interface NavLinkProps {
  to: string;
  children: any;
}
interface MobileNavProps {
  open: Boolean;
  setOpen: any;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
return (
  <Link href={to} passHref>
  {children}
  </Link>
  )
};
const MobileNav : React.FC<MobileNavProps>=({open, setOpen})=> {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-28"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/plagirism-checker" className="text-xl font-medium my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Plagirism Checker</Link>
                <Link href="/paraphrasing-tool" className="text-xl font-normal my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Paraphrasing Tool</Link>
                <Link href="/story-generator"   className="text-xl font-normal my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Story Generator</Link>
                <Link href="/text-summarizer"   className="text-xl font-normal my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Text Summarizer</Link>
                <Link href="/ai-essay-writer"   className="text-xl font-normal my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>AI Essay Writer</Link>
            </div>  
        </div>
    )
}

export default function Header() {
    const [open, setOpen] = useState<Boolean>(false)

    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-2/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="w-10/12 flex md:hidden justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center " onClick={() => {setOpen(!open)}}>
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>
            <div className="w-10/12 md:flex hidden items-center justify-between">
              <div className="flex gap-5">
                   <Link className="font-medium" href='/plagirism-checker'>Plagirism Checker</Link>
                   <Link className="font-medium" href='/paraphrasing-tool'>Paraphrasing Tool</Link>
                   <Link className="font-medium" href='/story-generator'>Story Generator</Link>
                   <Link className="font-medium" href='/text-summarizer'>Text Summarizer</Link>
                   <Link className="font-medium" href='/ai-essay-writer'>AI Essay Writer</Link>
              </div>
              <div className="md:flex gap-2">
                  <Button className="bg-yellow-500 hover:bg-yellow-700" onClick={()=>{}}> Get Premium</Button>

                  <Link href={`/login`}>
                  <Button className="bg-indigo-500 hover:bg-indigo-700">Login</Button>
                  </Link>
              </div>
            </div>
        </nav>
    )
}