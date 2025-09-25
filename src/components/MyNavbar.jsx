const DcLinks = [
    { label :"Characters", href:"#" },
    { label :"Comics", href:"#" },
    { label :"Movies", href:"#" },
    { label :"Tv", href:"#" },
    { label :"Games", href:"#" },
    { label :"Collectibles", href:"#" },
    { label :"Videos", href:"#" },
    { label :"Fans", href:"#" },
    { label :"News", href:"#" },
    { label :"Shop", href:"#" }
]

export default function MyNavbar(){
    return(
        <nav>
            <ul>
                <li><a href="">Characters</a></li>
                <li><a href="">Comics</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">Tv</a></li>
                <li><a href="">Games</a></li>
                <li><a href="">Collectibles</a></li>
                <li><a href="">Videos</a></li>
                <li><a href="">Fans</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Shop</a></li>
            </ul>
        </nav>
    )
}