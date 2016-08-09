<template>
    <ul class="list">
        <li v-for="item in items">
            <a href="http://i.meituan.com/deal/28340231.html" data-stid="720699304653608192_c0_eb7473fd7a24c66c17492c1af2accfda3" gaevent="imt/homepage/guess" class="react ">
                <div class="dealcard" data-did="28340231">
                        <span class="dealcard-nobooking"></span>
                        <div class="dealcard-img imgbox" data-src="http://p0.meituan.net/100.0/deal/c0547440442d0b051242d8ae9a034020111024.jpg" data-src-high="http://p0.meituan.net/200.0/deal/c0547440442d0b051242d8ae9a034020111024.jpg" data-com="unveil" style="background: none;"><img src="http://p0.meituan.net/200.0/deal/c0547440442d0b051242d8ae9a034020111024.jpg" style="width: 100%;"></div>
                    <div class="dealcard-block-right">
                                <div class="dealcard-brand single-line">紫燕百味鸡</div>

                        <div class="title text-block">[143店通用]20元代金券1张，可叠加</div>
                        <div class="price">
                            <span class="strong">18.6</span><span class="strong-color">元</span>
                                <span class="tag">新用户5元抢</span>
                                <span class="line-right">
                                        已售570696
                                </span>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [1, 2, 3]
        };
    }
};
</script>

<style scoped>
.list li{
    margin-left: 0.26666667rem;
    border-bottom: 1px solid #DDD8CE;
    font-size: inherit;
    font-weight: 400;
}
.list .react{
    padding: 0.37333333rem 0.26666667rem 0.37333333rem 0;
}
.list li:last-child .react{
    margin-left: 0;
    padding-left: 0.26666667rem;
}
.dealcard,.cinemacard {
    position: relative;
    box-sizing: border-box;
    margin: -0.10666667rem 0;
}

.dealcard .dealcard-new {
    position: absolute;
    right: -0.26666667rem;
    top: -0.26666667rem;
    padding-right: 0.10666667rem;
    font-size: 0.32rem;
    height: 0.37333333rem;
    line-height: 0.37333333rem;
    width: .6rem;
    background: #06c1ae;
    color: #fff;
    text-align: right
}

.dealcard .dealcard-nobooking {
    position: absolute;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    z-index: 1
}

.dealcard .dealcard-nobooking:after {
    content: "免预约";
    font-size: 0.32rem;
    background: #06c1ae;
    color: #fff;
    padding: 0.06666667rem;
    position: absolute;
    width: 1.73333333rem;
    text-align: center;
    -webkit-transform: rotateZ(-45deg);
    left: -0.46666667rem;
    top: 0.26666667rem
}

.dealcard .dealcard-new:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: -0.26666667rem;
    border: 0.18666667rem solid #06c1ae;
    border-left: 0.18666667rem solid transparent
}

.dealcard-img {
    position: absolute;
    width: 2.4rem;
    height: 2.18666667rem;
    text-align: center;
    overflow: hidden
}

.dealcard-img>img {
    background-size: 100%;
    background-color: #f0efed;
    border: 0
}

.dealcard .dealcard-block-right {
    margin-left: 2.66666667rem;
    position: relative;
    height: 2.18666667rem
}

.dealcard .dealcard-brand,.cinemacard .cinemacard-brand {
    padding-top: 0.13333333rem;
    margin-bottom: 0.16rem;
    font-size: 0.4rem;
    font-weight: 400;
    color: #333
}

.cinemacard .cinemacard-brand {
    padding-top: 0
}

.dealcard .title,.cinemacard .title {
    font-size: 0.32rem;
    height: 0.90666667rem;
    margin-bottom:  0.21333333rem;
    color: #666;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden
}

.dealcard .price,.cinemacard .price {
    color: #666;
    position: relative
}

.dealcard .price {
    position: absolute;
    width: 100%;
    bottom: 0
}

.dealcard .price>span,.dealcard .price>del {
    vertical-align: sub
}

.dealcard .price>strong,.cinemacard .price>strong,.dealcard .price .strong,.cinemacard .price .strong {
    font-size: 0.50666667rem;
    color: #06c1ae
}

.dealcard .price del,.cinemacard .price del {
    font-size: 0.32rem
}

.dealcard .price>.strong-color,.cinemacard .price>.strong-color {
    font-size: 0.34666667rem;
    color: #06c1ae
}

.dealcard .line-right,.cinemacard .price .line-right {
    position: absolute;
    top: 0.05333333rem;
    right: 0;
    font-size: 0.32rem
}

.dealcard .tag,.poi-dealcard .tag {
    border: 0.02666667rem solid #f90;
    color: #f90;
    line-height: 1.5;
    display: inline-block;
    padding: 0 0.08rem;
    font-size: 0.29333333rem;
    border-radius: 0.08rem
}
</style>
