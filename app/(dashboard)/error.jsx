// This file will render when error thrown fron this route group 


'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error.props)
    }, [error])

    return (
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                    <span className="">Error</span>
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">{error.props}</p>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>
                <Link href="/" className="px-8 py-3 font-semibold rounded text-white bg-violet-400 ">Back to homepage</Link>
            </div>
        </div>
    )
}