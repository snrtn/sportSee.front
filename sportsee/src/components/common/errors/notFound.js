import { Link } from 'react-router-dom';
import not from '../../assets/404.svg';
import './notFound.styles.css';

const NotFound = () => {
	return (
		<div className='nomatch'>
			<img src={not} alt='NotFound' className='nomatch_icon' />
			<Link to='/'>Aller à la page d'accueil</Link>
		</div>
	);
};

export default NotFound;
