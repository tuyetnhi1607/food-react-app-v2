import React from 'react'
import './notification.scss'
import 'boxicons'


function Notification() {
    var childdata = JSON.parse(localStorage.newItem);
    return (
        <div className="notification" id="notification">
            <i class='bx bx-check-circle'></i>
            <div className="notification-content">
                <h3><span style={{color: 'red'}}>{childdata.name}</span> added to cart</h3>
                <h4>count: +{childdata.count}</h4>
            </div>
        </div>
    )
}

export default Notification
