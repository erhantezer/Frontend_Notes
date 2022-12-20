import React from 'react'

const Msg = (props) => {
    console.log(props)
    //Destructiring
const {name} =props
  return (
    <div>
        {/* <h1>{props.mesaj}</h1> */}
        <h3>My name is {props.name}</h3>
    </div>
  )
}

export default Msg