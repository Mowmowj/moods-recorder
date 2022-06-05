import "./MobileStatus.scss";
import battery from "../../assets/battery.png";
import wifi from "../../assets/wifi.png";
import signal from "../../assets/signal.png";
import time from "../../assets/time.png";

const MobileStatus = () => {
	return (
		<div className="mobile">
			<div className="left-status">
                <div className="time-wrapper">
                    <img src={time} className="mobile-icon time" alt="" />
                </div>
			</div>
			<div className="right-status">
				<img src={signal} className="mobile-icon signal" alt="" />
				<img src={wifi} className="mobile-icon wifi" alt="" />
				<img src={battery} className="mobile-icon battery" alt="" />
			</div>
		</div>
	);
}

export default MobileStatus;
