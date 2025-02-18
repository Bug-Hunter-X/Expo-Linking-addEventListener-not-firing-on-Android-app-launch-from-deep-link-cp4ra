This solution uses `Linking.getInitialURL` to retrieve the initial URL upon app launch and handle it before using `Linking.addEventListener` for subsequent deep links.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrl();

    const subscription = Linking.addEventListener('url', (event) => {
      console.log('URL event received:', event.url);
      // Handle subsequent deep links here
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      console.log('Initial URL received:', initialUrl);
      // Handle the initial deep link here
    }
  }, [initialUrl]);

  return (
    <View style={styles.container}>
     {/*Your app content here*/}
    </View>
  );
}
```