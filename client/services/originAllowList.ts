import { Platform } from "react-native";

const allDevicesAllowList: string[] = [
    "http://localhost:8080",
    "https://community.resonate.coop",
    "https://community.resonate.is",
    "https://id.resonate.coop",
    "https://offen.resonate.is",
    "https://offen.stream.resonate.coop",
    "https://stream.resonate.coop",
    "https://stream.resonate.ninja",
    "https://js.stripe.com",
    "https://m.stripe.network",
];

const iOSAllowList: string[] = Platform.OS === "android"
    ? []
    : [
        "https://resonate.coop",
        "https://stripe.com",
    ];

export const originAllowList: string[] = [
    ...allDevicesAllowList,
    ...iOSAllowList,
];
