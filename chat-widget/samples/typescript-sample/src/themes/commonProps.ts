export const COMMON_PROPS = {
    controlProps: {
        hideStartChatButton: true,
        hideErrorUIPane: true
    },
    styleProps: {
        generalStyles: {
            height: "calc(100vh - 3px)",
            width: "100%",
            margin: "0 auto 0 auto",
            backgroundColor: "#FFFFFF"
        }
    },
    headerProps: {
        controlProps: {
            id: "webChatHeader",
            hideIcon: false,
            hideTitle: false,
            hideCloseButton: false,
            hideMinimizeButton: true,
            middleGroup: {},
            leftGroup: {},
            rightGroup: {},
            minimizeButtonProps: {
                id: "webChatHeaderMinimizeButton",
                type: "icon",
                iconName: "ChromeMinimize"
            },
            closeButtonProps: {
                id: "webChatHeaderCloseButton",
                type: "text",
                iconName: "ChromeClose",
                ariaLabel: "End chat",
                text: "End chat"
            },
            headerIconProps: {
                id: "oc-lcw-header-icon",
                src: "public/assets/chat_icon.svg",
                alt: "Chat Icon"
            },
            headerTitleProps: {
                id: "webChatHeaderTitle",
                text: "Azure chat support"
            }
        },
        styleProps: {
            generalStyleProps: {
                borderRadius: "4px 4px 0 0",
                padding: "5px",
                minHeight: "50px",
                width: "100%",
                minWidth: "250px",
                zIndex: 100
            },
            iconStyleProps: {
                height: "30px",
                width: "30px",
                margin: "5px 10px"
            },
            titleStyleProps: {
                fontSize: 16,
                fontFamily: "Segoe UI, Arial, sans-serif",
                fontWeight: "600",
                padding: "3px 0"
            },
            minimizeButtonStyleProps: {},
            closeButtonStyleProps: {
                margin: "5px 0",
                fontSize: "13px",
                border: "1px solid"
            }
        }
    },
    webChatContainerProps: {
        disableMarkdownMessageFormatting: true,
        containerStyles: {
            borderColor: "none",
            borderRadius: "none",
            borderStyle: "none",
            borderWidth: "0px",
            boxShadow: "none",
            fontFamily: "segoe ui",
            fontSize: "16px",
            fontWeight: "400px",
            margin: "none",
            padding: "none"
        },
        webChatStyles: {
            bubbleBorderRadius: 0,
            bubbleBorderWidth: 0,
            bubbleImageHeight: 240,
            bubbleMaxWidth: 250,
            bubbleMinHeight: 34,
            bubbleMinWidth: 20,
            bubbleFromUserBorderRadius: 0,
            bubbleFromUserBorderWidth: 0,
            hideSendBox: false,
            hideUploadButton: true,
            primaryFont: "",
            rootHeight: "100%",
            rootWidth: "100%",
            sendBoxTextWrap: true,
            sendBoxHeight: 60,
            sendBoxMaxHeight: 96,
            typingAnimationDuration: 3500,
            transcriptVisualKeyboardIndicatorWidth: 2,
            transcriptActivityVisualKeyboardIndicatorStyle: "solid",
            transcriptActivityVisualKeyboardIndicatorWidth: 2,
            transcriptVisualKeyboardIndicatorStyle: "solid"
        }
    },
    footerProps: {
        controlProps: {
            id: "oclcw-actionBar",
            hideDownloadTranscriptButton: false,
            hideEmailTranscriptButton: true,
            hideAudioNotificationButton: false,
            middleGroup: {},
            leftGroup: {},
            rightGroup: {},
            downloadTranscriptButtonProps: {
                id: "oclcw-actionBar-DownloadTranscript-button",
                type: "icon",
                iconName: "Download",
                ariaLabel: "Download chat transcript"
            },
            emailTranscriptButtonProps: {},
            audioNotificationButtonProps: {
                id: "oc-lcw-footer-audionotification-button",
                ariaLabel: "Turn sound off",
                toggleAriaLabel: "Turn sound on",
                iconName: "Volume3",
                toggleIconName: "Volume0"
            }
        },
        styleProps: {
            generalStyleProps: {
                borderRadius: "0 0 4px 4px",
                minHeight: "25px",
                width: "100%",
                minWidth: "250px",
                padding: "0 10px 10px 10px"
            },
            downloadTranscriptButtonStyleProps: {
                fontSize: 16,
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            downloadTranscriptButtonHoverStyleProps: {
                filter: "brightness(1)"
            },
            audioNotificationButtonStyleProps: {
                fontSize: 16,
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            audioNotificationButtonHoverStyleProps: {
                filter: "brightness(1)"
            }
        }
    },
    confirmationPaneProps: {
        controlProps: {
            id: "oc-lcw-confirmationpane",
            dir: "ltr",
            hideConfirmationPane: false,
            hideTitle: false,
            titleText: "Want a copy of this chat?",
            hideSubtitle: false,
            subtitleText: "Select Cancel and then select the download icon.",
            hideConfirmButton: false,
            confirmButtonText: "Close",
            confirmButtonAriaLabel: "Close Chat",
            hideCancelButton: false,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "Cancel. Return to Chat"
        },
        styleProps: {
            generalStyleProps: {
                borderRadius: "2px",
                fontFamily: "Segoe UI, Arial, sans-serif",
                fontSize: "14px",
                height: "160px",
                padding: "10px 20px",
                width: "335px",
                position: "absolute",
                justifyContent: "center",
                alignItems: "start",
                display: "flex",
                flexFlow: "column",
                zIndex: "9999",
                boxSizing: undefined,
                left: undefined,
                maxHeight: undefined,
                minHeight: undefined,
                right: undefined,
            },
            titleStyleProps: {
                fontFamily: "Segoe UI, Arial, sans-serif",
                fontSize: "18px",
                fontWeight: "600",
                margin: "10px 0 0 0",
                width: "100%",
                textAlign: "start"
            },
            subtitleStyleProps: {
                fontFamily: "Segoe UI, Arial, sans-serif",
                fontSize: "13px",
                fontWeight: "400",
                margin: "14px 0px",
                width: "100%",
                textAlign: "start"
            },
            buttonGroupStyleProps: {
                display: "flex",
                flexFlow: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                boxSizing: undefined,
                height: undefined,
                marginBottom: undefined,
                width: undefined
            },
            confirmButtonStyleProps: {
                fontFamily: "Segoe UI, Arial, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                height: "32px",
                width: "80px"
            },
            cancelButtonStyleProps: {
                fontFamily: "Segoe UI, Arial, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                height: "32px",
                width: "80px"
            }
        }
    },
    loadingPaneProps: {
        controlProps: {
            id: "oc-lcw-loadingpane",
            dir: "auto",
            hideLoadingPane: false,
            hideIcon: false,
            hideTitle: false,
            titleText: "Welcome to",
            hideSubtitle: false,
            subtitleText: "live chat support!",
            hideSpinner: false,
            hideSpinnerText: false,
            spinnerText: "Loading ..."
        },
        styleProps: {
            generalStyleProps: {
                borderStyle: "none",
                position: "inital",
                justifyContent: "center",
                alignItems: "center"
            },
            titleStyleProps: {
                fontFamily: "'Segoe UI',Arial,sans-serif",
                fontWeight: "400",
                fontSize: "13px",
                margin: "0px 0px 0px 0px",
                textAlign: "center",
                display: "flex",
                order: 2,
                alignSelf: "auto"
            },
            subtitleStyleProps: {
                fontFamily: "'Segoe UI',Arial,sans-serif",
                fontWeight: "600",
                fontSize: "20px",
                margin: "0px 0px 50px 10px",
                textAlign: "center",
                display: "flex",
                order: 3,
                alignSelf: "auto"
            },
            iconStyleProps: {
                borderRadius: "none",
                boxShadow: "0px 0px 0px 0px #EEEEEE",
                width: "86px",
                height: "86px",
                margin: "0px 0px 20px 0px",
                display: "flex",
                order: 1,
                alignSelf: "auto"
            },
            iconImageProps: {
                src: "public/assets/chat_icon.svg",
                imageFit: 1,
                width: "86px",
                height: "86px",
                shouldFadeIn: false,
                shouldStartVisible: true
            },
            spinnerStyleProps: {
                width: "28px",
                height: "28px",
                margin: "0px 0px 0px 0px",
                display: "flex",
                order: 4,
                alignSelf: "auto"
            },
            spinnerTextStyleProps: {
                fontFamily: "'Segoe UI',Arial,sans-serif",
                fontWeight: "400",
                fontSize: "12px",
                margin: "0px 0px 0px 5px",
                textAlign: "center",
                order: 5,
                alignSelf: "auto"
            }
        }
    }
}
