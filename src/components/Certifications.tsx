import Image from 'next/image'

const certifications = [
  {
    name: 'ISO 9001',
    logo: '/images/iso.png',
    alt: 'ISO 9001 Certification'
  },
  {
    name: 'FDA Approved',
    logo: '/images/fda.png',
    alt: 'FDA Approval'
  },
  {
    name: 'CE Mark',
    logo: '/images/ce.png',
    alt: 'CE Mark Certification'
  }
]

export function Certifications() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Certifications & Compliance
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our products meet global standards for safety and quality
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {certifications.map((cert) => (
            <div key={cert.name} className="text-center">
              <Image
                src={cert.logo}
                alt={cert.alt}
                width={180}
                height={180}
                className="mx-auto mb-4"
              />
              <p className="font-semibold">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 