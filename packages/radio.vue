<template>
    <label
        class="i-radio"
        :class="{
            'is-checked': haveRadioGroup
                ? label === RadioGroup.value
                : label === model
        }"
    >
        <span class="i-radio__input">
            <span class="i-radio__inner"></span>
            <input
                class="i-radio__original"
                type="radio"
                :value="label"
                :name="name"
                v-model="model"
                ref="radio"
            />
        </span>
        <span class="i-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">
                {{ label }}
            </template>
        </span>
    </label>
</template>
<script>
export default {
    name: "IRadio",
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        value: {
            type: [String, Number, Boolean],
            default: ""
        }
    },
    inject: {
        RadioGroup: { default: "" }
    },
    computed: {
        model: {
            get() {
                return !this.haveRadioGroup
                    ? this.value
                    : this.RadioGroup.value;
            },
            set(value) {
                this.haveRadioGroup
                    ? this.RadioGroup.$emit("input", value)
                    : this.$emit("input", value);
                this.$refs.radio.checked = this.haveRadioGroup
                    ? this.RadioGroup === this.label
                    : this.model.value === this.label;
            }
        },
        haveRadioGroup() {
            return !!this.RadioGroup;
        }
    }
};
</script>
<style lang="scss">
.i-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .i-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .i-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &::after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform 0.15s ease-in;
            }
        }
        .i-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .i-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
    &.is-checked {
        .i-radio__input .i-radio__inner {
            border-color: #409eff;
            background: #409eff;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
        .i-radio__label {
            color: #409eff;
        }
    }
}
</style>

