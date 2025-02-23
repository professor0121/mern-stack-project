"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function UserHero() {
  const slides = [
    {
      image: "goa1.jpg",
      title: "Empowering Your Journey",
      text: "We provide top-notch services to elevate your experience.",
    },
    {
      image: "goa.jpg",
      title: "Seamless & Modern Solutions",
      text: "Unlock the best services with just a few clicks.",
    },
    {
      image: "goa2.jpg",
      title: "Innovation at Your Fingertips",
      text: "Bringing you the latest trends and technology.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6"
              style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-700">{slide.title}</h1>
              <p className="text-lg md:text-2xl max-w-2xl">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
