<template>
  <div id="app" onselectstart="return false"> 
     <router-view></router-view>
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
  text-decoration:none;
  font-style:normal;
  -webkit-box-sizing:border-box;
  font-family: PingFang SC;
}
html,body{
  font-family: PingFang SC;
  width:100%;
  height:100%;
  overflow:hidden;
  font-size: 26.6667vw;
}
header{
  box-sizing: content-box;
}

body{
  /* 屏蔽双击事件 */
  -webkit-moz-user-select: none;
  -moz-moz-user-select: none;
  -ms-moz-user-select: none;
  -o-moz-user-select: none;
  moz-user-select: none;
  cursor: default;
  /* 屏蔽长按事件 */
  -webkit-webkit-user-select: none;
  -moz-webkit-user-select: none;
  -ms-webkit-user-select: none;
  -o-webkit-user-select: none;
  webkit-user-select: none;
}
ol,ul{
  list-style:none;
}
input,button,a{
  font-family: PingFang SC;
}
input{
  border-radius:0 !important;
}
button{
  padding:0 !important;
}
a,input,button{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
::-webkit-input-placeholder {
    color: #e0d9d9; 
} 
:-moz-placeholder {
    color: #e0d9d9; 
} 
::-moz-placeholder { 
    color: #e0d9d9; 
} 
:-ms-input-placeholder { 
    color: #e0d9d9; 
} 
/* @media screen and(min-width:960px){
    html,body{font-size:300px;}1rem=300px
}
@media screen and(min-width:640px){
    html,body{font-size:200px;}1rem=200px
} */
/* @media screen and (min-width:412px){
    html,body{ font-size:110px;}1rem=100px
}
@media screen and (max-width:375px){
    html,body{ font-size:100px;}1rem=100px
}
@media screen and (max-width:320px){
    html,body{ font-size:85px;}1rem=100px
} */

#app{
  height: 100%;
  width:100%;
  overflow: hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  background:#f1f3f5;
}
</style>
