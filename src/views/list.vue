<template>
    <div class="page" :transition="transitionName">
        <div class="container">
            <h1 v-link="{ path: '/index'}">{{ msg }}</h1>
        </div>
    </div>
</template>

<script>
// 引入组件
import jyFooter from '../components/Footer';
import jyBanner from '../components/Banner';
import jyGotop from '../components/Gotop';

export default {
    data() {
        return {
            msg: 'Hello Vue',
            transitionName: null
        };
    },
    'components': {
        jyFooter,
        jyBanner,
        jyGotop
    }
};
</script>

<style scoped>

</style>
