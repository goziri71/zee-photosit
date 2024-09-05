import '../css/ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({images}) {
    
    if(!images){
        window.location.reload()
    }
    const renderedImages = images?.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })

    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;