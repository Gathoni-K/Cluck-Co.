// component that is our Add to Cart button

import ReusableButton from "./ReusableButton";

interface AddToCartButtonProps {
    onClick: () => void;
}

const AddToCartButton:React.FC<AddToCartButtonProps> = ({onClick}) => {
    return (
        <div>
            <ReusableButton
            type="button"
            styling="primary"
            onClick={onClick}
            >
                Add to Cart
            </ReusableButton>
        </div>
    )
}

export default AddToCartButton