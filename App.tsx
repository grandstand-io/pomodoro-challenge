import 'react-native-gesture-handler';

import RootStack from './navigation/root';
import { Provider } from "react-redux";
import { store} from "store/store";

export default function App() {
  return(
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
