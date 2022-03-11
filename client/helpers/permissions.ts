import AsyncStorage from '@react-native-async-storage/async-storage';

export const cookiePreferences = (areTrackingPermissionsGranted: boolean) => `const button = document.querySelector('button[value="${areTrackingPermissionsGranted ? 'allow' : 'deny'}"]'); if (button !== null) {button.click();}; true;`;

export const getPermissionsGranted = async () => {
    try {
        const value = await AsyncStorage.getItem('areTrackingPermissionsGranted');
        if (value !== null) {
            return value === 'true';
        }
    } catch (e) {
        console.log(e);
    }

    return false;
};

export const storePermissionsGranted = async (value: boolean) => {
    try {
        await AsyncStorage.setItem('areTrackingPermissionsGranted', `${value}`);
    } catch (e) {
        console.log(e);
    }
};
