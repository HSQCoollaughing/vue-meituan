<template>
  <div class="page" :transition="transitionName">
  <div class="container">
	<div class="progress">
	<div class="hd">
		<h1 class="page_title">ZOOM</h1>
	</div>
	<div class="bd spacing">
		<div class="weui_progress">
			<div class="weui_progress_bar">
				<div class="weui_progress_inner_bar js_progress" style="width: 0%;"></div>
			</div>
			<a href="javascript:;" class="weui_progress_opr">
				<i class="weui_icon_cancel"></i>
			</a>
		</div>
		<br>
		<div class="weui_progress">
			<div class="weui_progress_bar">
				<div class="weui_progress_inner_bar js_progress" style="width: 50%;"></div>
			</div>
			<a href="javascript:;" class="weui_progress_opr">
				<i class="weui_icon_cancel"></i>
			</a>
		</div>
		<br>
		<div class="weui_progress">
			<div class="weui_progress_bar">
				<div class="weui_progress_inner_bar js_progress" style="width: 80%;"></div>
			</div>
			<a href="javascript:;" class="weui_progress_opr">
				<i class="weui_icon_cancel"></i>
			</a>
		</div>
		<div class="weui_btn_area">
			<a href="javascript:;" class="weui_btn weui_btn_primary" id="btnStartProgress">上传</a>
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
		this.transitionName = 'zoom'
		this.$nextTick(function () {
			transition.next()
		})		
	},	
    canDeactivate (transition) {
		this.transitionName = 'zoom'
		transition.next()
	},
	deactivate (transition) {
		//this.transitionName = 'zoom'
		transition.next()
	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
