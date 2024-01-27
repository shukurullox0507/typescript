import React from 'react'
import Greet from '../Greet'

export const CustomComponent = ({isLogged, name,messageCount}: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {name}
        {messageCount}
    </div>
  )
}
