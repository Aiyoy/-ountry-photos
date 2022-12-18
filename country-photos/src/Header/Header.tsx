import './header.css'

function Header(props: {onClick: () => void}) {
  return <header className='header'>
    <div className='burger' onClick={() => props.onClick()}></div>
    <div className='header-title'>Country photos</div>
  </header>
}

export default Header;
