import { Link } from 'react-router-dom';
import not from '../../assets/404.svg';
import './notFound.styles.css';

const NotFoundData = ({ error }) => {
	return (
		<div className='nomatch'>
			<img src={not} alt='NotFound' className='nomatch_icon' />
			<Link to='/'>
				<p>Error: {error}</p>
				<p>Aller à la page d'accueil</p>
			</Link>
		</div>
	);
};

export default NotFoundData;
