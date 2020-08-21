// 展示给用户
// 获取从分类菜单获取的分类id
let cid = parseInt(window.location.search.split("=")[1]);
// 获取数据库数据
let data = JSON.parse(sessionStorage.seoDatas);
let detailList = data.detailList;

// 筛选出 cid等于传来的cid的数据
let cidDatas = detailList.filter((item, index) => item.cid === cid);
let orderDatas = cidDatas;
let chengeAllDatas = JSON.parse(JSON.stringify(orderDatas));
console.log(chengeAllDatas)
// 渲染页面
function renderHtml() {
	let listData_contentUlEl = document.querySelector(".listData-content>ul");
	// 初始化
	listData_contentUlEl.innerHTML = "";
	orderDatas.forEach((item, index) => {
		listData_contentUlEl.innerHTML +=
			`
		
		<li>
			<!-- 图片 -->
			<div id="">
				<a href="../detail/detail.html?pid=${item.pid}" class="image">
					<img src="${item.avatar}" >
					<span id="" class="hot" style="opacity:${item.rate/1000};">
						
					</span>
					<span id="" class="sale-wraaper">
						<span id="" class="sale-name">
							已销售
						</span>
						<span id="" class="sale-num">
							${item.sale}
						</span>
					</span>
				</a>
				<p class="loca-info v-middle">
					<span id="">
						${item.locationInfo}
					</span>
					<span>
						${item.information}
					</span>
				</p>
				
				<div id="" class="dl_name">
					<a href="../detail/detail.html?pid=${item.pid}">
						${item.name}
					</a>
				</div>
				<p class="money-wrapper">
					<span id="" class="money">
						￥${item.pri}
					</span>
					<span id="" class="colletcion v-middle">
						<span id="" class="iconfont icon-shoucang">
							
						</span>
						<span id="">
							收藏
						</span>
					</span>
				</p>
			</div>
		</li>
		
		`;
	})
}
(function() {

	if (cidDatas.length === 0) {
		Message.alert("该分类没有更多商品了");
		return;
	}
	// 首次加载渲染数据
	renderHtml();
})();

// 排序
(function() {
	var lisEl = document.querySelectorAll(".order-wrapper>ul>li");

	// 遍历每一个排序li
	lisEl.forEach((tr, trIndex) => {
		tr.onclick = function() {
			// 切换降序图片
			this.querySelector(".order-span").classList.toggle("botttom-checked");
			// 切换降序状态 颜色
			// 如果不包含,把其他去掉
			if (!this.classList.contains("select")) document.querySelector(".order-wrapper>ul>li.select").classList.remove("select");
			// 包含的话再添加一遍,在这里多余但又不能去掉 等待bug解决
			this.classList.add("select");
			let prderKey = this.dataset.key;
			let ordertFlag = this.querySelector(".order-span").classList.contains("botttom-checked");
			if (prderKey === "all") {
				orderDatas = chengeAllDatas.reverse();
				chengeAllDatas = JSON.parse(JSON.stringify(orderDatas));
				renderHtml();
				return;
			}
			orderDatas = cidDatas.sort((oneDara, twoData) => ordertFlag ? parseInt(twoData[prderKey]) - parseInt(oneDara[
				prderKey]) : parseInt(oneDara[prderKey]) - parseInt(twoData[prderKey]))
			renderHtml();
		}
	})
})();
