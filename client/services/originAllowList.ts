import { Platform } from "react-native";

export const originAllowList: string[] = [
    "http://localhost:8080",
    "https://community.resonate.coop",
    "https://community.resonate.is",
    "https://id.resonate.coop",
    "https://js.stripe.com",
    "https://m.stripe.network",
    "https://offen.resonate.is",
    "https://offen.stream.resonate.coop",
    "https://stream.resonate.coop",
    "https://stream.resonate.ninja",
    "https://stripe.com",
    ...Platform.OS === "android"
        ? []
        : [ "https://resonate.coop" ],
];
