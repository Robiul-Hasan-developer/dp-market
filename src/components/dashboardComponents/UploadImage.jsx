import React, { useState } from 'react';

const UploadProfileImage = ({ imageType }) => {
  // State variables for file and image preview URL
  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  // Handle image change
  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // Determine what to display for the image preview
  let imagePreview;
  let defaultImagePath;

  if (imageType === 'profile') {
    // Set the default image path for profile image
    defaultImagePath = 'assets/images/thumbs/profile-info-img.png';
  } else if (imageType === 'cover') {
    // Set the default image path for cover photo
    defaultImagePath = 'assets/images/thumbs/cover-photo.png';
  }

  // Determine the image preview
  if (imagePreviewUrl) {
    imagePreview = <img src={imagePreviewUrl} alt="Image preview" className="cover-img" />;
  } else {
    imagePreview = <img src={defaultImagePath} alt="Default preview" className="cover-img" />;
  }

  // Determine file input ID based on image type
  const fileInputId = imageType === 'profile' ? 'imageUploadProfile' : 'imageUploadCover';

  return (
    <div className="avatar-upload previewComponent mb-24">
      <div className="avatar-preview">
        <div id="imagePreview">{imagePreview}</div>
      </div>

      <div className="avatar-edit">
        <input className="fileInput" id={fileInputId} type="file" onChange={handleImageChange} accept=".png, .jpg, .jpeg" hidden />
        <label htmlFor={fileInputId}>
          {
            imageType === 'cover' ? (
              <>
                <span className="icon"> <img src="assets/images/icons/camera-two.svg" alt=""/> </span>
                <span className="text">Change Cover</span>
              </>
            ) : (
              <img src="assets/images/icons/camera.svg" alt="Upload" />
            )
          }
        </label>
      </div>
    </div>
  );
};

export default UploadProfileImage;
