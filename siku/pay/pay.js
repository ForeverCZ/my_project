// 获取从订单确认页面传来的订单id
let orderId = parseInt(window.location.search.split("=")[1]);
// 获取数据库订单列表
console.log(typeof orderId)
let data = JSON.parse(sessionStorage.seoDatas);
let orderList = data.orderList;
// 通过订单号,筛选订单数据
let orderdata = orderList.find(item => item.id === orderId);
console.log(orderdata);
// 倒计时
let downTimer;
// 支付方式
let payWay = "";
// 渲染订单提交成功
(function() {
	let ordertext02 = document.querySelector("p.ordertext02");
	ordertext02.innerHTML =
		`
	
	<span id="" class="order-num">
		订单号：<span id="">
			${orderdata.serialNumber}
		</span>
	</span>
	<span id="" class="order-money">
		应付金额：<span>${(orderdata.account+20).toString().replace(/\B(?=(\d{3})+$)/g,',')}元</span>
	</span>
	
	
	`;
})();
// 倒计时
(function() {
	let minute_span = document.querySelector("span.minute-span");
	let second_span = document.querySelector("span.second-span");
	// 未来6分钟的毫秒数
	let future_second = 6 * 60 * 1000;
	// 未来时间
	let future_time = orderdata.date + future_second;
	let surpls_time, minute, second;
	downTimer = setInterval(() => {
		// 剩余时间
		surpls_time = future_time - Date.now();
		// 剩余分钟
		minute = parseInt(surpls_time / 1000 / 60);
		// 剩余秒
		second = Math.ceil((surpls_time - minute * 1000 * 60) / 1000);

		minute_span.textContent = format(minute);
		second_span.textContent = format(second);
		
		if (minute === 0 && second === 0) {
			clearInterval(downTimer);
			Message.alert("亲~订单已取消", function() {
				// 直接跳转到我的订单页面
				window.location.replace("../order_list/order_list.html");
			});
		}
	}, 1000)

})();

// 分钟格式化
function format(time) {
	if (time.toString().length === 1)
		return "0" + time;
	else return time;
}

// 选项卡切换

let pay_btn = document.querySelector("p.bNext>span");
(function() {
	// 获取选项卡
	let options = document.querySelectorAll("ul.options>li");
	// 获取信用卡列表
	let cart_list = document.querySelectorAll("div.cart-Wrapper>ul>li");
	options.forEach((li, index) => {
		li.onclick = function() {
			if (this.classList.contains("active"))
				return;
			this.parentNode.querySelector("li.active").classList.remove("active");
			document.querySelector("div.cart-Wrapper>ul>li.show").classList.remove("show");
			this.classList.add("active");
			cart_list[index].classList.add("show");
		}
	})

	// 所有的银行卡片

	let bankPs = document.querySelectorAll("p.bankP");
	bankPs.forEach(item => {
		item.onclick = function() {
			// 点击选中按钮
			this.parentNode.querySelector("input[type=radio]").checked = true;
			// 赋值所属银行
			payWay = this.parentNode.querySelector("input[type=radio]").value;
			if (payWay) {
				pay_btn.classList.add("active");
			}
		}
	})

	// 支付的点击事件
	pay_btn.onclick = function() {
		if (!payWay) return;
		// 修改该订单的支付状态
		orderdata.isPlay = true;
		// 更新到数据库
		sessionStorage.seoDatas = JSON.stringify(data);
		Message.alert("支付成功", function() {
			// 直接跳转到我的订单列表
			window.location.replace("../order_list/order_list.html");
		})
	}
})();
