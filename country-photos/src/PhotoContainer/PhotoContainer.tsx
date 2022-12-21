import { useEffect, useState } from 'react';
import { Breadcrumb, Pagination, Loading } from 'element-react';

import countrySubject from '../CountrySubject';
import PhotoCard from '../PhotoCard/PhotoCard';

import './photoContainer.css';

// TODO заменить на список стран от Aside через наблюдатель
const countriesArr = ['Angola', 'Angola2', 'Angola3'];

const apiKey = '563492ad6f91700001000001c4da284c1c014e9ebd3786c88de38900';

const PhotoContainer = (): JSX.Element => {
  const [photosInf, setPhotosInf] = useState<PhotoAPIAnswerType>();
  const [countriesList, setCountriesList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onCountriesListUpdate: CountryObserver = (country: string) => {
    const updateCountriesList = countriesList;
    updateCountriesList.unshift(country);
    setCountriesList(updateCountriesList);
    loadPhotoInf(country, 1);
  }

  useEffect(() => {
    countrySubject.attach(onCountriesListUpdate);
    return () => countrySubject.detach(onCountriesListUpdate);
  }, []);

  const loadPhotoInf = async (country: string, page: number) => {
    if (!country) return;
    setIsLoading(true);
    console.log(`https://api.pexels.com/v1/search?query=${country}&page=${page}&per_page=9`);
    let response = await fetch(`https://api.pexels.com/v1/search?query=${country}&page=${page}&per_page=9`, {
      headers: {
        Authorization: apiKey,
      }
    });
    const data: PhotoAPIAnswerType = await response.json();
    setPhotosInf(data);
    setIsLoading(false);
  }

  const onPageChange = async (currentPage: number): Promise<void> => {
    console.log(currentPage);
    await loadPhotoInf(countriesList[0], currentPage);
  }

  return <div className='main-container'>
    <div className='title-container'>
      {isLoading && <Loading fullscreen={true} />}
      <div className='title-wrapper'>
        <div className='title'>{countriesList[0]}</div>
        <Breadcrumb separator=">">
          {countriesList.map((country: string) => {
            return <Breadcrumb.Item>{country}</Breadcrumb.Item>
          }) }
        </Breadcrumb>
      </div>
      <Pagination layout="prev, pager, next" total={photosInf?.total_results} small={true} pageSize={9} onCurrentChange={onPageChange} />
    </div>
    <div className='photos-container'>
      {photosInf?.photos.map((photoInf) => {
        return <PhotoCard photoInf={photoInf} />
      })}
    </div>
  </div>
}

export default PhotoContainer;
