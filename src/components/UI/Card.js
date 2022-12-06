import './Card.css'

function Card (props) {
  // ALLOW OTHER CLASS NAMES TO BE USED ON CUSTOM COMPONENT
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}
export default Card
