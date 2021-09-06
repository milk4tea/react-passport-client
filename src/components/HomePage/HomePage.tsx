import React, { useContext } from 'react'
import { IUser } from '../../types/mainTypes';
import { myContext } from '../Context'

export default function HomePage() {
    const context = useContext(myContext) as IUser;
    return (
        <div>
            {
                context ? (
                    <h1>Welcome back {context.username}</h1>
                ): 
                <h1>Welcome to my website</h1>
            }
        </div>
    )
}
