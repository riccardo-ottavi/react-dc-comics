import MyNavbar from "./MyNavbar"

export default function MyHeader() {
return (<header> 
            <div className="header-box">
                <div>
                    <img src="./img/dc-logo.png" alt="" />
                </div>
                <MyNavbar></MyNavbar>
            </div>
        </header>);
}