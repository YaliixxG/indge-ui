import Vue from 'vue';

const files = require.context('.', true, /\.vue$/);

files.keys().forEach(i => {
    const module = files(i).default;
    Vue.component(module.name, module);
});
