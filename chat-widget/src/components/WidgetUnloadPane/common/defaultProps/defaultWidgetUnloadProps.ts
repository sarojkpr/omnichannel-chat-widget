import { IWidgetUnloadPaneProps } from "../../interfaces/IWidgetUnloadPaneProps";
import { defaultWidgetUnloadStyleProps } from "./defaultWidgetUnloadStyleProps";

export const defaultWidgetUnloadProps: IWidgetUnloadPaneProps = {
    controlProps: {
        message: "Thank you for using Omnichannel Chat Support. Please close the browser."
    },
    styleProps: defaultWidgetUnloadStyleProps
};