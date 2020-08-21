// 用于判断当前页面是否有已经登陆
var userName = Cookies.get("userName");
// 获取首页数据
// 获取index.html页面传来的pid，并转化为整形


let pid;
if (window.location.search.length === 0) {
	pid = 3; //如果不是从主页过来的默认展示pid为3的产品
} else {
	pid = parseInt(window.location.search.split("=")[1]);
}
// 获取该页面详细数据
// 在这里不直接获取detailData是为了更新数据库
let data = JSON.parse(sessionStorage.seoDatas);
// 筛选详情页要展示的数据
let detailData = data.detailList.find((item, index) => pid === item.pid);
// 获取所有购物记录
let cartList = data.cartList;
// 打印测试

console.log("该详情页展示的商品:", detailData);



// 创建放大镜动态数据

(function() {
	// 获取.contents
	var contents = document.querySelector(".contents");
	// 创建info_l
	var info_l = document.createElement("div");
	info_l.classList.add("info_l");
	// 创建thumbnail-image

	// 先开始添加左小缩略图
	// 测试imgs数据输出
	var thumbnail_image = document.createElement("div");
	thumbnail_image.classList.add("thumbnail-image");
	var ulElSmall = document.createElement("ul");

	detailData.imgs.forEach((item, index) => {
		if (index === 0) {
			ulElSmall.innerHTML +=
				`
				<li class="showZoom">
					<div class="image-wrapper"> <img src="${item}" /></div>
				</li>
				
				`;
		} else {
			ulElSmall.innerHTML +=
				`
				<li>
					<div class="image-wrapper"> <img src="${item}" /></div>
				</li>
				
				`;
		}
	})
	thumbnail_image.appendChild(ulElSmall);


	// 创建大图
	var big_image_wrapper = document.createElement("div");
	big_image_wrapper.classList.add("big-image-wrapper");
	var big_imgList_wrapper = document.createElement("div");
	big_imgList_wrapper.classList.add("big-imgList-wrapper");
	var zoom = document.createElement("div");
	zoom.classList.add("zoom");
	var ulElBig = document.createElement("ul");

	detailData.imgs.forEach((item, index) => {
		// 这是要判断一下,只有第一个才设置class
		if (index === 0) {
			ulElBig.innerHTML += `
				<li class="show">
					<img src="${item}" />
				</li>
				
				`;
		} else {
			ulElBig.innerHTML += `
				<li>
					<img src="${item}" />
				</li>
				`;
		}
	})
	var zoomBig = document.createElement("div");
	zoomBig.classList.add("zoomBig");
	big_imgList_wrapper.appendChild(zoom);
	big_imgList_wrapper.appendChild(ulElBig)
	big_image_wrapper.appendChild(big_imgList_wrapper);
	big_image_wrapper.appendChild(zoomBig);
	info_l.appendChild(thumbnail_image);
	info_l.appendChild(big_image_wrapper);
	// info_l添加到contents
	contents.appendChild(info_l);
	// 创建 info_2
	var info_2 = document.createElement("div");
	info_2.classList.add("info_2");
	info_2.innerHTML +=
		`
		<div class="proName">
			<h2>${detailData.name}</h2>
			<h3>${detailData.desc}</h3>
		</div>
		<div class="proDetails">
			<div class="proPrice">
				<span>寺库价</span><span>￥${detailData.pri.replace(/\B(?=(\d{3})+$)/g,',')}</span>
			</div>
			<div class="proProduct">
				<span>有货</span><span>预计下单后会在<span>2-4</span>天内发货</span>
			</div>
		</div>
		<div class="buyNUm v-middle">
			<span>购买数量</span>
			<div class="clickNum v-middle">
				<span class="less"></span>
				<input type="text" value="1" />
				<span class="add"></span>
			</div>
			<span class="supNum">仅剩<span class="color9d0">&nbsp;${detailData.surplus}&nbsp;</span>件，抓紧时间购买哦!</span>
		</div>
		<div class="buyCart">
			<span class="addCart">
				<span class="carFont iconfont icon-qicheqianlian-"></span>
				<span>&nbsp;&nbsp;加入购物车</span>
			</span>
			<span class="toMoney">去结算</span>
		</div>
		`;
	// 把Info_2添加到contents里
	contents.appendChild(info_2);


})()


// 购物数量

// 减少
// ^[0-9]*$ 

var numInput = document.querySelector(".buyNUm>.clickNum>input[type=text]");
var lessBtn = document.querySelector(".buyNUm .less");
var addBtn = document.querySelector(".buyNUm .add");
numInput.oninput = function() {
	this.value = Number.isNaN(parseInt(this.value)) ? 0 : parseInt(this.value);
}
numInput.onblur = function() {
	this.value = parseInt(this.value) > detailData.surplus ? detailData.surplus : parseInt(this.value);
	if (parseInt(this.value) === 0) {
		lessBtn.classList.add("disabled");
		addBtn.classList.remove("disabled");
	}
	if (parseInt(this.value) === 5) {
		addBtn.classList.add("disabled");
		lessBtn.classList.remove("disabled");
	}
}
// var lessInput = document.querySelector(".buyNUm>.clickNum>input[type=text]");
lessBtn.onclick = function() {
	if (parseInt(numInput.value) <= 0) {
		this.classList.add("disabled");
		return;
	}
	addBtn.classList.remove("disabled");
	numInput.value = parseInt(numInput.value) - 1;

}
// 增加
// var addInput = document.querySelector(".buyNUm>.clickNum>input[type=text]");
addBtn.onclick = function() {
	if (parseInt(numInput.value) >= detailData.surplus) {
		this.classList.add("disabled");
		return;
	}
	lessBtn.classList.remove("disabled");
	numInput.value = parseInt(numInput.value) + 1;

}

// 点击缩略图切换大图片
var thumbnail_imageEls = document.querySelectorAll(".thumbnail-image>ul>li");
var big_imgListEls = document.querySelectorAll(".big-imgList-wrapper>ul>li");
thumbnail_imageEls.forEach((item, index) => {
	item.onclick = function() {
		if (big_imgListEls[index].className.indexOf("show") > -1) {
			return;
		}
		console.log(index)
		// 让已经显示的隐藏
		document.querySelector(".big-imgList-wrapper>ul>li.show").className = "";
		this.parentNode.querySelector("li.showZoom").className = "";
		// 本次点击对应的bigImg显示
		big_imgListEls[index].className = "show";
		this.className = "showZoom";
	}
})

// 放大镜
document.querySelector(".big-imgList-wrapper").onmousemove = function(event) {
	var zoomEl = this.querySelector(".zoom"),
		bigZoomEl = this.parentNode.querySelector(".zoomBig"),
		x,
		y,
		mouseX = event.clientX - this.getBoundingClientRect().left, // event.clientX，它提供事件发生时的应用客户端区域的水平坐标
		mouseY = event.clientY - this.getBoundingClientRect().top,
		minX = zoomEl.getBoundingClientRect().width / 2,
		minY = zoomEl.getBoundingClientRect().height / 2,
		maxX = this.getBoundingClientRect().width - minX,
		maxY = this.getBoundingClientRect().height - minY;

	// 计算方框x轴位置
	if (mouseX <= minX) {
		x = 0;
	} else if (mouseX >= maxX) {
		x = maxX - minX
	} else {
		x = mouseX - minX;
	}

	// 计算方框y轴位置
	if (mouseY <= minY) {
		y = 0;
	} else if (mouseY >= maxY) {
		y = maxY - minY;
	} else {
		y = mouseY - minY;
	}

	zoomEl.style.left = `${ x }px`;
	zoomEl.style.top = `${ y }px`;
	// 加1减1是为了减去边框 
	zoomEl.style.backgroundPosition = `${-x}px ${-y}px`;
	// 通过计算比例 算出移动距离
	var rotio = this.getBoundingClientRect().width / zoomEl.getBoundingClientRect().width;
	bigZoomEl.style.backgroundPosition = `${-x*rotio+1}px ${-y*rotio+1}px`;
}

// 设置背景图片

// MouseEvent 接口指用户与指针设备( 如鼠标 )交互时发生的事件
document.querySelector(".big-imgList-wrapper").onmouseover = function() {
	var imgPath = this.querySelector("ul>li.show img").src;

	var zoomEl = this.querySelector(".zoom");
	var bigZoomEl = this.parentNode.querySelector(".zoomBig");

	zoomEl.style.backgroundImage = `url(${imgPath})`;
	bigZoomEl.style.backgroundImage = `url(${imgPath})`;

	var width = this.getBoundingClientRect().width;
	var height = this.getBoundingClientRect().height;
	var rotio = width / zoomEl.getBoundingClientRect().width;

	// 通过计算比例 算出放大后的实际宽高
	zoomEl.style.backgroundSize = `${ width -2}px ${ height-2 }px`;
	bigZoomEl.style.backgroundSize = `${rotio*width -2}px ${rotio*height-2 }px`


}


// 加入购物车

document.querySelector(".buyCart>span.addCart").onclick = function() {
	// console.log("点击了加入购物车按钮")
	// 判断用户是否登录
	if(!userName){
		Message.confirm("亲~您还没有登录哦，要跳转至登陆吗",function(){
			Cookies.set("backUrl", window.location.href);
			// console.log(window.location.href);
			// 跳转登录界面 这里不需要return,因为重定向以后下面的代码就不再执行
			window.location.href = "../login/login.html";
		})
	return;
	}
	// 如果登录了
	// 进行加入购物车操作
	// 首先判断是否有该商品的pid
	// 根据用户名,产品pid查找是否有该购物记录
	
	/*
		在下面有两种方法,但我觉得第二种没有注释的简单些
		cartList.find((item, index) 找到返回的数据，与cartList相对应的对象指向同一个队，所以只要修改返回的数据元数据也就会改变，这样更简单的去更新数据库
	*/
	// let iscartRencoder = cartList.findIndex((item, index) => item.name === userName && item.pid === pid);
	let iscartRencoder = cartList.find((item, index) => item.name === userName && item.pid === pid);
	// 获取数量input框
	let clickNumInput = document.querySelector(".clickNum>input[type=text]");
	console.log("选中的商品数量:", parseInt(clickNumInput.value));
	console.log("在购物记录里是否有该商品:", iscartRencoder);
	console.log("商品剩余量:", detailData.surplus);
	if(parseInt(clickNumInput.value)===0){
		Message.alert("亲~ 数量最少一个哦");
		return;
	}
	// 如果没有这条记录
	if (!iscartRencoder) {
		var objCart = {
			id: cartList[cartList.length - 1].id + 1, //购物记录 用于删除
			name: userName,
			pid: pid, //购买的商品编号
			count: parseInt(clickNumInput.value),
			date: getNewDate()
		}
		cartList.push(objCart);
		sessionStorage.seoDatas = JSON.stringify(data);
		Message.notice("亲~您的宝贝添加成功");
		return;
	}
	// 判断当前选中的数量加上购物记录里的数量是否超过该宝贝的剩余量
	// let allCount = cartList[iscartRencoder].count + parseInt(clickNumInput.value);
	let allCount = iscartRencoder.count + parseInt(clickNumInput.value);
	console.log(allCount)
	console.log(detailData.surplus)
	if (allCount > detailData.surplus) {
		Message.alert("商品超出剩余量~");
		return;
	}
	// 更新数据库数据
	// cartList[iscartRencoder].count = allCount;
	// cartList[iscartRencoder].date = getNewDate();
	iscartRencoder.count = allCount;
	iscartRencoder.date = getNewDate();
	console.log("商品添加以后:",cartList);
	sessionStorage.seoDatas = JSON.stringify(data);
	// iscartRencoder.count=
	Message.notice("亲~您的宝贝添加成功")
	// 否则更新该记录

}

// 去结算数据,跳转到购物车
document.querySelector(".buyCart>span.toMoney").onclick= function(){
	if(!userName){
		Message.confirm("亲~您还没有登录哦，要跳转至登陆吗",function(){
			Cookies.set("backUrl", window.location.href);
			// console.log(window.location.href);
			// 跳转登录界面 这里不需要return,因为重定向以后下面的代码就不再执行
			window.location.href = "../login/login.html";
		})
		return;
	}
	// 判断是否选择了商品，只需要匹配该用户名
	var indexNum = cartList.filter((item,index)=> item.name === userName);
	if(indexNum.length === 0){
		Message.notice("亲~您还没有添加商品哦");
		return;
	}
	Message.confirm("亲~ 不再看看其他宝贝了,",function(){
		window.location.href = "../cart/cart.html";
		return;
	})
}

// 获取当前时间
//获取特定格式的日期时间  "yyyy-MM-dd HH:MMM:SS"
function getNewDate() {
	var date = new Date();
	var transverse = "-";
	var Verticalpoint = ":";
	var month = date.getMonth() + 1; //获取月份
	var strDate = date.getDate(); //获取具体的日期           
	var strHour = date.getHours(); //获取...钟点
	var strMinute = date.getMinutes(); //获取分钟数
	var strSeconde = date.getSeconds(); //获取秒钟数
	//判断获取月份 、 具体的日期 、...钟点、分钟数、秒钟数 是否在1~9
	//如果是则在前面加“0”
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 1 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (strHour >= 1 && strHour <= 9) {
		strHour = "0" + strHour
	}
	if (strMinute >= 1 && strMinute <= 9) {
		strMinute = "0" + strMinute;
	}

	if (strSeconde >= 1 && strSeconde <= 9) {
		strSeconde = "0" + strSeconde;
	}
	//时间日期字符串拼接
	var NewDate = date.getFullYear() + transverse + month + transverse + strDate + " " +
		strHour + Verticalpoint + strMinute + Verticalpoint + strSeconde;
	//返回拼接字符串
	return NewDate;
}
