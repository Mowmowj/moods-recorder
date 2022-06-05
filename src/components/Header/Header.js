import "./Header.scss";
import leftArrow from "../../assets/leftArrow.png";
const Header = () => {
	return (
		<div className="header">
			<img src={leftArrow} className="header__arrow" alt="arrow" />
			<span className="header__title">历史心情指数</span>
            <span></span>
		</div>
	);
}

export default Header;
