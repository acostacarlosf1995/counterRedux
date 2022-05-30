import { useDispatch, useSelector } from 'react-redux'
import {
    reset,
    plus,
    minus,
    typeCount
} from '../../actions/functionActions'

import './App.css';

function App() {

    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const handlePlusAction = (e) => {
        e.preventDefault()
        dispatch(plus())
    }

    const handleMinusAction = (e) => {
        e.preventDefault()
        dispatch(minus())
    }

    const handleResetAction = (e) => {
        e.preventDefault()
        dispatch(reset())
    }

    const type = ({ target }) => {
        dispatch(typeCount(parseInt(target.value)));
    }

  return (
          <div className="container">
              <button
                  className="btn_plus"
                  onClick={ handlePlusAction }
              >
                  +1
              </button>

              <div className="input_container">
                  <input
                      className="input"
                      type="number"
                      value={ counter }
                      onChange={ type }
                  />
                  <button
                      className="reset"
                      onClick={ handleResetAction }
                  >
                      Reset
                  </button>
              </div>

              <button
                  className="btn_minus"
                  onClick={ handleMinusAction }
              >
                  -1
              </button>
          </div>
  )
}

export default App;
