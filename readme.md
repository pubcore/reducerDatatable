# Reduce redux actions to manipulate state of data tables

## Prerequisites
[Redux](http://redux.js.org/docs/introduction/) is used


## Installation

	npm install --save pubcore-reducer-datatable

Place it within your root-reducer or in any other slice reducer.

The slice-key (__sk__) is used to distinguish between other reducers,
especially if you have more than one pubcore-reducer-datatable used on the page. It makes corresponding action types unique in context of your app.

	import {sort} from pubcore-reducer-datatable
	const initState = [{col:'firstname', order:'asc'}]

	//[..]
	combineReducer({
		//[..]
		sort:sort({sk:'sort', initState})
		//[..]
	})

or for "columns":

	import {columns} from pubcore-reducer-datatable
	//[..]
	const initState = {
		all:['name', 'birthday'],
		sequence:['name', 'birthday'],
		visible:['name']
	}

	combineReducer({
		//[..]
		columns:columns({sk:'tables.users.columns', initState})
	})


## 1) sort
(multi) __sort__ of table columns

### state slice example
sort by firstname desc, birthday asc

	//array of object
	[
		{col:'firstname', order:'desc'},
		{col:'birthday', order:'asc'}
	]
### action examples (sk=='sort')

	//change secondary sort order (priority=1) of column "birthday",
	{type:'sort_TOGGLE_SORT', col:'birthday', priority:1}

	//toggle sort order
	//if no priorty is given, default priority is 0 (no multisort)
	{type:'sort_TOGGLE_SORT', col:'firstname'}

## 2) columns
show/hide, change sequence of table columns

### state slice example

	{
		all:['firstname', 'birthday'],
		sequence:['birthday', 'firstname'],
		visible:['firstname']
	}

### redux action examples (sk=='columns')

	{type:'columns_RESET', all, sequence, visible}

	{type:'columns_CHANGE_COL_SEQUENCE', from:0, to:1}

	{type:'columns_SHOW_COL', col:'birthday', isVisible:false}
