import Vue from 'vue'
import './font/iconfont.css'

const files = require.context('.', true, /\.vue$/);

const install = () => {
    files.keys().forEach(i => {
        const module = files(i).default;
        Vue.component(module.name, module);
    });
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}

