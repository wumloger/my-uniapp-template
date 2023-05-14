<template>
	<view class="content">
		 <van-cell title="URL 跳转" is-link url="https://github.com" />
		 <van-cell title="路由跳转" is-link to="pages/setting/setting" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
