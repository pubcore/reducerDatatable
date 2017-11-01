import createReducer from '../lib/createReducerSlice'

/*
exampleState = [
	{col:'nameOfColumn', order:'desc'},
	{col:'otherColumn', order:'asc'}
]
*/
export default ({initState, sk}) => createReducer(
	initState || [],
	{
		TOGGLE_SORT:(s, {col, priority}) => {
			var sort = s.slice(),
				p = priority || 0

			sort[p] = {
				col,
				order:sort[p] && sort[p].order ?
					(sort[p].order==='asc' ? 'desc' : 'asc')
					: 'desc'
			}
			if(sort.length > 1){
				//avoid duplicates ..
				sort.map((so, index) => {
					so.col === col && index != priority &&
						sort.splice(index, 1)
				})
			}
			return sort
		}
	},
	sk
)
