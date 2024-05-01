import React from 'react';
import { Link } from 'react-router-dom';

const SupportContent = () => {
    return (
        <div className="support-content">
            <h3 className="support-content__title mb-3">Support 24/7</h3>
            <p className="support-content__desc">Wanna talk? Send us a message</p>
            <Link to="mailto:infomail@office.com" className="btn btn-static-black btn-lg fw-300 pill">infomail@office.com</Link>
        </div>
    );
};

export default SupportContent;