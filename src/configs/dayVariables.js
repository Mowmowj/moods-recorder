export const weeks = new Map([
	[0, "日"],
	[1, "一"],
	[2, "二"],
	[3, "三"],
	[4, "四"],
	[5, "五"],
	[6, "六"]
]);

export const judgeIsToday = day => {
	return weeks.get(new Date().getDay()) === day;
};

const HAPPY = "happy";
const SOHAPPY = "soHappy";
const UNKNOW = "unknownAvatar";
export const weekMoods = [
	{
		day: "六",
		score: 86,
		status: HAPPY
	},
	{
		day: "日",
		score: 80,
		status: HAPPY
	},
	{
		day: "一",
		score: null,
		status: UNKNOW
	},
	{
		day: "二",
		score: 90,
		status: SOHAPPY
	},
	{
		day: "三",
		score: 92,
		status: SOHAPPY
	},
	{
		day: "四",
		score: 97,
		status: SOHAPPY
	},
	{
		day: "五",
		score: 81,
		status: HAPPY
	}
];
