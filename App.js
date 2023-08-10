
import { Provider } from 'react-redux';
import store from './src/Store/store';
import Navigator from './src/Navigation/Navigator';

export default function App() {


  //Acá se manejará el estado para seleccionar una category y un producto
  
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

