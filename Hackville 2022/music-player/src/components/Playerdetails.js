import React from 'react'

function Playerdetails(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={props.song.img_src} alt="" />
            </div>
            <h3 className="details-title">{props.song.title}</h3>
        </div>
    )
}

export default Playerdetails
