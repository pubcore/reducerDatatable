export default (cols=[], from, to) => {
	var copy = cols.slice()
	copy.splice(+to, 0, copy.splice(+from, 1)[0])
	return copy
}
