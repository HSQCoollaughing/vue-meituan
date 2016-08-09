<template>
  <div class="page" :transition="transitionName">
	<div class="container">
		<div class="toast">
		<div class="hd">
			<h1 class="page_title">Toast</h1>
		</div>
		<div class="bd spacing">
			<a v-link="'hello'" class="weui_btn weui_btn_primary">ios转场动画</a>
			<a v-link="{ path: 'hello', replace: true }" class="weui_btn weui_btn_primary">ios转场动画(replace)</a>
			<a v-link="'material'" class="weui_btn weui_btn_primary">material转场动画</a>
			<a v-link="'zoom'" class="weui_btn weui_btn_primary">zoom转场动画</a>
		</div>
		<!--BEGIN toast-->
		<div id="toast" style="display: none;">
			<div class="weui_mask_transparent"></div>
			<div class="weui_toast">
				<i class="weui_icon_toast"></i>
				<p class="weui_toast_content">已完成</p>
			</div>
		</div>
		<!--end toast-->

		<!-- loading toast -->
		<div id="loadingToast" class="weui_loading_toast" style="display:none;">
			<div class="weui_mask_transparent"></div>
			<div class="weui_toast">
				<div class="weui_loading">
					<div class="weui_loading_leaf weui_loading_leaf_0"></div>
					<div class="weui_loading_leaf weui_loading_leaf_1"></div>
					<div class="weui_loading_leaf weui_loading_leaf_2"></div>
					<div class="weui_loading_leaf weui_loading_leaf_3"></div>
					<div class="weui_loading_leaf weui_loading_leaf_4"></div>
					<div class="weui_loading_leaf weui_loading_leaf_5"></div>
					<div class="weui_loading_leaf weui_loading_leaf_6"></div>
					<div class="weui_loading_leaf weui_loading_leaf_7"></div>
					<div class="weui_loading_leaf weui_loading_leaf_8"></div>
					<div class="weui_loading_leaf weui_loading_leaf_9"></div>
					<div class="weui_loading_leaf weui_loading_leaf_10"></div>
					<div class="weui_loading_leaf weui_loading_leaf_11"></div>
				</div>
				<p class="weui_toast_content">数据加载中</p>
			</div>
		</div>
		</div>
	</div>
 </div>	
</template>

<script>

export default {
  data () {
    return {
	  msg: 'asshole',	
      transitionName: null
    }
  },
  route: {
	data (transition){

	},
    canActivate (transition) {
		transition.next()
	},
    activate (transition) {
		if(transition.from.path == '/material' || transition.from.path == '/zoom'){
			this.transitionName = null
		}	
		this.$nextTick(function () {
			transition.next()
		})		
	},	
    canDeactivate (transition) {
		if(transition.to.path == '/material' || transition.to.path == '/zoom'){
			this.transitionName = null
		}	
		transition.next()
	},
	deactivate (transition) {
		transition.next()
	}
  }
}
</script>

<style scoped>

</style>
