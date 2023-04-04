import  './SideBar.scss'
import React, { useState } from 'react'
// import image from '../../../image/iconImage/changeTicketIcon.png'
import { menuData } from '../../../data/data'
const SideBar = () => {
   const [actionMenu, setActionMenu]=useState(0)
  return (
    <div className='w-[321px] h-[1080px] bg-header-sidebar wrapperSideBar'>
        <div className='SideBar__Container'>
            <div className='sms_ticket_logo'>
                <div className='sms_ticket_logo__item'>
                </div>
            </div>
            <ul className='sms_ticket_menu'>
                {
                    menuData.map((menu, index)=>{
                        return (               
               <li className={`sms_ticket_menu__item ${actionMenu==menu.id? 'actionMenu' :''}`}
               onClick={()=>{
                setActionMenu(menu.id)
               }}
               
               >
                <div className={`sms_ticket_menu__icon `}>
                    {menu.icon}
                </div>
                <div className='sms_ticket_menu__title'>
                    <span
                    className='text-primaryText'
                    >{menu.title}</span>
                </div>
                </li> 
                        )
                    })
                }
               
            </ul>
        </div>
    </div>
  )
}

export default SideBar