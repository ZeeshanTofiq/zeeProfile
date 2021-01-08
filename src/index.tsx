import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createStore, applyMiddleware ,compose} from 'redux';
// import { Provider } from 'react-redux';
// import Thunk from 'redux-thunk';
// import Reducer from './reducers';

// const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const store = createStore(Reducer, composeEnhancer(applyMiddleware(Thunk)));
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);