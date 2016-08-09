<template>
    <footer>
        <div class="footer-bar">
                <div class="pull-right">
                    <span>城市:</span>
                    <space>
                    </space>
<a href="http://i.meituan.com/index/changecity/" gaevent="imt/ft/changeCity" class="btn btn-weak footer-citybtn">武汉</a>
                </div>
<a href="https://i.meituan.com/account/login" gaevent="imt/ft/signin" class="btn btn-weak" rel="nofollow" data-backurl="true">登录</a>
                    <space></space><a href="http://i.meituan.com/account/signup" gaevent="imt/ft/signup" class="btn btn-weak" rel="nofollow" data-backurl="true">注册</a>

        </div>
        <div class="footer-nav">
            <ul>
                <li><a class="react" gaevent="imt/ft/index" href="http://i.meituan.com/">首页</a>
            </li><li><a class="react" gaevent="imt/ft/order" rel="nofollow" href="http://i.meituan.com/orders/all">订单</a>
                    </li><li><a data-pos="footer" rel="nofollow" class="react" gaevent="imt/ft/client" data-href="sogou" data-com="opendownload" data-downloadurl="http://i.meituan.com/client/?from=footer&amp;subchannel=i_ft&amp;landingpage=1">客户端</a>
                </li><li><a class="react" gaevent="imt/ft/pc" href="http://www.meituan.com?pcstyle=1">电脑版</a>
                </li><li><a class="react" rel="nofollow" gaevent="imt/ft/help" href="http://i.meituan.com/help/">帮助</a>
            </li></ul>
        </div>
        <div class="footer-links">友情链接：
                <a gaevent="OutLink|Click|imt/ft/maoyan" target="_blank" href="http://m.maoyan.com/?channel=touch_group">猫眼电影</a>
        </div>
        <div class="footer-copyright">
            <div class="hr"></div>
            <span class="footer-copyright-text">©2016 美团网 <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">京ICP证070791号</a></span>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped>
footer {
    padding: .4rem .26666667rem .53333333rem;
    background-color: #f0efed
}

.footer-bar {
    font-size: .32rem;
    margin-bottom: .53333333rem;
}

.footer-nav {
    margin-bottom: .24rem
}

.footer-bar .ft-mine {
    font-family: base_icon,Arial,sans-serif;
    vertical-align: top;
    margin-right: .05333333rem;
}

.footer-nav ul {
    margin: 0;
    padding: .24rem 0;
    font-size: .32rem;
    white-space: nowrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -moz-box
}

.footer-nav li {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -moz-box-flex: 1;
    border-right: .02666667rem solid #666;
    text-align: center
}

.footer-nav li>a {
    color: #06c1ae
}

.footer-nav li:last-child {
    border-right: 0
}

.footer-links {
    font-size: .32rem;
    margin: .4rem .26666667rem;
    text-align: center
}

.footer-links a+a {
    padding-left: .66666667rem;
}

.footer-copyright {
    font-size: .29333333rem;
    text-align: center;
    position: relative
}

.footer-copyright .hr {
    display: block;
    content: "";
    width: 100%;
    position: absolute;
    top: 50%;
    border-top: 1px solid #999
}

.footer-copyright a {
    text-decoration: none;
    color: #999
}

.footer-copyright {
    color: #999
}

.footer-copyright-text {
    position: relative;
    padding: 0 .4rem;
    background-color: #f0efed
}

.footer-citybtn,.footer-minebtn {
    width: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
</style>
