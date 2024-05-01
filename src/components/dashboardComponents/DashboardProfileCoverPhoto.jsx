import React from 'react';

const DashboardProfileCoverPhoto = () => {
    return (
        <div className="cover-photo position-relative z-index-1 overflow-hidden">
            <div className="avatar-upload">
                <div className="avatar-edit">
                    <input type="file" id="imageUploadTwo" accept=".png, .jpg, .jpeg"/>
                    <label for="imageUploadTwo">
                        <span className="icon">
                            <img src="assets/images/icons/camera-two.svg" alt=""/> 
                        </span>
                        <span className="text">Change Cover</span>
                    </label>
                </div>
                <div className="avatar-preview">
                    <div id="imagePreviewTwo">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfileCoverPhoto;