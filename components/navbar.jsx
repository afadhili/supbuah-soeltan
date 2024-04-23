"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const links = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Product",
      path: "#product",
    },
    {
      name: "Contact",
      path: "#contact",
    }
  ]

  const sosmed = [
    {
      name: 'Go-Food',
      href: 'https://gofood.link/a/CHmtFS1',
      icon: (<div className="w-[30px] h-[30px]">
        <Image src={'/gojek.svg'} alt="Go-Jek" width={100} height={100} />
      </div>),
      style: 'hover:bg-green-500'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/supbuah_soeltan',
      icon: <FaInstagram size={30} />,
      style: 'hover:bg-gradient-to-l hover:from-pink-600 hover:to-violet-500'
    },
    {
      name: 'Whatsapp',
      href: 'https://wa.me/6285608929378',
      icon: <FaWhatsapp size={30} />,
      style: 'hover:bg-green-600'
    },
  ]

  return (
    <>
      <nav className="z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-6 bg-slate-800/60 backdrop-blur-sm">
        <Link href="/">
          <Image src={'/logo.png'} alt="Sup Buah Soeltan" width={150} height={100} />
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          {links.map(({ name, path }) => (
            <a href={path} key={name} className="text-lg font-bold text-gray-300 hover:text-pink-400 duration-200">{name}</a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setNav(!nav)} className="text-purple-400 hover:text-violet-300 duration-200">
            <FiMenu size={30} />
          </button>
        </div>

        <div className={`${nav ? "right-0" : "-right-full"} top-0 md:hidden fixed w-full h-screen flex flex-col justify-center items-center gap-6 bg-gradient-to-br from-slate-800 via-slate-600 to-slate-900 duration-200 ease-in-out`}>
          <button onClick={() => setNav(!nav)} className="absolute top-6 right-8 text-purple-400 hover:text-violet-300 duration-200">
            <FiX size={30} />
          </button>

          {links.map(({ name, path }) => (
            <a href={path} key={name} onClick={() => setNav(false)} className="text-xl font-bold text-gray-300 hover:text-pink-400 duration-200">{name}</a>
          ))}

          <div className="flex items-center">
            {sosmed.map(({ name, href, icon, style }, index) => (
              <a key={index} href={href} className={`${style} relative duration-200 px-4 py-2 text-gray-300 opacity-80 hover:opacity-100 active:scale-95 active:rounded group`}>
                {icon}

                <h2 className="absolute duration-200 opacity-0 group-hover:-bottom-6 group-hover:opacity-100 bottom-0 left-1/2 -translate-x-1/2 font-bold text-gray-300 whitespace-nowrap">
                  {name}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="z-50 fixed hidden md:flex flex-col left-0 top-1/2 -translate-y-1/2">
        {sosmed.map(({ name, href, icon, style }, index) => (
          <a href={href} key={index} className={`${style} shadow-lg text-gray-300 bg-gray-800 flex justify-between items-center px-4 py-2 -translate-x-[118px] hover:translate-x-0 duration-200 hover:rounded-r-lg`}>
            <h2 className="text-xl font-bold">
              {name}
            </h2>
            <div className="inline-block ml-4">
              {icon}
            </div>
          </a>
        ))}
      </div>
    </>
  )
}