import React, { Dispatch, useReducer, useState } from "react";

import { ChatAdapterStore } from "../../contexts/ChatAdapterStore";
import { ChatContextStore } from "../../contexts/ChatContextStore";
import { ChatSDKStore } from "../../contexts/ChatSDKStore";
import { ILiveChatWidgetAction } from "../../contexts/common/ILiveChatWidgetAction";
import { ILiveChatWidgetContext } from "../../contexts/common/ILiveChatWidgetContext";
import { ILiveChatWidgetProps } from "./interfaces/ILiveChatWidgetProps";
import LiveChatWidgetStateful from "./livechatwidgetstateful/LiveChatWidgetStateful";
import { createReducer } from "../../contexts/createReducer";
import { getLiveChatWidgetContextInitialState } from "../../contexts/common/LiveChatWidgetContextInitialState";
import { MockChatSDK } from "../webchatcontainerstateful/common/mockchatsdk";

export const LiveChatWidget = (props: ILiveChatWidgetProps) => {

    const reducer = createReducer();
    const [state, dispatch]: [ILiveChatWidgetContext, Dispatch<ILiveChatWidgetAction>] = useReducer(reducer, getLiveChatWidgetContextInitialState(props));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [adapter, setAdapter]: [any, (adapter: any) => void] = useState(undefined);
    let chatSDK: any = props.chatSDK; // eslint-disable-line @typescript-eslint/no-explicit-any

    if (props?.mock) {
        chatSDK = new MockChatSDK();
    }

    return (
        <ChatSDKStore.Provider value={chatSDK}>
            <ChatAdapterStore.Provider value={[adapter, setAdapter]}>
                <ChatContextStore.Provider value={[state, dispatch]}>
                    <LiveChatWidgetStateful {...props} />
                </ChatContextStore.Provider>
            </ChatAdapterStore.Provider>
        </ChatSDKStore.Provider>
    );
};

export default LiveChatWidget;