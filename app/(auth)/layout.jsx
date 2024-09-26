import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
const layout = ({children} ) => {

    
  return (
    <section>
        <Header/>
      {children}
    </section>
  )
}

export default layout