"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const Page = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shortUrl,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
                setUrl("")
                setShortUrl("")
                console.log(result)
                alert(result.message)
            })

            .catch((error) => console.error(error));
    }




    return (
        <div className='container mx-auto max-w-lg bg-purple-600/20 backdrop-blur-md rounded-2xl p-4 my-16'>
            <h1 className='font-bold text-xl p-1 py-2'>Generate your short URLs</h1>
            <div className='flex gap-2 flex-col'>
                <input
                    type="text"
                    value={url}
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }}
                    className='p-2 focus:outline-purple-400 rounded-md text-gray-600' />

                <input
                    type="text"
                    value={shortUrl}
                    placeholder='Enter preferred short URL '
                    onChange={e => { setShortUrl(e.target.value) }}
                    className='p-2 focus:outline-purple-400 rounded-md text-gray-600' />

                <button onClick={generate} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Generate</button>

            </div>
            {generated && <>
                <div className='p-1'>
                    <span className='font-bold text-lg'>Your Link: </span><code><Link target='_blank' href={generated}>{generated}</Link>

                    </code>
                </div></>}
        </div >
    )
}

export default Page
