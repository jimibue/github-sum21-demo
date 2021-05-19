import React from 'react'

const Subs = (props) => {
    const { subs, yo } = props
    
    // two returns in here
    const renderSubs = () => {
        // this return returns the array at end of map
        return subs.map( sub => {
            // this returns the jsx for each sub
            return (
                <div>
                    <h1>{sub.name}</h1>
                    <a href={`/subs/${sub.id}`}>show</a>
                    <a href={`/subs/${sub.id}/edit`}>edit</a>
                    <a href={`/subs/${sub.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    } 
   
    return(
        <div>
            <h1>Subs component here</h1>
            {renderSubs()}
        </div>
    )
}
export default Subs