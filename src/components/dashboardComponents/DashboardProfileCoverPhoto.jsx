import React from 'react';
import UploadImage from './UploadImage';

const DashboardProfileCoverPhoto = () => {
    return (
        <div className="cover-photo position-relative z-index-1 overflow-hidden">

            <UploadImage imageType="cover" />

        </div>
    );
};

export default DashboardProfileCoverPhoto;