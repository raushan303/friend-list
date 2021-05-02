import './App.css';
import RoutesComponent from './components/RoutesComponent';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/store/store';
const store = configureStore();

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Provider store={store}>
          <RoutesComponent />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
