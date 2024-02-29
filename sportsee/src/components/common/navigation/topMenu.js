import { Link } from 'react-router-dom';

const TopMenu = () => {
	return (
		<>
			<Link to='/#' className='menu'>
				Accueil
			</Link>
			<Link to='/#' className='menu'>
				Profil
			</Link>
			<Link to='/#' className='menu'>
				Réglage
			</Link>
			<Link to='/#' className='menu'>
				Communauté
			</Link>
		</>
	);
};

export default TopMenu;
