<template>
	<div class="detailsChart1">
		<div class="nav">
			<span @click="sanwei">三维图</span>
			<span @click="qushi">趋势图</span>
		</div>
		<div class="charts_parent">
			<ul class="charts">
				<li v-for='(item,index) in charts'>
					<span>{{item}}</span>
					<div :id="'chart'+(index+1)"></div>
				</li>
			</ul>
		</div>
		<ul class="bottom_nav">
			<router-link :to="'details?id='+item.id" v-for="item in value">
				<li :class='{active:item.id==$data.id}'>{{item.plantName}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import echarts from 'echarts';
	export default{
		props:['number'],
		methods:{
			sanwei(){
				this.$emit('toggle1',true);
			},
			qushi(){
				this.$emit('toggle1',false);
			},
			draw(id,dataArr={date:[],temp:[],hum:[]}){
				
				
				let myChart = echarts.init(document.getElementById(id)),date1=[];
				for(let x of dataArr.date.values()){
					date1.push(x.replace(/T/g,' '))
				}
				let option = {
				    tooltip : {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            label: {
				                backgroundColor: '#6a7985'
				            }
				        }
				    },
				    grid: {
				    	top:"10%",
				        left: '3%',
				        right: '6%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : date1,
				            axisLabel:{
				                color:'white'
				            },
				            axisTick:{
				                lineStyle:{
				                    color:'white'    
				                }
				                
				            },
				            axisLine:{
				                lineStyle:{
				                    color:'white'    
				                }
				                
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisLabel:{
				                color:'white'
				            },
				            axisTick:{
				                lineStyle:{
				                    color:'white'    
				                }
				                
				            },
				            axisLine:{
				                lineStyle:{
				                    color:'white'    
				                }
				                
				            }
				        }
				    ],
				    series : [
				        
				        {
				            type:'line',
				            stack: '温度',
				            areaStyle: {
				                color:'#00AEF7'
				            },
				            lineStyle:{
				                color:'#00AEF7'
				            },
				            data:dataArr.temp
				        },
				        {
				            type:'line',
				            stack: '湿度',
				            areaStyle: {
				                color:'#00AEF7'
				            },
				            lineStyle:{
				                color:'#00AEF7'
				            },
				            data:dataArr.hum
				        },
				    ]
				};
				option
				myChart.setOption(option)
			},
			makeLine(){
				var self=this;
				this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid='+this.id).then(resp => {
					var data=resp.data.body.data;
					this.charts=[];
					for(let [index,x] of data.entries()){
						this.$http.get('http://39.105.7.187:8199/test/sysequip/sysEquip/equipCurveList?starttime='+this.now+'&endtime='+this.now+'&id=1'/*+x.machId*/)
						.then(data=>{
							var data=data.data.body.data;
							this.charts.push(data.equipName);
							setTimeout(function(){
								self.draw('chart'+(index+1),{date:data.timeList,temp:data.machTemp,hum:data.machHum});
							},0)
						})
					}
					
	            })
			}
		},
		data(){
			return {
				id:"",
				charts:[],
				value:{
					
				},
				now:new Date().toLocaleDateString().replace(/\//g,'-'),
			}
		},
		mounted(){
			window.id=this.$data.id=this.$router.history.current.query.id;
			
//			点击栏目
			this.$http.get('http://39.105.7.187:8199/test/testroom/testRoom/testroomList')
            .then(resp => {
            	this.$data.value=resp.data.body.data;
            })
            
			var self=this
			this.makeLine();
			window.makeLine=this.makeLine;
		},
		watch: {
		  	$route(){
			    window.id = this.id = this.$route.query.id;
			    document.getElementsByClassName('charts')[0].innerHTML="";
			    this.makeLine();
			},
		}
	}
</script>