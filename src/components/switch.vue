<template>
    <div
        class="i-switch"
        @click="handleChange"
        :onColor="onColor"
        :offColor="offColor"
        :class="{ 'is-checked': value }"
    >
        <!--作为表单元素，写入 input 是方便 form 通过 name 获取 checked 值-->
        <input
            type="checkbox"
            :name="name"
            class="i-switch__input"
            ref="input"
        />
        <span class="i-switch__core" ref="core">
            <span class="i-switch__button"></span>
        </span>
    </div>
</template>
<script>
export default {
    name: "ISwitch",
    props: {
        value: {
            type: Boolean,
            default: false
        },
        onColor: {
            type: String,
            default: ""
        },
        offColor: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    },
    mounted() {
        this.setColor();
        this.$refs.input.checked = this.value;
    },
    methods: {
        async handleChange() {
            await this.$emit("input", !this.value);
            this.setColor();
            this.$refs.input.checked = this.value;
        },
        setColor() {
            if (this.onColor || this.offColor) {
                let color = this.value ? this.onColor : this.offColor;
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }
        }
    }
};
</script>
<style lang="scss">
.i-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    // .i-switch__input {
    //     position: absolute;
    //     width: 0;
    //     height: 0;
    //     opacity: 0;
    //     margin: 0;
    // }
    .i-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        vertical-align: middle;
        .i-switch__button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
    &.is-checked {
        .i-switch__core {
            border-color: #409eff;
            background-color: #409eff;
        }
        .i-switch__button {
            transform: translateX(20px);
        }
    }
}
</style>
