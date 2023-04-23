import { i18n } from "@/i18n";


export function translateMsg(message_key: string, msg?: string) {
    console.log(message_key)
    return i18n.global.t(message_key, {msg});
}
