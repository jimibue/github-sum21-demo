import React from 'react'

const SubNew = (props) => {
    return(
        <div>
            <h1>SubNew component here</h1>
            <form action='/subs' method='post'>
              <input placeholder='name' name="sub[name]"/>
              <button type='submit'>add</button>
            </form>
        </div>
    )
}
export default SubNew
