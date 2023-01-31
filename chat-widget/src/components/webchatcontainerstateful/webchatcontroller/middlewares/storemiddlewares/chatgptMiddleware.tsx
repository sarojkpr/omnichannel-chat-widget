import { IconButton, IIconProps } from "@fluentui/react";
import React from "react";
import { Constants } from "../../../../../common/Constants";
import { IWebChatAction } from "../../../interfaces/IWebChatAction";
import { WebChatActionType } from "../../enums/WebChatActionType";

const disableHTMLPlayerDownloadButton = (htmlTag: string) => {
    setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const elements: any = document.getElementsByTagName(htmlTag);
        for (let index = 0; index < elements.length; index++) {
            if (!elements[index].getAttribute(Constants.controlsList)) {
                elements[index].setAttribute(Constants.controlsList, Constants.nodownload);
            }
            else {
                if (elements[index].getAttribute(Constants.controlsList).indexOf(Constants.nodownload) === -1) {
                    const currentControlsListValue = elements[index].getAttribute(Constants.controlsList);
                    elements[index].setAttribute(Constants.controlsList, `${currentControlsListValue} ${Constants.nodownload}`);
                }
            }
        }
    }, 500);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createChatBotButton = (bubble: any): any => {
    const searchText = bubble.querySelector(".webchat__bubble__content").childNodes[0].childNodes[0].textContent;
    const bubbleContent = bubble.querySelector(".webchat__bubble__content").outerHTML;
    const bubblePad = bubble.querySelector(".webchat__bubble__nub-pad").outerHTML;
    const botButton = `<button type="button" onclick="openChatGpt('${searchText}');" class="ms-Button ms-Button--icon root-141" aria-label="ChatGpt" title="Ask ChatGPT" data-is-focusable="true"><span class="ms-Button-flexContainer flexContainer-124" data-automationid="splitbuttonprimary"><i data-icon-name="Robot" aria-hidden="true" class="ms-Icon root-89 css-121 ms-Button-icon icon-119" style="font-family: FabricMDL2Icons;"></i></span></button>`;
    const chatbotButton = `<button type="button" onclick="openChatGpt('${searchText}');" aria-label="Ask ChatBot" title="Ask ChatGPT" class="ms-Button ms-Button--icon root-110" data-is-focusable="true"><span class="ms-Button-flexContainer flexContainer-111" data-automationid="splitbuttonprimary"><i data-icon-name="Robot" aria-hidden="true" class="ms-Icon root-89 css-119 ms-Button-icon icon-113" style="font-family: FabricMDL2Icons-3;"></i></span></button>`;
    //const botButton = "<button type=\"button\" onclick=\"openChatGpt(\"+{$}+\");\" class=\"ms-Button ms-Button--icon root-141\" aria-label=\"ChatGpt\" title=\"Ask ChatGPT\" data-is-focusable=\"true\"><span class=\"ms-Button-flexContainer flexContainer-124\" data-automationid=\"splitbuttonprimary\"><span data-icon-name=\"Robot\" aria-hidden=\"true\" class=\"ms-Icon root-89 css-139 ms-Button-icon icon-126\" style=\"font-family: FabricMDL2Icons-3;\"></span></span></button>";
    return bubblePad + bubbleContent + bubblePad + chatbotButton;
};

/*const addChatGptButton = (action: IWebChatAction, text: string): IWebChatAction => {
    setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const frombubbles: any = document.querySelectorAll(".webchat__bubble--hide-nub");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        frombubbles.forEach((bubble: any) => {
            bubble.appendChild(createChatBotButton());
        });
    }, 500);
};*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const chatgptMiddleware = ({ dispatch }: { dispatch: any }) => (next: any) => (action: IWebChatAction) => {
    if (action.type === WebChatActionType.DIRECT_LINE_INCOMING_ACTIVITY) {
        const { activity } = action.payload;
        if (activity.type === "message") {
            const text = action.payload?.activity?.text;
            //const chatBotButtonHtml: any = createChatBotButton();
            //const buttonDiv = document.createElement("div");
            //buttonDiv.innerHTML = chatBotButtonHtml;
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                let frombubbles: any = document.querySelectorAll(".webchat__bubble--hide-nub");
                frombubbles = Object.values(frombubbles);
                const indexOfLastBubble = frombubbles.length - 1;
                const bubble = frombubbles[indexOfLastBubble];
                bubble.innerHTML = createChatBotButton(bubble);
            }, 500);
        }
    }

    return next(action);
};

export default chatgptMiddleware;