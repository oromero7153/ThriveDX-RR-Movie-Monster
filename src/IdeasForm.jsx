import React, { useState } from "react";

function IdeasForm (props) {
    let [input, setInput] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        props.addIdeas(input)
    }

  return(
    <form onSubmit={handleSubmit}>
        <input type="text" onChange= {e=> setInput(e.target.value)} />
        <button type="submit">Submit your Idea</button>
    </form>
  )
}

export default IdeasForm
