import './header.styles.css';
import TopMenu from './topMenu';

const Header = () => {
	return (
		<div className='header_wrapper'>
			<div className='header_left'>this is logo</div>
			<div className='header_right'>
				<TopMenu />
			</div>
		</div>
	);
};

export default Header;
