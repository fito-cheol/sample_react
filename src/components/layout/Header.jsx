import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header_global_navi">
				<div className="header_global_navi_inner">
					<ul className="nav_list">
						<StyledLink to="/">홈</StyledLink>
						<StyledLink to="/about">소개</StyledLink>
						<StyledLink to="/contact">연락처</StyledLink>
					</ul>
				</div>
			</div>
		</header>
	);
};

const StyledLink = (props) => {
	const { to, children } = props;

	const location = useLocation();
	const isActive =
		to === location.pathname ||
		(location.pathname !== '/' && to.startsWith(location.pathname));
	return (
		<li className={`nav_item ${isActive ? `active` : ''}`}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

export default Header;
