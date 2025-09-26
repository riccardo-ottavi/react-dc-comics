import comics from "./comics"
import MyCard from "./MyCard"

export default function ProductList(){
    return(
        <>
            <div className="jumbo-container"></div>
            <section id="products">
            

            <div className="container card-container">
                
                {/* Card di prodotto  */}
                {comics.map(comics => (
                    <MyCard
                        key={comics.id}
                        productProp={comics}
                />         
                ))}


            </div>
        </section>
        </>
            
    )
}