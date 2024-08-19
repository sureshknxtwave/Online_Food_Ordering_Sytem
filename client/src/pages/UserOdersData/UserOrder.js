import React from 'react'
import OrdersData from './OrdersData'
import UsersOrdersNav from './UsersOrdersNav'

function UserOrder() {
  return (
    <div className="user-orders">
        <UsersOrdersNav/>
        <OrdersData/>
    </div>
  )
}

export default UserOrder