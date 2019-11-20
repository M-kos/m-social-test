import React from 'react';

import './List-popup-item.scss';

function ListPopupItem({ people }) {
    const { imgSrc, name, email, spent, actionBtn } = people;

    return (
        <div className="list-popup-item">
            <img src={imgSrc} className="people-photo" alt={name} />
            <div className="people-description">
                <h5 className="people-name">{name}</h5>
                <p className="people-email">{email}</p>
            </div>
            <span className="spent-time">{spent}</span>
            <button className="action-btn-popup">{actionBtn}</button>
        </div>
    );
}

export default ListPopupItem;