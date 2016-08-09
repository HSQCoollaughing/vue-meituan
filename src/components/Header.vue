<template>
    <header class="navbar">
        <div class="nav-wrap-left">
            <a gaevent="imt/hd/cityBottom" href="http://i.meituan.com/index/changecity" class="react">
                <span class="nav-city">武汉<space></space><i class="text-icon icon-downarrow"></i></span>
            </a>
        </div>
        <div class="box-search">
            <a gaevent="imt/homepage/search" class="react" href="http://i.meituan.com/s/wuhan">
                <i class="icon-search text-icon">⌕</i>
                <span class="single-line">
                            输入商家/品类/商圈
                    </span>
            </a>
        </div>
        <div class="nav-wrap-right">
            <a class="react" gaevent="imt/homepage/mine" rel="nofollow" href="http://i.meituan.com/account/">
            <span class="nav-btn">
                <i class="text-icon">⍥</i>我的
            </span>
            </a>
        </div>
    </header>
</template>

<script>

</script>

<style scoped>
.navbar {
    height: 1.34666667rem;
    color: #fff;
    background: #06c1ae;
    border-bottom: 1px solid #21897d;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
}
</style>
