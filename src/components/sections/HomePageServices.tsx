import Button from "../ui/ReusableButton";

const HomePageServices = () => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 shadow-lg bg-white rounded-lg p-4 flex flex-col gap-3">
            
            {/* component header */}
            <div className="text-emerald-950 text-center font-bold tracking-wide underline text-xl">
                Our Services
            </div>

            {/* content of the component */}
            <p className="leading-7">
                We provide quality day-old chicks and fresh, farm-raised chicken meat. Whether you’re a farmer looking to start your flock or a customer seeking fresh poultry, we deliver healthy, reliable, and well-raised products every time.
            </p>

            <Button
            functionality="link"
            styling="primary"
            type="button"
            to="/products">
                View Products
            </Button>

        </div>
    )
}

export default HomePageServices