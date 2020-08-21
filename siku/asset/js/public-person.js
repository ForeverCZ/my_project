(function() {
	let dds = document.querySelectorAll("div.person-wraaper-left dd")
	dds.forEach(item => {
		item.onclick = function() {
			if (this.querySelector("a").classList.contains("active"))
				return;
				item.parentNode.parentNode.querySelector("a.active").classList.remove("active");
				this.querySelector("a").classList.add("active");
		}
	})
})();
