
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  const schedule = [
    { day: 'Lunes a Jueves', hours: '8:00-15:00 | 19:00-00:00' },
    { day: 'Miércoles', hours: 'SOLO CENAS 19:00-00:00', special: true },
    { day: 'Viernes', hours: '8:00-15:00 | 19:00-01:00' },
    { day: 'Sábado', hours: '10:00-16:00 | 19:00-01:00' },
    { day: 'Domingo', hours: '10:00-16:00 | 19:00-00:00' }
  ];

  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="font-bold tracking-tight" 
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', // Adjusted
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            <span style={{ color: '#FFB300' }}>Horarios y </span>
            <span style={{ color: 'white' }}>Ubicación</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div 
                className="p-3 rounded-xl text-black"
                style={{ background: '#FFB300' }}
              >
                <Clock size={28} />
              </div>
              <h3 
                style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 600, // Adjusted
                  color: '#FFB300'
                }}
              >
                Horarios
              </h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all ${
                    item.special
                      ? ''
                      : 'bg-gray-900 border-gray-800'
                  }`}
                  style={{
                    ...(item.special && {
                      background: 'linear-gradient(135deg, rgba(255, 179, 0, 0.1) 0%, rgba(255, 108, 52, 0.1) 100%)',
                      borderColor: '#FFB300',
                      boxShadow: '0 8px 16px rgba(255, 179, 0, 0.2)'
                    })
                  }}
                  onMouseEnter={(e) => {
                    if (!item.special) {
                      e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.special) {
                      e.currentTarget.style.borderColor = '#1f2937';
                    }
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span 
                      className={`${item.special ? '' : 'text-gray-300'}`} // Removed font-semibold
                      style={{ 
                        fontSize: '0.9375rem', // Adjusted
                        fontWeight: 500, // Added
                        ...(item.special && { color: '#FFB300' })
                      }}
                    >
                      {item.day}
                    </span>
                    <span 
                      className={`${item.special ? '' : 'text-gray-400'}`} // Removed font-bold
                      style={{ 
                        fontSize: item.special ? '1rem' : '0.9375rem', // Adjusted
                        fontWeight: item.special ? 600 : 500, // Adjusted
                        ...(item.special && { color: '#FFB300' })
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin style={{ color: '#FFB300' }} size={24} />
                <span className="text-gray-300" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>C. de Joaquín Blume, 25, 28935 Móstoles, Madrid</span> {/* Adjusted */}
              </div>
              <div className="flex items-center gap-3">
                <Phone style={{ color: '#FFB300' }} size={24} />
                <a 
                  href="tel:+34613899413" 
                  className="text-gray-300 transition-colors" 
                  style={{ fontSize: '0.9375rem', fontWeight: 400 }} // Adjusted
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  +34 613 89 94 13
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.3746686847595!2d-3.8667!3d40.3213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418f4b0a6c7f8d%3A0x9c0f0b5e5e5e5e5e!2sC.%20de%20Joaqu%C3%ADn%20Blume%2C%2025%2C%2028935%20M%C3%B3stoles%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
