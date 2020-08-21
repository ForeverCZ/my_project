// 获取数据库数据
let data = JSON.parse(sessionStorage.seoDatas);
let addressList = data.addressList;
let userName = Cookies.get("userName");
// 设置全局变量用来判断是否是修改数据
let isUpdate = false,
	isCanDelete = true;
// console.log(addressList);

// 渲染收货地址的数据
(function() {
	// 渲染地址栏数据
	updateAddress();
})();

// 公共渲染用户数据函数
function updateAddress() {
	let getAddressList = addressList.filter((item, index) => item.userName === userName);
	// 得到渲染数据的容器
	let address_list = document.querySelector("div.ms_tatleBx>ul.address-list");
	address_list.innerHTML = "";
	getAddressList.forEach((item, index) => {
		address_list.innerHTML +=
			`
		<li>
			<div id="">
				${item.receiveName}
			</div>
			<div id="">
				${item.receiveRegion}${item.receiveAddress}
			</div>
			<div id="">
				<span id="" class="iphone">
					${item.receivePhone}
				</span>
				<span id="" data-id="${item.id}" class="isdefault${item.isDefault?' default':''}">
					
				</span>
			</div>
			<div id="" class="editor-wraper">
				<span id="" class="editor" data-id="${item.id}">
					编辑
				</span>
				<span id="" class="delete" data-id="${item.id}">
					删除
				</span>
			</div>
		</li>
		`;
	})
}

//绑定各种点击事件
(function() {

	// 默认地址切换
	document.querySelector("ul.address-list").onclick = function(event) {
		// 如果点击的是设置默认按钮
		if (event.target.classList.contains("isdefault")) {
			if (event.target.classList.contains("default")) {
				Message.alert("亲~已经是默认地址");
				return;
			}
			// 更新默认状态
			addressList.forEach(item => {
				if (item.userName === userName) {
					item.isDefault = item.id === parseInt(event.target.dataset.id);
					if(item.id === parseInt(event.target.dataset.id)){
						// 默认地址修改 也是用户想选择的地址
						if(Cookies.get("addressId")){
							Cookies.set("addressId",item.id);
						}
					}
					
				}
			})
			// 更新数据库
			sessionStorage.seoDatas = JSON.stringify(data);
			this.querySelectorAll("span.isdefault").forEach((item, index) => {
				item.classList.remove("default");
			})
			event.target.classList.add("default");
			Message.notice("亲~设置成功");
		}
		// 如果点的是删除按钮
		if (event.target.classList.contains("delete")) {
			if (!isCanDelete) {
				Message.alert("亲~编辑中，不允许删除哦！")
				return;
			}
			Message.confirm("亲~确定要删除吗?", () => {
				var id = parseInt(event.target.dataset.id);
				var index = addressList.findIndex(item => item.id === id);
				// 删除对应的地址记录
				addressList.splice(index, 1);
				// 更新数据库,更新地址列表
				sessionStorage.seoDatas = JSON.stringify(data);
				// 删除该记录
				this.removeChild(event.target.parentNode.parentNode);
				// 判断当前网页列表里是否还有记录
				if (this.querySelectorAll("li").length === 0) {
					console.log("没有地址记录了~");
				}
				Message.notice("亲~删除成功");
				// 如果是从订单页面传过来的
				if(Cookies.get("addressId")){
					if(parseInt(Cookies.get("addressId")) === event.target.dataset.id)
						Cookies.remove("addressId");
						console.log("cookie删除了");
				}
				
			})
		}

		//如果是编辑按钮
		if (event.target.classList.contains("editor")) {
			// 获取地址id编号
			var id = parseInt(event.target.dataset.id);
			var form = document.forms["address"];
			// 用隐藏表单元素记录当前选中的id
			form.addressId.value = id;
			// 标识新增数据
			isUpdate = true;
			// 不允许删除
			isCanDelete = false;
			var targerData = addressList.find(item => item.id === id);
			form.receiverName.value = targerData.receiveName;
			form.receiverPhone.value = targerData.receivePhone;
			// 所在地区使用的插件
			regionPicker.set(targerData.receiveRegion);
			form.receiverAddress.value = targerData.receiveAddress;
		}
	}

})();

// 保存按钮点击事件
(function() {
	document.querySelector(".save-wraper>input.btn-save").onclick = function() {
		// 选取表单
		let form = document.forms["address"];
		let addressId;
		let address = {
			userName: userName,
			receiveName: form.receiverName.value.trim(),
			receivePhone: form.receiverPhone.value.trim(),
			receiveRegion: regionPicker.get(),
			receiveAddress: form.receiverAddress.value.trim()
		}
		if (isUpdate) {
			addressId = parseInt(form.addressId.value);
			let i = addressList.findIndex(item => item.id === addressId);
			address.id = addressId;
			let isDefault = addressList[i].isDefault;
			address.isDefault = isDefault;
			// 删除当前索引数据----替换
			addressList.splice(i, 1, address);
			sessionStorage.seoDatas = JSON.stringify(data);
			Message.notice("亲~修改成功");
			isUpdate = false;
			isCanDelete = true;
		} else {
			if (address.receiveName === "" || address.receivePhone === "" || address.receiveAddress === "") {
				Message.alert("亲~信息要写全哦");
				return;
			}
			addressId = addressList.length ? addressList[addressList.length - 1].id + 1 : 1;
			address.id = addressId;
			address.isDefault = false;
			addressList.push(address);
			sessionStorage.seoDatas = JSON.stringify(data);
			Message.notice("亲~添加地址成功");
		}
		
		// 添加或者修改以后 重置数据
		form.reset();
		form.addressId.value = "";
		updateAddress();
		// 如果是从订单页面过来的
		if(Cookies.get("isFromOrder")){
			Cookies.remove("isFromOrder");
			Message.confirm("亲~ 要返回订单页面吗",()=>{
				Cookies.set("addressId",addressId);
				window.location.replace("../order_confirm/order_confirm.html");
			})
		}
		
	}
})();

// 重置按钮点击事件
(function(){
	document.querySelector(".save-wraper>input.btn-reset").onclick = function(){
		let form = document.forms["address"];
		form.reset();//表单重置
		regionPicker.reset();//地区重置
		isUpdate = false;
		isCanDelete = true;
	}
	
})();