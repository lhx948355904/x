/* eslint-disable */
<template>
  <div id="app">
  	<div id="title">
  		<router-link to='/' class="home ver_middle">
  			<img src="../../assets/img/home.png" alt="" />
  		</router-link>
  		
  		<span class="ver_">{{title}}</span>
  		
  		<router-link to='allchart' class="allchart ver_middle">
  			<img src="../../assets/img/allchart.png"/>
  		</router-link>
  	</div>
  	<div class="toggle" @click="toggle"></div>
  	
  	<IndexTable v-show='tableShow'></IndexTable>
  	<Index3d id='3dx'></Index3d>
  	
  </div>
</template>

<script>
import IndexTable from './indextable.vue'
import Index3d from './index3d.vue'

export default {
  components: {
    IndexTable,Index3d
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
  	},
  },
  data(){
  	return {
  		tableShow:true,
  		title:"",
  	}
  },
  mounted(){
  	this.$http.get("http://39.105.7.187:8199/test/systitle/sysTitle/titleList").then(data=>{
  		this.title=data.data.body.title.title
  	})
  }
}
</script>
<style lang="less" src='./home.less'></style>