import { TextComponentProps } from "../defaultProps";
declare const useComponentCommon: <T extends Readonly<Partial<TextComponentProps & {
    isEditing: boolean;
}>>>(props: T, picks: string[]) => {
    styleProps: import("vue").ComputedRef<any>;
    handleClick: () => void;
};
export default useComponentCommon;
