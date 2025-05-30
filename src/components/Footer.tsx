import { Phone, Mail, MapPin, Link } from "lucide-react"
import FooterDetails from "./FooterDetails"

function Footer() {
  return (
     <section id='footer' className="p-4 md:px-0">
          <div className='container px-12 py-18 mx-auto bg-black rounded-2xl '>
               <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-3/4">
                         <img src="/images/logo-2.png" alt="logo" className="md:w-3/4" />
                    </div>
                    <div className="grid grid-cols-2 text-white md:w-1/4 w-full justify-items-end md:justify-items-center gap-2 md:gap-0">
                    
                         <a href="" className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue">Home</a>
                         <a href="" className="font-semibold hover:text-bright-blue">LinkedIn</a>
                         <a href="" className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue">Facebook</a>
                         <a href="" className="font-semibold hover:text-bright-blue">X</a>
                         <a href=""  className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue">Instagram</a>
                         <a href="" className="font-semibold hover:text-bright-blue">Tiktok</a>

                    </div>
               </div>

               <div className="my-10 border-t-2 border-b-2 py-6 border-gray-400 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <a href="https://eazifyinnovations.com">
                         <FooterDetails title="WEBSITE" details="eazifyinnovations.com" icon={<Link size={28} strokeWidth={1.75} color="#0071FF" />} />
                    </a>
                    <FooterDetails title="PHONE" details="+2347049728416" icon={<Phone size={22} strokeWidth={1.75}  color="#0071FF"/>} />
                    <FooterDetails title="EMAIL" details="hello@eazifyinnovations.com" icon={<Mail size={28} strokeWidth={1.75} color="#0071FF"/>} />
                    <FooterDetails title="ADDRESS" details="Awka South, Anambra State, Nigeria" icon={<MapPin size={28} strokeWidth={1.75}  color="#0071FF"/>} />

               </div>

          </div>
     </section>
  )
}

export default Footer