
import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout/DefaultLayout'
import './TicketManagement.scss'
const TicketManagement = () => {
  return (
    <>
    <DefaultLayout>
        <div className='TicketManagementWrapper'>
            <div className='ListTicketTitle w-[276px] h-[64px] text-[36px] 
            absolute top-[24px] left-[24px] font-bold
            '>
                <p>Danh sách vé</p>
            </div>
        </div>
    </DefaultLayout>
    </>
  )
}

export default TicketManagement