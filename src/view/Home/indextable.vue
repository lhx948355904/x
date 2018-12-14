/* eslint-disable */
<template>
  <div class="table" v-show="tableShow">
  	<div class="table1">
  		<div class="title ver_center">试验任务列表</div>
  		<div class="allCount">当前任务工作总数 {{table1.allCount}}</div>
  		<div class="head">
  			<span v-for="(head,index) in table1.tableHead">
  				<div v-if="index==table1.tableHead.length-1" @click="filter">
  					{{head}} <img src="../../assets/img/push.png" alt="" />
  					<transition name='filter'>
  						<div v-show="filterShow" ref="filter" class="filter">
  							<div>正在进行</div>
  							<div>未开始</div>
  						</div>
  					</transition>
  				</div>
  				<div v-else>{{head}}</div>
  			</span>
  		</div>
  		<div class="body_content">
  			<div class="body" v-for="body in table1.tableBody">
	  			<span :title="body.peserveNo">{{noData(body.peserveNo)}}</span>
	  			<span :title="body.machName">{{noData(body.machName)}}</span>
	  			<span :title="body.typeName">{{noData(body.typeName)}}</span>
	  			<span :title="body.proName">{{noData(body.proName)}}</span>
	  			<span :title="body.unit">{{noData(body.unit)}}</span>
	  			<span :title="body.testPerson">{{noData(body.testPerson)}}</span>
	  			<span :title="body.testbeginTime+'-'+body.testendTime">{{body.testbeginTime}}-{{body.testendTime}}</span>
	  			<span :title="body.status">{{noData(body.status)}}</span>
	  		</div>
  		</div>
  	</div>
  	
  	<div class="table2">
  		<router-link to="/details" style='color:white'>
  			<div class="title ver_center">当日值班人</div>
  		</router-link>
  		<div class="body head">
  			<span>值班人</span>
  			<span>班组</span>
  			<span>联系方式</span>
  		</div>
  		<div class="body_content">
  			<div class='body' v-for="body in table2">
	  			<span :title="body.name">{{noData(body.name)}}</span>
	  			<span :title="body.roTeam">{{noData(body.roTeam)}}</span>
	  			<span :title="body.contact">{{noData(body.contact)}}</span>
	  		</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	methods:{
		filter(){
			this.filterShow=!this.filterShow
		},
		noData(data){
			if(data!=""){
				return data
			}else{
				return "暂无"
			}
		}
	},
  data(){
  	return{
  		tableShow:true,
  		filterShow:false,
			table1:{
				allCount:"",
				tableHead:[],
				tableBody:[]
			},
			"table2":{}
}
  },
  mounted(){
  	this.$http.get('http://39.105.7.187:8199/test/equipment/equipment/tasksList')
  	.then(result=>{
  		this.$data.table1.allCount=result.data.body.allCount;
  		this.$data.table1.tableHead=result.data.body.tableHead;
  		this.$data.table1.tableBody=result.data.body.data
  	})
  	
  	this.$http.get('http://39.105.7.187:8199/test/rota/rota/rotaPersonList').then(data=>{
  		this.$data.table2=data.data.body.list;
  	})
  }
}
</script>