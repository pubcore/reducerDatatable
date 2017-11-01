import {expect} from 'chai'
import columnsReducer, {initialState} from '../src/reducer/columns'

var all = ['a', 'b', 'c'],
	sequence = ['b', 'a', 'c'],
	visible = ['a'],
	state = {all, sequence, visible},
	copyOfState = JSON.parse(JSON.stringify(state))

describe('columns reducer', () => {
	it('supports prefix action type by slice key', () => {
		var sliceReducer =  columnsReducer({sk:'xyz'}),
			reduced = sliceReducer(initialState, {type:'RESET', all, sequence, visible})
		expect(reduced.all).to.not.deep.equals(all)
		reduced = sliceReducer(initialState, {type:'xyz_RESET', all, sequence, visible})
		expect(reduced.all).to.deep.equals(all)
	})
	it('supports action to reset all settings', () => {
		var copyOfInitialstate = JSON.parse(JSON.stringify(initialState)),
			reduced = columnsReducer({})(initialState, {type:'RESET', all, sequence, visible})
		expect(reduced.all).to.deep.equals(all)
		expect(reduced.sequence).to.deep.equals(sequence)
		expect(reduced.visible).to.deep.equals(visible)
		expect(copyOfInitialstate).to.deep.equals(initialState)
	})
	it('supports action to change order of a column', () => {
		var {sequence} = columnsReducer({})(state, {type:'CHANGE_COL_SEQUENCE', from:0, to:1})
		expect(sequence).to.deep.equal(all)
		//check if original data not changed!
		expect(copyOfState).to.deep.equal(state)
	})
	it('supports action to change visibilty of a column', () => {
		var {visible} = columnsReducer({})(state, {type:'SHOW_COL', col:'a', isVisible:false})
		expect(visible === [])
		//check if original data not changed!
		expect(copyOfState).to.deep.equal(state)
	})
})
