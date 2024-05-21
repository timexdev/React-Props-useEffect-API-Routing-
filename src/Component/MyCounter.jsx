import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseByNumber } from '../Redux/counterSlice';

const MyCounter = () => {
    let dispatch = useDispatch()
    let count = useSelector ((state) => state.counterReducer.count);
    console.log(count)
  return (
    <>
        <div className="container">
        <h1 className='text-center'>MyCounter</h1>
        <h2 className='text-center fs-1 fw-bold'>{count}</h2>
        <div className='text-center'>
        <button className='me-3' onClick={() => dispatch(decrease())}>-</button>
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(increaseByNumber(5))}>+ Pro Max</button>
        </div>
        
        </div>
       
    </>
  )
}

export default MyCounter