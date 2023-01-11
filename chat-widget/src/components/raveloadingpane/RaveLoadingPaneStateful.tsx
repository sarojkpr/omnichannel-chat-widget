import { LogLevel, TelemetryEvent } from "../../common/telemetry/TelemetryConstants";
import React, { Dispatch, useEffect } from "react";

import { ILiveChatWidgetAction } from "../../contexts/common/ILiveChatWidgetAction";
import { ILiveChatWidgetContext } from "../../contexts/common/ILiveChatWidgetContext";
import { Icon, IStyle, Label, mergeStyles, Spinner, Stack } from "@fluentui/react";
import { TelemetryHelper } from "../../common/telemetry/TelemetryHelper";
import { findAllFocusableElement } from "../../common/utils";
import useChatContextStore from "../../hooks/useChatContextStore";

export const RaveLoadingPaneStateful = () => {

    const queuePositionStyles = mergeStyles({
        borderRadius: "50%",
        font: "32px Arial, sans-serif;",
        width: "34px",
        height: "34px",
        padding: "10px",
        backgroundColor: "#FFFFFF",
        border: "3px solid #000;",
        color: "red",
        textAlign: "center",
    });

    return (
        <Stack>
            <Stack id="welcomeArea">
                <Label>Hi, Harry</Label>
                <Label>Thank you for waiting.</Label>
                <Spinner></Spinner>

            </Stack>
            <Stack id="queuepositionArea">
                <Label>Here is your queue position:</Label>
                <div className={queuePositionStyles}>
                    4
                </div>
            </Stack>
            <Stack id="agentArea">
                <label>An agent will be with you shortly</label>
            </Stack>
        </Stack>
    );
};

export default RaveLoadingPaneStateful;