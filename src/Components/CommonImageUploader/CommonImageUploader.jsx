import React, { useState } from "react";
import { Layout, Container, BoxUpload, ImagePreview } from "./style/imageuplode";
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";

function CommonImageUploader() {
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            setTypeFile(e.target.files[0].type);
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage(e.target.result);
                setIsUploaded(true);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <Layout>
            <Container>
                <h2>Upload your image</h2>
                <p>Upload with preview 😁</p>

                <BoxUpload>
                    <div className="image-upload">
                        {!isUploaded ? (
                            <>
                                <label htmlFor="upload-input">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={FolderIcon}
                                            draggable={"false"}
                                            alt="placeholder"
                                            className=""
                                            style={{ width: 100, height: 100 }}
                                        />
                                    </div>
                                    <p style={{ color: "#444" }}>Click to upload image</p>
                                </label>

                                <input
                                    id="upload-input"
                                    type="file"
                                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                                    onChange={handleImageChange}
                                />
                            </>
                        ) : (
                            <ImagePreview>
                                <img
                                    className="close-icon"
                                    src={CloseIcon}
                                    alt="CloseIcon"
                                    onClick={() => {
                                        setIsUploaded(false);
                                        setImage(null);
                                    }}
                                />
                                {typeFile.includes("video") ? (
                                    <video
                                        id="uploaded-image"
                                        src={image}
                                        draggable={false}
                                        controls
                                        autoPlay
                                        alt="uploaded-img"
                                    />
                                ) : (
                                    <img
                                        id="uploaded-image"
                                        src={image}
                                        style={{ width: 400, height: 390 }}
                                        draggable={false}
                                        alt="uploaded-img"
                                    />
                                )}
                            </ImagePreview>
                        )}
                    </div>
                </BoxUpload>

                {isUploaded ? <h2>Type is {typeFile}</h2> : null} 
            </Container>
        </Layout>
    );
}

export default CommonImageUploader;