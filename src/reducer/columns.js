import createReducer from '../lib/createReducerSlice'
import changeColSequence from './case/changeColSequence'
import changeColVisibilty from './case/changeColVisibility'

export const initialState = {
	all:[],//array of string, defines which columns are available
	sequence:[],//array of string, defines sequence of columns
	visible:[],//array of string, defines which columns are visible
}

export const type2reducer = {
	RESET:(s, a)=>(
		{...s, all:a.all.slice(), visible:a.visible.slice(), sequence:a.sequence.slice()}
	),
	CHANGE_COL_SEQUENCE: (s, a) => (
		{...s, sequence:changeColSequence(s.sequence, a.from, a.to)}
	),
	SHOW_COL:(s, a)=>(
		{...s, visible:changeColVisibilty(a.isVisible, a.col, s.visible || s.all)}
	)
}

export default ({sk, initState}) => createReducer(
	{...(initialState||{}), ...initState}, type2reducer, sk
)
