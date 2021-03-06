import "./UserInfo.scss";
import Avatar from "../../assets/avatar.png";
import { averageMood ,UserInfo as user } from "../../configs/mockData";

const UserInfo = () => { 
	return (
		<div className="user-wrapper">
			<div className="user">
				<div className="user-info">
					<img className="user-avatar" src={Avatar} alt="" />
					<span className="user-name">{ user.name }</span>
				</div>
                <div className="user-mood">
				    <span>{averageMood}</span>
                </div>
				<span className="user-average">周平均心情指数</span>
			</div>
            <div className="half-score-line"></div>
		</div>
	);
}
export default UserInfo;
