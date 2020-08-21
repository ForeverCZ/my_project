// 菜单
let menuList = [{
	id: 1,
	name: "首页",
	fid: 0
}, {
	id: 2,
	name: "包袋",
	fid: 0
}, {
	id: 3,
	name: "腕表",
	fid: 0
}, {
	id: 4,
	name: "珠宝首饰",
	fid: 0
}, {
	id: 5,
	name: "服饰",
	fid: 0
}, {
	id: 6,
	name: "鞋履",
	fid: 0
}, {
	id: 7,
	name: "配饰",
	fid: 0
}, {
	id: 8,
	name: "运动",
	fid: 0
}, {
	id: 9,
	name: "家居",
	fid: 0
}, {
	id: 10,
	name: "美妆",
	fid: 0
}, {
	id: 11,
	name: "生活方式",
	fid: 0
}, {
	id: 12,
	classification: {
		name: "分类",
		items: [{
			name: "男士包装",
			cid: 1
		}, {
			name: "女士包装",
			cid: 2
		}, {
			name: "钱包",
			cid: 3
		}, {
			name: "手拿包",
			cid: 4
		}, {
			name: "斜挎包",
			cid: 5
		}, {
			name: "拉杆箱",
			cid: 6
		}, {
			name: "双肩包",
			cid: 7
		}, {
			name: "手提包",
			cid: 8
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "爱马仕",
			cid: 9
		}, {
			name: "香奈儿",
			cid: 10
		}, {
			name: "迪奥",
			cid: 11
		}, {
			name: "路易威登",
			cid: 12
		}, {
			name: "古驰",
			cid: 13

		}, {
			name: "圣罗兰",
			cid: 14
		}, {
			name: "宝格丽",
			cid: 15
		}, {
			name: "蔻驰",
			cid: 16
		}]
	},
	fid: 2
}, {
	id: 13,
	classification: {
		name: "分类",
		items: [{
			name: "男士",
			cid: 17
		}, {
			name: "女士",
			cid: 18
		}, {
			name: "机械腕表",
			cid: 19
		}, {
			name: "石英腕表",
			cid: 20
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "百达翡丽",
			cid: 21
		}, {
			name: "江诗丹顿",
			cid: 22
		}, {
			name: "宝柏",
			cid: 23
		}, {
			name: "宝玑",
			cid: 24
		}, {
			name: "朗格",
			cid: 25
		}, {
			name: "萧邦.",
			cid: 26
		}, {
			name: "劳力士",
			cid: 27
		}, {
			name: "浪琴",
			cid: 28
		}]
	},
	fid: 3
}, {
	id: 14,
	classification: {
		name: "分类",
		items: [{
			name: "男装",
			cid: 29
		}, {
			name: "女装",
			cid: 30
		}, {
			name: "男士卫衣",
			cid: 31
		}, {
			name: "男士裤装",
			cid: 32
		}, {
			name: "男士夹克",
			cid: 33
		}, {
			name: "女式连衣裙",
			cid: 34
		}, {
			name: "女式外套",
			cid: 35
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "博柏利",
			cid: 36
		}, {
			name: "Emporio Armani",
			cid: 37
		}, {
			name: "范思哲",
			cid: 38
		}, {
			name: "MaxMara"
		}, {
			name: "杜嘉班纳"
		}, {
			name: "PRADA."
		}, {
			name: "纪梵希"
		}, {
			name: "圣罗兰"
		}, {
			name: "华伦天奴"
		}, {
			name: "圣罗兰"
		}, {
			name: "丝黛拉麦卡妮"
		}]
	},
	fid: 4
}, {
	id: 15,
	classification: {
		name: "分类",
		items: [{
			name: "平底鞋"
		}, {
			name: "靴子"
		}, {
			name: "皮鞋"
		}, {
			name: "拖鞋"
		}, {
			name: "高跟鞋"
		}, {
			name: "运动鞋"
		}, {
			name: "凉鞋"
		}, {
			name: "运动鞋"
		}, {
			name: "乐福鞋"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "古驰"
		}, {
			name: "巴黎世家"
		}, {
			name: "Jimmy Choo."
		}, {
			name: "马诺洛伯拉尼克"
		}, {
			name: "菲拉格慕"
		}, {
			name: "博柏利."
		}, {
			name: "华伦天奴"
		}, {
			name: "Emporio Armani"
		}, {
			name: "斯图尔特韦茨曼."
		}, {
			name: "塞乔罗西"
		}, {
			name: "纪梵希"
		}, {
			name: "Golden Goose"
		}]
	},
	fid: 5
}, {
	id: 16,
	classification: {
		name: "分类",
		items: [{
			name: "墨镜"
		}, {
			name: "眼镜框"
		}, {
			name: "腰带"
		}, {
			name: "围巾"
		}, {
			name: "丝巾"
		}, {
			name: "雨伞"
		}, {
			name: "挂饰"
		}, {
			name: "帽子"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "爱马仕"
		}, {
			name: "路易威登"
		}, {
			name: "古驰"
		}, {
			name: "菲拉格嘉"
		}, {
			name: "范思哲"
		}, {
			name: "博柏利."
		}, {
			name: "万宝龙"
		}, {
			name: "雷朋"
		}, {
			name: "普拉达"
		}]
	},
	fid: 6
}, {
	id: 17,
	classification: {
		name: "分类",
		items: [{
			name: "男士"
		}, {
			name: "女士"
		}, {
			name: "机械腕表"
		}, {
			name: "石英腕表"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "百达翡丽"
		}, {
			name: "江诗丹顿"
		}, {
			name: "宝柏"
		}, {
			name: "宝玑"
		}, {
			name: "朗格"
		}, {
			name: "萧邦."
		}, {
			name: "劳力士"
		}, {
			name: "浪琴"
		}]
	},
	fid: 7
}, {
	id: 18,
	classification: {
		name: "分类",
		items: [{
			name: "男士"
		}, {
			name: "女士"
		}, {
			name: "机械腕表"
		}, {
			name: "石英腕表"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "百达翡丽"
		}, {
			name: "江诗丹顿"
		}, {
			name: "宝柏"
		}, {
			name: "宝玑"
		}, {
			name: "朗格"
		}, {
			name: "萧邦."
		}, {
			name: "劳力士"
		}, {
			name: "浪琴"
		}]
	},
	fid: 8
}, {
	id: 19,
	classification: {
		name: "分类",
		items: [{
			name: "男士"
		}, {
			name: "女士"
		}, {
			name: "机械腕表"
		}, {
			name: "石英腕表"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "百达翡丽"
		}, {
			name: "江诗丹顿"
		}, {
			name: "宝柏"
		}, {
			name: "宝玑"
		}, {
			name: "朗格"
		}, {
			name: "萧邦."
		}, {
			name: "劳力士"
		}, {
			name: "浪琴"
		}]
	},
	fid: 9
}, {
	id: 20,
	classification: {
		name: "分类",
		items: [{
			name: "男士"
		}, {
			name: "女士"
		}, {
			name: "机械腕表"
		}, {
			name: "石英腕表"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "百达翡丽"
		}, {
			name: "江诗丹顿"
		}, {
			name: "宝柏"
		}, {
			name: "宝玑"
		}, {
			name: "朗格"
		}, {
			name: "萧邦."
		}, {
			name: "劳力士"
		}, {
			name: "浪琴"
		}]
	},
	fid: 10
}, {
	id: 21,
	classification: {
		name: "分类",
		items: [{
			name: "豪车租赁"
		}, {
			name: "飞机游艇"
		}, {
			name: "旅行"
		}, {
			name: "美容与健康"
		}]
	},
	brand: {
		name: "品牌",
		items: [{
			name: "OXYGYM"
		}, {
			name: "青岛乘风破浪帆船俱乐部"
		}]
	},
	fid: 11
}]
// 商品记录
let detailList = [{
		id: 1,
		pid: 1,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1888,
		rate: 500,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 2,
		pid: 2,
		cid: 2,
		name: "ARMANI EXCHANGE 白色 男士动物图案印花短袖T恤 3HZTGX-ZJH4Z-7189 2020年春夏",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "2500",
		sale: 1222,
		rate: 520,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 2,
		avatar: "http://pic11.secooimg.com/product/500/500/2020/0623/3e0439b6fdb441f0a8b27a69b9574c8e.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0623/3e0439b6fdb441f0a8b27a69b9574c8e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0623/d78ad132b5ac4f88b9533bde9a2a2fd1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0623/a4f7fa5613b94ac79c567e17f7826e29.jpg"

		]

	},
	{
		id: 3,
		pid: 3,
		cid: 2,
		name: "Emporio Armani/安普里奥阿玛尼 藏蓝色 男士EA图案印花丝光棉圆领短袖T恤 3H1TB7-1J30Z-0922 2020年春夏",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "2999",
		sale: 1218,
		rate: 689,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 3,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0628/deb64e2d544d4e64a336994ecebdd4ac.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0628/deb64e2d544d4e64a336994ecebdd4ac.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0628/93db97f4995746a8b6486dbe37c0a887.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0628/afbaca4c84df4c38a7241f9680471e0f.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0628/144956e0e1814c5daf8d3021a427f394.jpg"
		]

	},
	{
		id: 4,
		pid: 4,
		cid: 3,
		name: "ARMANI EXCHANGE 蓝色 男士环保系列标语印花短袖T恤 3HZTCA-ZJ3DZ-9543 2020年春夏",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "3900",
		sale: 178,
		rate: 50,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 5,
		avatar: "http://pic11.secooimg.com/product/80/80/2020/0709/26b91ee58c7d4f5984171e3dd9423f50.jpg",
		imgs: ["http://pic11.secooimg.com/product/80/80/2020/0709/26b91ee58c7d4f5984171e3dd9423f50.jpg",
			"http://pic11.secooimg.com/product/80/80/2020/0709/f995ea42cd974b9dacee351e92515b92.jpg",
			"http://pic11.secooimg.com/product/80/80/2020/0709/21261d9d02484dee9f30d1be86a46530.jpg",
			"http://pic11.secooimg.com/product/80/80/2020/0709/4b31dfd8b43f4979abff43f970d64064.jpg",
			"http://pic11.secooimg.com/product/80/80/2020/0709/e1beaa3ada6544c1a024796fca0a7bf9.jpg"
		]

	},
	{
		id: 5,
		pid: 5,
		cid: 4,
		name: "2020秋冬新品HOGAN/HOGAN女士牛皮ActiveOne系列运动鞋",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1768,
		rate: 666,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 6,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0608/8334d94a18204cb2be920e69c2c413f2.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0608/8334d94a18204cb2be920e69c2c413f2.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0608/1b42132bdb6e43d1bb25c9c20d6a8ac4.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0608/176f6970c1cc4180b051f91365b8ae81.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0608/943aa8cc29e54a7db32f503cd3fe1958.jpg"
		]

	},
	{
		id: 6,
		pid: 6,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 11828,
		rate: 777,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 7,
		pid: 7,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 178788,
		rate: 563,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 8,
		pid: 8,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 16768,
		rate: 510,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 9,
		pid: 9,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 185658,
		rate: 231,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 10,
		pid: 10,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 18688,
		rate: 320,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 11,
		pid: 11,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1828,
		rate: 540,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 12,
		pid: 12,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1188,
		rate: 580,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 13,
		pid: 13,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1898,
		rate: 320,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 14,
		pid: 14,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 854,
		rate: 136,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 15,
		pid: 15,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 10988,
		rate: 98,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 16,
		pid: 16,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 19008,
		rate: 211,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 17,
		pid: 17,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 19088,
		rate: 502,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 18,
		pid: 18,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1088,
		rate: 590,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 19,
		pid: 19,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1788,
		rate: 876,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 20,
		pid: 20,
		cid: 1,
		name: "2020秋冬Tod’s/托德斯男士牛皮豆豆鞋XXM0GW0CT55D90B999",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "4000",
		sale: 1808,
		rate: 987,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "https://pic11.secooimg.com/product/300/300/2020/0709/715621ccd9834ed98df3daa94c32765c.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/1c9dac1b5f9c4916a8c3ab9989e417f1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/a7aa540280544d9a9fa47f6326ce6d9e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0709/9860c10ce995453aaf52835ddecabd06.jpg"

		]

	},
	{
		id: 21,
		pid: 21,
		cid: 21,
		name: "Patek Philippe/百达翡丽  复杂功能系列 星空苍穹图 6104R-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "2975075",
		sale: 8982,
		rate: 346,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0304/9ead7ac392e6445b9bf5205b1119ff46.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0304/9ead7ac392e6445b9bf5205b1119ff46.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/e328a134f6ec42f9a52ecd06f3d1431f.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/34ac7158f9d94db5b3f97383edc7466d.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/1004dec864d4420a8ce22a2e0b26e521.jpg"

		]

	},
	{
		id: 22,
		pid: 22,
		cid: 21,
		name: "Patek Philippe/百达翡丽  Nautilus系列 男士自动机械腕表 5724R-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "1354200",
		sale: 789,
		rate: 999,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0304/50d9d176a98a4a4da8515547c9ec668e.jpg",
		imgs: ["http://pic11.secooimg.com/product/80/80/2020/0304/50d9d176a98a4a4da8515547c9ec668e.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/f7ec14270ba64ff887cdae83e0ce8159.jpg",
			"http://pic11.secooimg.com/product/80/80/2020/0304/3225b9033d9149b19c2312931ed5ee4d.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/2cb22bf8232f44c0939512ec60dbf136.jpg"

		]

	}, {
		id: 23,
		pid: 23,
		cid: 21,
		name: "PatekPhilippe/百达翡丽复杂功能系列男士自动机械腕表5396R-014",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "421234",
		sale: 1807,
		rate: 666,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/50/10/2e30fadef7e2403a8eb2fc0baee0aed3.png",
		imgs: ["http://pic11.secooimg.com/product/500/500/99/98/cbc171e6b92b45f997aef6ddaf674ae6.jpg",
			"http://pic11.secooimg.com/product/500/500/10/54/f6bbdd6e2530400881b377f353a60cab.jpg"
		]

	}, {
		id: 24,
		pid: 24,
		cid: 21,
		name: "Patek Philippe/百达翡丽  复杂功能系列 万年历功能 男式自动机械腕表5159R-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "645678",
		sale: 899,
		rate: 89,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0304/17dd4c0c6b034b85bc375f1de94ddc05.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0304/17dd4c0c6b034b85bc375f1de94ddc05.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/40b1834e198c44289def2f21ce781974.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/766372a76c6f4cbe98aa325100590e41.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/5d171d2c33654a14b2e06956a11742fb.jpg"

		]

	}, {
		id: 25,
		pid: 25,
		cid: 21,
		name: "Patek Philippe/百达翡丽  复杂功能系列 星空苍穹图  6102R-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "2666789",
		sale: 89,
		rate: 110,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0304/9d01f9256fda4e6c9d1be9750f124b23.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0304/9d01f9256fda4e6c9d1be9750f124b23.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/e0f59c04d70e411db932b77edb67ecb1.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0304/01b4548052c746379b41cbafb2c928ff.jpg"
		]

	}, {
		id: 26,
		pid: 26,
		cid: 21,
		name: "Patek Philippe/百达翡丽  Nautilus系列 男士自动机械腕表 5711/1A-010",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "595078",
		sale: 22,
		rate: 890,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0304/c4c586271d854c0e90d27549a295209b.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0304/0760d4d215de4b49b5410dbef8ed6f94.jpg"

		]

	}, {
		id: 27,
		pid: 27,
		cid: 21,
		name: "Patek Philippe/百达翡丽 复杂功能计时系列自动机械腕表 5180R",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "733522",
		sale: 15200,
		rate: 590,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/52/54/46ee79724e3545baa096a4642a7e24da.png",
		imgs: ["http://pic11.secooimg.com/product/500/500/52/54/46ee79724e3545baa096a4642a7e24da.png",
			"http://pic11.secooimg.com/product/500/500/54/98/6b147b97b19f41bc9ff35001ff24d883.png",
			"http://pic11.secooimg.com/product/500/500/57/54/96683eaf41fd448a9c35d2d73a41db8e.png"

		]

	}, {
		id: 28,
		pid: 28,
		cid: 21,
		name: "Patek Philippe/百达翡丽 限量 复杂功能系列 4948G-010 女款",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "500324",
		sale: 789,
		rate: 764,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/10/10/ffc090c2512744f580a953d36125408b.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/10/10/ffc090c2512744f580a953d36125408b.jpg",
			"http://pic11.secooimg.com/product/500/500/99/51/c3ca38f98d114963a3a0e2adc8f0023c.jpg"

		]

	},
	{
		id: 29,
		pid: 29,
		cid: 21,
		name: "Patek Philippe/百达翡丽Calatrava系列男士自动机械腕表 6006G-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "500324",
		sale: 789,
		rate: 764,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/49/53/15a2015a04494a70a20602a4160cd9d5.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/97/10/af1c6ccc7abd47e88c0336e6362474ca.jpg",
			"http://pic11.secooimg.com/product/500/500/98/49/b1e68d06dc4f4cd8869bfc821008de87.jpg"
		]
	
	},
	{
		id: 30,
		pid: 30,
		cid: 21,
		name: "Patek Philippe/百达翡丽 复杂功能计时系列自动机械女士机械腕表4947R-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "500324",
		sale: 789,
		rate: 764,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/98/54/b61884cde0b148ca98801b2785c683b9.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/98/54/b61884cde0b148ca98801b2785c683b9.jpg",
			"http://pic11.secooimg.com/product/500/500/10/98/fb3ee4f4641b43019c6d5dc3eef1ebe0.jpg",
			"http://pic11.secooimg.com/product/500/500/53/53/554ec23a4c4e461fa2c0206d95f219bb.jpg",
			"http://pic11.secooimg.com/product/500/500/55/51/73dc3579c00a404faf0a7fef6e0f650f.jpg",
			"http://pic11.secooimg.com/product/500/500/53/52/5477e998f04f48c29de747946f28b290.jpg"
	
		]
	
	},
	{
		id: 31,
		pid: 31,
		cid: 21,
		name: "Patek Philippe/百达翡丽  Nautilus系列 女士自动机械腕表 7118/1200A-001",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "500324",
		sale: 789,
		rate: 764,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 7,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0305/8863623b9eea4523bba9ab99858be216.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0305/8863623b9eea4523bba9ab99858be216.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/f515b714fcc84333a3da2385665043fb.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/62feaf39ac694a04a0764de444e24718.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/0c3f594fb6be4b39badc91c87a02f879.jpg"
	
		]
	
	},
	{
		id: 32,
		pid: 32,
		cid: 21,
		name: "Patek Philippe/百达翡丽 复杂功能计时系列世界时自动机械腕表5230R-012",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "500324",
		sale: 789,
		rate: 764,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/53/51/53efcde2d201483da53ba97ea90ca988.jpg",
		imgs: ["http://pic11.secooimg.com/product/500/500/53/51/53efcde2d201483da53ba97ea90ca988.jpg",
			"http://pic11.secooimg.com/product/500/500/55/56/78e447eaf06c414687a27fccf1732118.jpg",
			"http://pic11.secooimg.com/product/500/500/56/52/84a1251209474338a63dfcce00ad1607.jpg",
			"http://pic11.secooimg.com/product/500/500/56/53/85974c450c184ce49f94de15b2c467ac.jpg"
		]
	
	},
	{
		id: 33,
		pid: 33,
		cid: 21,
		name: "Patek Philippe/百达翡丽  Nautilus系列 女士自动机械腕表  7118-1200A-010",
		desc: "【官方正品】本品牌尺码偏大半码，购买时可比平常尺码偏小半码",
		pri: "500324",
		sale: 789,
		rate: 764,
		locationInfo: "香港",
		information: "自营",
		size: ["欧码35", "欧码35.5", "欧码36", "欧码36.5", "欧码37", "欧码37.5", "欧码38", "欧码38.5"],
		surplus: 1,
		avatar: "http://pic11.secooimg.com/product/240/240/2020/0306/0b99fb69476f41ba87ce79c58320d3e0.png",
		imgs: ["http://pic11.secooimg.com/product/500/500/2020/0305/67a30ffd951b4b5f8b142770cea7bdbc.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/1adedbfcddf1407da5ddcf24da198680.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/a25a9fe72d874049a97c0bb7f0e6e054.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/67a30ffd951b4b5f8b142770cea7bdbc.jpg",
			"http://pic11.secooimg.com/product/500/500/2020/0305/dd1d24082fd64d12889f6451d86d10b0.jpg"
	
		]
	
	}
]
// 添加到购物车的记录
let cartList = [{
		id: 1, //购物记录 用于删除
		name: "root1",
		pid: 1, //购买的商品编号
		count: 4,
		date: "2020-08-01 18:00:00"

	}, {
		id: 2, //购物记录 用于删除
		name: "root2",
		pid: 1, //购买的商品编号
		count: 2,
		date: "2020-08-05 16:00:00"

	}, {
		id: 3, //购物记录 用于删除
		name: "root1",
		pid: 3, //购买的商品编号
		count: 4,
		date: "2020-08-01 11:00:00"

	}, {
		id: 4, //购物记录 用于删除
		name: "root1",
		pid: 4, //购买的商品编号
		count: 1,
		date: "2020-08-02 14:00:00"

	},
	{
		id: 5, //购物记录 用于删除
		name: "root3",
		pid: 4, //购买的商品编号
		count: 2,
		date: "2020-08-05 14:00:00"

	}
]
// 用户数据
let userList = [{
		userName: "root1",
		pwd: "12345678",
		sex: 1,
		avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059299797&di=cbbe51d50c7820cab2ee4ef2026ec9fd&imgtype=0&src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg",
		phone: "18974741730"
	}, {
		userName: "root2",
		pwd: "12345678",
		sex: 1,
		avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059299797&di=cbbe51d50c7820cab2ee4ef2026ec9fd&imgtype=0&src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg",
		phone: "18974741731"
	}, {
		userName: "root5",
		pwd: "12345678",
		sex: 1,
		avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059299797&di=cbbe51d50c7820cab2ee4ef2026ec9fd&imgtype=0&src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg",
		phone: "18974741732"
	},
	{
		userName: "root6",
		pwd: "12345678",
		sex: 1,
		avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597059299797&di=cbbe51d50c7820cab2ee4ef2026ec9fd&imgtype=0&src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg",
		phone: "18974741733"
	}
]
// 地址记录
let addressList = [{
	id: 1, //唯一标识 用来删除对应地址记录
	userName: "chenzheng",
	receiveName: "陈征",
	receivePhone: "18974741730",
	receiveRegion: "山东省 青岛市 城阳区 城阳街道",
	receiveAddress: "孔楼村",
	isDefault: true
}, {
	id: 2,
	userName: "chenzheng",
	receiveName: "宇哥",
	receivePhone: "18974741731",
	receiveRegion: "山东省 青岛市 城阳区 流亭街道",
	receiveAddress: "鬼子村",
	isDefault: false
}, {
	id: 3,
	userName: "chenzheng",
	receiveName: "靓仔",
	receivePhone: "18974741732",
	receiveRegion: "山东省 青岛市 城阳区 上马街道",
	receiveAddress: "西瓜村",
	isDefault: false
}, {
	id: 4,
	userName: "chenzheng",
	receiveName: "康康",
	receivePhone: "18974741733",
	receiveRegion: "山东省 青岛市 城阳区 夏庄街道",
	receiveAddress: "西瓜村",
	isDefault: false
}]
// 订单记录
let orderList = [];
// 收藏记录
let loveList = [{
	name:"chenzheng",
	loveData:[{
		pid : 4,
		time : Date.now()
	},{
		pid : 4,
		time : Date.now()
	},{
		pid : 4,
		time : Date.now()
	},{
		pid : 4,
		time : Date.now()
	},{
		pid : 4,
		time : Date.now()
	}]
}];
let seoDatas = {
	menuList,
	detailList,
	userList,
	cartList,
	addressList,
	orderList

}
// 存储到localStorage --- 如果当前没有存数据则存储，否则。。。
if(!sessionStorage.seoDatas){
	sessionStorage.seoDatas = JSON.stringify(seoDatas);
}
// 取数据
// let categoryDatas = JSON.parse(sessionStorage.seoDatas).menuList;
// 存储到localStorage
// sessionStorage.setItem(JSON.stringify(seoDatas))
