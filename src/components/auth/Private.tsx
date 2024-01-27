import React from 'react'
import { Profile, ProfileProps } from './Profile'
import { Login } from './Login'

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if (isLoggedIn) {
        return (
            <Component name='shukurullox' />
        )
    }else{
        return(
            <Login/>
        )
    }
}
