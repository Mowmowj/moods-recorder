//星期哈希表
export const weeks = new Map([
	[0, "日"],
	[1, "一"],
	[2, "二"],
	[3, "三"],
	[4, "四"],
	[5, "五"],
	[6, "六"]
]);

//计算是否是今天
export const judgeIsToday = day => {
	return weeks.get(new Date().getDay()) === day;
};


