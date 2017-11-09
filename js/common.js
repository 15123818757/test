function browserkCheck() {
	var e = window.navigator.userAgent,
		o = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
		n = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		t = !!e.match(/MicroMessenger/i);
	return t ? "weixin" : o ? "android" : !!n && "ios"
}

function openApp() {
	var e = browserkCheck(),
		o = !0,
		n = document.createElement("iframe");
	"android" == e && (o = !1, n.src = "launchapp://wp"), "ios" == e && (o = !1, window.location = "nine.cn.yiding.yunyou://"), n.style.display = "none", document.body.appendChild(n);
	var t = +new Date;
	window.setTimeout(function() {
		if(document.body.removeChild(n), +new Date - t > 500) {
			if(!o) return;
			alert("打开失败，或未安装"), window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.ninth.wp"
		}
	}, 600)
}

function setTop(e) {
	$(e).show(), $("textarea[readonly]").remove(), $(".copy-laye").css("height", $(window).height()).show(), $("body").attr("ontouchmove", "return false")
}

function setImgWH(e) {
	$(e).width() <= $(e).height() ? $(e).css("height", "100%") : $(e).css("width", "100%")
}

function GetQueryString(e) {
	var o = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
		n = window.location.search.substr(1).match(o);
	return null != n ? unescape(n[2]) : null
}

function replayBoxShow() {
	$(".recommend").hide(), window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? ($(".recommend-ios-lay").show(), $(".recommend-mode").css("top", ".88rem")) : ($(".recommend-ios-lay").css("background", "none").show(), $(".recommend-mode").css("bottom", 0), $("html, body, .m-container").addClass("noScroll")), $(".recommend-mode textarea").focus()
}

function replayBoxHide(e, o) {
	($(e.target).hasClass("recommend-ios-lay") || $(e.target).hasClass("btn")) && o && ($(".recommend").show(), $(".recommend-ios-lay").hide(), $("html, body, .m-container").removeClass("noScroll"), $(".recommend-ios-lay").hide(), $(".recommend-mode textarea").val("").blur()), e.preventDefault(), e.stopPropagation()
}

function articleImgHandle() {
	$(".article-content").on("click", "img", function(e) {
		$("body").addClass("noScroll"), $("#scale").attr("src", $(this).attr("src")).css("width", "auto"), $(".show-img-big-wrapper").show(), e.stopPropagation(), e.preventDefault()
	}), touch.on(".show-img-big-wrapper", "tap doubletap pinchin pinchout", function(e) {
		var o = $("#scale").width();
		"tap" == e.type && ($("body").removeClass("noScroll"), $(".show-img-big-wrapper").hide()), "pinchin" == e.type && $("#scale").css({
			width: o -= .05 * o
		}), "pinchout" == e.type && $("#scale").css({
			width: o += .5 * o
		})
	})
}

function audioPlay(e, o) {
	var n = document.getElementById(o),
		t = document.getElementById(e),
		a = !0;
	t.addEventListener("touchstart", function() {
		a ? ($(t).addClass("play"), n.play()) : ($(t).removeClass("pause"), n.pause()), a = !a
	}, !1)
}

function imgShow(e) {
	var o = $(e).offset().top,
		n = $(window).height(),
		t = 0;
	o < n ? $(e).attr("src", $(e).attr("data-src")) : $(".scrollArea").scroll(function() {
		t = $(this).scrollTop(), o <= t + n - 200 && $(e).attr("src", $(e).attr("data-src"))
	})
}
$(function() {
		function e(e) {
			var o = e + "=",
				n = "";
			return document.cookie.length > 0 && (offset = document.cookie.indexOf(o), offset != -1 && (offset += o.length, end = document.cookie.indexOf(";", offset), end == -1 && (end = document.cookie.length), n = unescape(document.cookie.substring(offset, end)))), n
		}

		function o() {
			var e = 0,
				o = 0;
			$(window).scroll(function() {
				o = $(window).scrollTop(), o > e ? ($(".m-top").addClass("fixed"), $(".m-top-holder").show()) : 0 == $(window).scrollTop() && ($(".m-top").removeClass("fixed"), $(".m-top-holder").hide())
			})
		}
		for(var n = $(".navinner .list a"), t = 0, a = 0; a < n.length; a++) t += $(n[a]).outerWidth();
		$(".navinner .list").css("width", t + "px"), $(".navbar .arrow").click(function() {
			$(".dropMenu").toggle()
		}), $(".navbar a").click(function() {
			$(".navbar a").removeClass("active"), $(this).addClass("active")
		}), $(".i-search input").click(function() {
			$(".search-history").show()
		}), $(".search-history a").click(function() {
			$(".search-history").hide()
		}), $(".slideMenuBtn").click(function() {
			$("html").addClass("noScroll"), $(".slideMenuContent").show()
		}), $(".slideMenuBtn.active").click(function() {
			$("html").removeClass("noScroll"), $(".slideMenuContent").fadeOut()
		}), $(".navbar .inner").width() <= $(".navbar .navbarbg").width() ? ($(".navbar .inner").addClass("w"), $(".navbar .list").removeClass("r"), $(".navbar .arrow").hide()) : ($(".navbar .inner").removeClass("w"), $(".navbar .list").addClass("r"), $(".navbar .arrow").show()), $(".headDropMenu").click(function() {
			$(this).is(".active") ? ($(this).removeClass("active"), $(".headDropMenuLayer").fadeOut(300)) : ($(this).addClass("active"), $(".headDropMenuLayer").show())
		}), $(".headDropMenuLayer").click(function(e) {
			$(e.target).is(".headDropMenuLayer") && ($(this).fadeOut(300), $(".headDropMenu").removeClass("active"))
		}), $(".addToScreen").click(function() {
			$(this).hide(), document.cookie = "index-tips=1"
		});
		var i = navigator.userAgent.toLowerCase();
		"" != e("index-tips") && /(.*)+safari(.*)+/.test(i) ? $(".addToScreen").show() : $(".addToScreen").hide(), $(".m-container").dragViewForIos({
			touchSub: ".m-sub"
		}), o()
	}),
	function(e) {
		e.fn.dragViewForIos = function(o) {
			var n = {
				touchSub: ""
			};
			o && e.extend(n, o), this.each(function(o, t) {
				var a = Math.floor(e(t).outerHeight()),
					i = Math.floor(e(n.touchSub).outerHeight());
				e(t).scroll(function() {
					0 == e(t).scrollTop() && e(t).scrollTop(1), e(t).scrollTop() === i - a && e(t).scrollTop(e(t).scrollTop() - 1)
				})
			})
		}
	}(jQuery),
	function(e) {
		e.fn.copyAndShow = function(o) {
			var n = {
				callback: null
			};
			o && e.extend(n, o), this.each(function(o) {
				new Clipboard(this).on("success", function(o) {
					var o = o || window.event;
					n.callback && n.callback(!0), e(".copy-laye-show-1").show(), setTimeout(function() {
						e("textarea[readonly]").remove()
					}, 200), e(".copy-laye").css("height", e(".page").height()).show(), e("body").attr("ontouchmove", "return false"), o.clearSelection()
				}).on("error", function(o) {
					var o = o || window.event;
					n.callback && n.callback(!1), e(".copy-laye-show-2").show(), setTimeout(function() {
						e("textarea[readonly]").remove()
					}, 200), e(".copy-laye").css("height", e(".page").height()).show(), e("body").attr("ontouchmove", "return false"), o.clearSelection()
				})
			})
		}
	}(jQuery),
	function(e) {
		e.fn.loadToBottom = function(o) {
			var n = {
				targetHeight: window,
				scale: .7,
				callback: null
			};
			o && e.extend(n, o), this.each(function(o) {
				var t = e(this),
					a = !0;
				e(this).scroll(function() {
					a && e(t).scrollTop() >= Math.floor((e(n.targetHeight).outerHeight() - e(window).height()) * n.scale) && a && (a = !1, n.callback ? n.callback() : console.log("如需要，请设置callback"), setTimeout(function() {
						a = !0
					}, 500))
				})
			})
		}
	}(jQuery);