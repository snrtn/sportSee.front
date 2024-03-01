import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './notFound.styles.css';

const NotFound = () => {
	return (
		<div className='nomatch'>
			<img src={logo} alt='Logo de SportSee' className='home_icon' />
			<Link to='/'>Aller à la page précédente</Link>
		</div>
	);
};

export default NotFound;
