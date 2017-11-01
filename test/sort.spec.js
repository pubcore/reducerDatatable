import {expect} from 'chai'
import sortReducer from '../src/reducer/sort'
var initialState = [],
	copyOfInitalState = JSON.parse(JSON.stringify(initialState))

describe('sort reducer', () => {
	it('supports action to toggle sort order', () => {
		var reduced = sortReducer({})(initialState, {type:'TOGGLE_SORT', col:'a'})
		expect(reduced).to.deep.equal([
			{col:'a', order:'desc'}
		])
		reduced = sortReducer({})(reduced, {type:'TOGGLE_SORT', col:'a'})
		expect(reduced).to.deep.equal([
			{col:'a', order:'asc'}
		])
		expect(initialState).to.deep.equal(copyOfInitalState)
	})
	it('supports action to toggle sort order by priority (multisort)', () => {
		var reduced = sortReducer({})(initialState, {type:'TOGGLE_SORT', col:'b', priority:1})
		expect(reduced).to.deep.equal([
			undefined,
			{col:'b', order:'desc'}
		])
		reduced = sortReducer({})(reduced, {type:'TOGGLE_SORT', col:'b'})
		expect(reduced).to.deep.equal([
			{col:'b', order:'desc'}
		])
		reduced = sortReducer({})(reduced, {type:'TOGGLE_SORT', col:'b'})
		expect(reduced).to.deep.equal([
			{col:'b', order:'asc'}
		])
		expect(initialState).to.deep.equal(copyOfInitalState)
	})
})
