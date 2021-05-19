import React from 'react'

const Topics = (props) => {
    const { sub, topics } = props

    const renderTopics = ()=> {
        return topics.map(topic => {
            return(
                <div>
                    <h1>{topic.name}</h1>
                    <a href={`/subs/${sub.id}/topics/${topic.id}`}>show</a>
                    <a href={`/subs/${sub.id}/topics/${topic.id}/edit`}>edit</a>
                    <a href={`/subs/${sub.id}/topics/${topic.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    }
    return(
        <div>
            <h1>Topics Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>
            <h1>topics</h1>
            {renderTopics()}
        </div>
    )
}

export default Topics