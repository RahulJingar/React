import React, { useState } from 'react'
import Cards from './Cards'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';


const Testimonials = (props) => {
    let reviews = props.reviews

    const [index, setIndex] = useState(0)
    function leftShiftHandler(){
      if(index - 1 < 0){
        setIndex(reviews.length - 1);
      }
      else{
        setIndex(index - 1);
      }
    }

    function rightShiftHandler(){
      if(index + 1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index + 1);
      }
    }

   

  return (
    <div className='w-[85vw] md:w-[700px] rounded-2xl bg-white flex flex-col justify-center h-[500px] items-center mt-10 p-10 transition-all duration-700 hover:shadow-2xl ml-[450px] mt-[75px]'>
      <Cards review={reviews[index]}></Cards>

       <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
              <button
              onClick={leftShiftHandler}
              className='curser-pointer hover:text-violet-500 mx-auto'>
                  <FiChevronLeft/>
              </button>
      
              <button
              onClick={rightShiftHandler}
              className='curser-pointer hover:text-violet-500 mx-auto'>
                  <FiChevronRight/>
              </button>
          </div>
          <div>
        <button
        className='bg-violet-400 mt-6 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg'>
            Surprice Me
        </button>
    </div>
    </div>
  )
}

export default Testimonials
