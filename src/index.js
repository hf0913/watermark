"use strict";
let defaultOption = {
	// 默认配置
	$el: document.body, // 挂载的父元素，建议父元素设置position
	firstStr: "Maple", // 第一段文字
	secondStr: "1208", // 第二段文字, 传入空字符串可以隐藏
	font: "14px Vedana", // 字体，参考css语法font
	color: "#bfbfbf", // 字体颜色，参考css语法color
	textAlign: "left", // 文本对齐方式，参考css语法canvas textAlign
	textBaseline: "Middle", // 文本基线，参考css语法canvas textBaseline
	rotate: (-20 * Math.PI) / 180, // 内容旋转角度，参考css语法canvas rotate
	firstStrLocal: {
		x: 15,
		y: 40
	}, // 第一段文字坐标
	secondStrLocal: {
		x: 15,
		y: 56
	}, // 第二段文字坐标
	top: 0, // 内容top，参考css语法position top
	left: 0, // 内容left，参考css语法position left
	zIndex: 1208120812081208, // 内容层级，参考css语法position z-index
	opacity: 0.28, // 字体颜色深浅，参考css语法opacity
	width: "100%", // 内容宽度，参考css语法width
	height: "100%", // 内容高度，参考css语法height
	canvasHeight: 128, // 画布高度，参考css语法height
	canvasWidth: 128, // 画布宽度，参考css语法width
	type: "canvas", // 水印类型：canvas | picture
	bgUrl: "", // 自定义水印图片
	bgRepeat: "repeat", // 是否及如何重复背景图像，参考css语法background-repeat
	bgSize: "auto", // 背景图像的尺寸，参考css语法background-size
	bgPosition: "top left", // 背景图像的起始位置，参考css语法background-position
	bgAttachment: "scroll" // 设置固定的背景图像，参考css语法background-attachment
};

let setWatermark = _ => {
	try {
		let id = "@Maple@";
		let div = document.createElement("div");
		div.id = id;
		div.style.pointerEvents = "none";
		div.style.top = defaultOption.top;
		div.style.left = defaultOption.left;
		div.style.opacity = defaultOption.opacity;
		div.style.position = "absolute";
		div.style.zIndex = defaultOption.zIndex;
		div.style.width = defaultOption.width;
		div.style.height = defaultOption.height;
		div.style.backgroundRepeat = defaultOption.bgRepeat;
		div.style.backgroundSize = defaultOption.bgSize;
		div.style.backgroundPosition = defaultOption.bgPosition;
		div.style.backgroundAttachment = defaultOption.bgAttachment;

		if (document.getElementById(id) !== null) {
			defaultOption.$el.removeChild(document.getElementById(id));
		}

		switch (defaultOption.type) {
			case "canvas":
				let can = document.createElement("canvas");
				can.width = defaultOption.canvasWidth;
				can.height = defaultOption.canvasHeight;

				let cans = can.getContext("2d");
				cans.rotate(defaultOption.rotate);
				cans.font = defaultOption.font;
				cans.fillStyle = defaultOption.color;
				cans.textAlign = defaultOption.textAlign;
				cans.textBaseline = defaultOption.textBaseline;
				cans.fillText(
					defaultOption.firstStr,
					defaultOption.firstStrLocal.x,
					defaultOption.firstStrLocal.y
				);
				if (defaultOption.secondStr)
					cans.fillText(
						defaultOption.secondStr,
						defaultOption.secondStrLocal.x,
						defaultOption.secondStrLocal.y
					);
				div.style.backgroundImage = `url(${can.toDataURL(
					"image/png"
				)})`;
				break;
			case "picture":
				div.style.backgroundImage = `url(${defaultOption.bgUrl})`;
				break;
		}

		defaultOption.$el.appendChild(div);
		observerEl();
		return id;
	} catch (error) {
		console.log(error, "Maple-error-setWatermark");
	}
};

const addWatermark = (option = {}) => {
	try {
		defaultOption = Object.assign(defaultOption, option);
		let id = setWatermark();
		setInterval(() => {
			if (document.getElementById(id) === null) {
				id = setWatermark();
			}
		}, 60);
		window.onresize = () => {
			setWatermark();
		};
	} catch (error) {
		console.log(error, "Maple-error-addWatermark");
	}
};

function observerEl() {
	try {
		const targetNode = document.getElementById("@Maple@");
		if (targetNode == null) {
			setTimeout(() => {
				observerEl();
			}, 128);
			return;
		}
		const MutationObserver =
			window.MutationObserver ||
			window.WebKitMutationObserver ||
			window.MozMutationObserver;
		const config = {
			attributes: true,
			childList: true,
			subtree: true
		};
		const observer = new MutationObserver(() => {
			addWatermark();
		});
		observer.observe(targetNode, config);
	} catch (error) {
		console.log(error, "Maple-error-observerEl");
	}
}

export { addWatermark };
