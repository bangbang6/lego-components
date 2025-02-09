import { App } from "vue";
import LImage from "./LImage.vue";
LImage.install = (app: App) => {
  app.component(LImage.name as any, LImage);
};

export default LImage;
