interface InputFieldProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField:React.FC<InputFieldProps> = ({value, onChange}) => {
    return (
        <div className="container mx-auto px-4md:px-6 lg:px-8 flex justify-end">
            <input placeholder="Enter product here:" type="number"
    value={value} onChange={onChange}            className="bg-white px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-orange-600
            shadow-md mb-2"
            />
        </div>
    )
    }

export default InputField