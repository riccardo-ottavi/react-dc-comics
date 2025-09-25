import comics from "./comics"

export default function ProductList(){
    return(
        <>
            <div className="jumbo-container"></div>
            <section id="products">
            

            <div className="container card-container">
                <h2>Lista prodotti</h2>
                {/* Card di prodotto  */}
                {comics.map(comics => (
                    <div key={comics.title} className="prod-card">
                        <img src={comics.thumb} alt={comics.title} />
                        <h3>{comics.title}</h3>
                    </div>
                ))}


            </div>
        </section>
        </>
            
    )
}