import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';

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
  { src: photo1, width: 1600, height: 900, location: 'Bird Rock, 17 Mile Drive, CA' },
  { src: photo2, width: 800, height: 600, location: 'Northeastern University, MA' },
  { src: photo3, width: 1600, height: 900, location: 'Granite Beach, CA' },
  { src: photo4, width: 800, height: 600, location: 'YMCA, Boston, MA' },
  { src: photo5, width: 800, height: 600, location: 'Boston, MA' },
  { src: photo6, width: 1200, height: 1600, location: 'Boston Common, MA' },
  { src: photo7, width: 1600, height: 900, location: 'Spanish Bay Vista Point, CA' },
  { src: photo8, width: 1600, height: 900, location: 'China Rock Vista Point, CA' },
  { src: photo9, width: 1600, height: 900, location: 'San Jose, CA' },
  { src: photo10, width: 800, height: 600, location: 'Santa Cruz, CA' },
  { src: photo11, width: 1600, height: 900, location: 'San Jose, CA' },
  { src: photo12, width: 800, height: 600, location: 'Los Gatos, CA' },
];

const spanClass = (width: number, height: number) => {
  const ratio = width / height;
  if (ratio > 1.5) return 'plate--wide';
  if (ratio < 0.7) return 'plate--tall';
  return '';
};

const Hobbies: React.FC = () => {
  const [index, setIndex] = useState(-1);

  const slides = photos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.location,
  }));

  return (
    <section className="section container" id="hobbies">
      <div className="head" data-reveal>
        <h2 className="head__title">Off the clock</h2>
        <p className="head__lead">Light along the California and Boston coasts.</p>
      </div>

      <div className="plates__grid" data-reveal>
        {photos.map((photo, i) => (
          <button
            type="button"
            key={i}
            className={`plate ${spanClass(photo.width, photo.height)}`}
            onClick={() => setIndex(i)}
            aria-label={`View photograph: ${photo.location}`}
          >
            <img src={photo.src} alt={photo.location} loading="lazy" />
            <span className="plate__cap">{photo.location}</span>
          </button>
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions]}
      />
    </section>
  );
};

export default Hobbies;
