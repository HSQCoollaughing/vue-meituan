<template>
  <div class="page" :transition="transitionName">
  <div class="container">
	<div class="msg">
	<div class="weui_msg">
		<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
		<div class="weui_text_area">
			<h2 class="weui_msg_title">Material</h2>
			<p class="weui_msg_desc">内容详情，可根据实际需要安排</p>
		</div>
		<div class="weui_opr_area">
			<p class="weui_btn_area">
				<a href="javascript:;" class="weui_btn weui_btn_primary">确定</a>
				<a href="javascript:;" class="weui_btn weui_btn_default">取消</a>
			</p>
		</div>
		<div class="weui_extra_area">
			<a href="">查看详情</a>
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
		this.transitionName = 'material'
		this.$nextTick(function () {
			transition.next()
		})		
	},	
    canDeactivate (transition) {
		this.transitionName = 'material'
		transition.next()
	},
	deactivate (transition) {
		transition.next()
	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
