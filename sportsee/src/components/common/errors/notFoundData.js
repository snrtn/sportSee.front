import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './notFound.styles.css';

const NotFoundData = ({ error }) => {
	return (
		<div className='nomatch'>
			<img src={logo} alt='Logo de SportSee' className='home_icon' />
			<Link to='/'>
				<p>Error: {error}</p>
				<p> Aller à la page précédente</p>
			</Link>
		</div>
	);
};

export default NotFoundData;
