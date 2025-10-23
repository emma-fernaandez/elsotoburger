import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Reviews() {
  const testimonials = [
    {
      text: 'Las mejores hamburguesas de Móstoles sin duda. La carne jugosa, el pan perfecto y el ambiente genial. Volveremos seguro!',
      author: 'María García',
      source: 'Cliente habitual'
    },
    {
      text: 'Desayunos brutales y a buen precio. El café está buenísimo y el personal es súper atento. 100% recomendable.',
      author: 'Carlos Ruiz',
      source: 'Google Reviews'
    },
    {
      text: 'Llevaba tiempo buscando un sitio así en Móstoles. Calidad, precio y buen rollo. La BBQ es mi favorita!',
      author: 'Laura Martínez',
      source: 'TripAdvisor'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FFB300 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* 5 Stars Above Title - Smaller Size */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5" style={{ fill: '#FFB300', color: '#FFB300' }} />
            ))}
          </div>

          {/* Title */}
          <h2 
            className="mb-4 font-bold tracking-tight" 
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            <span style={{ color: 'white' }}>Lo que dicen </span>
            <span style={{ color: '#FFB300' }}>nuestros clientes</span>
          </h2>

          {/* Subtitle with Google Logo */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <p className="text-gray-300" style={{ fontSize: '1.0625rem', fontWeight: 400 }}>
              Más de <span style={{ color: '#FFB300', fontWeight: 600 }}>150 clientes</span> ya nos han puntuado con 4.5 estrellas en
            </p>
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-5 inline-block"
              style={{ verticalAlign: 'middle' }}
            />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300"
              style={{ background: 'rgba(0, 0, 0, 0.4)', borderColor: '#1f2937' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 179, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1f2937';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" style={{ fill: '#FFB300', color: '#FFB300' }} />
                ))}
              </div>

              {/* Review Text - Italic */}
              <p className="text-white mb-6 leading-relaxed italic" style={{ fontSize: '1rem', lineHeight: '1.7', fontWeight: 400 }}>
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div>
                <p className="text-white font-semibold mb-1" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm" style={{ fontWeight: 400 }}>
                  {testimonial.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}