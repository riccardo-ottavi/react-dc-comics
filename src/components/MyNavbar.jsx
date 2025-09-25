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
                <li>{link.label}</li>
            ))}
        </ul>
    );
}

