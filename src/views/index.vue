<template>
    <div class="page" :transition="transitionName">
        <div class="container">
            <h1 v-link="{ path: '/list'}">{{ msg }}</h1>
            <jy-header></jy-header>
            <jy-banner></jy-banner>
            <div class="list" id="daogou">
                <div class="dd-padding">
                    <div class="left">
                        <a class="react" href="http://i.meituan.com/firework/guide" gaevent="imt/homepage/homeguide1" rel="nofollow">
                            <span class="info">
                                <strong>我们约吧</strong>
                                <small>恋人家人好朋友</small>
                            </span>
                            <span class="imgbox" data-com="unveil" data-src="http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png" style="background: none;"><img src="http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png" style="height: 100%;"></span>
                        </a>
                    </div>
                    <div class="right">
                        <div class="top">
                            <a class="react huilife" href="http://i.meituan.com/topic/huilife" gaevent="imt/homepage/homeguide3" rel="nofollow">
                                <span class="info">
                                    <strong>低价超值</strong>
                                    <small>十元惠生活</small>
                                </span>
                                <span class="imgbox" data-com="unveil" data-src="http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg" style="background: none;"><img src="http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg" style="height: 100%;"></span>
                            </a>
                        </div>
                        <div class="bottom">
                            <a class="react scense" href="http://i.meituan.com/topic/scene/1" gaevent="imt/homepage/homeguide4" rel="nofollow">
                                <span class="info">
                                    <strong>工作简餐</strong>
                                    <small>实惠方便选择多</small>
                                </span>
                                <span class="imgbox" data-com="unveil" data-src="http://p1.meituan.net/mmc/726b30f162d1ea39a5077af83cec620811475.png" style="background: none;"><img src="http://p1.meituan.net/mmc/726b30f162d1ea39a5077af83cec620811475.png" style="height: 100%;"></span>
                            </a>

                            <a class="react mingdian" href="http://i.meituan.com/topic/mingdian" gaevent="imt/homepage/homeguide2" data-com="countdown" data-begin="1470585600" data-end="1470661200" data-now="1470635971.4" countdown-status="running" rel="nofollow">
                                <span class="info">
                                    <strong>名店抢购</strong>
                                    <small class="time-desc">距离结束</small>
                                    <span class="time-panel"><span class="span-time time-hour">05</span>:<span class="span-time time-min">08</span>:<span class="span-time time-sec">38</span></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <jy-indexlist></jy-indexlist>
            <jy-footer></jy-footer>
            <jy-gotop></jy-gotop>
        </div>
    </div>
</template>

<script>
// 引入组件
import jyHeader from '../components/Header';
import jyFooter from '../components/Footer';
import jyBanner from '../components/Banner';
import jyIndexlist from '../components/IndexList';
import jyGotop from '../components/Gotop';

export default {
    data() {
        return {
            msg: 'Hello Vue',
            transitionName: null
        };
    },
    'components': {
        jyHeader,
        jyFooter,
        jyBanner,
        jyIndexlist,
        jyGotop
    }
};
</script>

<style scoped>
.list {
    border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE;
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff
}

.list dt,.list dd {
    margin: 0;
    border-bottom: 1px solid #DDD8CE;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative
}

.list dt:last-child,.list dd:last-of-type {
    border-bottom: 0
}

.list .dd-padding,.list dt,.list dd>.react {
    padding: .28rem .2rem
}

.list dd.poi-list-item>.react {
    padding-bottom: .2rem;
    padding-top: .2rem
}

.list dt {
    font-size: .34rem;
    padding-bottom: .2rem;
    color: #333
}

.list .db {
    height: .8rem;
    line-height: .8rem;
    font-size:0.4rem
}

.list dd dl {
    margin: 0;
    margin-bottom: -1px;
    padding-left: .2rem;
    border: 0
}

.list dd dl>.dd-padding,.list dd dl dd>.react,.list dd dl>dt {
    padding-left: 0
}

.list .db>.react {
    color: #06c1ae;
    padding: 0 .2rem
}

.list .posi-right-bottom {
    position: absolute;
    bottom: .26rem;
    right: .2rem
}

.list .statusInfo {
    color: #666;
    font-size: .24rem
}

.list del {
    text-decoration: none
}

.list del:before {
    content: '门市价:'
}

.list-in {
    margin: 0;
    border-top: 0
}

.list:first-child {
    margin: 0;
    border-top: 0
}

.list dd>.input-weak {
    width: 100%;
    display: block
}

.list dd>.btn {
    margin-top: -.15rem;
    margin-bottom: -.15rem
}
#daogou .dd-padding {
    padding: .12rem;
    display: -webkit-box;
    overflow: hidden;
    text-align: center
}

#daogou .react {
    -webkit-box-flex: 1;
    padding: 0;
    border-left: 1px solid #ddd8ce;
    height: 2.26rem;
    text-align: center
}

#daogou .imgbox {
    width: 1.24rem;
    height: 1.24rem;
    margin: auto;
    display: block
}

#daogou .react:first-child {
    margin-left: 0;
    padding-left: 0;
    border-left: 0
}

#daogou .left {
    -webkit-box-flex: 1
}

#daogou .right {
    -webkit-box-flex: 2
}

#daogou .left .react {
    border-right: 1px solid #ddd8ce;
    height: 2.96rem
}

#daogou .left .info strong,#daogou .top .info strong {
    margin-top:0.4rem;
    margin-bottom: .25rem
}

#daogou .left .imgbox {
    width: 2.34666667rem;
    height: 2.34666667rem;
    margin: auto;
    display: block
}

#daogou .right .imgbox {
    width: 1.3rem;
    height: 1.3rem;
    display: inline-block
}

#daogou .bottom .imgbox {
    width: .8rem;
    height: .8rem;
    display: block
}

#daogou .bottom .info strong {
    margin-bottom: .14rem
}

#daogou .top .react {
    border-bottom: 1px solid #ddd8ce;
    height: 1.46rem
}

#daogou .bottom {
    display: -webkit-box
}

#daogou .bottom .react {
    height: 1.48rem
}

#daogou .info {
    vertical-align: top;
    width: 2.26666667rem;
    text-align: left;
    display: inline-block
}

#daogou .info strong {
    display: block;
    color: #55a40f;
    font-size:0.4rem;
    margin-top: .12rem;
    margin-bottom: .36rem
}

#daogou .info weak {
    font-size: .24rem;
    color: #999
}

#daogou .huilife strong {
    color: #ff3f0d
}

#daogou .scense strong {
    color: #f742a0
}

#daogou .mingdian strong {
    color: #ff8601
}

#daogou .mingdian small {
    display: block;
    margin-bottom: .2rem;
    margin-top: .2rem
}

</style>
