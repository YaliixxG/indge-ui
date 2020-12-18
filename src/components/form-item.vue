<template>
    <div class="i-form-item">
        <label class="i-form-item__label" :style="{ width: labelWidth }">{{
            label
        }}</label>
        <div class="i-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "IFormItem",
    props: {
        label: {
            type: String,
            default: ""
        },
        labelWidth: {
            type: String,
            default: "100px"
        }
    }
};
</script>
<style lang="scss">
.i-form-item {
    margin-bottom: 22px;
    .i-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .i-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
    }
}
</style>