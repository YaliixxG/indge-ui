<template>
    <div class="i-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'IForm',
    props: {
        model: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss">

</style>


