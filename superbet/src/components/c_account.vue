<template>
    <div>
        <div class="one">
            <a>
            <p class="small top"> 
                <em></em>
                <span class="col"></span>
            </p>
            <p class="small bottom">
                <i></i>
                <time></time>
            </p>
            </a>
        </div>
    </div>
</template>
<script>
    import { Scroller , LoadMore} from 'vux'
    export default {
        components : {
            Scroller,
            LoadMore
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

