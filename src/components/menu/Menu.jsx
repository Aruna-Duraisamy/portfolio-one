import './Menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
    const menuItems = [
        { name: "Home", href: "intro" },
        { name: "About Me", href: "about" },
        { name: "Experience", href: "work" },
        { name: "Portfolio", href: "portfolio" },
        { name: "Contact", href: "contact" }
    ];
    return (
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul>
                {
                    menuItems.map((item, index) => {
                        return (<li key={index} onClick={() => setMenuOpen(false)}>
                            <a href={`#${item.href}`}>{item.name}</a>
                        </li>);
                    })
                }
            </ul>
        </div>
    );
}

export default Menu