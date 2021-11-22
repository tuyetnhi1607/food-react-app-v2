import React from 'react'
import './notification.scss'
import 'boxicons'


function Notification() {
    return (
        <div className="notification" id="notification">
            <i class='bx bx-check-circle'></i>
            <div className="notification-content">
                <h3> added to cart</h3>
                <h4>count: +1</h4>
            </div>
        </div>
    )
}

export default Notification
