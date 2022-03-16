import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors,
    text: {
        color: colors.dark,
        flex: 1,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,
    }
}
