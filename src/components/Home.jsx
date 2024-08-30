import React from 'react'
import Nav from './Nav'
import Card from './Card'

export default function Home(){
    return (
        <div className='h-full w-full flex'>
            <Nav />
            <Card />
        </div>
    )
}