import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl w-[100%] overflow-x-hidden">
      <img
        src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1703147231/projects/Your_paragraph_text_vu4lpc.png"
        alt="image 1"
        className="h-[100vh] w-[100vw] object-cover"
      />
      <img
        src="https://res.cloudinary.com/diyxwdtjd/image/upload/v1701763801/projects/nature-illustration-plant-bubble-outdoors-water-grass-generated-by-ai_hndngq.jpg"
        alt="image 2"
        className="h-[100vh] w-[100vw] object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 3"
        className="h-[100vh] w-[100vw] object-cover"
      />
    </Carousel>
  );
}