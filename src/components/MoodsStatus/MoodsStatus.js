import React from "react";
import DayStatus from "../DayStatus/DayStatus.js";
import "../MoodsStatus/MoodsStatus.scss";
class MoodsStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curIndex: ""
		};
		this.handleSelect = this.handleSelect.bind(this);
	}
	handleSelect(index) {
		this.setState({
			curIndex: index
		});
	}
	render() {
		return (
			<div className="list">
				{this.props.dayList.map((prop, index) => {
					return (
						<DayStatus
							key={prop.day}
							index={index}
							handleSelect={this.handleSelect}
							curIndex={this.state.curIndex}
							{...prop}
						></DayStatus>
					);
				})}
			</div>
		);
	}
}

export default MoodsStatus;
