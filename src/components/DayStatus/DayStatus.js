import { judgeIsToday } from "../../configs/dayVariables.js";
import React, { useState, useEffect } from "react";

const DayStatus = props => {

	//Judgement
	const isToday = judgeIsToday(props.day);
    //判断分数是否合法是否是正整数  若非法给默认值30高度
    const handleScore = ()=>{
        return Number.isInteger(props.score) ? props.score : 30
    }
    //处理后的分数
    const handledScore = handleScore(props.score)
    
	//css
	const faceIcon = require(`../../assets/${props.status}.png`);
	const calculateHeight = {
		height: `${handledScore}%`
	};

	//Hooks
	const [moodStyle, setMoodStyle] = useState("vigor");
    //设置日程点击效果
	const [dayStyle, setDayStyle] = useState("vigor-date");
    //设置点击效果
	const [isActivate, setActivate] = useState(false);

	useEffect(() => {
		setMoodStyle(() => {
			let name =
				props.curIndex === props.index
					? `vigor-${props.status}__active`
					: `vigor-${props.status}`;
			if (isActivate) {
				return `vigor vigor-create ${name}`;
			}
			return `vigor ${name}`;
		});
	}, [props, isActivate]);

	useEffect(() => {
		setDayStyle(() => {
			let style = "vigor-date";
			if (isToday) {
				style = "vigor-date vigor-date__today";
			} else if (props.curIndex === props.index) {
				style = `vigor-date vigor-date__${props.status}`;
			}
			return style;
		});
	}, [props, isToday]);

	const onClick = () => {
		props.onSelect(props.index);
		setActivate(true); //激活
	};

	return (
		<div className={moodStyle} style={calculateHeight} onClick={onClick}>
			{<span className="vigor-score">{props.status !== 'unknownAvatar' && handledScore}</span> }
			{<img className="vigor-face" src={faceIcon} alt="" />}
			<p className={dayStyle}>
				<span className="vigor-date__day">{props.day}</span>
			</p>
		</div>
	);
};

export default DayStatus;
