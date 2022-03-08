import * as SplashScreen from 'expo-splash-screen';
import {
	getTrackingPermissionsAsync,
	requestTrackingPermissionsAsync,
} from 'expo-tracking-transparency';
import React, {
	useEffect,
	useState,
} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import CustomStatusBar from './client/components/CustomStatusBar';
import {
	cookiePreferences,
	getPermissionsGranted,
	storePermissionsGranted,
} from './client/helpers/permissions';
import { originAllowList } from './client/services/originAllowList';

export default function App() {
	const [areTrackingPermissionsGranted, setAreTrackingPermissionsGranted] = useState(false);
	const [didPermissionsChange, setDidPermissionsChange] = useState(false);
	const [isRequestingPermissions, setIsRequestingPermissions] = useState(true);
	const [webViewKey, setWebViewKey] = useState(0);

	const hideSplashScreen = async () => await SplashScreen.hideAsync();
	const reloadWebView = () => setWebViewKey(webViewKey + 1)

	useEffect(() => {
		(async () => {
			await SplashScreen.preventAutoHideAsync();
			const arePermissionsGrantedHistorically = await getPermissionsGranted();
			const { granted } = await getTrackingPermissionsAsync();
			if (granted) {
				setAreTrackingPermissionsGranted(true);
				if (!arePermissionsGrantedHistorically) {
					storePermissionsGranted(true);
					setDidPermissionsChange(true);
				}
			} else {
				const { status } = await requestTrackingPermissionsAsync();
				const arePermissionsGranted = status === 'granted';
				setAreTrackingPermissionsGranted(arePermissionsGranted);
				if (arePermissionsGranted !== arePermissionsGrantedHistorically) {
					storePermissionsGranted(arePermissionsGranted);
					setDidPermissionsChange(true);
				}
			}

			setIsRequestingPermissions(false);
		})();
	}, []);

	return (
		<SafeAreaProvider>
			<CustomStatusBar />
			{!isRequestingPermissions && <WebView
				allowsBackForwardNavigationGestures
				cacheEnabled={didPermissionsChange}
				ignoreSilentHardwareSwitch
				injectedJavaScript={cookiePreferences(areTrackingPermissionsGranted)}
				javaScriptCanOpenWindowsAutomatically
				key={webViewKey}
				mediaPlaybackRequiresUserAction
				onContentProcessDidTerminate={reloadWebView}
				onLoadEnd={hideSplashScreen}
				onRenderProcessGone={reloadWebView}
				originWhitelist={originAllowList}
				sharedCookiesEnabled={false}
				source={{
					uri: 'https://stream.resonate.coop/discover',
					headers: {
						'doNotTrack': areTrackingPermissionsGranted ? '0' : '1',
					},
				}}
				startInLoadingState
				style={styles.container}
				textInteractionEnabled={false}
			/>}
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -2,
	},
});
