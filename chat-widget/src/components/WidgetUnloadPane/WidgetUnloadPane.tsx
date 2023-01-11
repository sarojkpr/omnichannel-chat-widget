import React from "react";

import { ILabelStyles, IStackStyles, Label, Stack } from "@fluentui/react";
import { IWidgetUnloadPaneProps } from "./interfaces/IWidgetUnloadPaneProps";
import { defaultWidgetUnloadProps } from "./common/defaultProps/defaultWidgetUnloadProps";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WidgetUnloadPane = (props?: IWidgetUnloadPaneProps) => {

    const widgetUnloadProps: IWidgetUnloadPaneProps = Object.assign({}, defaultWidgetUnloadProps, props);
    const containerStyles: IStackStyles = {
        root: Object.assign({}, defaultWidgetUnloadProps.styleProps?.containerStyles, props?.styleProps?.containerStyles)
    };
    const titleStyles: IStackStyles = {
        root: Object.assign({}, defaultWidgetUnloadProps.styleProps?.titleStyles, props?.styleProps?.titleStyles)
    };
    const titleLabelStyles: ILabelStyles = {
        root: Object.assign({}, defaultWidgetUnloadProps.styleProps?.titleLabelStyles, props?.styleProps?.titleLabelStyles)
    };
    return (
        <Stack styles={containerStyles}>
            <Stack styles={titleStyles}>
                <Label styles={titleLabelStyles}>{widgetUnloadProps?.controlProps?.message}</Label>
            </Stack>
        </Stack >
    );
};

export default WidgetUnloadPane;