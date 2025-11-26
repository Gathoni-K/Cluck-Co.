import { Link } from 'react-router-dom';

// defining my types/options
type ButtonFunctionality = "delete" | "confirm" | "link";
type ButtonType = "submit" | "button";
type ButtonVariant = "primary" | "danger";

// defining our interface
interface ButtonProps {
    children: React.ReactNode,
    functionality?: ButtonFunctionality,
    type?: ButtonType,
    styling?: ButtonVariant,
    onClick?: () => void,
    to?: string,
}

// applying the chosen styles.
const ButtonStyles = {
    primary: "bg-emerald-900 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg",
    danger: "bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg",
    link: "border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md w-60"
}

const Button = ({ 
    children, 
    functionality, 
    type = "button",
    styling = "primary", 
    onClick, 
    to }:ButtonProps) => {

    return (
        functionality === "link" ? (
            <Link to={to || "/"} className={ButtonStyles.link}>
                { children }
            </Link>
        ) : 
    (
        <button
        type={type}
        onClick={onClick}
        className={styling === "danger" ? ButtonStyles.danger : ButtonStyles.primary}
        >
            {children}
        </button>
    )
    )
}

export default Button