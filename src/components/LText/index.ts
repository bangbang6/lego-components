import { App } from "vue";
import LText from "./LText.vue";
LText.install = (app: App) => {
  app.component(LText.name as any, LText);
};

export default LText;
