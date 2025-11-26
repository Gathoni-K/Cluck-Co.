import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import standingPerson from '../../assets/person1.jpg';

const Testimonials = () => {
    const testimonials = [
        {
        name: "Daniel K.",
        role: "Poultry Farmer",
        text: "I ordered 50 broiler chicks, and every single one arrived healthy and active. It's been three weeks, and their growth rate is incredible! Easily the best quality chicks I've bought in years.",
        image: standingPerson,
        rating: 5
        },
        {
        name: "Mercy N.",
        role: "Small-Scale Poultry Owner",
        text: "Excellent service and reliable delivery. My chicks were healthy, uniform, and easy to raise. The farm even checked in to ensure they were settling well — that really impressed me.",
        image: standingPerson,
        rating: 5  
        },
        {
        name: "Susan W.",
        role: "Restaurant Owner",
        text: "Their chicken meat is consistently fresh and flavorful — perfect for our kitchen standards. You can taste the quality in every bite. Truly dependable suppliers!",
        image: standingPerson,
        rating: 5
        }
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from farmers who trust Cluck & Co.
            </p>
        </div>

        {/* Carousel */}
        <Carousel 
            opts={{
            align: "start",
            loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                    ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 grow leading-relaxed">
                    "{testimonial.text}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-green-500"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="left-0 -translate-x-12 hidden md:flex" />
            <CarouselNext className="right-0 translate-x-12 hidden md:flex" />
        </Carousel>
        </div>
    );
};

export default Testimonials;