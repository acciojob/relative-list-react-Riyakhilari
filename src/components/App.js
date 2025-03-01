import React from 'react'

const App = () => {
  const names = ["A","B","C","D"]
  return (
    <div id="main">
               <ol key={"relativeList"}>
    {
      names.map((i,index)=>(<li key={`relativeListItem${index}`}>{i}</li>))
    }
              </ol>
    </div>
  )
}

export default App
