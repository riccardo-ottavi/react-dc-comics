const dcLinks = [
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

export default function MyNavbar() {
    return (
        <ul>
            {dcLinks.map((link) => (
                <li><a href="https://www.youtube.com/watch?v=3BFTio5296w&list=RD3BFTio5296w&start_radio=1">{link.label}</a></li>
            ))}
        </ul>
    );
}

