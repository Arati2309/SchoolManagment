import React from 'react'
import './DoubtSolving.css'

const DoubtSolving = () => {
  return (
    <>
    <div className='Head'>
        <h2>Doubt Solution</h2>

    </div>
    
    <div className='info'>
        <h3 className='a1'>Go from questioning to understanding </h3>
        <h4 className='a2'>Solution of your doubt , Help you to understand consept.</h4>
    </div>
    

    <div className='input'>
        <input type="text" placeholder='Class ' className='class' />
        <input type="text" placeholder='Subject' className='sub' />
        <textarea name="" id="" placeholder='Ask your Question ? ' className='question'></textarea>
        <br />
        <button className='submit'> Submit</button>
    </div>

        <h1 className='ans'>Your Solution  :  </h1>

        <div>
            <textarea name="" id="" className='solution' placeholder='Searching best solution' ></textarea>
        </div>
    
    </>
  )
}

export default DoubtSolving