import Header from '../common/navigation/header';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<div>{props.children}</div>
		</div>
	);
};

export default Layout;
