<template>
    <div class="pages">
        <router-view keep-alive transition="left" transition-mode="right"></router-view>
    </div>
</template>

<style>
@font-face {
    font-family: 'cate_icon';
    src: url('./assets/fonts/cate4.woff?v7') format("woff"), url('./assets/fonts/cate4.otf?v7'); }
@font-face {
    font-family: 'base_icon';
    src: url('./assets/fonts/base14.woff') format("woff"), url('./assets/fonts/base14.otf'); }
html, body {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 14px;
    line-height: 1.5;
    background: #fff;
    overflow: hidden;
}
body {
    margin: 0
}

a:active,a:hover {
    outline: 0
}

button,input,optgroup,select,textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button,html input[type=button],input[type=reset],input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,th {
    padding: 0
}

img {
    vertical-align: middle;
    border: 0
}

@-ms-viewport {
    width: device-width
}

html {
    font-size: 50px;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    min-width: 320px;
    overflow-x: hidden
}

body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: .28rem;
    line-height: 1;
    color: #333;
    background-color: #f0efed
}

h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6 {
    font-weight: 500;
    line-height: 1.1
}

h1 small,h1 .small,h2 small,h2 .small,h3 small,h3 .small,h4 small,h4 .small,h5 small,h5 .small,h6 small,h6 .small,.h1 small,.h1 .small,.h2 small,.h2 .small,.h3 small,.h3 .small,.h4 small,.h4 .small,.h5 small,.h5 .small,.h6 small,.h6 .small {
    font-weight: 400;
    line-height: 1
}

h1,.h1,h2,.h2,h3,.h3 {
    margin-top: .28rem;
    margin-bottom: .14rem
}

h1 small,h1 .small,.h1 small,.h1 .small,h2 small,h2 .small,.h2 small,.h2 .small,h3 small,h3 .small,.h3 small,.h3 .small {
    font-size: 65%
}

h4,.h4,h5,.h5,h6,.h6 {
    margin-top: .14rem;
    margin-bottom: .14rem
}

h4 small,h4 .small,.h4 small,.h4 .small,h5 small,h5 .small,.h5 small,.h5 .small,h6 small,h6 .small,.h6 small,.h6 .small {
    font-size: 75%
}

h1,.h1 {
    font-size: .364rem
}

h2,.h2 {
    font-size: .2996rem
}

h3,.h3 {
    font-size: .238rem
}

h4,.h4 {
    font-size: .175rem
}

h5,.h5 {
    font-size: .14rem
}

h6,.h6 {
    font-size: .119rem
}

h6 {
    margin-top: 0;
    margin-bottom: 0
}

input,button,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

a {
    color: #06c1ae;
    text-decoration: none;
    outline: 0
}

a:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px
}

a.react,label.react {
    display: block;
    color: inherit;
}

a.react:active,a.react.react-active,label.react:active {
    background: rgba(0,0,0,.1)
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none
}

hr {
    margin-top: .28rem;
    margin-bottom: .28rem;
    border: 0;
    border-top: 1px solid #DDD8CE
}

p,h6 {
    line-height: 1.41;
    text-align: justify;
    margin: -.2em 0;
    word-break: break-all
}

weak,small {
    color: #666
}

.color-weak {
    color: #666!important
}

.color-weaker {
    color: #999!important
}

.color-strong {
    color: #06c1ae!important
}

.color-stronger {
    color: #cc7a00!important
}

.color-ok {
    color: #6bbd00!important
}

.color-warning {
    color: #fa7251!important
}

space {
    display: inline-block;
    width: .12rem
}

.clearfix:before,.clearfix:after {
    content: " ";
    display: table
}

.clearfix:after {
    clear: both
}

.center-block {
    display: block;
    margin-left: auto;
    margin-right: auto
}

.pull-right {
    float: right!important
}

.pull-left {
    float: left!important
}

.hide {
    display: none!important
}

.invisible {
    visibility: hidden
}

.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0
}

.single-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.text-block {
    line-height: 1.41;
    text-align: justify
}

.nopadding {
    padding: 0!important
}

.nomargin {
    margin: 0!important
}

.strong-color {
    color: #06c1ae
}

.more {
    position: relative;
    padding-right: .3rem;
    width: 100%;
    box-sizing: border-box
}

.more:after {
    position: absolute;
    right: .05rem;
    top: 50%;
    display: block;
    content: '';
    width: .6em;
    height: .6em;
    border-left: .04rem solid #06c1ae;
    border-bottom: .04rem solid #06c1ae;
    -webkit-transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
    -moz-transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
    -ms-transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg)
}

.more-weak:after {
    border-left: .04rem solid #999;
    border-bottom: .04rem solid #999
}

.more .more-after {
    position: absolute;
    right: .25rem;
    top: 50%;
    -webkit-transform: translateY(-.5em);
    color: #06c1ae
}

.more-weak .more-after {
    color: #999
}

.more-down:after {
    -webkit-transform: translateY(-80%) scaleX(0.8) rotateZ(-45deg);
    -ms-transform: translateY(-80%) scaleX(0.8) rotateZ(-45deg)
}

.imgbox {
    background-image: url(data:image/png;base64,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);
    background-color: #E0E0E0;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
    max-width: 4rem;
    position: relative
}

.userImgbox {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAA3NCSVQICAjb4U/gAAABm1BMVEX////q6urJycnq6urJycnq6urJycnq6urd3d3Jycnq6urJycnq6urJycvq6urJycnq6urJycnq6urJycnq6urq6urJycnq6urJycnq6urJycnq6urJycn79/b59vX59fT59fX39PP38/L18fHz8O/y7+/z7+/x7u3w7ezx7e3t6+rv6+vq6urt6unp6enr6ejr6enn5+fq5+fp5+fp5ubl5eXn5eXn5OPj4+Pl4+Pl4+Lh4eHj4eHf39/i39/h39/d3d3f3d7f3d3e3Nvb29vd29rd29vZ2dnZ2drb2drb2dnY2NnZ2NfX19fZ19fV1dbX1dXV1dXU1NXV1NPV1NXT09PV09PR0dHR0dLR0M/Pz8/Pz9DPzs3MzMzJycnJycvLycnHx8fFxcbGxcXExMXDw8PExMPBwcHBwcK/v8C/v7+9vb69vb2+vb28vb27u7u6u7u5ubq6urm5ubm4ubm5t7e1t7e2t7e1tbSztLSys7OxsbCvsLCvr6+tr6+srK2rq6yqq6upqaqnp6ekpaWjpKSio6OhoaGgoaGh6GQLAAAAiXRSTlMAEREiIjMzREREVVVmZnd3iIiZmaq7u8zM3d3u7v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////54pIicAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAF3RFWHRDcmVhdGlvbiBUaW1lADIwMTUuNS4xNBgX2AIAAAgTSURBVGiBvVr5XxNHFIdiasVUIoYjhoUSQGgag0FAlMOgUFBYoyACYXfW0KThKh6lWKm11R76ZzfZfTM752ZzfPr9ic9k5n15b94x82abmqpCS6A1FO6KRBOJaKQrHGoNtFS33j+az7eXWERE2883N5orEJJSEcpQoIFcYS8qjHBDGJuDnnoxOgbrtWpzyC+Xg1A9hNWS1UcYrJ6sjGBNZC2R2tgSiUgNwdheK1kZ7f+barUo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);
    background-size: cover;
    border-radius: 50%
}

.imgbox img {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%)
}

.userImgbox img {
    border-radius: 50%
}

.stars {
    display: inline-block;
    color: #f90
}

.stars i {
    margin-right: .2em;
    vertical-align: 0rem
}

.stars em {
    font-style: normal;
    margin-left: .4em;
    vertical-align: middle
}

ol.crumbs {
    list-style: none;
    padding-left: 0;
    text-align: center;
    margin: 0
}

ol.crumbs li {
    display: inline-block;
    text-align: center
}

ol.crumbs li+li {
    margin-left: .6rem;
    position: relative
}

ol.crumbs li.active {
    color: #06c1ae
}

ol.crumbs li+li:before {
    content: ">";
    display: block;
    position: absolute;
    left: -.4rem;
    font-weight: bolder;
    color: #aaa
}

.hBox {
    display: -webkit-flex;
    display: -webkit-box;
    -webkit-box-orient: horizontal
}

.vBox {
    display: -webkit-flex;
    display: -webkit-box;
    -webkit-box-orient: vertical
}

.flex1 {
    -webkit-box-flex: 1;
    width: 1px
}

.flex2 {
    -webkit-box-flex: 2;
    width: 1px
}

.flex3 {
    -webkit-box-flex: 3;
    width: 1px
}

.flex4 {
    -webkit-box-flex: 4;
    width: 1px
}

.flex5 {
    -webkit-box-flex: 5;
    width: 1px
}

.flex6 {
    -webkit-box-flex: 6;
    width: 1px
}

.flex7 {
    -webkit-box-flex: 7;
    width: 1px
}

.flex8 {
    -webkit-box-flex: 8;
    width: 1px
}

.flex9 {
    -webkit-box-flex: 9;
    width: 1px
}

.flex10 {
    -webkit-box-flex: 10;
    width: 1px
}

.flex11 {
    -webkit-box-flex: 11;
    width: 1px
}

.flex12 {
    -webkit-box-flex: 12;
    width: 1px
}

input.mt[type=radio],input.mt[type=checkbox] {
    -webkit-appearance: none;
    width: .45rem;
    height: .45rem;
    margin: -.07rem 0;
    border-radius: 50%;
    border: .02rem solid #DDD8CE;
    text-align: center;
    vertical-align: middle;
    line-height: .45rem;
    outline: 0
}

input.mt[type=checkbox] {
    border-radius: .06rem
}

label.mt {
    margin-right: .16rem;
    vertical-align: middle;
    font-size: .3rem
}

label.btn input {
    display: none
}

input.mt[type=radio]:checked,input.mt[type=checkbox]:checked {
    background-color: #06c1ae;
    border: 0;
    color: #fff
}

input.mt[type=radio]:checked:after,input.mt[type=checkbox]:checked:after {
    content: "✓";
    font-size: .4rem;
    font-family: base_icon
}

.mt[disabled=disabled] {
    background: #eee;
    border-color: #ccc;
    color: #ccc
}

input.input-weak,textarea.input-weak {
    border: 0;
    height: .6rem;
    margin: -.15rem 0;
    text-indent: .1rem;
    line-height: 1;
    font-size: .3rem;
    border-radius: .06rem;
    padding: 0
}

input.input-strong {
    border: .02rem solid #DDD8CE;
    height: .8rem;
    line-height: .8rem;
    width: 100%;
    padding: 0 .2rem;
    box-sizing: border-box
}

input.input-weak:focus {
    background: #ececec;
    outline: 0
}

textarea.input-weak {
    padding: 0;
    margin: -.2em 0;
    line-height: 1.41;
    height: 2.8em
}

input.mt.number {
    -webkit-appearance: initial;
    height: .6rem;
    display: inline-block;
    vertical-align: middle;
    border: .02rem solid #DDD8CE;
    border-radius: .06rem;
    box-sizing: border-box;
    line-height: .6rem;
    text-align: center;
    width: 1.2rem
}

.stepper input {
    outline: 0
}

.stepper .btn {
    width: .6rem;
    padding: 0;
    outline: 0;
    font-size: .5rem;
    line-height: .6rem;
    font-weight: lighter;
    font-family: CourierNewPSMT,"Times New Roman"
}

.stepper .btn.minus {
    font-family: CourierNewPSMT,Verdana
}

.select {
    display: block;
    width: 100%;
    height: .6rem;
    margin: -.15rem 0;
    position: relative
}

.select select {
    text-indent: .1rem;
    line-height: 1;
    -webkit-appearance: none;
    border: 0;
    background: transparent;
    font-size: .3rem;
    width: 100%;
    height: 100%;
    display: block
}

.select select:focus {
    outline: 0;
    background: #ececec
}

.select::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    right: .2rem;
    width: .5em;
    height: .5em;
    border-bottom: .03rem solid #999;
    border-left: .03rem solid #999;
    -webkit-transform: translateY(-70%) rotateZ(-45deg);
    -moz-transform: translateY(-70%) rotateZ(-45deg);
    -ms-transform: translateY(-70%) rotateZ(-45deg)
}

.albumContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    z-index: 1000;
    display: none
}

.albumContainer .page img {
    display: block
}

.albumContainer .page-number-container {
    z-index: 2;
    position: absolute;
    color: #fff;
    font-size: .4rem;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    margin-top: .3rem
}

.albumContainer .page-number {
    padding: .2rem;
    background: rgba(0,0,0,.5)
}
.text-icon {
    font-family: base_icon;
    display: inline-block;
    vertical-align: middle;
    font-style: normal
}
button:focus {
    outline: 0
}

.btn {
    display: inline-block;
    margin: 0;
    text-align: center;
    height: 0.8rem;
    padding: 0 .32rem;
    border-radius: .06rem;
    color: #fff;
    border: 0;
    background-color: #06c1ae;
    font-size: 0.37333333rem;
    vertical-align: middle;
    line-height: 0.8rem;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none
}

.btn-block {
    display: block;
    width: 100%
}

.btn-large {
    height: 1.06666667rem;
    line-height: 1.06666667rem;
    font-size: 0.53333333rem;
}

.btn-large.btn-link {
    font-size: .3rem
}

.btn-larger {
    height: .94rem;
    line-height: .94rem;
    font-size: .4rem
}

.btn:active {
    background-color: #21897d
}

.btn-weak {
    border: .02rem solid #06c1ae;
    padding: 0 .3rem;
    background: 0;
    color: #06c1ae
}

.btn-weak:active {
    color: #fff;
    background: #06c1ae
}

.btn-link {
    padding: 0 .3rem;
    background: 0;
    color: #06c1ae
}

.btn-link:active {
    background-color: rgba(0,0,0,.1)
}

.btn-weak.color-strong {
    border-color: #f90;
    color: #f90!important
}

.btn-weak.color-strong:active {
    background-color: #f90;
    color: #fff
}

.btn-strong {
    background-color: #f90
}

.btn-strong:active {
    background-color: #cc7a00
}

.btn-warning {
    background-color: #fa7251
}

.btn-warning:active {
    background-color: #f94a1f
}

.btn:disabled,.btn.btn-disabled {
    background-color: #dcdcdc;
    color: #999;
    border: 0
}

.toggle-btn {
    width: 1rem;
    height: .58rem;
    border-radius: 1rem;
    border: .04rem solid #DDD8CE;
    background: #eee;
    overflow: hidden;
    padding: 0;
    box-sizing: content-box;
    display: inline-block;
    white-space: nowrap;
    text-align: left;
    position: relative
}

.toggle-btn:after {
    content: '';
    display: inline-block;
    width: .58rem;
    height: .58rem;
    background-color: #fff;
    border-radius: 50%;
    position: absolute
}

.toggle-btn.active {
    background-color: #06c1ae
}

.toggle-btn.active:after {
    right: 0
}

.wrapper {
    overflow: hidden;
    padding: 0 .2rem
}

.wrapper h4 {
    font-size: .3rem
}

.wrapper-list h4 {
    margin: .6rem .2rem .2rem;
    font-size: .34rem;
    font-weight: 400
}
    .pages {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #f0efed;
    }
    .page {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #f0efed;
    }
    .container  {
        position: relative;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background: #f0efed;
    }
    .inner-scroll {
    }

    .v-transition {
        -webkit-transition: .4s;
        transition: .4s;
        z-index: 1000
    }

    .v-enter, .v-leave {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .show-transition {
      -webkit-transition: opacity .8s;
      transition: opacity .8s;
      z-index: 1000
    }

    .show-enter, .show-leave{
        opacity: 0;
    }

    .left-transition  {
        z-index: 1000
    }
    .right-transition {
        z-index: 1001
    }

    .right-enter {
      -webkit-animation: pageFromRightToCenter 400ms forwards;
      animation: pageFromRightToCenter 400ms forwards;
    }
    .right-leave {
      -webkit-animation: pageFromCenterToRight 400ms forwards;
      animation: pageFromCenterToRight 400ms forwards;
    }
    @-webkit-keyframes pageFromRightToCenter {
      from {
        -webkit-transform: translate3d(100%, 0, 0);
      }
      to {
        -webkit-transform: translate3d(0, 0, 0);
      }
    }
    @keyframes pageFromRightToCenter {
      from {
        transform: translate3d(100%, 0, 0);
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
    @-webkit-keyframes pageFromCenterToRight {
      from {
        -webkit-transform: translate3d(0, 0, 0);
      }
      to {
        -webkit-transform: translate3d(100%, 0, 0);
      }
    }
    @keyframes pageFromCenterToRight {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(100%, 0, 0);
      }
    }

    .left-leave {
      -webkit-animation: pageFromCenterToLeft 400ms forwards;
      animation: pageFromCenterToLeft 400ms forwards;
    }
    .left-enter {
      -webkit-animation: pageFromLeftToCenter 400ms forwards;
      animation: pageFromLeftToCenter 400ms forwards;
    }
    @-webkit-keyframes pageFromCenterToLeft {
      from {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0.9;
        -webkit-transform: translate3d(-20%, 0, 0);
      }
    }
    @keyframes pageFromCenterToLeft {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0.9;
        transform: translate3d(-20%, 0, 0);
      }
    }
    @-webkit-keyframes pageFromLeftToCenter {
      from {
        opacity: 0.9;
        -webkit-transform: translate3d(-20%, 0, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
      }
    }
    @keyframes pageFromLeftToCenter {
      from {
        opacity: 0.9;
        transform: translate3d(-20%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    .material-transition  {
        z-index: 1001
    }

    .material-enter {
      pointer-events: none;
      -webkit-animation: pageFromBottomToCenter 400ms forwards;
      animation: pageFromBottomToCenter 400ms forwards;
    }
    .material-leave {
      pointer-events: none;
      -webkit-animation: pageFromCenterToBottom 400ms forwards;
      animation: pageFromCenterToBottom 400ms forwards;
    }
    @-webkit-keyframes pageFromBottomToCenter {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 56px, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
      }
    }
    @keyframes pageFromBottomToCenter {
      from {
        opacity: 0;
        transform: translate3d(0, 56px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @-webkit-keyframes pageFromCenterToBottom {
      from {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        -webkit-transform: translate3d(0, 56px, 0);
      }
    }
    @keyframes pageFromCenterToBottom {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 56px, 0);
      }
    }
    .zoom-transition  {
        z-index: 1001
    }

    .zoom-enter {
      pointer-events: none;
      opacity: 1;
      -webkit-animation: zoomIn 400ms forwards;
      animation: zoomIn 400ms forwards;
    }
    .zoom-leave {
      pointer-events: none;
      opacity: 1;
      -webkit-animation: zoomOut 400ms forwards;
      animation: zoomOut 400ms forwards;
    }
    @-webkit-keyframes zoomIn {
      from {
        opacity: 0;
        -webkit-transform: scale(0.8, 0.8);
      }
      to {
        opacity: 1;
        -webkit-transform: scale(1, 1);
      }
    }
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.8, 0.8);
      }
      to {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
    @-webkit-keyframes zoomOut {
      from {
        opacity: 1;
        -webkit-transform: scale(1, 1);
      }
      to {
        opacity: 0;
        -webkit-transform: scale(0.8, 0.8);
      }
    }
    @keyframes zoomOut {
      from {
        opacity: 1;
        transform: scale(1, 1);
      }
      to {
        opacity: 0;
        transform: scale(0.8, 0.8);
      }
    }
</style>
