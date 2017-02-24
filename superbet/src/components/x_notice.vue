<template>   
    <div>
        <Scroller>
            <load-more tip="Loading"></load-more>
        </Scroller>
    </div>
</template>
<script>
    import { LoadMore,Scroller} from 'vux'
    export default {
        components : {
            LoadMore,
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
    @import "../less/notice.less";
</style>
