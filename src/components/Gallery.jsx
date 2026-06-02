import SectionTitle from './SectionTitle'

const photos = [
  [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    'Gym interior',
  ],
  [
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    'Modern equipment',
  ],
  [
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    'Workout session',
  ],
  [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    'Client transformation',
  ],
  [
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    'Strength training floor',
  ],
  [
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80',
    'Personal training',
  ],
  [
    'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=800&q=80',
    'Cardio workout',
  ],
  [
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80',
    'Dumbbell area',
  ],
]

function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionTitle
          eyebrow="Gallery"
          title="A glimpse inside PowerFit Gym"
          text="Strength floor, cardio area, coaching moments, and workout energy in one place."
        />
        <div className="gallery">
          {photos.map(([src, alt]) => (
            <figure className="gallery__item reveal" key={alt}>
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
