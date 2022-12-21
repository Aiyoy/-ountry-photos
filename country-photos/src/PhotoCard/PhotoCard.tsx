import { useState } from 'react';

import DownloadDialog from '../Dialog/Dialog';

import './photoCard.css'

const PhotoCard = (props: {photoInf: PhotoInfType}): JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return <><div className='photo-container' >
    <img className='card-img' src={props.photoInf.src.original} alt={props.photoInf.alt} />
    <div className='card-inf'>
      <div className='card-title'>{props.photoInf.photographer}</div>
      <div className='card-save' onClick={() => setIsDialogOpen(true)}></div>
    </div>
  </div>
  { isDialogOpen && <DownloadDialog srcArr={props.photoInf.src} close={() => setIsDialogOpen(false)} /> }</>
}

export default PhotoCard;
