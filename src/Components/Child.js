import React from 'react'

const Child = (props) => {
    const data = "i from child component";
    props.onChildData(data);
  return (
    <div>
    
    <p>I am Child component</p>
    <p>{props.data}</p>
    </div>
  )
}

export default Child
