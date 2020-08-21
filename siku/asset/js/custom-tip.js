// 自定义消息提示插件
// 最佳封装方式,要用document.body.appendChild(div);把提示的元素添加到该文档里

/*
	调用方法:
		alert: Message.alert('输入警告的内容')
		confirm :Message.confirm("要确定的内容",要执行的匿名函数)
		notice : Message.notice("微提示内容")
*/
var Message = {
	alert, //警告框
	confirm, //确认框
	notice //微提示
}

function alert(msg,callBack) {
	if (document.querySelector(".message-alert")) return;
	var divAlert = document.createElement("div");
	divAlert.className = "message-alert";
	divAlert.style.position = "fixed";
	divAlert.style.left = "0";
	divAlert.style.top = "0";
	divAlert.style.width = "100%";
	divAlert.style.height = "100%";
	divAlert.style.zIndex = "9999999999999";
	divAlert.innerHTML +=
		`
        <div style="min-width: 300px; 
                    max-width:500px;
                    position:absolute; 
                    left:50%; top:50%;
                    transform: translate(-50%,-50%);
                    background-color:white;
                    padding: 0 0 10px 0;
                    box-shadow:inset 0 0 6px rgba(0,0,0,.2),0 0 3px rgba(0,0,0,.4);
                    border-radius: 10px;
					overflow:hidden;
        ">
           <p style="font-size:16px;  padding:5px; background-color:#362a52; color:white; margin-bottom: 30px;">提示 :</p>
           <p style="text-indent:2em;
                       color:#555;
                       display:inline-block;
                       padding:3px 5px;
					   margin-bottom: 40px;
                       ">${msg}</p>
           <p style="display: flex; justify-content:flex-end; padding-right:20px;">
			 <span class="btn-ok" style="cursor:pointer; background-color:rgb(255,0,54); padding:7px 15px; border-radius:5px; color:white;">确定</span>
		   </p>
        </div>
    `;
	document.body.appendChild(divAlert);
	document.querySelector("span.btn-ok").onmouseover = function(){
		this.style.backgroundColor = "#cc002b";
	}
	document.querySelector("span.btn-ok").onmouseleave = function(){
		this.style.backgroundColor = "rgb(255,0,54)";
	}
	divAlert.querySelector('.btn-ok').onclick = function() {
		if (typeof callBack === "function") callBack();
		document.body.removeChild(divAlert);
	};

}

function confirm(msg, callBack) {
	if (document.querySelector(".message-confirm")) return;
	var divConfirm = document.createElement("div");
	divConfirm.className = "message-confirm";
	divConfirm.style.position = "fixed";
	divConfirm.style.left = "0";
	divConfirm.style.top = "0";
	divConfirm.style.width = "100%";
	divConfirm.style.height = "100%";
	divConfirm.style.zIndex="9999999999999";
	divConfirm.innerHTML +=
		`
        <div style="min-width: 300px; 
                    max-width:500px; 
                    position:absolute;
                    left:50%; top:50%;
                    transform: translate(-50%,-50%);
                    background-color:white;
                    padding: 0 0 10px 0;
                    box-shadow:inset 0 0 6px rgba(0,0,0,.2),0 0 3px rgba(0,0,0,.4);
					border-radius: 10px;
					overflow:hidden;
        ">
            <p style="font-size:16px; color:white; background-color:#362a52;  padding:5px; margin-bottom: 30px;">微馨提示 :</p>
            <p style="  color:#555;
						text-align:center;
                        padding:3px 0;
						margin-bottom: 40px;
                        ">${msg}</p>
            <p style="display: flex; justify-content:space-around;">
				<span class="btn-ok" style="background-color:rgb(255,0,54); padding:7px 15px; border-radius:5px; cursor:pointer; color:white;">确定</span>
				<span class="btn-cancel" style="background-color:#a9a6a2; padding:7px 15px; border-radius:5px; cursor:pointer; color:white;">取消</span>
			</p>
        </div>
    `;
	document.body.appendChild(divConfirm);
	document.querySelector("span.btn-ok").onmouseover = function(){
		this.style.backgroundColor = "#cc002b";
	}
	document.querySelector("span.btn-ok").onmouseleave = function(){
		this.style.backgroundColor = "#ff0036";
	}
	document.querySelector("span.btn-cancel").onmouseover = function(){
		this.style.backgroundColor = "#85807a";
	}
	document.querySelector("span.btn-cancel").onmouseleave = function(){
		this.style.backgroundColor = "#a9a6a2";
	}
	divConfirm.querySelector('.message-confirm .btn-ok').onclick = function() {
		if (typeof callBack === "function") callBack();
		document.body.removeChild(divConfirm);
	};
	divConfirm.querySelector('.message-confirm .btn-cancel').onclick = function() {
		document.body.removeChild(divConfirm);
	};
}

function notice(msg) {
	var divNotice = document.createElement("div");
	divNotice.className = "message-notice";
	divNotice.textContent = msg;
	divNotice.style.position = "fixed";
	divNotice.style.left = "50%";
	divNotice.style.top = "50%";
	divNotice.style.transform = "translate(-50%,-50%)";
	divNotice.style.padding = "15px 27px";
	divNotice.style.backgroundColor = "rgba(0,0,0,.7)";
	divNotice.style.color = "white";
	divNotice.style.borderRadius = "7px";
	divNotice.style.fontSize = "16px";
	divNotice.style.zIndex = "9999999999999";
	divNotice.style.border = "1px solid #555";
	divNotice.style.boxShadow = "inset  0 0 7px 0 #eee";
	document.body.appendChild(divNotice);
	// 出现1.5s后自动消失
	setTimeout(() => {
		document.body.removeChild(document.querySelector("div.message-notice"));
	}, 1000)
}
