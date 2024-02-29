import Header from '../common/navigation/header';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<div style={{ height: '100% !important' }}>{props.children}</div>
		</div>
	);
};

export default Layout;
