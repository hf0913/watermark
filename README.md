# Methods

-   `{addWatermark} Function 添加水印`

## Usage

-   `{config} Object`

```javascript
import { addWatermark } from "maple-watermark";

const config = {
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
	top: "14px", // 内容top，参考css语法position top
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
	bgSize: "100% 100%", // 背景图像的尺寸，参考css语法background-size
	bgPosition: "top left", // 背景图像的起始位置，参考css语法background-position
	bgAttachment: "scroll" // 设置固定的背景图像，参考css语法background-attachment
};

addWatermark(config);
```

### Contact information

QQ：1330713179 WeChat：HF15243886475 Email：fenghu0913@gmail.com
