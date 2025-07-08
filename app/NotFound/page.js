import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
            <h1 className="text-6xl font-bold text-purple-700">404</h1>
            <p className="text-2xl mt-4 text-gray-700">Page Not Found</p>
            <p className="text-gray-500 mt-2">
                The URL you&apos;re trying to reach doesn&apos;t exist or may have expired.
            </p>

            <Link
                href="/"
                className="mt-6 inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition"
            >
                Go to Homepage
            </Link>
        </div>
    )
}
