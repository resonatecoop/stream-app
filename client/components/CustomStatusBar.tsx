import {
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    trackingPermissions: boolean;
}

export default function CustomStatusBar({ trackingPermissions }: Props) {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    const isDark: boolean = colorScheme === 'dark' && trackingPermissions;

    return (
        <View style={{ height: insets.top, backgroundColor: isDark ? '#181A1B' : '#fff' }}>
            {isDark
                ? <StatusBar
                    animated={true}
                    backgroundColor={'#181A1B'}
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
