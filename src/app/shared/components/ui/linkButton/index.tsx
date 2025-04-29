import { Link } from "react-router"

type LinkButtonProps = {
    to: string;
    text: string;
}

export const LinkButton = ({to, text}: LinkButtonProps) => { 
    return (
        <Link to={to}>
            {text}
        </Link>
    );
};