export const UserInfo = {
    name:'李强'
}
export const weekMoods = [
	{
		day: "六",
		score: 86,
	},
	{
		day: "日",
		score: 80,
	},
	{
		day: "一",
		score: null,
	},
	{
		day: "二",
		score: 90,
	},
	{
		day: "三",
		score: 92,
	},
	{
		day: "四",
		score: 97,
	},
	{
		day: "五",
		score: 81,
	}
];


//平均心情数
const initialInfo = { totalScore: 0, itemCount: 0 };
function addScores({ totalScore, itemCount }, score) {
    return {
        totalScore: totalScore + score,
        itemCount: itemCount + 1
    };
}
const calculateInfo = weekMoods
    .filter(item=>item.score!== null)
    .map((item)=>item.score)
    .reduce(addScores, initialInfo);
    const { totalScore,itemCount } = calculateInfo
    
export const averageMood = Math.round(totalScore/itemCount)


