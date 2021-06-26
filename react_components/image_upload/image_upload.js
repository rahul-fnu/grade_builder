import React, { Component, useState } from 'react';
import axios from 'axios';
//const ImgurClient = require('../../node_modules/imgur-api.js');
function ImageUploader () {
    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };
    // const handleSubmission = () => {
    //     const formData = new FormData();
    //     formData.append('File', selectedFile);
    //     fetch('https://api.imgur.com/3/image', {
    //         method: 'POST',
    //         headers: {
    //             Authorization: "Client-ID b711eeeb15456d5"
    //         },
    //         body: formData
    //     }).then(data => console.log(data))
    // };
    const upload = async () =>{
        const formData = new FormData();
        formData.append('File', selectedFile);
        return await axios({
            method: 'POST',
            url: 'https://api.imgur.com/3/image',
            headers: {"Content-type": "application/x-www-form-urlencoded",
            Authorization: "Client-ID b711eeeb15456d5",
            data: formData}, 
        })
    }

    return (
        <div className = "upload_image">
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                </div>
			    ) : (
			    <p>Please select a file</p>
		    )}
			<div>
				<button onClick={upload}>Upload</button>
			</div>
        </div>
    )
}
export default ImageUploader;