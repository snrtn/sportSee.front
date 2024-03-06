import Header from '../common/navigation/header';
import PropTypes from 'prop-types';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<div>{props.children}</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
