import { LinkMenu } from "../linkMenu"

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "",
                label: "Home",
                href: "/home",
                visible: ["admin"],
            },
            {
                icon: "",
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
                icon: "",
                label: "Estabelecimento",
                href: "/estabelecimento",
                visible: ["admin"],
            },
            {
                icon: "",
                label: "Categorias",
                href: "/product",
                visible: ["admin"],
            },
            {
                icon: "",
                label: "Produtos e Serviços",
                href: "/product",
                visible: ["admin"],
            },
        ]
    }
];

export const Menu = () => {
    return(
        <div className="flex flex-col justify-between h-full mt-4 text-sm">
            <div>
                {menuItems.map((i)=>(
                    <div className="flex flex-col gap-2" key={i.title}>
                        <span className="hidden lg:block bg-amber-400 border rounded-sm p-2 text-gray-400 font-light my-4">{i.title}</span>
                        {i.items.map(item=>(
                            <LinkMenu to={item.href} text={item.label} />
                        ))}
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <LinkMenu to="/" text="Sair" />
            </div>
        </div>
    )
}