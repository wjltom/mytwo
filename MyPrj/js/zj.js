//封装组件:
Vue.component("hulei", {
    props: ["svalue", "data"],  //特别注意:属性名不能大写
    template: '<select v-model:value="svalue"><option value="0">请选择</option><option v-for="cls in data" v-bind:value="cls.classId">{{cls.className}}</option></select>'
});