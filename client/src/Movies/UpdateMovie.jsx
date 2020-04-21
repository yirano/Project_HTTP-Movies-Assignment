import React from 'react'

export default function UpdateMovie(props) {
  console.log("UpdateMovie -> props", props)
  console.log(props.match.params);
  return (
    <div>
      Movie to be updated here
    </div>
  )
}
