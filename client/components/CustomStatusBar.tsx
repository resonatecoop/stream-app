import {
    StatusBar,
    StatusBarStyle,
    useColorScheme,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomStatusBar() {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    const isDark: boolean = colorScheme === 'dark';
    const backgroundColor: string = isDark ? '#181A1B' : '#fff';
    const barStyle: StatusBarStyle = isDark ? 'light-content' : 'dark-content';

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
}
