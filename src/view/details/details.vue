/* eslint-disable */
<template>
  <div id="app">
  	<div id="title" @click="showInfo">
  		<router-link to='/' class="home ver_middle">
  			<img src="../../assets/img/home.png" alt="" />
  		</router-link>
  		
  		<span class="ver_">欢迎XXX领导视察</span>
  		
  		<router-link to='allchart' class="allchart ver_middle">
  			<img src="../../assets/img/allchart.png"/>
  		</router-link>
  	</div>
  	<div class="toggle" @click="toggle"></div>
  	
  	<table_ v-show='tableShow'></table_>
  	<detailsChart @toggle1="toggleRight" v-if='toggleval' id='3dx'></detailsChart>
  	<detailsChart1 @toggle1="toggleRight" v-if='!toggleval' id='3dx'></detailsChart1>
  </div>
</template>

<script>
import table_ from './table';
import detailsChart from './detailsChart';
import detailsChart1 from './detailsChart1';

export default {
  components: {
    table_,detailsChart,detailsChart1
  },
  methods:{
  	toggle(e){
  		this.tableShow=!this.tableShow;
  		if(this.tableShow){
  			document.getElementById("3dx").style.width='calc(63% - 20px)';
  			e.path[0].style.transform='rotate(0deg)'
  		}else{
  			document.getElementById("3dx").style.width='100%';
  			e.path[0].style.transform='rotate(90deg)'
  		}
  		if(window.id==1){
  			window.makePath();
  		}
			thisVue.remakeImg1(thisVue);
			window.makeLine();
  	},
  	toggleRight(val){
  		this.toggleval=val
  	},
  	showInfo(){
  		thisVue.showInfo=false;
  	}
  },
  data(){
  	return {
  		tableShow:true,
  		toggleval:true,
  	}
  },
}
</script>
<style lang="less" src="./details.less"></style>