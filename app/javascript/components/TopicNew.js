import React from 'react'

const TopicNew = (props) => {
    const { sub } = props
    return(
        <div>
            <h1>New topic for: {sub.name}</h1>
            <form action={`/subs/${sub.id}/topics`} method='post'>
                <p>body</p>
                <input name='topic[body]' />
                <p>name</p>
                <input name='topic[name]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default TopicNew