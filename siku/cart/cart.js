// 获取cookie里的用户名
var userName = Cookies.get("userName");

// 根据用户名找出用户购物车中的商品信息
var data = JSON.parse(sessionStorage.seoDatas);
var productList = data.detailList;
var cartList = data.cartList;

// 1、公共函数更新总价格-总数量
function updateTotalAndAccount() {
	var total = 0,
		account = 0;
	$("table.cart-list>tbody> tr").each(function(index,tr){
		if (tr.dataset.checked === "1") {
				total += parseInt(tr.dataset.account);
				account += parseInt(tr.dataset.price) * parseInt(tr.dataset.account);
			}
	})
	// var trs = document.querySelectorAll("table.cart-list>tbody> tr");
	// var total = 0,
	// 	account = 0;
	// trs.forEach((tr) => {
	// 	if (tr.dataset.checked === "1") {
	// 		total += parseInt(tr.dataset.account);
	// 		account += parseInt(tr.dataset.price) * parseInt(tr.dataset.account);
	// 	}
	// });

	// document.querySelector(".account-wrapper>.account").innerText = account.toString().replace(/\B(?=(\d{3})+$)/g,',');
	// 千分
	document.querySelector(".account-wrapper>.account").innerText = Intl.NumberFormat().format(account);
	document.querySelector(".settle>.total").textContent = total;

}
// 2、公共函数更新复选框
function updateCheckboxAll() {
	var all = document.querySelector("i.checkbox.all");
	// 找出所有未选中的购物记录
	var uncheckRecoder = document.querySelectorAll("tr[data-checked='0']");
	// if (uncheckRecoder.length > 0) {
	// 	all.classList.remove("checked")
	// } else {
	// 	all.classList.add("checked")
	// }
	// ---------代码优化-----------
	all.classList.toggle("checked", uncheckRecoder.length === 0);

}

// 1、展示用户购物车中的商品信息
(function() {
	var userCartList = cartList.filter((item, index) => item.name === userName);
	// 在详情页已经做过判断,进购物车一定有商品,所以就不用判断是否有商品,我的购物车需要展示该页面被迫判断
	if (userCartList.length > 0) {
		document.querySelector(".cart-list-wrapper").classList.add("show");
		document.querySelector(".guess-you-like").classList.add("show");
	} else {
		document.querySelector(".cart-empty").classList.add("show");
	}
	
	// 动态展示数据
	var tBody = document.querySelector(".cart-list>tbody");
	userCartList.forEach((item, index) => {
		var singleProduct = productList.find((item2, index2) => {
			return item.pid == item2.pid;
		})
		console.log(singleProduct.surplus)
		var tr = document.createElement("tr");
		tr.innerHTML +=
			`
		<td>
			<i class="checkbox checked"></i>
		</td>
		<td class="avatar-content">
			<img class="avatar" src="${singleProduct.avatar}" />
		</td>
		<td>
			<span class="productName">${singleProduct.name}</span>
		</td>
		<td>
			￥${singleProduct.pri.toString().replace(/\B(?=(\d{3})+$)/g,',')}元
		</td>
		<td class="countNum v-middle">
			<input type="button" class="addNum${item.count===singleProduct.surplus?' disabled':''}" ${item.count===singleProduct.surplus?"disabled":""} value="+"></input>
			<span>${item.count}</span>
			<input type="button" class="lessNum${item.count===1 ?' disabled':''}" ${item.count===1?"disabled":""} value="-"></input>
		</td>
		<td>
			<span class="delect">删除</span>
		</td>
		`
		tr.setAttribute("data-id", item.id);
		tr.setAttribute("data-checked", 1);
		tr.setAttribute("data-price", singleProduct.pri);
		tr.setAttribute("data-account", item.count);

		tBody.appendChild(tr);
	})
	// 动态渲染完数据以后,要计算总数,和价钱
	updateTotalAndAccount();
})();


// 2.删除购物记录
(function() {
	// jQuery
	$("table.cart-list>tbody>tr .delect").on("click",function(){
		// 代码优化
		Message.confirm("真要删除吗?", () => {
			// tr.parentNode.removeChild(tr);
			let $tr = $(this).closest("tr");
			let indexSelect = cartList.findIndex((item, index) => item.id === parseInt($tr.attr("data-id")));
			
			cartList.splice(indexSelect, 1);
			sessionStorage.seoDatas = JSON.stringify(data);
		
			// 如果当前删除的时勾选的购物记录,需要更新总结和数量
			if ($tr.attr("data-checked") === "1") {
				updateTotalAndAccount();
			}
			updateCheckboxAll();
			if(cartList.filter(item => item.name === userName).length === 0){
				document.querySelector("div.cart-list-wrapper").classList.remove("show");
				document.querySelector("div.cart-empty").classList.add("show");
			}
			$tr.remove();
			Message.notice("删除成功!")
			
		})
		
	})
	// 原生js
	// let trs = document.querySelectorAll("table.cart-list>tbody> tr");
	// trs.forEach((tr) => {
	// 	tr.querySelector(".delect").onclick = function() {

	// 		// 代码优化
	// 		Message.confirm("真要删除吗?", () => {
	// 			tr.parentNode.removeChild(tr);
	// 			let indexSelect = cartList.findIndex((item, index) => item.id === parseInt(tr.dataset.id));
	// 			cartList.splice(indexSelect, 1);
	// 			sessionStorage.seoDatas = JSON.stringify(data);

	// 			// 如果当前删除的时勾选的购物记录,需要更新总结和数量
	// 			if (tr.dataset.checked === "1") {
	// 				updateTotalAndAccount();
	// 			}
	// 			updateCheckboxAll();
	// 			if(cartList.filter(item => item.name === userName).length === 0){
	// 				document.querySelector("div.cart-list-wrapper").classList.remove("show");
	// 				document.querySelector("div.cart-empty").classList.add("show");
	// 			}
	// 			Message.notice("删除成功!")
				
	// 		})

	// 		// 自己编写的
	// 		// let total = parseInt(document.querySelector(".settle>.total").innerText),
	// 		// 	account = parseInt(document.querySelector(".account-wrapper>.account").innerText);
	// 		// // console.log(total,account)

	// 		// // 1.删除总数,总金额

	// 		// total -= parseInt(tr.dataset.account);
	// 		// account -= parseInt(tr.dataset.price) * parseInt(tr.dataset.account)


	// 		// //2.返回数据库
	// 		// //获取sessionStorage里的数据
	// 		// let data = JSON.parse(sessionStorage.seoDatas)
	// 		// let cartList = data.cartList;
	// 		// let indexSelect=cartList.findIndex((item,index)=>item.id===parseInt(tr.dataset.id) && item.name=== Cookies.get("user"))
	// 		// //3.重新渲染商品

	// 		// //4.计算总价格数量
	// 		// updateTotalAndAccount();
	// 	}
	// });
})();

// 3.数量的增减操作
(function() {
	let trs = document.querySelectorAll("table.cart-list>tbody> tr");
	trs.forEach((tr, index) => {

		/* -------------------------------加操作---------------------------*/
		tr.querySelector(".addNum").onclick = function() {
			let count = parseInt(tr.dataset.account);
			let id = parseInt(tr.dataset.id);
			// 找出对应的购物记录
			let cartSingerList = cartList.find((itemId) => itemId.id === id);
			// 通过购物记录找出商品
			var singleProduct = productList.find((itemPid) => itemPid.pid === cartSingerList.pid);
			count++;
			// dom标签的更新
			tr.querySelector("input.lessNum").disabled = false;
			// 点击减操作的禁止点击颜色去掉
			this.parentNode.querySelector(".lessNum").classList.remove("disabled");
			if (count === singleProduct.surplus) {
				this.disabled = true;
				this.classList.add("disabled");
			}
			tr.querySelector(".countNum>span").innerText = count;
			tr.dataset.account = count;
			// 如果是选中状态
			if (tr.dataset.checked === "1") {
				// 更新界面商品数量，金额
				updateTotalAndAccount();
			}

			// 更新到数据库
			var cart = cartList.find((item) => item.id === id);
			cart.count = count;
			sessionStorage.seoDatas = JSON.stringify(data);
		}
	})
	trs.forEach((tr, index) => {

		/* -------------------------------减操作---------------------------*/
		
		tr.querySelector(".lessNum").onclick = function() {
			let count = parseInt(tr.dataset.account);
			let id = parseInt(tr.dataset.id);
			count--;
			// dom标签的更新
			tr.querySelector("input.addNum").disabled = false;
			// 点击加操作的禁止点击颜色去掉
			this.parentNode.querySelector(".addNum").classList.remove("disabled");
			if (count === 1) {
				this.disabled = true;
				// 颜色变为不准点击状态
				this.classList.add("disabled")
			}
			tr.querySelector(".countNum>span").innerText = count;
			tr.dataset.account = count;
			// 如果是选中状态
			if (tr.dataset.checked === "1") {
				// 更新界面商品数量，金额
				updateTotalAndAccount();
			}
			// 更新到数据库
			var cart = cartList.find((item) => item.id === id);
			cart.count = count;
			sessionStorage.seoDatas = JSON.stringify(data);
		}
	})
})();
// 4.全选反选联动操作
(function() {
	// tbody里的tr
	let trs = document.querySelectorAll("table.cart-list>tbody> tr");
	trs.forEach((tr, index) => {
		tr.querySelector("i.checkbox").onclick = function() {
			// 判断是否选中
			if (parseInt(tr.dataset.checked)) {
				// 取消选中
				tr.dataset.checked = 0;
				this.classList.remove("checked");
			} else {
				// 置于选中
				tr.dataset.checked = 1;
				this.classList.add("checked");
			}
			updateCheckboxAll()
			updateTotalAndAccount();
		}
	})

	// 全选联动
	
	// jQuery
	$("i.checkbox.all").on("click",function(){
		$(this).toggleClass("checked");
		
		$("tbody>tr").attr("data-checked",$(this).hasClass("checked") ? "1" : "0").find("i.checkbox").toggleClass("checked",$(this).hasClass("checked"));
	})
	
	// js原生
	// var all = document.querySelector("i.checkbox.all");
	// all.onclick = function() {
	// 	var checked = this.className.indexOf("checked") !== -1;
	// 	if (checked) {
	// 		// 从选到未选中
	// 		this.classList.remove("checked");
	// 		document.querySelectorAll("table.cart-list>tbody> tr").forEach((item, index) => {
	// 			item.dataset.checked = "0";
	// 			item.querySelector("i.checkbox").classList.remove("checked");
	// 		})
	// 	} else {
	// 		this.classList.add("checked");
	// 		// 从未选中到选中
	// 		document.querySelectorAll("table.cart-list>tbody> tr").forEach((item, index) => {
	// 			item.dataset.checked = "1";
	// 			var noSelect = item.querySelector("i.checkbox")
	// 			if (noSelect.className.indexOf("checked") === -1) {
	// 				noSelect.classList.add("checked");
	// 			}
	// 		})
	// 	}
	// 	updateTotalAndAccount();
	// }
	

})();

// 结算按钮
(function() {
	document.querySelector("button.settle").onclick = function() {
		// 判断是否有选中状态
		var checkedTrs = document.querySelectorAll(".cart-list>tbody>tr[data-checked='1']");
		if (checkedTrs.length === 0) {
			Message.notice("你还没有选种商品哦!");
			return;
			// 不执行
		}
		// 开始结算
		Message.confirm("确定要结算吗？", () => {
			var settleIds = "";
			checkedTrs.forEach((item, index) => {
				// 获取选种商品的id
				settleIds += item.dataset.id + ',';
			});
			// console.log(settleIds);
			// 数据格式化
			settleIds = settleIds.slice(0, settleIds.length - 1);
			Cookies.set("settleIds", settleIds);
			window.location.href = "../order_confirm/order_confirm.html"
		})
	}
})();


// ----------------猜你喜欢---------------------
(function(){
	
	let slide_wrap = document.querySelector("ul.list-data"); 
	let currentIndex = 0;
	// 渲染数据
	// 找出该用户的购物车商品
	let cartListData = cartList.filter(item => item.name === userName);
	// 获取商品pid
	let pid = [];
	cartListData.forEach(item=>{
		pid.push(item.pid);
	})
	// 从用户众多购物车里的商品中 随机选出一个代表用户喜欢的商品pid
	let loveId = pid[Math.floor(Math.random()*pid.length)];
	// 根据商品id筛选出分类cid
	let cidData = productList.find(item => item.pid === loveId);
	let loveCid = cidData.cid;
	// 根据分类id找出同类产品作为用户的最爱
	let loveDatas = productList.filter(item => item.cid === loveCid);
	// 计算轮播几次每次五个数据
	let limitNum = Math.ceil(loveDatas.length / 5);
	// 找出数据以后开始 渲染
	loveDatas.forEach(item => {
		slide_wrap.innerHTML +=`
		
		<li>
			<div id="" class="epic">
				<a href="../detail/detail.html?pid=${item.pid}">
					<img src="${item.avatar}">
				</a>
			</div>
			<p class="ename"><a href="../detail/detail.html?pid=${item.pid}">${item.name}</a></p>
			<p class="eprice">
				<span id="">
					${item.pri.replace(/\B(?=(\d{3})+$)/g,',')}
				</span>
				<span id="">
					元
				</span>
			</p>
		</li>
		`;
		// 猜你喜欢列表数据渲染完毕
	})
	
	// 左点击事件
	document.querySelector("img.to-left").onclick = function(){
		console.log("我是左")
		// 激活右边的
		
		++currentIndex
		console.log(currentIndex)
		if(currentIndex === limitNum){
			currentIndex = limitNum-1;
			this.classList.remove("show");
			return;
		}
		slide(currentIndex);
		document.querySelector("img.to-right").classList.add("show");
	}
	// 右点击事件
	document.querySelector("img.to-right").onclick = function(){
		console.log("我是右")
		--currentIndex;
		console.log(currentIndex)
		if(currentIndex < 0){
			currentIndex = 0;
			console.log(currentIndex)
			this.classList.remove("show");
			return;
		}
		slide(currentIndex);
		document.querySelector("img.to-left").classList.add("show");
		
	}
	
	// 公共slide事件
	
	function slide(currentIndex){
		slide_wrap.style.transform = `translateX(${-currentIndex}00%)`;
	}
})();
