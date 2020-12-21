<template>
    <div class="i-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "ICheckboxGroup",
    props: {
        value: {
            type: Array
        }
    },
    provide() {
        return {
            CheckboxGroup: this
        };
    }
};
</script>
<style lang="scss">
</style>

