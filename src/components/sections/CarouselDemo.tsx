
import {  CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Chickens from "../../assets/chickens1.jpg";
import Chicks1 from "../../assets/chicks1.jpg";
import Chicks2 from "../../assets/chicks2.jpg";
import Chicks3 from "../../assets/chicks3.jpg";
import Meat from "../../assets/meat1.jpg";


interface images{
  imageUrl: string,
  alt: string,
}

const carouselImage:images[] = [
    {imageUrl: Chickens, alt: "chickens"},
    {imageUrl: Chicks1, alt: "chicks1"},
    {imageUrl: Chicks2, alt: "chicks2"},
    {imageUrl: Chicks3, alt: "chicks3"},
    {imageUrl: Meat, alt: "meat"},
]



const CarouselDemo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4"> 
  <Carousel className="w-full mt-4 md:mt-6"
  opts={{
    loop: true,
  }}
  >
    <CarouselContent>
      {carouselImage.map((image, index) => (
        <CarouselItem key={index}>
          <div className="mx-auto">
            
              <CardContent className="p-0"> 
                <img 
                  src={image.imageUrl} 
                  alt={image.alt} 
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover
                  rounded-lg"
                />
              </CardContent>
            
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden md:flex md:absolute  md:left-4"/>
    <CarouselNext className="md:absolute md:right-4 hidden md:flex" />
  </Carousel>
</div>
  )
}

export default CarouselDemo
