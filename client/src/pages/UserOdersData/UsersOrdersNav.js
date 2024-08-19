import React from 'react'

function UsersOrdersNav() {
    const UserName = localStorage.getItem("username");
    const Mobile = localStorage.getItem("userMobile")
  return (
    <div>
        <nav>
        <ul>
            <li>{UserName}</li>
            <li>{Mobile}</li>
        </ul>
        
        </nav>
    </div>
  )
}

export default UsersOrdersNav