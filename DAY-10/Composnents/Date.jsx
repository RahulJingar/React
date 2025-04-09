function Date(props){
    const days = props.day;
    const months = props.month;
    const years = props.year;

    return (<>
        <p>{days}</p>
        <p>{months}</p>
        <p>{years}</p>
    </>)
}

export default Date;