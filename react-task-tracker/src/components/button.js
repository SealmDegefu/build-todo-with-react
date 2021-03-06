import PropTypes from 'prop-types'
const onClick =() =>{
	console.log('click')
}
const button = ({ color, text, onClick}) => {
	return <button onClick={onClick} style={{ backgroundColor: color}}className='btn'>{text}</button>
}

button.defaultProps = {
	color: 'stealblue'
}
button.propTypes ={
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
}
export default button
