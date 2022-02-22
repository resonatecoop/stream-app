import AsyncStorage from '@react-native-async-storage/async-storage';

export const cookiePreferences = (trackingPermissions: boolean) => `const button = document.querySelector('button[value="${trackingPermissions ? 'allow' : 'deny'}"]'); if (button !== null) {button.click();}; true;`;

export const getPermissionsGranted = async () => {
    try {
        const value = await AsyncStorage.getItem('are_permissions_granted')
        if (value !== null) {
            return value === 'true';
        }
    } catch (e) {
        console.log(e);
    }
};

export const storePermissionsGranted = async (value: boolean) => {
    try {
        await AsyncStorage.setItem('are_permissions_granted', `${value}`);
    } catch (e) {
        console.log(e);
    }
};
