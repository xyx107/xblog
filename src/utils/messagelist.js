let nameList = [
	'电风**啦',
	'你***包',
	'十二****就',
	'高****爸',
	'南城旧****梦',
	'别理我理我****我',
	'诺****曦',
	'悲欢****女',
	'一枫****书',
	'尹雨****沫',
	'呆橘****橘',
	'困****倦',
];
 
let prizeList = [
	'腾讯超高级会员',
	'华为会员',
	'爱奇艺会员',
	'百度高级会员',
	'小米会员',
	'苏宁会员',
	'苹果高级会员',
	'中兴会员',
];
 
let messageList = [];
for( let i = 0 ; i < 5 ; i++ ){
	messageList.push({
		name: nameList[Math.floor(Math.random() * nameList.length)],
		prizeName: prizeList[Math.floor(Math.random() * prizeList.length)]
	})
};
 
export default messageList;