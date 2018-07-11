window.onload = function(){
		var demo = new Typinyin();
		demo.attach('#typinyin_demo'); // 绑定元素
		demo.setOptions({
			sentences: [
				{
					ch: ["唉","...",{pause: 1500}/* 暂停1500毫秒 */,"两年","的","赌局","还是","输了","😓",{pause: 1500}/* 暂停1500毫秒 */,{del: 2}/* 删除两个字符 */,"😀"],
					py: ["ai","...","","liangnian","de","duju","haishi","shule","han","","","xiao"],
				}, /*{
					ch: ["赌局","已输","、","下海","干活"],
					py: ["duju","yishu","dian","xiahai","ganhuo"]
				},*/ {
					ch: ["贤","鱼","谈","什么","梦想","？？"],
					py: ["xián","yú","tán","shíme","mèngxiǎng","？？"]
				},{
					ch: ["梦","适可而止","吧","！","╮(╯_╰)╭",{pause: 3000},{del: 7},"╮(╯▽╰)╭"],
					py: ["duju","shì kě ér zhǐ ba","ba","！","wushuowie"," "," ","wunai"]
				},
				
				
				/*, {
					ch: ["This is an example."],
					py: ["This is an exaaaaaaaa\b\b\b\b\b\b\bmple."], // 用"\b" 来删除一个字符
				}, {
					ch: ["完全","无需","jQuery"],
					py: ["wanquan","wuxu","jQuery"],
				}, {
					ch: ["让","输入","打动","你的","心","\b","❤"], // 用"\b" 来删除一个字符
					py: [["ranfff",{pause: 281},{del: 3}/* 暂停281毫秒后删除三个字符 *//*,"g"],"shuru","dadong","nide","xin","","xin"],
				}, {
					ch: ["赶紧","尝试一下","吧","！"],
					py: ["ganjin","changshiyixia","ba","！"]
				}*/
			], // 需要输入的句子
			startDelay: 1000, // 启动延时，以毫秒记
			typeSpeed: 100, // 打字速度，以毫秒记
			pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
			backSpeed: 60, // 删除文字的速度，以毫秒记
			cursorChar: "|", // 光标字符
			loop: false, // 是否循环播放
		});
		demo.finished = function() {
			console.log("Typinyin.js Demo 演示完毕！");
		}; // 输入完毕时执行，loop 为 true 的时无效
		demo.init(); // 初始化并开始打字
	}