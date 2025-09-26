export default function MyCard(props){
    const { thumb, series } = props.productProp

    return (
        <div className="prod-card">
            <img src={thumb} alt={series} />
            <h3>{series}</h3>
        </div>
    )
}