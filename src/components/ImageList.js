import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
    const imagesList = images.map((image) => <ImageCard key={image.id} image={image} />);
    return (
        <div>
            <p>Total results: {images.length}</p>
            <div className="image-list">{imagesList}</div>
        </div>
    );
};

export default ImageList;
