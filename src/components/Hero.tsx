import {easeIn, motion } from "motion/react";
function Hero() {

      function handleSmoothScroll(e:any, targetId:string){
            e.preventDefault();
            const targetElement = document.getElementById(targetId)
            if(targetElement){
                targetElement.scrollIntoView({behavior: 'smooth'})
            }
        }

  return (
     <section id='hero' className="pb-8 md:pb-20 bg-bright-blue"  >
            <div className="container flex flex-col items-center justify-between gap-8 px-4 py-16 mx-auto md:flex-row md:px-0">
               <motion.div initial={{y:-100, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration:2, ease:easeIn}}  viewport={{once:true}} className="flex flex-col items-start justify-center w-full md:w-1/2">
                     <h1 className="mb-6 text-4xl font-bold text-charcoal-black md:text-5xl">Welcome to Eazify Innovations Cohort 2.0</h1>
                     <p className="my-6 mt-4 text-lg font-semibold text-charcoal-black">Eazify Innovations helps businesses and individuals seamlessly integrate AI and emerging technologies into their businesses for growth, efficiency, and impact needed to hit revenue goals.</p>
                     <button className="self-center px-6 py-3 mt-2 font-semibold text-white rounded-full cursor-pointer md:self-start bg-sky-blue hover:bg-bright-blue" onClick={(e) => {handleSmoothScroll(e,'form')}}>Register</button>
               </motion.div>
               <motion.div initial={{x:100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:2, ease:easeIn}}  viewport={{once:true}} className="w-full mt-8 md:w-1/2 md:mt-0 ">
                     <img src="/images/hero-image.jpg" alt="Hero image" className="w-full h-auto rounded-lg"/>
               </motion.div>
            </div>
     </section>
  )
}

export default Hero