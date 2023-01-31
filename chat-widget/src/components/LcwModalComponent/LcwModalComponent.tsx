import React, { Dispatch, useEffect } from "react";
import { DimLayer } from "../dimlayer/DimLayer";
import { ConfirmationPane } from "@microsoft/omnichannel-chat-components";

export const defaultAttachmentSizeStyles: React.CSSProperties = {
    display: "none"
};

export const closeStyles: React.CSSProperties = {
    color: "#aaaaaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold"
};
export const closeHoverStyles: React.CSSProperties = {
    color: "#000",
    textDecoration: "none",
    cursor: "pointer"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LcwModalComponent = (props: any) => {
    return (
        <><style>{`
        .close { ${closeStyles} }
        .close:hover,
        .close:focus {${closeHoverStyles}}
    `}</style>
        <DimLayer brightness={"0.2"} />
        <span className="close">&times;</span>
        <h1>{props.title}</h1>
        <div>
            <iframe id='MainPopupIframe' width="99%" height="99%"
                src='https://tprompt-chatbot-dev.azurewebsites.net/'></iframe>
        </div>
        </>
    );
};

export default LcwModalComponent;