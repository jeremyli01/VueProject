const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // address multi-word issues. See:https://stackoverflow.com/questions/70346829/eslint-vue-multiword-components
  lintOnSave:false
});
