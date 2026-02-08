import { useState, useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";



function ProductImageUpload({ imageFile, setImageFile, uploadedImage, setUploadedImage }) {

    const inputRef = useRef(null);

    function handleImageChange(event) {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) setImageFile(selectedFile);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }
    function handleDrop(event) {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files?.[0];
        if (droppedFile) setImageFile(droppedFile);
    }
    function handleRemoveImage() {
        setImageFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    const [imageLoading, setImageLoading] = useState(false);

    async function uploadImageToCloudinary() {
        setImageLoading(true);
        const data = new FormData();
        data.append("my_file", imageFile);
        try {
            const response = await axios.post('http://localhost:5000/api/admin/products/upload-image', data);
            console.log("Upload response:", response);
            if (response?.data?.success) {
                setUploadedImage(response.data.result);
                setImageLoading(false);
            } else {
                console.error("Upload failed:", response?.data?.message);
                setImageLoading(false);
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            setImageLoading(false);
        }
    }

    useEffect(() => {
        if (imageFile !== null) uploadImageToCloudinary()
    }, [imageFile])

    return (
        <div className="flex flex-col w-full max-w-md mx-auto ">
            <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
            <div onDragOver={handleDragOver} onDrop={handleDrop} className={`${imageLoading ? "opacity-60" : ""} border-2 border-dashed rounded-lg p-4`}>
                <Input id="image-upload" className="hidden" type="file" ref={inputRef} onChange={handleImageChange} disabled={imageLoading} />
                {
                    !imageFile ?
                        <Label htmlFor="image-upload" className={`${imageLoading ? "cursor-not-allowed" : "cursor-pointer"} flex flex-col items-center justify-center h-32`}>
                            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
                            <span>Drag & Drop or click to upload image</span>
                        </Label> : (
                            imageLoading ?
                                <div className="h-10 w-full bg-muted animate-pulse rounded-md" /> :
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FileIcon className="w-8 h-8 text-primary mr-2" />
                                    </div>
                                    <p className="text-sm font-medium">{imageFile.name}</p>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}>
                                        <XIcon className="w-4 h-4" />
                                        <span className="sr-only">Remove File</span>
                                    </Button>
                                </div>
                        )
                }
            </div>
        </div>
    )
}

export default ProductImageUpload;