type CourseProps = {
     title: string;
     description: string;
     img:string
     
}

function Course(props: CourseProps) {
  return (
     <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-charcoal-black">{props.title}</h3>
          <img src={props.img} alt='' className="w-full mt-4 rounded-lg shadow-md max-h-[400px]"/>
          <p className="mt-4 text-gray-800">{props.description}</p>
          <button className="px-4 py-2 mt-4 text-white rounded cursor-pointer bg-sky-blue hover:bg-bright-blue">Enroll Now</button>
     </div>
  )
}

export default Course