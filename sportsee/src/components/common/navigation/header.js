import { Link } from 'react-router-dom';
import logo from '../../assets/logo-navbar.svg';
import TopMenu from './topMenu.js';
import './header.styles.css';

const Header = () => {
	return (
		<div className='header_wrapper'>
			<div className='header_left'>
				<Link to='/'>
					<img src={logo} alt='Logo de SportSee' className='header_icon' />
				</Link>
			</div>
			<div className='header_right'>
				<TopMenu />
			</div>
		</div>
	);
};

export default Header;
