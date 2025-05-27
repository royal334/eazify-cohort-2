import { Menu } from "lucide-react"

function Header() {
  return (
    <header id="header" className="container sticky top-0 left-0 right-0 z-50 px-4 mx-auto bg-white shadow-lg rounded-xl">
          <div className="container flex items-center justify-between px-4 py-8">
               <img src="/images/logo-1.png" alt="logo" className="w-[130px] md:px-0 md:w-[190px] px-4"/>
               
               <nav className="hidden w-full md:flex md:justify-between md:items-center">
                    
                    <ul className="flex items-center justify-center gap-6 ml-auto" >
                              <li className="font-semibold"><a href="/" className="hover:text-bright-blue">Home</a></li>
                              <li className="font-semibold"><a href="#about"  className="hover:text-bright-blue">About</a></li>
                              <li className="font-semibold"><a href="/services" className="hover:text-bright-blue">Services</a></li>
                              <li className="font-semibold"><a href="/contact"  className="hover:text-bright-blue">Contact</a></li>
                    </ul>
                    <div className="ml-auto">
                         <button className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-sky-blue hover:bg-bright-blue">Register Here</button>
                    </div>
                    
               </nav>

               <nav className="md:hidden">
                    <Menu />
               </nav>
               
               
               
          </div>
    </header>
  )
}

export default Header