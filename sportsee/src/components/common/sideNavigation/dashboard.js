import './dashboard.styles.css';
import { Link } from 'react-router-dom';
import yoga from '../../assets/yoga.svg';
import piscine from '../../assets/piscine.svg';
import velo from '../../assets/velo.svg';
import altere from '../../assets/altere.svg';

const SideMenu = () => {
	return (
		<div className='side_wrapper'>
			<div className='side_center'>
				<Link>
					<div className='side_center_iconBox'>
						<img src={yoga} alt='Logo de SportSee' className='side_icon' />
					</div>
				</Link>
				<Link>
					<div className='side_center_iconBox'>
						<img src={piscine} alt='Logo de SportSee' className='side_icon' />
					</div>
				</Link>
				<Link>
					<div className='side_center_iconBox'>
						<img src={velo} alt='Logo de SportSee' className='side_icon' />
					</div>
				</Link>
				<Link>
					<div className='side_center_iconBox'>
						<img src={altere} alt='Logo de SportSee' className='side_icon' />
					</div>
				</Link>
			</div>
			<div className='side_bottom'>Copiryght, SportSee 2020</div>
		</div>
	);
};

export default SideMenu;
