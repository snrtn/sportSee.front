import './dashboard.styles.css';
import { Link } from 'react-router-dom';
import yoga from '../../assets/yoga.svg';
import piscine from '../../assets/piscine.svg';
import velo from '../../assets/velo.svg';
import altere from '../../assets/altere.svg';

const menuItems = [
	{ src: yoga, alt: 'Logo de SportSee' },
	{ src: piscine, alt: 'Logo de SportSee' },
	{ src: velo, alt: 'Logo de SportSee' },
	{ src: altere, alt: 'Logo de SportSee' },
];

const SideMenu = () => {
	return (
		<div className='side_wrapper'>
			<div className='side_center'>
				{menuItems.map((item, index) => (
					<Link key={index}>
						<div className='side_center_iconBox'>
							<img src={item.src} alt={item.alt} className='side_icon' />
						</div>
					</Link>
				))}
			</div>
			<div className='side_bottom'>Copiryght, SportSee 2020</div>
		</div>
	);
};

export default SideMenu;
