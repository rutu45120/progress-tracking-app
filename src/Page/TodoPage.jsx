import React from 'react'
import Todo from '../Components/Todo/Todo'
import Duration from '../Components/Duration'

const TodoPage = () => {
  return (
    <div className='
    w-full
    '>
      <h2 className='
      text-2xl
       font-semibold
      px-10 py-2
      '>Todo</h2>
       <div>
        
        <Duration/>

      <div className=' flex px-20 pt-5 bg-red-100
         space-x-2 h-[(100vh-10%)]'>
    <div className='bg-red-500 '>Task</div>
    <div className='bg-red-500' >Priority</div>
    <div className='bg-red-500' >Date</div>
    <div className='bg-red-500' >Option</div>



      </div>
         




       </div>
    </div>
  )
}

export default TodoPage