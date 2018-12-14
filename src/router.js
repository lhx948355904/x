import Vue from 'vue';
import Router from 'vue-router';
import login from './view/login/login.vue';
import index from './view/Home/home.vue';
import Allchart from './view/Allchart/allchart.vue';
import details from './view/details/details.vue';

Vue.use(Router);

export default new Router({
//	mode:"history",
	base:process.env.BASE_URL,
	routes:[
		/*{
			path:"/",
			name:"login",
			component:login,
		},*/
		{
			path:"/details",
			name:"details",
			component:details,
		},
		{
			path:"/",
			name:"index",
			component:index,
		},
		{
			path:"/allchart",
			name:"allchart",
			component:Allchart,
		},
	],
});
