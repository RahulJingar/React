import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';


const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id))
    {
      setlikedCourses((prev)=> prev.filter(((cid) => cid != course.id)))
      toast.warning("like removed")
    }
    else
    {
      if(likedCourses.length === 0)
      {
      setlikedCourses([course.id]);
      }
      else
      {
        setlikedCourses((prev) =>[...prev, course.id])
      }
      toast.success("Liked Successfully");
    }

  }
  return (
    <div className='w-[300px] bg-blue-500 rounded-md overflow-hidden bg-opacity-80'>
      <div className='relative'>
        <img src={course.image.url}></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center '>
            <button className='cursor-pointer' onClick={clickHandler}>
               {
                likedCourses.includes(course.id) ? (<FcLike fontSize='1.75rem'/>) :
                 (<FcLikePlaceholder fontSize='1.75rem'/>)
               }
            </button>
        </div>
      </div>

    <div>
        <p className='text-white text-lg leading-6 font-bold'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length>100 ?
            (course.description.substr(0,100)) + "..." : (course.description)
          }
        </p>
    </div>

    </div>
  )
}

export default Card
