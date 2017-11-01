export default (isVisible, col, visible=[]) => {
	var index = visible.indexOf(col),
		copy = visible.slice()
	if(isVisible && index < 0){
		copy.push(col)
	}else if (!isVisible && index > -1){
		copy.splice(index, 1)
	}
	return copy
}
