import React from 'react'
import Header from './Header'
import Body from './Body'


const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="bg-gray-200 rounded-xl m-8 p-4">
                <Body />
            </div>
        </div>
    )
}

export default Layout