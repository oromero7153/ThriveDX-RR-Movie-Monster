import React, { useState } from "react"

function DisplayIdeas (props) {
    let crazyIdeas = props.movieIdeas.map((idea, index) => <li key={index}>{idea}</li>)

  return(
    <div>
        <ul>
            {crazyIdeas}
        </ul>

    </div>
  )
}

export default DisplayIdeas
