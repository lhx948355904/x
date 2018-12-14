<template>
	<div class="detailsChart">
		<div class="nav">
			<span @click="sanwei">三维图</span>
			<span @click="qushi">趋势图</span>
		</div>
		<!--<div class="title" v-for="item in value" v-if="item.id===$data.id">{{item.plantName}}</div>-->
		
		<div class="content center" v-if="$data.id=='3'">
			<div class="rows" v-for="item,index in center">
				<div class="col" v-for="item1 in item">
					<div class="each" v-for='item2 in item1'>
						<div>
							<img @click="showInfo=true" @load="remakeImg" :src="require('../../assets/3dimg/'+item2.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item2.machId=="nothing"?"暂无图片":item2.machId}}</p>
							<p>{{item2.equipName}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="content west" v-if="$data.id==='2'">
			<div class="rows" v-for="item,index in west">
				<div class="col" v-for="item1 in item">
					<div class="each" v-for="item2 in item1"> 
						<div>
							<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item2.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item2.machId=="nothing"?"暂无图片":item2.machId}}</p>
							<p>{{item2.equipName}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="content east" v-if="$data.id==='1'">
			<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path id='path1' width="100%" height="100%" style="fill:transparent;stroke:#5287CC;stroke-width:4"/>
				<path id='path2' style="fill:transparent;stroke:#5287CC;stroke-width:4"/>
			</svg>
			<div class="rows1">
				<div class="each" v-for="item in east.rows1">
					<div>
						<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
					</div>
					<div>
						<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
					</div>
				</div>
			</div>
			<div class="rows2">
				<div class="each" v-for="item in east.rows2">
					<div>
						<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
					</div>
					<div>
						<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
					</div>
				</div>
			</div>
			<div class="rows3">
				<div class="row3_1">
					<div class="each" v-for="item in east.rows3.rows3_1">
						<div>
							<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
						</div>
					</div>
				</div>
				<div class="row3_2">
					<div class="each" v-for="item in east.rows3.rows3_2">
						<div>
							<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="content house" v-if="$data.id==='4'">
			<div class="rows1">
				<div class="each" v-for="item in house.rows1">
					<div>
						<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
					</div>
					<div>
						<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
					</div>
				</div>
			</div>
			
			<div class="rows2">
				<div class="row2_1" v-for="item in house.rows2"> 
					<div class="each" v-for="item1 in item">
						<div>
							<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item1.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item1.machId=="nothing"?"暂无图片":item1.machId}}</p>
							<p>{{item1.equipName}}</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="rows3">
				<div class="each" v-for="item in house.rows3"> 
					<div>
						<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
					</div>
					<div>
						<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
					</div>
				</div>
			</div>
			
			<div class="rows4">
				<div class="each" v-for="item in house.rows4"> 
					<div>
						<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
					</div>
					<div>
						<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
						<p>{{item.equipName}}</p>
					</div>
				</div>
			</div>
			
			<div class="rows5">
				<div class="col_1">
					<div class="each" v-for="item in house.rows5[0]"> 
						<div>
							<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
							<p>{{item.equipName}}</p>
						</div>
					</div>
				</div>
				<div class="col_2"> 
					<div class="each" v-for="item in house.rows5[1]"> 
						<div>
							<img @click="showInfo=true" @load.self="remakeImg" :src="require('../../assets/3dimg/'+item.machId+'.png')" alt="" />
						</div>
						<div>
							<p>{{item.machId=="nothing"?"暂无图片":item.machId}}</p>
							<p>{{item.equipName}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<ul class="info" @mousedown.self="moveinfo" v-show="showInfo">
			<li>当前任务：</li>
			<li>当前运行信息：</li>
			<li>状态：正在进行</li>
			<li>后续排班：排班一</li>
			<li>排班二</li>
			<li>排班三</li>
			<li>排班四</li>
			<li>排班五</li>
			<li>排班六</li>
		</ul>
		<ul class="bottom_nav">
			<router-link :to="'details?id='+item.id" v-for="item in value">
				<li :class='{active:item.id==$data.id}'>{{item.plantName}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			sanwei(){
				this.$emit('toggle1',true);
			},
			qushi(){
				this.$emit('toggle1',false);
			},
			makePath(){
				setTimeout(function(){
					var eastWidth=document.getElementsByClassName('east')[0].offsetWidth,
						eastHeight=document.getElementsByClassName('east')[0].offsetHeight,
						path1,path2,path3;
					path1=`M2 2 L${eastWidth-2} 2 
					L${eastWidth-2} ${eastHeight/4}
					L${eastWidth/9*6} ${eastHeight/4}
					L${eastWidth/9*6} ${eastHeight*.5}
					L2 ${eastHeight*.5} Z`;
					document.getElementById('path1').setAttribute('d',path1);
					
					path2=`M${eastWidth*.33+20} ${eastHeight/2+20}
					L${eastWidth/9*6+20} ${eastHeight/2+20}
					L${eastWidth/9*6+20} ${eastHeight/4+20}
					L${eastWidth-2} ${eastHeight/4+20}
					L${eastWidth-2} ${eastHeight-2}
					L${eastWidth*.33+20} ${eastHeight-2} Z`;
					document.getElementById('path2').setAttribute('d',path2);
				},0)
			},
			moveinfo(e){
				var layerX=310-e.layerX,layerY=e.layerY+30;
				e.target.onmousemove=function(e1){
					var x=window.innerWidth-e1.clientX-24-layerX,y=e1.clientY-window.innerHeight*.1-layerY;
					y<=0?y=0:"";
					if(y>document.getElementById('3dx').clientHeight-370){
						y=document.getElementById('3dx').clientHeight-370;
					}
					x<=0?x=0:"";
					if(x>document.getElementById('3dx').clientWidth-310){
						x=document.getElementById('3dx').clientWidth-310;
					}
					document.getElementsByClassName('info')[0].style.top=y+'px';
					document.getElementsByClassName('info')[0].style.right=x+'px';
					
					e.target.onmouseup=function(){
						e.target.onmousemove=null;
						e.target.onmouseup=null;
						e.target.onmouseleave=null;
						return false;
					}
					e.target.onmouseleave=function(){
						e.target.onmousemove=null;
						e.target.onmouseup=null;
						e.target.onmouseleave=null;
						return false;
					}
				}
			},
			remakeImg(e){
				var self=this;
				setTimeout(function(){
					var width=e.path[0].width,
						height=e.path[0].height,
	        			scale=width/height,
	        			parWidth = e.path[1].clientWidth,
	        			parHeight = e.path[1].clientHeight;
	    			if(width>height){
	    				e.path[0].style.width="100%";
	        			var width1=e.path[0].width;
	        			e.path[0].style.height=width1/scale+'px';
	        			if(e.path[0].height>parHeight){
	        				e.path[0].style.height="100%";
		    				var height1=e.path[0].height;
			    			e.path[0].style.width=height1*scale+'px';
	        			}
	    			}else{
	    				e.path[0].style.height="100%";
	    				var height1=e.path[0].height;
		    			e.path[0].style.width=height1*scale+'px';
		    			if(e.path[0].width>parWidth){
	        				e.path[0].style.width="100%";
		        			var width1=e.path[0].width;
		        			e.path[0].style.height=width1/scale+'px';
	        			}
		    		}
	    			e.path[0].style.opacity="1";
	    			self.imgArr.push(e);
				},0)
			},
			remakeImg1(vue){
				setTimeout(function(){
					var each=document.getElementsByClassName('each');
					for(let x of each){
						x.children[0].children[0].setAttribute('style','');
					}
					for(let x of vue.imgArr){
						vue.remakeImg(x);
					}
				},0)
			}
		},
		data(){
			return {
				id:"",
				value:{
					
				},
				house:{
					rows1:[],
					rows2:[
						[],[]
					],
					rows3:[],
					rows4:[],
					rows5:[
						[],[]
					]
				},
				center:{
					rows1:[
						[],[],[]
					],
					rows2:[
						[],[],[]
					],
					rows3:[
						[],[],[]
					]
				},
				west:{
					rows1:[
						[],[],[]
					],
					rows2:[
						[],[],[]
					]
				},
				east:{
					rows1:[],
					rows2:[],
					rows3:{
						rows3_1:[],
						rows3_2:[]
					},
				},
				imgArr:[],
				showInfo:false,
			}
		},
		mounted(){
			var self=this;
			
			window.id=this.$data.id=this.$router.history.current.query.id;
			
			this.$http.get('http://39.105.7.187:8199/test/testroom/testRoom/testroomList').then(resp => {
            	this.$data.value=resp.data.body.data;
            })
			
			//厂房
			this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=4').then(resp => {
				let data=resp.data.body.data,
					dataArr=["65143799208", "65143799311", "65143799155", "65143799274", "65143799226", "65143799227", "65143799312", "65143799228", "65143799205", "65143799204", "65143799319", "65143799200", "65143702047", "65143702048", "65143799287", "65143702075", "65143702068", "65143702035", "65143702074", "65143799298", "65143799094"];
				for(let x in data){
					if(x>=0&&x<7){
						this.house.rows1.push(data[x]);
					}else if(x>=7&&x<10){
						this.house.rows2[0].push(data[x]);
					}else if(x>=10&&x<12){
						this.house.rows2[1].push(data[x]);
					}else if(x>=12&&x<14){
						this.house.rows3.push(data[x]);
					}else if(x>=14&&x<15){
						this.house.rows4.push(data[x]);
					}else if(x>=15&&x<19){
						this.house.rows5[0].push(data[x]);
					}else if(x>=19){
						this.house.rows5[1].push(data[x]);
					}
					if(!dataArr.includes(data[x].machId)){
						data[x].machId="nothing";
					}
				}
            })
			
			//导航楼中
			this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=3').then(resp => {
				let data=resp.data.body.data,
					dataArr=["65141902159", "65141902131", "65141902166", "65141902038", "65141902037", "65141902060", "65143702069", "181340003", "181340002", "65141902167", "65141902168", "65141902166", "65141902105", "65141902117", "65141902058", "65141902056", "65141902057", "65141902145", "65141902059", "65141999020", "65141999018", "65141902061", "65141902138", "65141902104", "65141902123", "65141902075", "65141902074", "65141902082", "65141902081", "65143702066", "65143702073", "65143799142", "65143799176", "65143799177"];
				for(let x in data){
					if(x>=0&&x<3){
						this.center.rows1[0].push(data[x]);
					}else if(x>=3&&x<6){
						this.center.rows1[1].push(data[x]);
					}else if(x>=6&&x<9){
						this.center.rows1[2].push(data[x]);
					}else if(x>=9&&x<14){
						this.center.rows2[0].push(data[x]);
					}else if(x>=14&&x<17){
						this.center.rows2[1].push(data[x]);
					}else if(x>=17&&x<19){
						this.center.rows2[2].push(data[x]);
					}else if(x>=19&&x<25){
						this.center.rows3[0].push(data[x]);
					}else if(x>=25&&x<30){
						this.center.rows3[1].push(data[x]);
					}else if(x>=30){
						this.center.rows3[2].push(data[x]);
					}
					if(!dataArr.includes(data[x].machId)){
						data[x].machId="nothing";
					}
				}
				
            })
			
			//导航楼西
			this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=2').then(resp => {
				let data=resp.data.body.data,
					dataArr=["65141902151", "65143799295", "65141902137", "65141902129", "303-2", "65141902143", "65141902142", "65141902133", "65141902156", "65143702079", "65141902164", "65143799313", "65141902162", "65143799314", "65141902163", "65141902147", "65141902182", "65143702082", "65141902161", "65141902172"];
				for(let x in data){
					if(x>=0&&x<4){
						this.west.rows1[0].push(data[x]);
					}else if(x>=4&&x<7){
						this.west.rows1[1].push(data[x]);
					}else if(x>=7&&x<11){
						this.west.rows1[2].push(data[x]);
					}else if(x>=11&&x<15){
						this.west.rows2[0].push(data[x]);
					}else if(x>=15&&x<18){
						this.west.rows2[1].push(data[x]);
					}else if(x>=18&&x<20){
						this.west.rows2[2].push(data[x]);
					}
					if(!dataArr.includes(data[x].machId)){
						data[x].machId="nothing";
					}
				}
            })
			
			//导航楼东
			this.$http.get('http://39.105.7.187:8199/test//sysequip/sysEquip/equipList?fid=1').then(resp => {
				let data=resp.data.body.data,
					dataArr=["65143702030", "65143702049", "65143702052", "65143702031", "65143702051", "65143702034", "65143702056", "65143702061", "65143702032", "65143799249", "65143799207", "65143799095", "65143799110", "65143799206", "65143799109", "65143799123", "65143799385", "65143799302", "65143799306", "65143799307", "65143799202", "65143799288"];
				for(let x in data){
					if(x>=0&&x<9){
						this.east.rows1.push(data[x]);
					}else if(x>=9&&x<11){
						this.east.rows2.push(data[x]);
					}else if(x>=11&&x<16){
						this.east.rows3.rows3_1.push(data[x]);
					}else if(x>=16){
						this.east.rows3.rows3_2.push(data[x]);
					}
					if(!dataArr.includes(data[x].machId)){
						data[x].machId="nothing";
					}
				}
            })
            
        	window.makePath=self.makePath;
        	window.thisVue=this;
        	window.remakeImg=self.remakeImg;
            //东楼设置path路径
            if(self.id==1){
            	window.onload=function(){
	            	self.makePath()
	            }
            }
		},
		watch: {
		  	$route(){
			    window.id = this.id = this.$route.query.id;
			    if(this.id==1){
			    	this.makePath();
			    }
			    this.imgArr=[];
			    this.remakeImg1(this);
			},
		}
	}
</script>