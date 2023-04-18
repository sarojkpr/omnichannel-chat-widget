import { COMMON_PROPS } from "./commonProps";

export default {
    controlProps: COMMON_PROPS.controlProps,
    styleProps: COMMON_PROPS.styleProps,
    headerProps: {
        controlProps: COMMON_PROPS.headerProps.controlProps,
        styleProps: {
            generalStyleProps: {
                ...COMMON_PROPS.headerProps.styleProps.generalStyleProps,
                background: "#3B3A39",
            },
            iconStyleProps: COMMON_PROPS.headerProps.styleProps.iconStyleProps,
            titleStyleProps: {
                ...COMMON_PROPS.headerProps.styleProps.titleStyleProps, 
                color: "#FFFFFF"
            },
            closeButtonStyleProps: {
                ...COMMON_PROPS.headerProps.styleProps.closeButtonStyleProps,
                color: "#0084e9",
                background: "#1B1A19",
            },
            closeButtonHoverStyleProps: {
                backgroundColor: "#3B3A39",
                borderColor: "#FFFFFF",
                color: "#0084e9",
                filter: "brightness(1)"
            },
            headerItemFocusStyleProps: {
                border: "2px solid #FFFFFF"
            }
        }
    },
    webChatContainerProps: {
        disableMarkdownMessageFormatting: COMMON_PROPS.webChatContainerProps.disableMarkdownMessageFormatting,
        containerStyles: {
            ...COMMON_PROPS.webChatContainerProps.containerStyles,
            color: "#1B1A19",
            backgroundColor: "#1B1A19"
        },
        webChatStyles: {
            ...COMMON_PROPS.webChatContainerProps.webChatStyles,
            backgroundColor: "#1B1A19",
            botAvatarBackgroundColor: "linear-gradient(0deg, #043862, #043862), linear-gradient(0deg, #0084e9, #0084e9), #4F6BED",
            userAvatarBackgroundColor: "linear-gradient(0deg, #043862, #043862), linear-gradient(0deg, #0084e9, #0084e9), #4F6BED",
            bubbleBackground: "#3B3A39",
            bubbleFromUserBackground: "#092C47",
            bubbleFromUserTextColor: "#FFFFFF",
            bubbleTextColor: "#FFFFFF",
            sendBoxBackground: "#252423",
            sendBoxTextColor: "#F3F2F1",
            sendBoxBorderTop: "1px solid #605E5C",
            sendBoxButtonColor: "#FFFFFF",
            sendBoxButtonShadeColorOnHover: "#3B3A39",
            sendBoxButtonShadeColorOnFocus: "#3B3A39",
            sendBoxButtonKeyboardFocusIndicatorBorderStyle: "none",
            transcriptActivityVisualKeyboardIndicatorColor: "#0084e9",
            transcriptVisualKeyboardIndicatorColor: "#0084e9",
            notificationText: "#FFFFFF"
        },
        renderingMiddlewareProps: {
            timestampContentStyleProps: {
                "color": "#FFFFFF"
            },
            timestampFailedTextStyleProps: {
                "color": "#FFFFFF"
            },
            timestampRetryTextStyleProps: {
                "color": "#FFFFFF"
            },
            systemMessageStyleProps: {
                "color": "#FFFFFF"
            },
            typingIndicatorBubbleStyleProps: {
                background: "#0084E9",
            },
            typingIndicatorMessageStyleProps: {
                color: "#FFFFFF"
            },
            avatarStyleProps: {
                backgroundColor: "#043862",
            },
            receivedMessageAnchorStyles: {
                color: "#0080E3",
                filter: "invert(32%) sepia(96%) saturate(1073%) hue-rotate(181deg) brightness(99%) contrast(110%)",
            }
        }
    },
    footerProps: {
        controlProps: COMMON_PROPS.footerProps.controlProps,
        styleProps: {
            generalStyleProps: {
                ...COMMON_PROPS.footerProps.styleProps.generalStyleProps,
                background: "#252423",
            },
            downloadTranscriptButtonStyleProps: {
                ...COMMON_PROPS.footerProps.styleProps.downloadTranscriptButtonStyleProps,
                icon: {
                    color: "#FFFFFF"
                }
            },
            downloadTranscriptButtonHoverStyleProps: {
                ...COMMON_PROPS.footerProps.styleProps.downloadTranscriptButtonHoverStyleProps,
                backgroundColor: "#3B3A39",
                icon: {
                    color: "#FFFFFF"
                }
            },
            audioNotificationButtonStyleProps: {
                ...COMMON_PROPS.footerProps.styleProps.audioNotificationButtonStyleProps,
                icon: {
                    color: "#FFFFFF"
                }
            },
            audioNotificationButtonHoverStyleProps: {
                ...COMMON_PROPS.footerProps.styleProps.audioNotificationButtonHoverStyleProps,
                backgroundColor: "#3B3A39",
                icon: {
                    color: "#FFFFFF"
                }
            },
            footerItemFocusStyleProps: {
                border: "none",
                backgroundColor: "#3B3A39",
                icon: {
                    color: "#FFFFFF"
                }
            }
        }
    },
    confirmationPaneProps: {
        controlProps: COMMON_PROPS.confirmationPaneProps.controlProps,
        styleProps: {
            generalStyleProps: {
                ...COMMON_PROPS.confirmationPaneProps.styleProps.generalStyleProps,
                backgroundColor: "#252423"
            },
            titleStyleProps: {
                ...COMMON_PROPS.confirmationPaneProps.styleProps.titleStyleProps,
                color: "#F3F2F1"
            },
            subtitleStyleProps: {
                ...COMMON_PROPS.confirmationPaneProps.styleProps.subtitleStyleProps,
                color: "#F3F2F1"
            },
            buttonGroupStyleProps: COMMON_PROPS.confirmationPaneProps.styleProps.buttonGroupStyleProps,
            confirmButtonStyleProps: {
                ...COMMON_PROPS.confirmationPaneProps.styleProps.confirmButtonStyleProps,
                backgroundColor: "#008CF9",
                color: "#252423"
            },
            confirmButtonHoveredStyleProps: {
                backgroundColor: "#004C87",
                color: "#252423"
            },
            confirmButtonFocusedStyleProps: {
                border: "2px solid #252423",
                outline: "2px solid #008CF9",
                outlineOffset: "1px"
            },
            cancelButtonStyleProps: {
                ...COMMON_PROPS.confirmationPaneProps.styleProps.cancelButtonStyleProps,
                backgroundColor: "#1B1A19",
                color: "#008CF9",
                border: "1px solid #008CF9"
            },
            cancelButtonHoveredStyleProps: {
                backgroundColor: "#252423",
                color: "#008CF9",
            },
            cancelButtonFocusedStyleProps: {
                border: "2px solid #008CF9",
                outline: "2px solid #008CF9",
                outlineOffset: "2px"
            }
        }
    },
    loadingPaneProps: {
        controlProps: COMMON_PROPS.loadingPaneProps.controlProps,
        styleProps: {
            generalStyleProps: {
                ...COMMON_PROPS.loadingPaneProps.styleProps.generalStyleProps,
                backgroundColor: "#1B1A19",
            },
            titleStyleProps: {
                ...COMMON_PROPS.loadingPaneProps.styleProps.titleStyleProps,
                color: "#F3F2F1"
            },
            subtitleStyleProps: {
                ...COMMON_PROPS.loadingPaneProps.styleProps.subtitleStyleProps,
                color: "#F3F2F1"
            },
            iconStyleProps: {
                ...COMMON_PROPS.loadingPaneProps.styleProps.iconStyleProps,
                backgroundColor: "#1B1A19"
            },
            iconImageProps: COMMON_PROPS.loadingPaneProps.styleProps.iconImageProps,
            spinnerStyleProps: COMMON_PROPS.loadingPaneProps.styleProps.spinnerStyleProps,
            spinnerTextStyleProps: {
                ...COMMON_PROPS.loadingPaneProps.styleProps.spinnerTextStyleProps,
                color: "#0084e9",
            }
        }
    }
}