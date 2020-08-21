// <!-- 公共数据 -->
// 		<script type="text/javascript" src="../asset/js/data.js">
// 动态加载首页 data.js
// (function() {
// 	// 创建script元素
// 	let dataScript = document.createElement("script");
// 	let userName = Cookies.get("userName");
// 	console.log("首页动态加载js:", Boolean(userName) ? "即将动态加载js" : "不动态加载js");
// 	dataScript.src = "../asset/js/data.js";
// 	// 如果用户登录了,不要重置data.js
// 	if (userName) return;
// 	// document.body.appendChild(dataScript);
// 	// 为了再取数据之前存入数据库 ---还是有bug 只能通过 onlocad解决了
// 	document.body.insertBefore(dataScript, document.getElementsByTagName("script")[0]);
// })();
// 点击播放
(function() {
	let video = document.getElementById("vedio");
	document.querySelector(".banner-right-bottom").onclick = function() {
		// 开始播放
		video.play();
		// 关闭图片,关闭遮罩层,关闭播放按钮
		document.querySelector(".banner-right-bottom>img").style.display = "none";
		document.querySelector(".banner-right-bottom>.mask").style.display = "none";
		document.querySelector(".banner-right-bottom>.play").style.display = "none";
	}

})();
// 动态创建首页列表数据
(function() {
	publCreatePickDatas("showPcik");
	publCreatePickDatas()
	publCreatePickDatas()
	publCreatePickDatas()
	publCreatePickDatas()
})();

function publCreatePickDatas(isShow) {
	let data = JSON.parse(sessionStorage.seoDatas);
	let detailList = data.detailList;
	// 三个类目随机获取数据
	let allPickDatas = [];
	let spliceDatas = JSON.parse(JSON.stringify(detailList));
	let randomIndex;
	for (let i = 0; i < 5; i++) {
		// 获取随机索引
		randomIndex = Math.floor(Math.random() * spliceDatas.length)
		// 把选出的随机数据添加到新数组
		allPickDatas.push(spliceDatas[randomIndex]);
		// 删除选出的数据确unique
		spliceDatas.splice(randomIndex, 1);
	}
	let editor_pick_list_wrapper = document.querySelector(".editor-pick-list-wrapper");
	let ulEls = document.createElement("ul");
	ulEls.classList.add("editor-pick-list");
	if (isShow) {
		ulEls.classList.add(isShow);
	}
	// 动态创建数据
	allPickDatas.forEach((item, index) => {
		ulEls.innerHTML +=
			`
		<li><a href="../detail/detail.html?pid=${item.pid}">
				<div id="" class="product-img">
					<img src="${item.avatar}">
					<div id="" class="mask">
							
					</div>
				</div>
				<div id="" class="product-details">
					<p class="product-name">${item.name}</p>
					<p class="product-desc">${item.desc}</p>
					<!-- 下划线 -->
					<div id="" class="line">
					</div>
					<p class="product-price">￥${item.pri.replace(/\B(?=(\d{3})+$)/g,',')}</p>
				</div>
			</a>
		</li>
		`;
	})

	editor_pick_list_wrapper.appendChild(ulEls);
}

// 实现淡隐淡出的数据显现效果
(function() {
	let curentIndex = 0,
		autoPlay = null;
	let allPickes = document.querySelectorAll(".editor-pick>.editor-pick-list-wrapper>ul.editor-pick-list");
	// 自动轮播
	autoPlayFun();
	document.querySelector("div.bottom-dir>a.prev").onclick = function() {
		curentIndex--;
		if (curentIndex < 0)
			curentIndex = allPickes.length - 1;
		pre(curentIndex);
	};
	document.querySelector("div.bottom-dir>a.next").onclick = function() {
		curentIndex++;
		if (curentIndex > allPickes.length - 1)
			curentIndex = 0;
		next(curentIndex);
	};

	function pre(curentIndex) {
		// 停止自动轮播
		clearInterval(autoPlay);
		// 先找出上一个显示的元素,变为不显示
		document.querySelector(".editor-pick>.editor-pick-list-wrapper>ul.editor-pick-list.showPcik").classList.remove(
			"showPcik");
		allPickes[curentIndex].classList.add("showPcik");
		// 开始轮播
		autoPlayFun();
	}

	function next(curentIndex) {
		// 停止自动轮播
		clearInterval(autoPlay);
		// console.log(curentIndex);
		// 先找出上一个显示的元素,变为不显示
		document.querySelector(".editor-pick>.editor-pick-list-wrapper>ul.editor-pick-list.showPcik").classList.remove(
			"showPcik");
		allPickes[curentIndex].classList.add("showPcik");
		// 开始轮播
		autoPlayFun();
	}

	function autoPlayFun() {
		autoPlay = setInterval(() => {
			next(curentIndex = ++curentIndex % (allPickes.length));
			// console.log(curentIndex);
		}, 2000);
	}

	// 滑动上去停止轮播
	document.querySelector(".editor-pick-list-wrapper").onmouseover = function() {
		clearInterval(autoPlay);
	}
	document.querySelector(".editor-pick-list-wrapper").onmouseout = function() {
		autoPlayFun();
	}
})();
