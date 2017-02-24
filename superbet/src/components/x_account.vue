<template>
    <div>
        <div class="one">
            <p class="small top">
                <em></em>
                <a></a>
                <span></span>
                <span class="col"></span>
                <span class="col"></span>
            </p>
            <p class="small bottom">
                <i></i><time></time>
            </p>
        </div>              
    </div>
</template>
<script>
    import { Scroller,LoadMore} from 'vux'
    export default {
        components : {
            Scroller
        },
        data () {
            return {
                ScrollTop : 0
            }
        }
    } 
</script>
<style lang="less" scoped>
    @import "../less/x_account.less";
</style>

