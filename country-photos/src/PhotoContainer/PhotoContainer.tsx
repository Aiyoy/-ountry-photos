import { useEffect } from 'react';
import { Breadcrumb, Pagination } from 'element-react';

import './photoContainer.css';

// TODO заменить на список стран от Aside через наблюдатель
const countriesArr = ['Angola', 'Angola2', 'Angola3'];

const PhotoContainer = () => {
  useEffect(() => {
    loadPhotoInf();
  });
  const loadPhotoInf = async () => {
    
  }

  return <div className='main-container'>
    <div className='title-container'>
      <div className='title-wrapper'>
        <div className='title'>{countriesArr[0]}</div>
        <Breadcrumb separator=">">
          {countriesArr.map((country: string) => {
            return <Breadcrumb.Item>{country}</Breadcrumb.Item>
          }) }
        </Breadcrumb>
      </div>
      <Pagination layout="prev, pager, next" total={50} small={true}/>
    </div>
  </div>
}

export default PhotoContainer;
