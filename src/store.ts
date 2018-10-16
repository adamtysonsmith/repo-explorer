import { createStore, compose } from 'redux'
import { rootReducer, initialState } from './state/reducer'

const devtoolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ 
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, initialState as any, devtoolsExtension)

export default store
