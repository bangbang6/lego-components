import { App } from "vue";
export { textDefaultProps, textStylePropNames, TextComponentProps, imageDefaultProps, imageStylePropsNames, ImageComponentProps, shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps, AllComponentProps, } from "./defaultProps";
import LText from "./components/LText";
import LImage from "./components/LImage";
import LShape from "./components/LShape";
declare const install: (app: App) => void;
export { LText, LImage, LShape, install };
declare const _default: {
    install: (app: App) => void;
};
export default _default;
