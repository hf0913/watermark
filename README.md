# Methods

-   `{addWatermark} Function 添加水印`
-   `{disObserver} Function 移除监听demo事件，不建议调用`

## Usage

-   `{config} Object`

```javascript
import { addWatermark } from "maple-watermark";

const config = {
    $el: document.body, // 挂载的父元素，建议父元素设置position
    firstStr: "Maple", // 第一段文字
    secondStr: "1208", // 第二段文字, 传入空字符串可以隐藏
    font: "14px Vedana", // 字体
    color: "#bfbfbf", // 字体颜色
    textAlign: "left", // 文本对齐方式
    textBaseline: "Middle", // 文本基线
    rotate: (-20 * Math.PI) / 180, // 内容旋转角度
    firstStrLocal: {
        x: 15,
        y: 40
    }, // 第一段文字坐标
    secondStrLocal: {
        x: 15,
        y: 56
    }, // 第二段文字坐标
    top: "14px", // 内容top
    left: 0, // 内容left
    zIndex: 1208120812081208, // 内容层级
    opacity: 0.28, // 字体颜色深浅
    width: "100%", // 内容宽度
    height: "100%", // 内容高度
    canvasHeight: 128, // 画布高度
    canvasWidth: 128, // 画布宽度
    type: "canvas", // 水印类型，canvas | picture
    bgUrl: "" // 自定义水印图片
};

addWatermark(config);
```

### Contact information

QQ：1330713179 WeChat：HF15243886475 Email：fenghu0913@gmail.com
