/* eslint-disable */
<template>
	<div class="threed">
		<div class="content">
			<div v-for="(item,index) in $data.value">
				<div class="title ver_">{{item.plantName}}</div>
				<div @click='details(item.id)' class="fullscreen"></div>
				<img :id="'iframe'+(index+1)" :src="require('../../assets/img/'+item.id+'.png')"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			details(id){
				this.$router.push({ path: 'details', query: {id: id }});
			},
		},
		data(){
			return {
				fullbool:true,
				value:{
				},
			}
		},
		mounted(){
			//实验室名称
			this.$http.get('http://39.105.7.187:8199/test/testroom/testRoom/testroomList').then(resp => {
				console.log(resp)
            	this.$data.value=resp.data.body.data
            })
		}
	}
</script>