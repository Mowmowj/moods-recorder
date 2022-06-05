import "./Header.scss";
import leftArrow from "../../assets/leftArrow.png";
const Header = () => {
	const validSpanStyle = {
		width: "23.5px"
	};
	return (
		<div className="header">
			<img
				onClick={() => alert("Coming soon~")}
				src={ leftArrow }
				className="header__arrow"
				alt="arrow"
			/>
			<span className="header__title">历史心情指数</span>
			<span style={ validSpanStyle }></span>
		</div>
	);
};

export default Header;
