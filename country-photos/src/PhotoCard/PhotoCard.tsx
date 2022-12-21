import './photoCard.css'

const PhotoCard = (props: {photoInf: PhotoInfType}): JSX.Element => {
  return <div className='photo-container' >
    <img className='card-img' src={props.photoInf.src.original} alt={props.photoInf.alt} />
    <div className='card-inf'>
      <div className='card-title'>{props.photoInf.photographer}</div>
      <div className='card-save'></div>
    </div>
  </div>
}

export default PhotoCard;
