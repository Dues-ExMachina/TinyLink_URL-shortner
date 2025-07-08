import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";


const popbold = localFont({
  src: './fonts/Poppins-Bold.ttf',
})

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex text-black flex-col gap-4 justify-center items-center">
          <p className={`text-2xl font-bold ${popbold.className}`}>
            Best URL shortner in the world
          </p>
          <p>
            We are the most straightforward URl shortner
          </p>
          <div className="flex gap-3">
            <Link href="/Shorten"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Now</button></Link>
            <Link href="https://github.com/Dues-ExMachina/TinyURL"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button></Link>
          </div>
        </div>



        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            alt="Image"
            fill={true}
          ></Image>
        </div>
      </section>
    </main>
  );
}
