import React, { useState } from 'react'

 const duration = [ 'today','weekly','monthly','yearly']
const Duration = () => {
 const [dur,setDur] = useState(0)

 const handleChangeDuration=(durNo)=>{
    setDur(durNo)
 }

  return (
    <div className='w-full px-8 '>
        <ul className='flex space-x-5 '>
            {duration.map((item,index)=> <li onClick={()=>handleChangeDuration(index)} key={index}  className={` cursor-default  ease-linear duration-150 capitalize border-b-2 border-transparent py-1.5 px-2 ${dur==index ? 'border-b-blue-600' : null }  `}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Duration