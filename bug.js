This error occurs when using Expo's `Linking` API to handle deep links.  The `Linking.addEventListener` function doesn't trigger the callback when the app is launched from a deep link, resulting in no handling of the initial URL.  This is different from when the app is already open and a deep link is received. The problem specifically arises on Android and seems related to the lifecycle of the Linking API.