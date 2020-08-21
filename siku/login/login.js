// 取出用户列表
let data = JSON.parse(sessionStorage.seoDatas);
let userList = data.userList;
console.log("用户列表：", userList);
/* ----------------选项卡操作----------------*/
(function() {
	let login_tab = document.querySelector(".login-tab");
	login_tab.onclick = function() {
		// 判断是否包含check
		if (this.classList.contains("checked")) {
			return;
		}
		this.classList.toggle("checked");
		document.querySelector(".login").classList.add("show");
		document.querySelector(".register").classList.remove("show");
		register_tab.classList.remove("checked");
	}
	// 注册选项卡
	let register_tab = document.querySelector(".register-tab");
	register_tab.onclick = function() {
		// 判断是否包含check
		if (this.classList.contains("checked")) {
			return;
		}
		document.querySelector(".login").classList.remove("show");
		document.querySelector(".register").classList.add("show");
		login_tab.classList.remove("checked");
		this.classList.toggle("checked");
	}
})();

/* ----------------聚焦背景变色----------------*/
// 登录
// 用户名
(function() {
	document.querySelector(".login .user>input ").onfocus = function() {
		this.parentNode.classList.add("active");
	}

	document.querySelector(".login .user>input ").onblur = function() {
		this.parentNode.classList.remove("active");
	}
	// 密码
	document.querySelector(".login .registe>input ").onfocus = function() {
		this.parentNode.classList.add("active");
	}

	document.querySelector(".login .registe>input ").onblur = function() {
		this.parentNode.classList.remove("active");
	}
	// 注册
	document.querySelectorAll(".register>.register-infomation>div").forEach((item, index) => {

		item.querySelector("input").onfocus = function() {
			this.parentNode.classList.add("active")
		}
		item.querySelector("input").onblur = function() {
			this.parentNode.classList.remove("active")
		}
	})
})();

// 登录注册按钮

(function() {
	// 登录按钮
	let loginBtn = document.querySelector(".login>.loginBtn");
	// 注册按钮
	let registerBtn = document.querySelector(".register>.registerBtn");
	/* ----------------点击登录----------------*/
	loginBtn.onclick = function() {

		// 获取用户信息
		let userName = document.querySelector(".user-wrapper [name=user]").value.trim(),
			userPasswordInput = document.querySelector(".pwd-wrapper [name=pwd]"),
			userPassword = userPasswordInput.value.trim();
		// 判断是否有该用户名
		if (!(userName && userPassword)) {
			if (!userName) document.querySelector(".user-wrapper>p.message>span").textContent = "用户名不能为空!";
			if (!userPassword) document.querySelector(".pwd-wrapper>p.notEmpty>span").textContent = "密码不能为空!";
			return;
		}
		// 检查用户名是否正确
		let userNum = userList.find((item) => item.userName === userName || item.phone === userName);
		if (!userNum) {
			document.querySelector(".user-wrapper>p.message>span").textContent = "用户名不存在!";
			return;
		}
		// 检查密码是否正确
		let isUser = userNum.pwd === userPassword ? true : false;
		if (!isUser) {
			document.querySelector(".pwd-wrapper>p.notEmpty>span").textContent = "密码错误!";
			userPasswordInput.value = "";
			return;
		}
		// 把登陆的用户名存入到Cookie里
		Cookies.set("userName", userName);
		let backUrl = Cookies.get("backUrl");
		// 移除backUrl
		Cookies.remove("backUrl");
		// 登陆成功提示

		Message.notice("登陆成功!");

		// 跳转至前一页或者用户页面 首先判断backUrl是否有数据先取第一个否则取第二个
		// 限制登录页在登陆以后 就不能再进来了
		
		window.location.replace(backUrl || "../userHome/userHome.html");
	}

	// 取消为空提示
	document.querySelectorAll(".login>div.emptyTip").forEach((item, index) => {

		item.querySelector("input").oninput = function() {
			if (this.value) {
				this.parentNode.parentNode.querySelector(".messageWarn").textContent = "";
			}
		}
	})

	/* ----------------点击注册----------------*/
	registerBtn.onclick = function() {
		// 注册之前获取用户信息
		let userInput = document.querySelector(".userName>.info>[name=userName]"),
			passwordInput = document.querySelector(".password>.info>[name=pwd]"),
			iphoneInpt = document.querySelector(".iphone>.info>[name=iphone]"),
			userName = userInput.value.trim(),
			password = passwordInput.value.trim(),
			iphone = iphoneInpt.value.trim();

		// 判断哪个信息为空-----检测各项是否合法 只要有一项不合法都要结束下面的执行
		if (!(userName && password && iphone)) {
			if (!userName) document.querySelector(".userName>.messageWarn").textContent = "用户名不能为空!";
			if (!password) document.querySelector(".password>.messageWarn").textContent = "密码不能为空!";
			if (!iphone) {
				document.querySelector(".iphone>.messageWarn").textContent = "手机号不能为空!"
			}
			return;
		}
		// 检测手机号
		if (!(/^(13|14|17|18|19)[0-9]{9}$/.test(iphone))) {
			document.querySelector(".iphone>.messageWarn").textContent = "手机号不合法!";
			return;
		}
		console.log(userName, password, iphone)
		// 检测用户名手机号是否存在
		var userNum = userList.find((user) => user.userName === userName || user.phone === iphone);
		if (!userNum) {
			var userObj = {
				userName: userName,
				pwd: password,
				sex: Math.floor(Math.random() * 2), //随机性别---假数据
				avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2796419094,3194912381&fm=26&gp=0.jpg", //默认头像
				phone: iphone
			}
			// 将新用户添加到sessionStorage
			userList.push(userObj);
			sessionStorage.seoDatas = JSON.stringify(data)

			Message.notice("注册成功! 1s后跳转去登陆~")
			setTimeout(() => {
				document.querySelector(".login").classList.add("show");
				document.querySelector(".register").classList.remove("show");
				document.querySelector(".login-tab").classList.add("checked");
				document.querySelector(".register-tab").classList.remove("checked");
			}, 1000)
			/*------到这里为止已经注册成功了-------*/
		} else {
			Message.alert("用户名或手机号已经注册！")
			// userInput.value = "";
			passwordInput.value = "";
			iphoneInpt.value = "";

		}

	}

	// 取消为空提示
	document.querySelectorAll(".register>.register-infomation>div").forEach((item, index) => {

		item.querySelector("input").oninput = function() {
			if (this.value) {
				this.parentNode.parentNode.querySelector(".messageWarn").textContent = "";
			} else {
				this.parentNode.parentNode.querySelector(".messageWarn").textContent = this.dataset.warn;
			}
		}
	})


})();
