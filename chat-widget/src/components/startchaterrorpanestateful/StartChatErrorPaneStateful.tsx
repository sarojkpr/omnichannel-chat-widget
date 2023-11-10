import React, { Dispatch, useEffect } from "react";
import { IStyle, IImageProps } from "@fluentui/react";

import { ILiveChatWidgetAction } from "../../contexts/common/ILiveChatWidgetAction";
import { ILiveChatWidgetContext } from "../../contexts/common/ILiveChatWidgetContext";
import { ILoadingPaneControlProps } from "@microsoft/omnichannel-chat-components/lib/types/components/loadingpane/interfaces/ILoadingPaneControlProps";
import { ILoadingPaneStyleProps } from "@microsoft/omnichannel-chat-components/lib/types/components/loadingpane/interfaces/ILoadingPaneStyleProps";
import { LoadingPane } from "@microsoft/omnichannel-chat-components";
import { findAllFocusableElement } from "../../common/utils";
import useChatContextStore from "../../hooks/useChatContextStore";
import { TelemetryHelper } from "../../common/telemetry/TelemetryHelper";
import { LogLevel, TelemetryEvent } from "../../common/telemetry/TelemetryConstants";
import { StartChatFailureType } from "../../contexts/common/StartChatFailureType";
import { defaultErrorPaneGeneralStyleProps } from "./common/defaultErrorPaneGeneralStyleProps";
import { defaultErrorPaneTitleStyleProps } from "./common/defaultErrorPaneTitleStyleProps";
import { defaultErrorPaneSubtitleStyleProps } from "./common/defaultErrorPaneSubtitleStyleProps";
import { defaultErrorPaneIconStyleProps } from "./common/defaultErrorPaneIconStyleProps";
import { defaultErrorPaneIconImageStyleProps } from "./common/defaultErrorPaneIconImageProps";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StartChatErrorPaneStateful = (props: any) => {
    const [state, ]: [ILiveChatWidgetContext, Dispatch<ILiveChatWidgetAction>] = useChatContextStore();
    const { errorPaneProps, startChatErrorPaneProps } = props;

    console.log("ADAD StartChatErrorPaneStateful props", props);
    
    const generalStyleProps: IStyle = Object.assign({}, defaultErrorPaneGeneralStyleProps, errorPaneProps.styleProps?.generalStyleProps);
    const titleStyleProps: IStyle = Object.assign({}, defaultErrorPaneTitleStyleProps, errorPaneProps.styleProps?.generalStyleProps);
    const subtitleStyleProps: IStyle = Object.assign({}, defaultErrorPaneSubtitleStyleProps, errorPaneProps.styleProps?.generalStyleProps);
    const iconStyleProps: IStyle = Object.assign({}, defaultErrorPaneIconStyleProps, errorPaneProps.styleProps?.generalStyleProps);
    const iconImageProps: IImageProps = Object.assign({}, defaultErrorPaneIconImageStyleProps, errorPaneProps.styleProps?.generalStyleProps);

    const errorUIStyleProps: ILoadingPaneStyleProps = {
        generalStyleProps: generalStyleProps,
        titleStyleProps: titleStyleProps,
        subtitleStyleProps: subtitleStyleProps,
        iconStyleProps: iconStyleProps,
        iconImageProps: iconImageProps,
    };

    console.log("ADAD state.domainStates.startChatFailureType", state.domainStates.startChatFailureType);

    let errorPaneTitleText = startChatErrorPaneProps?.controlProps?.titleText ?? "We are unable to load chat at this time.";
    let errorPaneSubtitleText = startChatErrorPaneProps?.controlProps?.subtitleText ?? "Please try again later.";

    if (state.domainStates.startChatFailureType === StartChatFailureType.Authentication) {
        errorPaneTitleText = startChatErrorPaneProps?.controlProps?.authTitleText ?? "Chat authentication has failed.";
        errorPaneSubtitleText = startChatErrorPaneProps?.controlProps?.authSubtitleText ?? "Please check authentication setup and try again.";
    }

    const errorUIControlProps: ILoadingPaneControlProps = {
        id: "oc-lcw-start-chat-error-pane",
        dir: state.domainStates.globalDir,
        titleText: errorPaneTitleText,
        subtitleText: errorPaneSubtitleText,
        hideSpinner: true,
        hideSpinnerText: true,
        ...props?.controlProps,
    };

    console.log("ADAD errorUIStyleProps", errorUIStyleProps);

    console.log("ADAD errorUIControlProps", errorUIControlProps);

    // Move focus to the first button
    useEffect(() => {
        const firstElement: HTMLElement[] | null = findAllFocusableElement(`#${state.domainStates.widgetElementId}`);
        if (firstElement && firstElement[0]) {
            firstElement[0].focus();
        }
        console.log("ADAD new error pane loaded!!!");
        TelemetryHelper.logLoadingEvent(LogLevel.INFO, { Event: TelemetryEvent.StartChatErrorPaneLoaded, Description: "Start chat error pane loaded." });
    }, []);
    
    return (
        <LoadingPane
            componentOverrides={errorPaneProps.componentOverrides}
            controlProps={errorUIControlProps}
            styleProps={errorUIStyleProps}
        />
    );
};

export default StartChatErrorPaneStateful;