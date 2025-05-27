import Course from "./Course"

function Courses() {
  return (
     <section id='courses'>
          <div  className="container px-4 py-16 mx-auto">
               <h2 className="text-3xl font-bold text-center text-charcoal-black md:text-4xl">Our Courses</h2>
               <p className="mt-4 text-lg font-semibold text-center text-gray-700">Explore our range of courses designed to help you master the latest technologies and skills.</p>
               
               <div className="grid grid-cols-1 gap-8 px-4 py-4 md:grid-cols-2">

                    <Course
                         title="AI Development"
                         description="Become an AI Developer! Our intensive cohort teaches you the fundamentals of machine learning, deep learning, and AI development. You'll work on real-world projects, learn to use popular libraries like TensorFlow and PyTorch, and get career support. Launch your AI career today!"
                         img="/images/ai.jpg" 
                    />
                    
                    
                    <Course
                         title="Blockchain Development"
                         description="Master Blockchain Development! Learn Solidity, smart contracts, dApps, and security best practices. Build real-world projects and launch your career.  Join our expert-led cohort today!"
                         img="/images/blockchain.jpg" 
                    />
                    
                    <Course
                         title="Frontend Development"
                         description="Our intensive Web Development Cohort provides the skills you need to build amazing websites. You'll learn to create responsive, dynamic, and user-friendly web applications.  We cover version control, and deployment, ensuring you're job-ready.  Join our supportive community and build your portfolio with hands-on projects!"
                         img="/images/frontend.jpg" 
                    />

                    <Course
                         title="Cybersecurity"
                         description="Become a Cybersecurity Pro! Master network security, cloud security, incident response, and ethical hacking. Build a strong portfolio and launch your career."
                         img="/images/cybersecurity.jpg" 
                    />
               </div>
          </div>


          
     </section>
  )
}

export default Courses