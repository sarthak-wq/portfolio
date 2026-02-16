import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import photo1 from '../../assets/photo17.jpeg';
import photo2 from '../../assets/photo11.jpeg';
import photo3 from '../../assets/photo3.jpeg';
import photo4 from '../../assets/photo12.jpeg';
import photo5 from '../../assets/photo14.jpeg';
import photo6 from '../../assets/photo19.jpeg';
import photo7 from '../../assets/photo7.jpeg';
import photo8 from '../../assets/photo8.jpeg';
import photo9 from '../../assets/photo16.jpeg';
import photo10 from '../../assets/photo13.jpeg';
import photo11 from '../../assets/photo20.jpeg';
import photo12 from '../../assets/photo21.jpeg';



const photos = [
    { src: `${photo1}`, width: 1600, height: 900, location: "Bird Rock, 17 Mile Dr, CA" },
    { src: `${photo2}`, width: 800, height: 600, location: "Northeastern University, MA" },
    { src: `${photo3}`, width: 1600, height: 900, location: "Granite Beach, CA" },
    { src: `${photo4}`, width: 800, height: 600, location: "YMCA, Boston, MA" },
    { src: `${photo5}`, width: 800, height: 600, location: "Boston, MA" },
    { src: `${photo6}`, width: 1200, height: 1600, location: "Boston Common, MA" },
    { src: `${photo7}`, width: 1600, height: 900, location: "Spanish Bay Vista Point, CA" },
    { src: `${photo8}`, width: 1600, height: 900, location: "China Rock Vista Point, CA" },
    { src: `${photo9}`, width: 1600, height: 900, location: "San Jose, CA" },
    { src: `${photo10}`, width: 800, height: 600, location: "Santa Cruz, CA" },
    { src: `${photo11}`, width: 1600, height: 900, location: "San Jose, CA" },
    { src: `${photo12}`, width: 800, height: 600, location: "Los Gatos, CA" }
];

interface HobbiesProps {
  isDarkMode: boolean;
}

const Hobbies: React.FC<HobbiesProps> = ({ isDarkMode }) => {
  const [index, setIndex] = useState(-1);

  // Helper function to determine grid spans based on image aspect ratio
  const getSpanClasses = (width: number, height: number) => {
    const ratio = width / height;
    
    // Landscape images (significantly wider than tall) span 2 columns
    if (ratio > 1.5) return "col-span-2 row-span-1"; 
    
    // Portrait images (significantly taller than wide) span 2 rows
    if (ratio < 0.7) return "row-span-2 col-span-1"; 
    
    // Square or nearly square images take 1x1 slot
    return "col-span-1 row-span-1"; 
  };

  // Prepare slides for Lightbox with titles/descriptions if needed
  const slides = photos.map(photo => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.location, 
  }));

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-backgroundDark' : 'bg-backgroundLight'}`} id="hobbies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-primary">
          Photography
        </h2>
        </div>
        <div className="w-full px-2 md:px-4">
        {/* 
            grid-flow-dense: Packs items to fill holes 
            auto-rows: Sets the height of implicit rows
        */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 grid-flow-dense auto-rows-[200px] md:auto-rows-[250px]">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-200 dark:bg-gray-800 ${getSpanClasses(photo.width, photo.height)}`}
              onClick={() => setIndex(i)}
            >
              <img 
                src={photo.src} 
                alt={`Hobby ${i + 1}`} 
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-4">
                  <span className="text-white font-medium text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
                    <span className="flex items-center gap-1">
                        📍 {photo.location}
                    </span>
                  </span>
              </div>
            </div>
          ))}
        </div>
        <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Captions]}
        />
      </div>
    </div>
  );
};

export default Hobbies;
