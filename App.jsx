// import { NewAppScreen } from '@react-native/new-app-screen';

import { useColorScheme, StatusBar, ScrollView, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store/store.js'
import ExpenseTracker from './src/Components/ExpenseTracker.jsx'

function App() {
const isDarkMode = useColorScheme() === 'dark';

return (
  <SafeAreaProvider>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ExpenseTracker />  
        </PersistGate>  
      </Provider>   
  </SafeAreaProvider>
);
}

export default App;
