<template>
	<div>
		<label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
		<br><br>
		<div v-bind:class="{'class1': use}">
			v-bind:class 指令
		</div>
		<p v-if="seen">现在你看到我了</p>


		<!-- 父组件向子组件传值 -->
		<div>
			性别：{{sex}}
		</div>

		<!-- 遍历  for-->
		<ol>
			<li v-for="site in sites">
				{{ site.text }}
			</li>
		</ol>

		<p><a v-bind:href="url">百度一下</a></p>

		<!-- 反转字符串 -->
		<!-- <button v-on:click="reverseMessage">反转字符串</button> -->
		<button @click="reverseMessage">反转字符串</button>
		<p>{{message}}</p>


		<div id="xx">
			<div v-if="Math.random() > 0.5">
				随机数大于 0.5
			</div>
			<div v-else>
				随机数小于等于 0.5
			</div>
		</div>


		<div id="appxx">
			<div v-if="type === 'A'">
				A
			</div>
			<div v-else-if="type === 'B'">
				B
			</div>
			<div v-else-if="type === 'C'">
				C
			</div>
			<div v-else>
				Not A/B/C
			</div>
		</div>



		<!-- 计算属性 -->
		<p>原始字符串: {{ message }}</p>
		<p>计算后反转字符串: {{ reversedMessage }}</p>



		<!-- 监听属性 watch -->
		<div id="app_xx">
			千米 : <input type="text" v-model="kilometers">
			米 : <input type="text" v-model="meters">
		</div>

		<p id="info"></p>


		<!-- 样式绑定 -->
		<div id="app11">
			<div class="static" :class="classObject">font-test</div>
		</div>


		<!-- 事件处理 -->
		<!-- `greet` 是在下面定义的方法名 -->
		<button @click="greet">点我</button>
		<!-- 除了直接绑定到一个方法，也可以用内联 JavaScript 语句： -->
		<button @click="say('hi')">Say hi</button>
		<button @click="say('what')">Say what</button>

		<!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
		<button @click="one('xxx'), two('xx')">
			点我哈
		</button>


		<!-- 表单学习 -->
		<div id="ahh">
			<p>input 元素：</p>
			<input v-model="message" placeholder="编辑我……">
			<p>input 表单消息是: {{ message }}</p>

			<p>textarea 元素：</p>
			<textarea v-model="message2" placeholder="多行文本输入……"></textarea>
			<p>textarea 表单消息是:</p>
			<p style="white-space: pre">{{ message2 }}</p>

		</div>

		<!-- 自定义指令 -->
		<div id="app">
			<p>页面载入时，input 元素自动获取焦点：</p>
			<input v-focus>
		</div>

		<!-- info: 'Ajax 测试!!' -->
		<button @click="getFeed12()">
			Ajax test
		</button>
		<div id="appInfo">
			result is : {{ info }}
		</div>


	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name: "VBind",
		props: {
			sex: String
		},
		directives: {
			focus: {
				// 指令的定义
				mounted(el) {
					el.focus()
				}
			}
		},


		//DATA 与  <template> 标签中元素有关联
		data() {
			return {
				info: {},
				message2: '菜鸟教程\r\nhttps://www.runoob.com',
				name: 'licslan',
				classObject: {
					'active': true,
					'text-danger': true
				},
				kilometers: 0,
				meters: 0,
				type: 'D',
				message: "asdfg",
				use: true,
				seen: false,
				sites: [{
						text: 'Google'
					},
					{
						text: 'Runoob'
					},
					{
						text: 'Taobao'
					}
				],
				url: 'https://www.baidu.com'
			}
		},

		mounted: function() {
			let url = "/try/ajax/json_demo.json";
			axios.get('/apix' + url)
				.then(res => {
					console.log("===>>>>" + res);
				})
				.catch(err => {
					console.log(err);
				})
		},



		methods: {

			reverseMessage() {
				this.message = this.message
					.split('')
					.reverse()
					.join('')
			},
			greet(event) {
				// `methods` 内部的 `this` 指向当前活动实例
				alert('Hello ' + this.name + '!')
				// `event` 是原生 DOM event
				if (event) {
					alert(event.target.tagName)
				}
			},
			say(message) {
				alert(message)
			},
			one(event) {
				alert(event)
			},
			two(event) {
				alert(event)
			},
			getFeed() {
				axios.get(
						"api/index/ding.json", //请求url
					)
					// 网络请求成功
					.then(res => {
						console.log("成功", res)
					})
					// 网络请求失败
					.catch(err => {
						console.log("失败", err);
					})
			},
			getFeed12() {
				let url = "/try/ajax/json_demo.json";
				axios.get('/apix' + url)
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					})
			}

		},


		computed: {

			/* 
			 提供的函数将用作属性 vm.reversedMessage 的 getter 。
			 
			 vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新
			 
			 computed vs methods
			 
			 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，
			 
			 只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
			 
			 可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性
			 */

			// 计算属性的 getter
			reversedMessage: function() {
				// `this` 指向 vm 实例
				return this.message.split('').reverse().join('')
			}
		},
		watch: {
			kilometers: function(val) {
				this.kilometers = val;
				this.meters = this.kilometers * 1000
			},
			meters: function(val) {
				this.kilometers = val / 1000;
				this.meters = val;
			}
		}

	}

	/* createApp(VBind).mount('#app_xx').$watch('kilometers', function(newValue, oldValue) {
		// 这个回调将在 vm.kilometers 改变后调用
		document.getElementById("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
	}) */
</script>

<style>
	.static {
		width: 100px;
		height: 100px;
	}

	.active {
		font-size: 45px;
	}

	.text-danger {
		background: green;
	}
</style>
