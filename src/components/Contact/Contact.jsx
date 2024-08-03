export function Contact(){
    return(
        <>
            <div className="text-center">
                    <h1 className="pt-10 text-6xl font-bold text-[#2c3e50] pb-5">CONTACT ME</h1>
                    <div className="Portfolio_after">
                        <i className="fa-solid fa-star fa-xlg text-[#2c3e50] text-4xl"></i>
                    </div>
            </div>
            <form className="max-w-md mx-auto pt-16">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer" placeholder=" " required />
                    <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                </div>
                <button type="submit" className="text-white bg-[#1abc9c] hover:bg-[#1abc9c] focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center mt-4">Send</button>
            </form>
        </>
    )
}