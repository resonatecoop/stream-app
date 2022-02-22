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
    const backgroundColor = isDark ? '#181A1B' : '#fff';

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            {isDark
                ? <StatusBar
                    animated={true}
                    backgroundColor={backgroundColor}
                    barStyle={'light-content'}
                />
                : <StatusBar
                    animated={true}
                    backgroundColor={backgroundColor}
                    barStyle={'dark-content'}
                />}
        </View>
    );
}
