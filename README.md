# Expo Linking.addEventListener Android Deep Link Issue

This repository demonstrates a bug where `Linking.addEventListener` in Expo's `Linking` API fails to trigger its callback function when an Android app is launched directly from a deep link. The callback works correctly when the app is already running and receives a new deep link, but not for the initial launch.

## Reproducing the Issue

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Android emulator or device.
4. Launch the app using a deep link (e.g., from a browser).
5. Observe that the `Linking.addEventListener` callback function is not executed.

## Solution

The provided solution uses `Linking.getInitialURL` to retrieve the initial URL during app launch. This ensures that the deep link is handled correctly even before `Linking.addEventListener`'s callback is triggered.

## Additional Notes

This issue appears to be specific to Android and might be related to the asynchronous nature of `Linking.addEventListener` in the context of the app's launch lifecycle.