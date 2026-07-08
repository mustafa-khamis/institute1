import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop', alt: 'Students studying together' },
    { id: 2, url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop', alt: 'Modern classroom' },
    { id: 3, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop', alt: 'Group discussion' },
    { id: 4, url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop', alt: 'Teacher helping student' },
    { id: 5, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop', alt: 'Learning resources' },
    { id: 6, url: 'https://images.unsplash.com/photo-1515161318750-f812a4acdc7a?q=80&w=1000&auto=format&fit=crop', alt: 'Graduation success' },
  ];

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <SectionHeader 
          title="Campus Life" 
          subtitle="Our Gallery" 
          alignment="center"
        />

        <div className="gallery-masonry">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className={`gallery-item animate-fade-in`} 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.url} alt={img.alt} loading="lazy" className="gallery-img" />
              <div className="gallery-overlay">
                <ZoomIn size={32} className="zoom-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox is-open" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage.url} alt={selectedImage.alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
