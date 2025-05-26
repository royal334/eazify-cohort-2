
function Hero() {
  return (
     <section id='hero'>
            <div className="container flex flex-col items-center justify-between px-4 py-20 mx-auto md:flex-row md:px-0">
               <div className="flex flex-col items-start justify-center w-full md:w-1/2">
                     <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">Welcome to Eazify Innovations 2.0</h1>
                     <p className="my-6 mt-4 text-lg text-gray-600">We are dedicated to providing the best services for our customers.</p>
                     <button className="px-6 py-3 mt-6 font-semibold text-white rounded-lg cursor-pointer bg-sky-blue hover:bg-bright-blue">Register</button>
               </div>
               <div className="w-full mt-8 md:w-1/2 md:mt-0">
                     <img src="/images/hero-image.jpg" alt="Hero image" className="w-full h-auto"/>
               </div>
            </div>
     </section>
  )
}

export default Hero