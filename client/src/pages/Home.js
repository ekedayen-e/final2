import React from 'react'
import  {Helmet} from 'react-helmet'


function Home() {
  return (
    <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1 style={{textAlign: "center"}}>Welcome To Phonebook!</h1>
    <p style={{textAlign: "center"}}>With this app, you can search the Web for phone numbers around the world!</p>
    <p style={{textAlign: "center"}}>To get started, use the navbar above to add, find, or delete entries!</p>
    </div>
  )
}

export default Home