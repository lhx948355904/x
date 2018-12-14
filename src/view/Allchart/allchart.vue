/* eslint-disable */
<template>
	<div id="app">
		<div id="title">
	  		<router-link to='/' class="home ver_middle">
	  			<img src="../../assets/img/home.png" alt="" />
	  		</router-link>
	  		
	  		<span class="ver_">欢迎XXX领导视察</span>
	  		
	  		<router-link to='allchart' class="allchart ver_middle">
	  			<img src="../../assets/img/allchart.png"/>
	  		</router-link>
	  	</div>
		<div id="chart">
			<div class="nav">
				<span :class="lylShow?'active':''" @click="lylShow=true">设备利用率</span>
				<span :class="!lylShow?'active':''" @click="lylShow=false">设备故障率</span>
			</div>
			<div v-if="lylShow" id="lyl">
				
			</div>
			<div v-if="!lylShow" id="gzl">
				
			</div>
		</div>
		<div class="toggle"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		methods: {
			draw(id,data) {
				var myChart = echarts.init(document.getElementById(id));
				var option = {
					xAxis: {
						type: 'category',
						data: data.xData,
						axisLabel: {
							color: '#4181EB',
							fontSize: 18
						},
						axisLine: {
							lineStyle: {
								color: '#4181EB'
							}
						}
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							color: '#4181EB',
							formatter: "{value}%",
							fontSize: 18
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: '#4181EB'
							}
						},
						splitLine: {
							lineStyle: {
								color: '#4181EB',
								opacity: .6
							}
						},
					},
					series: [{
						data: data.optionData,
						type: 'bar',
						itemStyle: {
							color: "#4181EB",
							opacity: .6
						}
					}]
				};
				myChart.setOption(option)
			},
			async idFunc(){
				await this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=4').then(resp => {
					var data=resp.data.body.data;
					for(let x of data.values()){
						this.idArr.push(x.machId)
					}
	            })
				await this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=3').then(resp => {
					var data=resp.data.body.data;
					for(let x of data){
						this.idArr.push(x.machId)
					}
	            })
				await this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=2').then(resp => {
					var data=resp.data.body.data;
					for(let x of data){
						this.idArr.push(x.machId)
					}
	            })
				await this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=1').then(resp => {
					var data=resp.data.body.data;
					for(let x of data){
						this.idArr.push(x.machId)
					}
	            })
			}
		},
		mounted() {
			this.$nextTick(function() {
	           	this.idFunc().then(()=>{
	           		this.$http.get('http://39.105.7.187:8199/test/sysequip/sysEquip/equipRatio',{
						s_dt:new Date().toLocaleDateString().replace(/\//g,'-')+" "+new Date().toTimeString().split(' ')[0],
						e_dt:new Date(+new Date()-60*60*24000).toLocaleDateString().replace(/\//g,'-')+" "+new Date(+new Date()-60*60*24000).toTimeString().split(' ')[0],
						machName:this.idArr.toString()
					})
					.then(data=>{
						console.log(data)
						this.draw('lyl',{xData:data.data.body.data.xlist,optionData:data.data.body.data.lyl});
						this.draw('gzl',{xData:data.data.body.data.xlist,optionData:data.data.body.data.gz});
					})
	           	});
				
				
				
			})
		},
		data() {
			return {
				tableShow: true,
				idArr:[],
				lylShow:true,
			}
		}
	}
</script>
<style scoped lang="less" src='./allchart.less'></style>