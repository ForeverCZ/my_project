// 获取数据库数据
let data = JSON.parse(sessionStorage.seoDatas);
// 订单列表
let orderList = data.orderList;
// 商品列表
let productList = data.detailList;
console.log(orderList)
// 已支付,暂无订单
let pay_notice = document.querySelector("div.pay-notice");
// 未支付,暂无订单
let no_pay_notice = document.querySelector("div.no-pay-notice");

// 选项卡 切换

let options = document.querySelectorAll("div.options>ul>li");
(function() {
	options.forEach((li, index) => {
		li.onclick = function() {
			if (this.classList.contains("active")) return;
			this.parentNode.querySelector("li.active").classList.remove("active");
			document.querySelector("div.pay-list.show").classList.remove("show");
			this.classList.add("active");
			document.querySelectorAll("div.pay-list")[index].classList.add("show");
		}
	})
})();

/*------------------------渲染数据-----------------*/

// 选取需要的元素
// 已经支付
(function() {
	payed();
})();


// 已经支付函数

function payed() {
	let pay_list_data_wrapper = document.querySelector("div.payed>div.pay-list-data-wrapper");
	pay_list_data_wrapper.innerHTML = "";
	let paylist = orderList.filter(item => item.isPlay === true);
	if (paylist.length === 0) {
		pay_notice.classList.add("show");
		return;
	}
	// 翻转数组,从最新时间
	paylist = paylist.reverse();
	paylist.forEach((item, index) => {
		// 创建一个订单包裹器
		let pay_wrapper = document.createElement("div");
		pay_wrapper.classList.add("pay-wrapper");
		let order_time = getTime(item.date);
		pay_wrapper.innerHTML =
			`
		
	<div id="" class="main-num-title" data-id="${item.id}">
		<p><span id="" class="title-num">
				主订单号：${item.serialNumber}
			</span>
			<span id="" class="title-time">
				下单时间：${order_time}
			</span>
			<span id="" class="title-money">
				总费用: ￥${(item.account+20).toString().replace(/\B(?=(\d{3})+$)/g,',')}
			</span></p>
		<p class="del-img"><span id="" class="iconfont icon-delete">
			</span></p>
		</div>
		`;
		let ul = document.createElement("ul");
		item.detail.forEach((item1, index1) => {
			let productData = productList.find(singData => singData.pid === item1.pid);
			// console.log(productData)
			ul.innerHTML +=
				`
			
			<li>
				<div id="" class="pay-desc">
					<div id="" class="desc-left">
						<a href="../detail/detail.html?pid=${productData.pid}">
							<img src="${productData.avatar}">
						</a>
					</div>
					<div id="" class="desc-right">
						<p>${productData.name}</p>
						<p><span id="">
								颜色:白色
							</span>
							<span id="">
								尺码:98
							</span>
						</p>
					</div>
				</div>
				<div id="">
					<span id="">
						￥${item1.prices}
					</span>
				</div>
				<div id="">
					<span id="">
						${item1.count}
					</span>
				</div>
				<div id="">
			
				</div>
			</li>
			
			
			`;

		})
		pay_wrapper.appendChild(ul);

		pay_list_data_wrapper.appendChild(pay_wrapper);



		// 已经支付的所有订单标题-删除按钮
		let main_num_title = document.querySelectorAll("div.payed div.main-num-title")

		main_num_title.forEach((item, index) => {
			item.querySelector("span.icon-delete").onclick = function() {
				let id = parseInt(item.dataset.id);
				// 通过订单id找到id在订单列表中的索引
				let orderIndex = orderList.findIndex(oitem => oitem.id === id);
				// 删除订单列表中该记录
				orderList.splice(orderIndex, 1);
				sessionStorage.seoDatas = JSON.stringify(data);
				payed();
			}
		})

	})

}

// 获取时间函数

function getTime(date) {
	let dateS = new Date(date);
	let year, month, day, hour, minute, second;
	year = dateS.getFullYear();
	month = dateS.getMonth();
	day = dateS.getDay();
	hour = format(dateS.getHours());
	minute = format(dateS.getMinutes());
	second = format(dateS.getSeconds());
	return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}

// 分钟格式化
function format(time) {
	if (time.toString().length === 1)
		return "0" + time;
	else return time;
}
// 选取需要的元素
// 未支付
(function() {
	nopay();
})();

// 未支付函数

function nopay() {
	let paylist = orderList.filter(item => item.isPlay === false);
	let pay_list_data_wrapper = document.querySelector("div.nopayed>div.pay-list-data-wrapper");
	pay_list_data_wrapper.innerHTML = "";
	if (paylist.length === 0) {
		no_pay_notice.classList.add("show");
		return;
	}
	// 翻转数组,从最新时间
	paylist = paylist.reverse();
	paylist.forEach((item, index) => {
		// 创建一个订单包裹器
		let pay_wrapper = document.createElement("div");
		pay_wrapper.classList.add("pay-wrapper");
		let order_time = getTime(item.date);
		pay_wrapper.innerHTML =
			`
		
	<div id="" class="main-num-title" data-id="${item.id}">
		<p><span id="" class="title-num">
				主订单号：${item.serialNumber}
			</span>
			<span id="" class="title-time">
				下单时间：${order_time}
			</span>
			<span id="" class="title-money">
				总费用: ￥${(item.account+20).toString().replace(/\B(?=(\d{3})+$)/g,',')}
			</span></p>
		<p class="del-img"><span id="" class="iconfont icon-delete">
			</span></p>
		</div>
		`;
		let ul = document.createElement("ul");
		item.detail.forEach((item1, index1) => {
			let productData = productList.find(singData => singData.pid === item1.pid);
			console.log(productData)
			ul.innerHTML +=
				`
			
			<li>
				<div id="" class="pay-desc">
					<div id="" class="desc-left">
						<a href="../detail/detail.html?pid=${productData.pid}">
							<img src="${productData.avatar}">
						</a>
					</div>
					<div id="" class="desc-right">
						<p>${productData.name}</p>
						<p><span id="">
								颜色:白色
							</span>
							<span id="">
								尺码:98
							</span>
						</p>
					</div>
				</div>
				<div id="">
					<span id="">
						￥${item1.prices}
					</span>
				</div>
				<div id="">
					<span id="">
						${item1.count}
					</span>
				</div>
				<div id="">
			
				</div>
			</li>
			
			
			`;

		})
		pay_wrapper.appendChild(ul);

		pay_list_data_wrapper.appendChild(pay_wrapper);
	
		
		// 已经支付的所有订单标题-删除按钮
		let main_num_title = document.querySelectorAll("div.nopayed div.main-num-title")
		
		main_num_title.forEach((item, index) => {
			item.querySelector("span.icon-delete").onclick = function() {
				let id = parseInt(item.dataset.id);
				// 通过订单id找到id在订单列表中的索引
				let orderIndex = orderList.findIndex(oitem => oitem.id === id);
				// 删除订单列表中该记录
				orderList.splice(orderIndex, 1);
				sessionStorage.seoDatas = JSON.stringify(data);
				nopay();
			}
		})
	})

}
