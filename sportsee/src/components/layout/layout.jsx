import Header from '../navigation/header';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<div>{props.children}</div>
		</div>
	);
};

export default Layout;
