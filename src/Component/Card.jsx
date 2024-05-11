import React from 'react'

const Card = ({title,content,link}) => {
  return (
    <>
       <div className="text-primary fw-bolder fs-4 ">{title}</div> 
       <div className='my-4 text-secondary pe-5'>{content}</div> 
       <a href={link} className='text-secondary fw-semibold fs-5 '>Learn More</a>
    </>
    
  )
}

export default Card