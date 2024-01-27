import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number;
    isLogged: boolean;
}
const Greet = ({name, messageCount=0, isLogged}: GreetProps) => {
    return (
        <>
            <div>
                {
                    isLogged
                        ? `Welcome to my channel, My name is ${name} 
                You have ${messageCount} unread messages `
                        : `Welocme Guest`
                }
            </div>

        </>
    )
}

export default Greet