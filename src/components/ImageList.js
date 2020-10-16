import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    // const images = props.images.map(({description, id, urls}) => {
    //     return <ImageCard alt={description} key={id} src={urls.regular} />
    // })

    //SAME AS
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    }); 

    
    return <div className="image-list">{images}</div>

}

export default ImageList