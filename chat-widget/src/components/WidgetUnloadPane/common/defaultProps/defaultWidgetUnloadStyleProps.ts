import { IWidgetUnloadPaneStyleProps } from "../../interfaces/IWidgetUnloadStyleProps";

export const defaultWidgetUnloadStyleProps : IWidgetUnloadPaneStyleProps = {
    containerStyles: {
        width: "100%",
        height: "100%",
        borderWidth: "3px",
        borderStyle: "solid",
        backgroundColor: "#315fa2",
        borderColor: "#F1F1F1",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    titleStyles: {
        margin: "0px 0px 0px 0px",
        textAlign: "center",
        display: "flex",
        order: 2,
        alignSelf: "auto"
    },
    titleLabelStyles: {
        fontFamily: "'Segoe UI',Arial,sans-serif",
        fontWeight: "bold",
        fontSize: "14px",
        color: "#FFFFFF",
    }
};
