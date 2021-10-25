import ReactNative from "react-native";
import I18n from 'react-native-i18n';

import en from './../locales/en.json'
import fa from './../locales/fa.json'

I18n.fallbacks = true

I18n.translations = {
 en,
 fa
}

const currentLocale = I18n.currentLocale()
export default isRTL= currentLocale.indexOf('fa') === 0;
ReactNative.I18nManager.allowRTL(isRTL)
export function strings(name,params={}){
 return I18n.t(name,params)

}

export default I18n