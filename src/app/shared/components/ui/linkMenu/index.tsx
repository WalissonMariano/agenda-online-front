import { Link } from "react-router"

type LinkButtonProps = {
    to: string;
    text: string;
}

export const LinkMenu = ({to, text}: LinkButtonProps) => { 
    return (
        <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md" to={to}>
            {text}
        </Link>
    );
};