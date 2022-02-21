import {
    useColorScheme,
    View,
    StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function CustomStatusBar() {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    const isDark = colorScheme === 'dark';

    return (
        <View style={{ height: insets.top, backgroundColor: isDark ? '#000' : '#fff' }}>
            {isDark
                ? <StatusBar
                    animated={true}
                    backgroundColor={'#000'}
                    barStyle={'light-content'}
                />
                : <StatusBar
                    animated={true}
                    backgroundColor={'#fff'}
                    barStyle={'dark-content'}
                />}
        </View>
    );
}