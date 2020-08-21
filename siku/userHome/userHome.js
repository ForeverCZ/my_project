let data = JSON.parse(sessionStorage.seoDatas);
let userList = data.userList;
let detailList = data.detailList;
// 获取Cookies里的userName
let userName = Cookies.get("userName");
let addressList = data.addressList;

console.log(detailList);
// 渲染用户数据
(function() {
	let alterInfo_h1 = document.querySelector(".alterInfo_h1");
	let userData = userList.find(user => user.userName === userName);
	alterInfo_h1.innerHTML +=
		`
	<div id="" class="alterInfo_h1-left">
		<img src="${userData.avatar}" >
	</div>
	<div id="" class="alterInfo_h1-right">
		<p>
			<span id="">
				${userData.userName}
			</span>
		</p>
		<p>${userData.sex ?"男":"女"}</p>
		<p><a href="">修改登录密码</a>
		<span id="">
			修改支付密码
		</span>
		</p>
	</div>
	`;
})();

// 渲染用户中心热门推荐-爆款商品-低价商品
(function() {
	// 数据准备
	let hotNum = Math.floor(Math.random() * 15) + 2;
	let popularNum = Math.floor(Math.random() * 18) + 2;
	let lowPriceNum = Math.floor(Math.random() * 15) + 2;
	let hotData = detailList.slice(0, hotNum);
	let popularData = detailList.sort(function(a, b) {
		return b.rate - a.rate;
	}).slice(0, popularNum);
	let lowPriceData = detailList.sort(function(a, b) {
		return parseInt(a.pri) - parseInt(b.pri);
	}).slice(0, lowPriceNum);

	// 在这使用封装好的函数来执行
	// 默认第一个显示
	createDataHot(hotData, "activeShow");
	createDataHot(popularData);
	createDataHot(lowPriceData);
	// 渲染数据
	let liEls = document.querySelectorAll("ul.hot-list>li");
	let hot_wrapper = document.querySelectorAll(".hot-wrapper>div.hot-list-content");
	liEls.forEach((item, index) => {
		item.onclick = function() {
			if (item.classList.contains("show")) return;
			// 选项卡
			this.parentNode.querySelector("li.show").classList.remove("show");
			item.classList.add("show");

			// 展示的数据
			document.querySelector(".hot-wrapper>div.hot-list-content.activeShow").classList.remove("activeShow");
			hot_wrapper[index].classList.add("activeShow");
		}
	})
})();


// 渲染数据公共函数
function createDataHot(datas, activeShow) {

	// 渲染热门推荐
	let hot_wrapper = document.querySelector(".hot-wrapper");
	let divEl = document.createElement("div");
	divEl.classList.add("hot-list-content");
	// 添加activeShow类用于选项卡切换
	if (activeShow) {
		divEl.classList.add("activeShow");
	}
	let ulEl = document.createElement("ul");

	datas.forEach((item, index) => {
		ulEl.innerHTML +=
			`
		<li>
			<div id="">
				<a class="img-wrap" href="../detail/detail.html?pid=${item.pid}"><img src="${item.avatar}"></a>
				<span class="title"><a href="../detail/detail.html?pid=${item.pid}">${item.name}</a></span>
				<p class="price"><span id="">
						寺库价:
					</span>
					<span id="" class="pri">
						￥${item.pri}
					</span>
				</p>
			</div>
		</li>
		`;
	})
	divEl.appendChild(ulEl);
	hot_wrapper.appendChild(divEl);
}

// 退出登录
(function() {
	let btn_exit = document.querySelector(".alterInfo_h2>span.btn-exit");
	btn_exit.onclick = function() {
		Cookies.remove("userName");
		window.location.replace("../index/index.html");
	}
})();
