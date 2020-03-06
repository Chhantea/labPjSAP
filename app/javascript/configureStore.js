import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState={
  things:[{
      name:'Bottle no: ',
      guid:'123'
  },{
      name:'Bottle no: ',
      guid:'456'
  }]
};

function rootReducer(state,action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_THINGS_SUCCESS":{
            return {things: action.json.things}
        }
        default:
            return state
    }
}

export  default  function configureStore() {
    const store =createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}