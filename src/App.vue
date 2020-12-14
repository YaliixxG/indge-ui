<template>
    <div id="app">
        <!-- <div class="row">
            <i-button>按钮</i-button>
            <i-button type="primary" @click="tiktok(5)">按钮</i-button>
            <i-button type="success">按钮</i-button>
            <i-button type="warning">按钮</i-button>
            <i-button type="danger">按钮</i-button>
        </div>
        <div class="row">
            <i-button isPlain>按钮</i-button>
            <i-button isPlain type="primary">按钮</i-button>
            <i-button isPlain type="success">按钮</i-button>
            <i-button isPlain type="warning">按钮</i-button>
            <i-button isPlain type="danger">按钮</i-button>
        </div>
        <div class="row">
            <i-button isRound>哦</i-button>
            <i-button isRound type="primary">按钮</i-button>
            <i-button isRound type="success">按钮</i-button>
            <i-button isRound type="warning">按钮</i-button>
            <i-button isRound type="danger">按钮</i-button>
        </div>
        <div class="row">
            <i-button isRound icon="icon-al-icon-close-round" disabled
                >按钮</i-button
            >
            <i-button
                isRound
                icon="icon-al-icon-close-round"
                @click="tiktok(5)"
                disabled
                type="primary"
                >按钮</i-button
            >
            <i-button
                isRound
                icon="icon-al-icon-close-round"
                @click="tiktok(5)"
                disabled
                type="success"
                >按钮</i-button
            >
            <i-button
                isRound
                icon="icon-al-icon-close-round"
                @click="tiktok(5)"
                disabled
                type="warning"
                >按钮</i-button
            >
            <i-button
                isRound
                icon="icon-al-icon-close-round"
                @click="tiktok(5)"
                disabled
                type="danger"
                >按钮</i-button
            >
        </div>
        <div class="row">
            <i-button isCircle>哦</i-button>
            <i-button isCircle type="primary">哦</i-button>
            <i-button isCircle type="success">哦</i-button>
            <i-button isCircle type="warning">哦</i-button>
            <i-button isCircle type="danger">哦</i-button>
        </div>
        <div class="row">
            <i-button isCircle icon="icon-al-icon-close-round"></i-button>
            <i-button
                isCircle
                icon="icon-al-icon-close-round"
                type="primary"
            ></i-button>
            <i-button
                isCircle
                icon="icon-al-icon-close-round"
                type="success"
            ></i-button>
            <i-button
                isCircle
                icon="icon-al-icon-close-round"
                type="warning"
            ></i-button>
            <i-button
                isCircle
                icon="icon-al-icon-close-round"
                type="danger"
            ></i-button>
        </div> -->
        <!-- <i-dialog>
            <template v-slot:title>
                <h3>提示</h3>
            </template>
        </i-dialog> -->
        <i-button type="primary" @click="isShow = true">控制</i-button>
        <i-dialog title="提示" :visible.sync="isShow" width="40%" top="40px">
            <!-- <template>
                <h3>这是什么</h3>
            </template> -->
            这是一段信息~
            <template v-slot:footer>
                <i-button @click="isShow = false">取消</i-button>
                <i-button type="primary" @click="isShow = false">确定</i-button>
            </template>
        </i-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        tiktok(params) {
            console.log("点击", params);
        }
    }
};
</script>

<style lang="scss" scoped>
.row > button {
    margin: 10px;
}
</style>
