import React, { Component, useState } from 'react';
import axios from 'axios';
//const ImgurClient = require('../../node_modules/imgur-api.js');
import ImageList from './image_list';

function ImageUploader(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    // const onTrigger = (e) => {
    //     e.preventDefault();
    //     data ? props.parentCallback(data):null;
    // } 
    // states
    const [images, setImages] = useState({});
    const upload = async (e) => {
        e.preventDefault()
        /*const formData = new FormData();
        formData.append('image', selectedFile);
        const res = await axios({
            method: 'POST',
            url: 'https://api.imgur.com/3/image',
            headers: { "Authorization": "Client-ID ca2c612ef390b57" },
            data: formData
        })
        // TODO: Handle response by pushing image link to db
        var data = res.data.data.link;
        console.log(data)
        var ind = Object.keys(images).length == 0 ? 1 : Object.keys(images).length + 1;
        const abc = images;
        console.log(abc);
        abc[ind] = data;
        // // setImages({abc});
        console.log(images);
        // console.log(abc)*/
        var binary_file = null;
        var reader = new FileReader();
        reader.onload = function(e) {
            binary_file = e.target.result;
            uploadFile(selectedFile.name, binary_file);
        };
        reader.readAsDataURL(selectedFile)
    }

    async function uploadFile(name, file) {
        const drive_res = await axios({
            method: 'POST',
            url: '/api/drive_upload',
            data: {
                name: name,
                file: file
            }
        })
        // TODO: do something with these links
        console.log(drive_res.data.data)
    }
    // function handleDelete (key) {
    //     // key.preventDefault();
    //     const abc = images;
    //     delete abc.key
    //     // setImages(abc);
    //     console.log(images);

    // }
    return (
        <div className="upload_image">
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    {/* <ImageList images = {images} parentCallback = {(key) => handleDelete(key)} /> */}
                </div>
            ) : (
                <p>Please select images</p>
            )}
            <div>
                <button onClick={e => upload(e)}>Upload</button>
                {/* <button onClick={(e) => onTrigger(e)}>chdc</button> */}
            </div>
        </div>
    )
}
export default ImageUploader;