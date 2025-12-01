import ReusableButton from "../ui/ReusableButton";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

interface InputFieldProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onIncrement: () => void;
    onDecrement: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
    value,
    onChange,
    onIncrement,
    onDecrement
}) => {
    return (
        <div className="flex items-center gap-2">
        {/* Minus Button */}
        <ReusableButton
            type="button"
            styling="primary"
            onClick={onDecrement}
        >
            <FiMinus />
        </ReusableButton>

        {/* Quantity Input */}
        <input
            type="number"
            value={value}
            onChange={onChange}
            min="1"
            className="w-16 text-center border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Plus Button */}
        <ReusableButton
            type="button"
            styling="primary"
            onClick={onIncrement}
        >
            <IoMdAdd />
        </ReusableButton>
        </div>
    );
};

export default InputField;