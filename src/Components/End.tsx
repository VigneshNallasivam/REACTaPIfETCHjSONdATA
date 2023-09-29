import React from 'react'
type EndProps = {
    children:React.ReactNode;
}

export const End = (props:EndProps) => {
  return (
    <h1>
      {props.children}
    </h1>
  )
}

