import "./sidebar.css"

export default function SideBar(){
    return (
        <div className="sideBar">
            <div className="sideBarItems">
                <div className="sideBarItem">
                    <span className="sideBarTitle">About THEM</span>
                    <img src="/images/logo.jpg" alt="logo"/>
                    <p className="sideBarAbout">
                        Idk what to put here lol
                    </p>
                </div>
                <div className="sideBarItem>">
                    <span className="sideBarTitle">Categories</span>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">cat1</li>
                        <li className="sideBarListItem">cat1</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}