import heroBg from '../../assets/chicks3.jpg';

const HeroSection = () => {
    return (
        <div 
            className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat mt-2
            lg:px-8 md:px-6 px-4 rounded-lg"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h3 className="bg-white/90 text-orange-600 text-xl md:text-3xl font-bold px-8 py-4 rounded-lg shadow-2xl transform  transition-transform duration-300">
                    Raising Quality You Can Taste.
                </h3>
                
            </div>
        </div>
    )
}

export default HeroSection