<template>
	<p>{{message}}</p>
	
	<span v-once>这个将不会改变: {{ message }}</span>
	
	<p>使用双大括号的文本插值: {{ rawHtml }}</p>
	
	<!-- 使用 v-html 指令用于输出 html 代码 -->
	<p>使用 v-html 指令: <span v-html="rawHtml"></span></p>

</template>

<script>
	export default {
		name: "TestVue",
		props:{
			message: String
		},
		data(){
			return {
				rawHtml: '<span style="color: red">这里会显示红色！</span>'
			}
		}
	}
</script>

<style>
</style>
