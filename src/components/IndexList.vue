<template>
    <div id="guessLike" class="guess-like">
        <h2>猜你喜欢</h2>
        <jy-list></jy-list>
        <a href="" class="more-link">
            <span class="more">查看全部团购</span>
        </a>
    </div>
</template>

<script>
// 引入组件
import jyList from './List';

export default {
    data() {
        return {
            items: []
        };
    },
    'components': {
        jyList
    }
};
</script>

<style scoped>
.guess-like{
    border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE;
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff;
    min-height: 5rem;
    position: relative;
}
.guess-like h2{
    font-size: 0.45333333rem;
    padding: 0.37333333rem 0.26666667rem 0.37333333rem 0;
    margin-left: 0.26666667rem;
    color: #333;
    border-bottom: 1px solid #DDD8CE;
    overflow: hidden;
    font-weight: 400;
}
.more-link{
    display: block;
    height: 1.06666667rem;
    padding: 0 0.26666667rem;
    line-height: 1.06666667rem;
    font-size: 0.4rem;
}
.more-link .more{
    display: inline-block;
}
</style>
