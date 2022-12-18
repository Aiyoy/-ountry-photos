import Aside from '../Aside/Aside';

import './content.css'

const Content = (props: {isAsideOpen: boolean}): JSX.Element => {
  return <div className='content'>
    <Aside isAsideOpen={props.isAsideOpen}></Aside>
  </div>
}

export default Content;
