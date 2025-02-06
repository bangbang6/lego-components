import LText from "@/components/LText/LText.vue";
import { App } from "vue";
const plugins = {
  install: (app: App) => {
    /** 添加全局属性在app实例上 */
    app.config.globalProperties.$echo = () => {
      console.log("a plugin");
    };
    /** 注册全局组件 */
    app.component("l-text", LText);
    /** 全局混入 */
    app.provide("test", { message: " from plugin" });
  },
};
export default plugins;
