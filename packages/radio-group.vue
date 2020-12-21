<template>
    <div class="radio-group" ref="radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'IRadioGroup',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: ''
        }
    },
    provide() {
        return {
            RadioGroup: this
        }
    }
}
</script>
<style lang="scss">

</style>
