import React from 'react'

const TopicNew = (props) => {
    const { sub } = props
    return(
        <div>
            <h1>TopicNew Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>
        </div>
    )
}

export default TopicNew