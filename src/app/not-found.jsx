import React from 'react'
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="min-h-screen grid place-items-center px-6 text-center">
            <div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
                <p className="mt-3 text-gray-600">
                    Sorry, the page you requested could not be found.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    )
}

export default NotFoundPage;