import { computed } from "vue";
import { pick } from "lodash-es";
import { TextComponentProps } from "../defaultProps";

const useComponentCommon = <
  T extends Readonly<Partial<TextComponentProps & { isEditing: boolean }>>
>(
  props: T,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks));
  const handleClick = () => {
    if (props.actionType === "url" && props.url && !props.isEditing) {
      window.location.href = props.url;
    }
  };
  return {
    styleProps,
    handleClick,
  };
};
export default useComponentCommon;
