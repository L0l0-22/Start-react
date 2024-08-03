// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer
            className="mt-20 flex flex-col items-center bg-[#2c3e50] text-center text-surface text-white lg:text-left">
            <div className="container p-6">
                <div className="grid gap-4 lg:grid-cols-4 lg:pl-72">
                <div className="mb-6 md:mb-0">
                    <h5 className="mb-2 text-2xl font-bold uppercase">Location</h5>
                    <p className="mb-4">
                    2215 John Daniel Drive <br></br>Clark, MO 65243
                    </p>
                </div>
                <div className="mb-6 md:mb-0 pr-16">
                    <h5 className="mb-2 text-2xl font-bold uppercase">Around The Web</h5>
                    <p className="my-4 flex justify-between">
                        <i className="fa-brands fa-facebook border p-4 rounded-full"></i>
                        <i className="fa-brands fa-twitter border p-4 rounded-full"></i>
                        <i className="fa-brands fa-youtube border p-4 rounded-full"></i>
                        <i className="fa-brands fa-linkedin-in border p-4 rounded-full"></i>
                    </p>
                </div>
                <div className="mb-6 md:mb-0">
                    <h5 className="mb-2 text-2xl font-bold uppercase">About Freelancer</h5>
                    <p className="mb-4">
                    Freelance is a free to use, MIT licensed Bootstrap theme created by Lilian Aziz
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full bg-[#1a252f] p-4 text-center">
                <p>Copyright © Lilian Aziz 2024</p>
            </div>
            </footer>
        </>
    )
}
