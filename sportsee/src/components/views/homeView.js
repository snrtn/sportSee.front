import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './homeView.styles.css';

const HomeView = () => {
	return (
		<div className='home_container'>
			<li>
				<Link to='/user/12'>
					<img src={logo} alt='Logo de SportSee' className='home_icons' />
					<p>User 12 Dashboard</p>
				</Link>
			</li>
			<li>
				<Link to='/user/18'>
					<img src={logo} alt='Logo de SportSee' className='home_icons' />
					<p>User 18 Dashboard</p>
				</Link>
			</li>
		</div>
	);
};

export default HomeView;
