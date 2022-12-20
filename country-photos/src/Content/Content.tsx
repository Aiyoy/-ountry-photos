import Aside from '../Aside/Aside';
import PhotoContainer from '../PhotoContainer/PhotoContainer';

import './content.css'

const Content = (props: {isAsideOpen: boolean}): JSX.Element => {
  return <div className='content'>
    <Aside isAsideOpen={props.isAsideOpen}></Aside>
    <PhotoContainer />
  </div>
}

export default Content;
