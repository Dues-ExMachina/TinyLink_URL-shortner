import localFont from 'next/font/local'
import Image from 'next/image'

const popbold = localFont({
    src: '../fonts/Poppins-Bold.ttf',
})

export default function about() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-6">
            <section className="w-full max-w-6xl grid md:grid-cols-2 gap-10 p-8 rounded-2xl bg-gray-50 shadow-lg">
                {/* Left - Text Content */}
                <div className="flex flex-col justify-center gap-5">
                    <h1 className={`text-3xl font-bold text-purple-700 ${popbold.className}`}>
                        About Us
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Welcome to our URL shortener — the simplest and most efficient way to shorten your links. We built this tool to help people and businesses create clean, trackable, and shareable URLs.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Whether you're sharing links on social media, sending promotional messages, or tracking click-through rates, our service is designed to be fast, secure, and reliable.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Built with ❤️ using the MERN stack and hosted on Vercel, our goal is to make your web navigation easier and smarter.
                    </p>
                </div>

                {/* Right - Image */}

            </section>
        </main>
    )
}
