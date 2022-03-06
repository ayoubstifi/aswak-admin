import React, { useState } from "react";
import './SideBarMenu.css'
import { CSSTransition } from "react-transition-group";
import cx from "classnames";
import { Link } from "react-router-dom";

const menuItems = [
    { title: "Ajouter un Produit", to: "/" },
    { title: "Modifier un Produit", to: "/cart" },
    { title: "Supprimer un Produit", to: "/orders" },     
];

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
            <button className={"toggle_button"} onClick={() => setIsOpen(!isOpen)}>
                outils
            </button>
            <ul >
                {menuItems.map(item => (
                
                    <li key={item.title} className="sidebar_buttons" >
                        <Link to={item.to} className="link" >
                            <div className={"sidebar__listItem"}>
                                <CSSTransition
                                    in={isOpen}
                                    timeout={200}
                                    classNames={"fade"}
                                    unmountOnExit
                                >
                                    <span>{item.title}</span>
                                </CSSTransition>
                            </div>
                        </Link>
                    </li>
                
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;