<template>
	<div id="login">
		<div class="login_bg1"></div>
		<form  id="login_form">
			<div class="title">
				<p>IMS智能检测系统</p>
				<p>航天科工三院33所可靠性中心智能检测系统</p>
			</div>
			<div>
				<span>帐号：</span>
				<input type="text" />
			</div>
			<div>
				<span>密码：</span>
				<input type="text" />
			</div>
			<div>
				<span></span>
				<div>
					<span>
						<input type="checkbox" name="" id="checkbox" /><label for="checkbox">下次自动登录</label>
					</span>
					<span>
						<a href="">忘记密码</a>
					</span>
				</div>
			</div>
			<div>
				<div id="submit" @click="submit">登录</div>
			</div>
		</form>
	</div>
</template>
	
<script>
	export default{
		methods:{
			submit(){
				this.$http.get('http://39.105.7.187:8199/test/testroom/testRoom/testroomList')
	            .then(resp => {
	                this.$router.push('index')
	            }).catch(err => {
	                console.log(err);
	            });
			}
		}
	}
</script>

<style lang="less" scoped src="./login.less"></style>
