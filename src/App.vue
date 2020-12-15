<template>
    <div id="app">
        <h1>Button</h1>
        <div class="row">
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
        </div>
        <h1>Dialog</h1>
        <i-dialog>
            <template v-slot:title>
                <h3>提示</h3>
            </template>
        </i-dialog>
        <i-button type="primary" @click="isShow = true">弹窗</i-button>
        <i-dialog title="提示" :visible.sync="isShow" width="40%" top="40px">
            <!-- <template>
                <h1>这里是插槽信息</h1>
            </template> -->
            这是一段普通的默认信息~
            <template v-slot:footer>
                <i-button @click="isShow = false">取消</i-button>
                <i-button type="primary" @click="isShow = false">确定</i-button>
            </template>
        </i-dialog>
        <h1>Input</h1>
        <i-input
            class="i-input"
            placeholder="请输入用户名"
            name="username"
            v-model="username"
            clearable
        ></i-input>
        <br />
        <i-input
            class="i-input"
            type="password"
            placeholder="请输入密码"
            v-model="password"
            show-password
        ></i-input
        ><br />
        <i-input
            class="i-input"
            placeholder="请输入用户名"
            name="username"
            v-model="username"
            disabled
            clearable
        ></i-input>
        <br />
        <i-input
            class="i-input"
            type="password"
            placeholder="请输入密码"
            v-model="password"
            disabled
            show-password
        ></i-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            username: "",
            password: ""
        };
    },
    methods: {
        tiktok(params) {
            console.log("点击", params);
        }
    }
};
</script>

<style lang="scss" scoped>
#app {
    margin: 10px;
    h1 {
        margin: 20px 0;
    }
    .row > button {
        margin: 10px;
    }
    .i-input {
        width: 200px;
    }
}
</style>
