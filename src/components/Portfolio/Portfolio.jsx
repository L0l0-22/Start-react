/* eslint-disable no-unused-vars */
import React from 'react'

export default function Portfolio() {
return (
    <>
        <div className="text-center">
                <h1 className="pt-6 text-7xl font-bold text-[#2c3e50] pb-5">Portfolio</h1>
                <div className="Portfolio_after">
                    <i className="fa-solid fa-star fa-xlg text-[#2c3e50] text-4xl"></i>
                </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            <div className="w-full relative max-w-sm mx-auto h-auto ">
            <img src="https://hamza-noah.github.io/Start-React-App/static/media/cabin.4417330275f78faa31c3.png" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0"/>
            <a href="#" className=" absolute w-full h-full top-0 left-0 bg-[#1abc9c] opacity-0 z-10 transition-opacity duration-300 hover:opacity-60 "></a>
            </div>
            <div className="w-full relative max-w-sm mx-auto h-auto ">
            <img src="https://hamza-noah.github.io/Start-React-App/static/media/cake.6554473016d32b343f02.png" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0"/>
            <a href="#" className=" absolute w-full h-full top-0 left-0 bg-[#1abc9c] opacity-0 z-10 transition-opacity duration-300 hover:opacity-60 "></a>
            </div>
            <div className="w-full relative max-w-sm mx-auto h-auto ">
            <img src="https://hamza-noah.github.io/Start-React-App/static/media/circus.494a4a914b5471b41f3e.png" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0"/>
            <a href="#" className=" absolute w-full h-full top-0 left-0 bg-[#1abc9c] opacity-0 z-10 transition-opacity duration-300 hover:opacity-60 "></a>
            </div>
            <div className="w-full relative max-w-sm mx-auto h-auto ">
            <img src="https://hamza-noah.github.io/Start-React-App/static/media/game.a940b57aa7bab2eacc52.png" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0"/>
            <a href="#" className=" absolute w-full h-full top-0 left-0 bg-[#1abc9c] opacity-0 z-10 transition-opacity duration-300 hover:opacity-60 "></a>
            </div>
            <div className="w-full relative max-w-sm mx-auto h-auto ">
            <img src="https://hamza-noah.github.io/Start-React-App/static/media/safe.01792c0bdc342bf4bf9c.png" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0"/>
            <a href="#" className=" absolute w-full h-full top-0 left-0 bg-[#1abc9c] opacity-0 z-10 transition-opacity duration-300 hover:opacity-60 "></a>
            </div>
            <div className="w-full relative max-w-sm mx-auto h-auto ">
            <img src="https://hamza-noah.github.io/Start-React-App/static/media/submarine.48c9704ca7f8ce901038.png" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0"/>
            <a href="#" className=" absolute w-full h-full top-0 left-0 bg-[#1abc9c] opacity-0 z-10 transition-opacity duration-300 hover:opacity-60 "></a>
            </div>
        </div>
    </>
)
}
