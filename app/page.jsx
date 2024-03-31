import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="w-full min-h-screen bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-900">
        <div className="bg-[url(/topography.svg)] bg-center">
          <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-slate-900">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sup Buah Soeltan
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-[70%] mb-6">
              Food are the most precious thing in the world.
            </p>
            <a href="#product" className="group px-6 py-2 rounded-md bg-gradient-to-tl from-primary to-secondary text-gray-300 hover:text-white hover:shadow-md shadow-secondary duration-200">
              See Our Menu
              <FaArrowRight size={18} className="inline-block ml-2 group-hover:rotate-90 duration-200" />
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="w-full min-h-screen py-8 px-4 md:px-20 justify-center items-center grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="flex justify-center">
          <Image src={'/supbuah_vector.webp'} className="" alt="sup buah" width={400} height={400} />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-secondary">About</h2>
          <h1 className="text-3xl md:text-4xl text-gray-100 font-bold mb-4">Sup Buah Soeltan</h1>
          <p className="text-gray-300 mb-6">
            Tingkatkan asupan nutrisi harian Anda dengan memilih Sup Buah kami yang terbuat dari buah-buahan berkualitas tinggi, siap memberikan kebaikan alami kepada tubuh Anda!
          </p>
          <a href="#product" className="group px-6 py-2 rounded-md bg-gradient-to-tl from-primary to-secondary text-gray-300 hover:text-white hover:shadow-md shadow-secondary duration-200">
            See Our Menu
            <FaArrowRight className="inline-block ml-2 group-hover:rotate-90 duration-200" size={18} />
          </a>
        </div>
      </div>

      <div id="product" className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-600 to-slate-900">
        <div className="bg-[url(/topography.svg)] bg-center">
          <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-slate-800 to-transparent">



          </div>
        </div>
      </div>

      <div id="contact" className="w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-900">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.53665756908!2d112.60134726762772!3d-7.139391626402176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77ff004c9f93ad%3A0x8803e0d389b0750a!2sSup%20Buah%20Soeltan!5e0!3m2!1sen!2sid!4v1711922913803!5m2!1sen!2sid" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="w-full h-[300px] flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent to-slate-900">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sup Buah Soeltan
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-[70%] mb-6">
            Food are the most precious thing.
          </p>
          <a href="#product" className="group px-6 py-2 rounded-md bg-gradient-to-tl from-primary to-secondary text-gray-300 hover:text-white hover:shadow-md shadow-secondary duration-200">
            See Our Menu
            <FaArrowRight size={18} className="inline-block ml-2 group-hover:-rotate-90 duration-200" />
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
