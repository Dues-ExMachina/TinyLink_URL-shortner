import localFont from 'next/font/local'
import Image from 'next/image'

const popbold = localFont({
    src: '../fonts/Poppins-Bold.ttf',
})

export default function Contact() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-6">
            <section className="w-full max-w-5xl grid md:grid-cols-2 gap-10 shadow-lg p-8 rounded-2xl bg-gray-50">
                {/* Left - Contact Form */}
                <div className="flex flex-col justify-center gap-4">
                    <h1 className={`text-3xl font-bold text-purple-700 ${popbold.className}`}>
                        Contact Us
                    </h1>
                    <p className="text-gray-600">
                        Got a question or feedback? We’d love to hear from you!
                    </p>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-medium py-2.5 px-6 rounded-lg shadow-lg hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right - Optional Image */}
                <div className="relative hidden md:block">
                    <Image
                        src={"/vector.jpg"} // Place a relevant image in /public folder
                        alt="Contact Us"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>
        </main>
    );
}
