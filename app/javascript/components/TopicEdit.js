import React from 'react'

const TopicEdit = (props) => {
    const { sub } = props
    return(
        <div>
            <h1>TopicEdit Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>
        </div>
    )
}

export default TopicEdit