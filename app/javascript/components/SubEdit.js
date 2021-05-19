import React from 'react'

const SubEdit = (props) => {
    const {name, id} = props.sub
    return(
        <div>
            <h1>SubEdit component here</h1>
            <form action={`/subs/${id}`} method='post'>
                <input type='hidden' name='_method' value='patch' />
              <input defaultValue={name} placeholder='name' name="sub[name]"/>
              <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default SubEdit 