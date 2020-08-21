// 获取从购物车传来的商品id
let cartId = Cookies.get("settleIds");
let fromAddressId = Cookies.get("addressId");
// 非常规进入
if (!cartId) {
	window.location.replace("../index/index.html");
}

// 获取数据库数据
let data = JSON.parse(sessionStorage.seoDatas);
// 购物车
let cartList = data.cartList;
// 地址
let addressList = data.addressList;
// 商品
let productList = data.detailList;
// 订单
let orderList = data.orderList;
// 获取当前登陆的用户名
let userName = Cookies.get("userName");

/*--------------收货地址-----------*/

// 当前选择为收货的地址
let addressId = 0;

// 临时选择收货id
let tempId = 0;

/*--------------提交商品订单-----------*/
// 商品总金额
let account = 0;

// 商品个数
let pnum = 0;

// 订单的商品详情
let detail = [];
// 将传过来的字符串转化为数组
cartIds = cartId.split(",").map(item => parseInt(item));
// 首次显示的地址容器
let mCon01 = document.querySelector("div.mCon01");
// 地址渲染
(function() {
	let hasAddress = document.querySelector("div.hasAddress");
	// 筛选用户名下的收货地址
	// 先渲染默认收货地址
	// 获取默认收货地址
	let allAddress = addressList.filter(item => item.userName === userName);
	if (allAddress.length === 0) {
		document.querySelector("div.noAddress").classList.add("show");
		hasAddress.classList.remove("show");
		return;
	}
	let defaultAdd = addressList.find(item => item.userName === userName && item.isDefault === true);

	if (!defaultAdd) {
		// 则在这里选择不是默认的第一个
		defaultAdd = allAddress[0];
		fromAddressId = defaultAdd.id;
	}
	if (fromAddressId) {
		fromAddressId = parseInt(fromAddressId);
		defaultAdd = addressList.find(item => item.userName === userName && item.id === fromAddressId);
	}
	// 选中的id
	addressId = defaultAdd.id;

	/*--------------默认第一个显示的地址-----------*/
	// 调用默认显示的数据公共函数
	defaultData(defaultAdd);
	// 所有地址展示

	// 全部数据获取
	// 选择该容器
	/*--------------修改地址-----------*/
	let address_list = document.querySelector(".mCon02>ul.address-list");
	allAddress.forEach(item => {
		address_list.innerHTML +=
			`
		
		<li data-id="${item.id}">
			<div>
				<p>${item.receiveName}</p>
				<p>${item.receiveRegion}&nbsp${item.receiveAddress}</p>
				<p>${item.receivePhone.replace(/^(\d+)(\d{4})(\d{3})$/,"$1****$3")}</p>
				<p class="default${item.isDefault?' show' : ''}">默认地址</p>
				<img class="select-img${fromAddressId?(item.id === fromAddressId ? ' active' : ''):(item.isDefault?' active' : '')}" src="img/address-list.png" />
			</div>
		</li>
		
		`;
	})
})();


/*渲染商品清单---提交商品订单*/
(function() {
	/*--------------渲染商品清单-----------*/
	let tbody = document.querySelector("table.table-cart>tbody");
	
	// 储存从购物车页面传来的数据
	let curentUserCart = [];
	cartIds.forEach(cartId =>{
		curentUserCart.push(cartList.find(item => item.id === cartId));
	})
	// let curentUserCart = cartList.filter(item => item.name === userName);
	let curentUserProduct;
	curentUserCart.forEach(item => {
		
		// 定义一个临时商品数量 用于计算总价格
		let tempCount;
		// 计算商品总数量
		pnum += item.count;
		tempCount = item.count;
		curentUserProduct = productList.find(pitem => pitem.pid === item.pid);
		// 计算商品的总价格
		account += tempCount * parseInt(curentUserProduct.pri);
		
		// 记录该订单的每个商品信息 只把重要信息存入即可 都可以通过pid来获取
		detail.push({
			pid : item.pid,
			count : item.count,
			prices : curentUserProduct.pri
		});
		let tr = document.createElement("tr");
		tr.innerHTML =
			`
		<td>
			${curentUserProduct.name}
		</td>
		<td>中国大陆</td>
		<td>${curentUserProduct.pri}元</td>
		<td>${item.count}</td>
		<td>${item.date}</td>
		<td>${(item.count * curentUserProduct.pri).toString().replace(/\B(?=(\d{3})+$)/g,',')}元</td>
		
		`;
		tr.setAttribute("data-id", item.id)
		tbody.appendChild(tr);
	})


	/*--------------提交商品订单部分渲染-----------*/
	let submit_order = document.querySelector("div.submit-order");

	submit_order.innerHTML +=
		`
	
	<div id="" class="order-title">
		<p>${pnum}件商品，商品金额总计：${account.toString().replace(/\B(?=(\d{3})+$)/g,',')}元</p>
		<p>0件包装，包装金额总计：0元</p>
		<p>运费：20元</p>
	</div>
	<div id="" class="ordert-money">
		<p class="should-pay">应付总额：<span class="" id="">
			${(account + 20).toString().replace(/\B(?=(\d{3})+$)/g,',')}
		</span>元</p>
		<p class="order-btn">
			<span id="" class="return-btn">
				<a href="../cart/cart.html">
					返回修改购物车
				</a>
			</span>
			<span id="" class="submit-btn">
				提交订单
			</span>
		</p>
	</div>
	
	
	
	`;

})();


// 默认显示的 地址公共函数
function defaultData(defaultAdd) {
	// 渲染第一个显示的地址地址
	mCon01.innerHTML =
		`
	
	<p><span class="name">${defaultAdd.receiveName}</span>&nbsp<span class="iphone">${defaultAdd.receivePhone.replace(/^(\d+)(\d{4})(\d{3})$/,"$1****$3")}</span></p>
	
	<p class="address">${defaultAdd.receiveRegion} &nbsp;${defaultAdd.receiveAddress}</p>
	
	`;
}



// 各种点击事件
(function() {
	// 点击修改按钮,让默认的一条消失,所有列表出来
	// let mCon01 = document.querySelector("div.mCon01");
	let mCon02 = document.querySelector("div.mCon02");
	// 修改地址
	let update_btn = document.querySelector("h4>span.update-btn");
	// 新增地址
	let add_btn = document.querySelector("h4>span.add_btn");
	// 提交订单
	let submit_btn = document.querySelector("p.order-btn>span.submit-btn");
	update_btn.onclick = function() {
		if (mCon02.classList.contains("show")) return;
		mCon01.classList.remove("show");
		mCon02.classList.add("show");
	}
	// 点击新增收货地址按钮,跳转至地址管理
	add_btn.onclick = function() {
		Cookies.set("isFromOrder", "sure");
		window.location.href = "../address/address.html";
	}
	// 保存修改按钮

	let save_btn = document.querySelector(".save-btn-wrapper>span.save-btn");
	save_btn.onclick = function() {
		// 如果刚开始没有选中任何一个就保存了,则addressId是默认显示那个的id
		if (tempId) {
			addressId = tempId;
		}
		// 通过选中的地址id来查找数据并渲染
		let addressData = addressList.find(item => item.id === addressId);
		// 调用渲染第一个数据的公共函数
		defaultData(addressData);

		// 根据用户选择的地址,作为用户常用地址,每次进入该页面优选显示该地址
		Cookies.set("addressId", addressId);
		mCon01.classList.add("show");
		mCon02.classList.remove("show");
	}

	// 全部的地址列表点击事件
	document.querySelectorAll(".mCon02>ul.address-list>li").forEach(item => {
		item.onclick = function() {
			// 如果已经选中
			if (this.querySelector("img.select-img").classList.contains("active")) return;

			// 有可能一个默认地址都没有,为了保险
			this.parentNode.querySelectorAll("li").forEach(tr => {
				tr.querySelector("img.select-img").classList.remove("active");
			})
			// 将其选中
			this.querySelector("img.select-img").classList.add("active");
			tempId = parseInt(item.dataset.id);
		}
	})

	// 提交按钮的点击事件
	submit_btn.onclick = function() {
		if (addressId === 0) {
			Message.alert("亲~ 您还没有添加收货地址哦");
			return;
		}

		// 提交订单以后,删除数据库对应的购物记录
		// console.log(cartIds);
		cartIds.forEach(id => {
			let index = cartList.findIndex(cartitem => cartitem.id === id);
			cartList.splice(index, 1);
		})

		// 构造一个 新的订单push到orderlist当中
		let id = orderList.length > 0 ? orderList[orderList.length -1].id + 1 : 1;
		// 通过当前日期毫秒数+1000-10000随机数组合成,订单编号
		let serialNumber = ((Math.floor(Math.random()*9000) +1000).toString() + Date.now());
		// 添加一条订单
		orderList.push({
			id : id,
			serialNumber : serialNumber,
			userName : userName,
			addressId : addressId,
			detail : detail,
			account : account,
			date : new Date().getTime(),
			isPlay : false
		})
		
		// 将此订单更新到数据库
		sessionStorage.seoDatas = JSON.stringify(data);
		
		// 删除从购物车传来的 选中的商品id
		Cookies.remove("settleIds");
		window.location.replace(`../pay/pay.html?orderId=${id}`);
	}

})();
