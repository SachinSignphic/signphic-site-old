import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import projectsData from '../assets/projectsData'

const Card = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col md:flex-row md:mx-4 gap-3 items-center justify-center'>
            {projectsData.map( ({ id,img, title, content}) => {
                return (
                    <Cards key={id} img={img} title={title} content={content} />
                )
            })}
        </div>
    </div>
  )
}

export default Card