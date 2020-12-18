<template>
    <label
        class="i-checkbox"
        :class="{
            'is-checked': isChecked,
            'is-disabled': disabled
        }"
    >
        <span class="i-checkbox__input">
            <span class="i-checkbox__inner"></span>
            <input
                type="checkbox"
                class="i-checkbox__original"
                v-model="model"
                :disabled="disabled"
                :value="label"
            />
        </span>
        <span class="i-checkbox__label">
            <slot></slot>
            <template v-if="!$slots.default">
                <span>{{ label }}</span>
            </template>
        </span>
    </label>
</template>
<script>
export default {
    name: "ICheckbox",
    props: {
        label: {
            type: [String, Number],
            default: ""
        },
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    inject: {
        CheckboxGroup: { default: "" }
    },
    computed: {
        model: {
            get() {
                return this.haveCheckGroup
                    ? this.CheckboxGroup.value
                    : this.value;
            },
            set(value) {
                this.haveCheckGroup
                    ? this.CheckboxGroup.$emit("input", value)
                    : this.$emit("input", value);
            }
        },
        haveCheckGroup() {
            return !!this.CheckboxGroup;
        },
        isChecked() {
            return this.haveCheckGroup
                ? this.model.includes(this.label)
                : this.model;
        }
    }
};
</script>
<style lang="scss">
.i-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .i-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .i-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
                background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
            &:after {
                box-sizing: content-box;
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform 0.15s ease-in 0.05s;
                transform-origin: center;
            }
        }
        .i-checkbox__original {
            opacity: 0;
            outline: none;
            position: absolute;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
    }
    .i-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
    &.is-checked {
        .i-checkbox__input .i-checkbox__inner {
            border-color: #409eff;
            background: #409eff;
            &:after {
                transform: rotate(45deg) scaleY(1);
            }
        }
        .i-checkbox__label {
            color: #409eff;
        }
    }
    &.is-disabled {
        .i-checkbox__input .i-checkbox__inner {
            border-color: rgb(170, 170, 170);
            background: rgb(170, 170, 170);
            cursor: not-allowed;
            &:after {
                transform: rotate(45deg) scaleY(1);
            }
        }
        .i-checkbox__label {
            color: rgb(170, 170, 170);
        }
    }
}
</style>
