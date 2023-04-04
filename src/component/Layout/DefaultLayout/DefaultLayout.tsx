import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
type Props= {
  children: React.ReactNode,
}
const DefaultLayout = ({children}: Props) => {
  return (
    <div >
        <Header/>
        <SideBar />
        {
            children
        }
    </div>
  )
}

export default DefaultLayout