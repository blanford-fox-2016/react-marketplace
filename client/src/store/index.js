import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export default () => {
  const logger = ReduxLogger()

  const enhancer = compose( applyMiddleware(ReduxThunk, logger) )

  const store = createStore(
    rootReducer,
    enhancer
  )
  
  return store
}
