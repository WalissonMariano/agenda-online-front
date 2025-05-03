import { Menu } from "../menu"

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-64 bg-white p-4">
                <Menu />
            </div>
            <div className="flex-1 p-8 bg-gradient-to-br from-yellow-100 to-orange-50">
                {children}
            </div>
        </div>
    )
}