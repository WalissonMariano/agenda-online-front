import { AiFillHome } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router";
import { AiOutlinePoweroff } from "react-icons/ai";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: <AiFillHome />,
                label: "Home",
                href: "/home",
                visible: ["admin"],
            },
            {
                icon: <AiFillCalendar />,
                label: "Agenda",
                href: "/agenda",
                visible: ["admin"],
            },
        ]
    },
    {
        title: "CADASTRO BASICO",
        items: [
            {
                icon: <AiFillShop />,
                label: "Estabelecimento",
                href: "/estabelecimento",
                visible: ["admin"],
            },
            {
                icon: <AiOutlineTeam />,
                label: "Profissionais",
                href: "/profissionais",
                visible: ["admin"],
            },
            {
                icon: <AiFillProfile />,
                label: "Categorias",
                href: "/categoria",
                visible: ["admin"],
            },
            {
                icon: <AiFillProduct />,
                label: "Produtos e Serviços",
                href: "/produtos",
                visible: ["admin"],
            },
        ]
    }
];

export const Menu = () => {
    return(
        <div className="flex flex-col justify-between h-full mt-4 text-sm">
            <div className="w-20 text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt="logo" />
            </div>
            <div>
                {menuItems.map((i)=>(
                    <div className="flex flex-col gap-2" key={i.title}>
                        
                        <span className="hidden lg:block bg-amber-400 border rounded-sm border-none p-2 text-gray-600 my-4 font-bold">
                            {i.title}
                        </span>
                        {i.items.map(item=>(
                            <>
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md">
                                <label>{item.icon}</label>
                                <Link  to={item.href}>
                                    {item.label}
                                </Link>
                            </div>
                                
                            </>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md">
                    <label><AiOutlinePoweroff /></label>
                    <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md" to={"/"}>
                        Sair
                    </Link>
                </div>
            </div>
        </div>
    )
}