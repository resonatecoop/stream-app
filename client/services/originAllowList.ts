import { Platform } from "react-native";

export const originAllowList: string[] = [
    "https://community.resonate.is",
    "https://community.resonate.coop",
    "https://id.resonate.coop",
    "https://js.stripe.com",
    "https://m.stripe.network",
    "https://offen.resonate.is",
    "https://offen.stream.resonate.coop",
    Platform.OS === "android"
        ? ""
        : "https://resonate.coop",
    "https://stream.resonate.coop",
    "https://stream.resonate.ninja",
    "https://stripe.com",
    "http://localhost:8080",
];
