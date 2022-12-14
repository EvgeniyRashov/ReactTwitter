import React from 'react';

import './app-header.css'

const AppHeader = ({liked,allPosts}) => {

    return (
        <div className='app-header d-flex'>
            <h1>Evgeniy Rashov</h1>
            <h2>{allPosts} записей, понравилось из них {liked}</h2>
        </div>
    )
}

export default AppHeader;