import { OmnichannelChatSDK } from "@microsoft/omnichannel-chat-sdk";
import { LiveChatWidget } from "@microsoft/omnichannel-chat-widget";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as OcChatSdkPackageinfo from "@microsoft/omnichannel-chat-sdk/package.json";
import * as OcChatWidgetPackageInfo from "@microsoft/omnichannel-chat-widget/package.json";
import * as OcChatComponentPackageInfo from "@microsoft/omnichannel-chat-components/package.json";
import { BroadcastServiceInitialize } from "@microsoft/omnichannel-chat-components";
import { tokenGenerateNew } from "./common/util";
import darkTheme from './themes/darktheme';

const generateAuthToken = async () => {
    
};

const getOmnichannelChatConfig = () => {
    // add your own OC setting, hard-coded just for sample, should be replaced with a better handling
    const omnichannelConfig = {
        orgId: "bfd9d87a-79b7-4bb7-acf0-48b3b855b4da",
        orgUrl: "https://orgf4d9cd3e-crm.omnichannelengagementhub.com",
        widgetId: "53303c0d-bdef-4d6a-a911-d3c661c84dd1"
    };
    return omnichannelConfig;
};

const App = () => {
    // To avoid webpack 5 warning and soon obsolete code, rename the packageinfo variable
    const OcSdkPkginfo = OcChatSdkPackageinfo;
    const OcChatWidgetPkgInfo = OcChatWidgetPackageInfo;
    const OcChatComponentPkgInfo = OcChatComponentPackageInfo;
    let getAuthToken: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [liveChatWidgetProps, setLiveChatWidgetProps] = useState<any>();
    const omnichannelConfig = getOmnichannelChatConfig();
    getAuthToken = async() =>{
        return await tokenGenerateNew();
    };

    const init = async () => {
        const chatSDK = new OmnichannelChatSDK(omnichannelConfig);
        await chatSDK.initialize();
        const chatConfig = await chatSDK.getLiveChatConfig();
        BroadcastServiceInitialize(omnichannelConfig.widgetId);
        let liveChatWidgetProps = {
            controlProps: {
                hideStartChatButton: true,
                hideErrorUIPane: true
            },
            styleProps: {
                generalStyles: {
                    width: "400px",
                    height: "600px",
                    bottom: "30px",
                    right: "30px"
                }
            },
            chatSDK,
            chatConfig,
            getAuthToken: getAuthToken,
            reconnectChatPaneProps: {
                controlProps:{
                    hideStartNewChatButton: true
                }
            },
            webChatContainerProps: {
                disableMarkdownMessageFormatting: true, //setting the default to true for a known issue with markdown
            },
            telemetryConfig: { //mandatory for telemetry
                chatWidgetVersion: OcChatWidgetPkgInfo.version,
                chatComponentVersion: OcChatComponentPkgInfo.version,
                OCChatSDKVersion: OcSdkPkginfo.version,
                disableConsoleLogger: false
            }
        };
        liveChatWidgetProps = Object.assign({}, liveChatWidgetProps, darkTheme);
        setLiveChatWidgetProps(liveChatWidgetProps);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            {liveChatWidgetProps && <LiveChatWidget {...liveChatWidgetProps} />}
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);