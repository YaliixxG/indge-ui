<template>
    <div class="i-input" :class="{ 'i-input--suffix': showSuffix }">
        <input
            class="i-input__inner"
            :value="value"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            :type="
                showPassword ? (passwordVisible ? 'text' : 'password') : type
            "
            :show-password="showPassword"
            :clearable="clearable"
            :class="{ 'is-disabled': disabled }"
            @input="handleInput"
        />
        <span class="i-input__suffix" v-if="showSuffix">
            <i
                class="iconfont icon-al-icon-view"
                :class="{ 'i-password-active': passwordVisible }"
                v-if="showPassword"
                @click="handlePassword"
            ></i>
            <i
                class="iconfont icon-al-icon-close"
                v-if="clearable && value"
                @click="handleClear"
            ></i>
        </span>
    </div>
</template>
<script>
export default {
    name: "IInput",
    data() {
        return {
            passwordVisible: false
        };
    },
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showSuffix() {
            return this.showPassword || this.clearable;
        }
    },
    methods: {
        handleInput(e) {
            this.$emit("input", e.target.value);
        },
        handleClear(e) {
            this.$emit("input", "");
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible;
        }
    }
};
</script>
<style lang="scss">
.i-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .i-input__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }
        //禁用
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
.i-input--suffix {
    .i-input__inner {
        padding-right: 30px;
    }
    .i-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all 0.3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .i-password-active {
            color: blue;
        }
    }
}
</style>
