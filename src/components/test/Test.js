import { useState } from "react";

const images = [
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif",
    "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
    "https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif",
];

export default function Test  ()  {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Pagination */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

;




























// Si tu veux afficher des **images d'un utilisateur provenant d'une API** dans le **carousel**, il faut :  
// ✅ **Faire une requête API** pour récupérer les images.  
// ✅ **Gérer le chargement et les erreurs**.  
// ✅ **Afficher dynamiquement les images** dans le **carousel**.  

// ---

// ## 📌 Étape 1 : Récupérer les images depuis une API

// Nous allons utiliser **fetch** pour récupérer les données d'une API et les afficher dans le carousel.

// ```tsx
// import { useState, useEffect } from "react";

// const Carousel = () => {
//   const [images, setImages] = useState<string[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Remplace cette URL par ton API réelle
//     fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
//       .then((response) => response.json())
//       .then((data) => {
//         // Récupère les URLs des images
//         const imageUrls = data.map((item: { url: string }) => item.url);
//         setImages(imageUrls);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Erreur lors du chargement des images");
//         setLoading(false);
//       });
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
//       {loading && <p className="text-center">Chargement...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && images.length > 0 && (
//         <>
//           {/* Slides */}
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {images.map((img, index) => (
//               <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
//             ))}
//           </div>

//           {/* Boutons de navigation */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//           >
//             ❮
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//           >
//             ❯
//           </button>

//           {/* Pagination */}
//           <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex ? "bg-white" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Carousel;
// ```

// ---

// ## 📌 Étape 2 : Intégration dans une page

// ```tsx
// import Carousel from "@/components/Carousel";

// const Home = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Carousel />
//     </div>
//   );
// };

// export default Home;
// ```

// ---

// ## 🎯 Explication :
// 1. **useEffect** → Charge les images depuis l'API lors du montage du composant.
// 2. **Gestion du chargement et des erreurs** → Affiche un message si l’API ne répond pas.
// 3. **Dynamisation du carousel** → Les images affichées proviennent de l’API.
// 4. **Les boutons et la pagination restent fonctionnels**.

// ---

// ## ✅ Avantages :
// ✔ **Récupération automatique des images d’un utilisateur**.  
// ✔ **Affichage dynamique sans recharger la page**.  
// ✔ **Simple et personnalisable**.  

// Tu peux maintenant intégrer ton API réelle pour charger les images d'un utilisateur ! 🚀










// import { useState, useEffect } from "react";
// import axios from "axios";

// const Carousel = () => {
//   const [images, setImages] = useState<string[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         // Remplace cette URL par celle de ton API
//         const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5");
        
//         // Extraire les URLs des images
//         const imageUrls = response.data.map((item: { url: string }) => item.url);
//         setImages(imageUrls);
//         setLoading(false);
//       } catch (err) {
//         setError("Erreur lors du chargement des images");
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
//       {loading && <p className="text-center">Chargement...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && images.length > 0 && (
//         <>
//           {/* Slides */}
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {images.map((img, index) => (
//               <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
//             ))}
//           </div>

//           {/* Boutons de navigation */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//           >
//             ❮
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//           >
//             ❯
//           </button>

//           {/* Pagination */}
//           <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex ? "bg-white" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Carousel;



















// components/Carousel.tsx
// "use client"; // Si vous êtes sous Next.js

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

//  export default function Test () {
  
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={20}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
    
//       loop
//       className="w-full max-w-3xl"
//     >
//       <SwiperSlide>
//         <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
//       </SwiperSlide>
//     </Swiper>
//   );
// };


