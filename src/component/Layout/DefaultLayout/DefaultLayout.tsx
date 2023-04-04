import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import './DefaultLayout.scss'
type Props= {
  children: React.ReactNode,
}
const DefaultLayout = ({children}: Props) => {
  return (
    <div >
        <Header/>
        <SideBar />
          <div className='ChildrenContent'>
            <div className='ChildrenContent__Item'>
            {
            children
            }
            </div>
          </div>
    </div>
  )
}

export default DefaultLayout