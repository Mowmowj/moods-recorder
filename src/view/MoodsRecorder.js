import Header from "../components/Header/Header.js";
import UserInfo from "../components/UserInfo/UserInfo";
import MoodsStatus from "../components/MoodsStatus/MoodsStatus";
import MobileStatus from "../components/MobileStatus/MobileStatus";
import { weekMoods } from "../configs/dayVariables";
import './MoodsRecorder.scss'


function MoodsRecorder() {
	return (
		<div className="moodsRecorder">
            <MobileStatus/>
			<Header />
			<UserInfo />
			<MoodsStatus  dayList={ weekMoods }/>
		</div>
	);
}

export default MoodsRecorder;
