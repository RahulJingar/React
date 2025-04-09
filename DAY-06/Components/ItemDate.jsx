import './ItemDate.css'

function ItemDate(props){
    const days = props.day;
    const months = props.month;
    const years = props.year;
   return (<>
      <span>{days}</span>
    <span>{months}</span>
    <span>{years}</span>
   </>)
}

export default ItemDate;