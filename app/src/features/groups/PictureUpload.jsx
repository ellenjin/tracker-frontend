import React from 'react';

export default function PictureUpload() {
  return (
    <form action="/action_page.php">
      <label htmlFor="upload-picture" />
      <input type="file" id="upload-picture" name="uploadPicture" />
    </form>
  );
}
