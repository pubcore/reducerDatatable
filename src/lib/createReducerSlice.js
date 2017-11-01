import {createReducer} from 'redux-create-reducer'

//to prefix action-types with slicekey (sk)
export default (initialState, handlers, sk='') => {
	var myHandler = {}
	if(typeof sk !== 'string'){
		throw TypeError('SLICEKEY_NOT_A_STRING')
	}

	if(sk){
		Object.keys(handlers).map(key => {
			myHandler[sk + '_' + key] = handlers[key]
		})
	}else{
		myHandler = handlers
	}

	return createReducer(initialState, myHandler)
}
