import React, { Component, useState } from 'react';
import axios from 'axios';
function ImageUploader(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    const [images, setImages] = useState({});
    const upload = async (e) => {
        e.preventDefault()
        var binary_file = null;
        var reader = new FileReader();
        reader.onload = function(e) {
            binary_file = e.target.result;
            uploadFile(selectedFile.name, binary_file);
        };
        reader.readAsDataURL(selectedFile)
    }
    async function uploadFile(name, file) {
        console.log(122)
        const drive_res = await axios({
            method: 'POST',
            url: '/api/drive_upload',
            data: {
                name: name,
                file: file
            }
        })
        console.log(drive_res.data.data)
        link = drive_res.data.data.webViewLink;
        props.parentCallback({name:link})
    }
    var name = "";
    var link = "";
    function handleName (e) {
        name = e.target.value;
    }
    return (
        <div className="upload_image">
            <input type = "text" onChange={(e) => handleName(e)}/>
            <input type="file" name="file"  onChange={changeHandler} />
            {isSelected ? (
                <div>
                    {/* <ImageList images = {images} parentCallback = {(key) => handleDelete(key)} /> */}
                </div>
            ) : (
                <p>Please select images</p>
            )}
            <div>
                <button onClick={e => upload(e)}>Upload</button>
            </div>
        </div>
    )
}
export default ImageUploader;