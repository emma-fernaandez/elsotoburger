
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
  { icon: '🍔', title: 'Hamburguesas Brutales', description: 'Carne de calidad premium' },
  { icon: '🍳', title: 'Desayunos Contundentes', description: 'Para empezar el día con energía' },
  { icon: '🍺', title: 'Cervezas Bien Frías', description: 'Selección de las mejores marcas' }];


  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2
            className="font-bold mb-6 tracking-tight"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', // Adjusted font-size
              fontWeight: 700,
              lineHeight: '1.2'
            }}>

            <span style={{ color: '#FFB300' }}>Sobre </span>
            <span style={{ color: 'white' }}>Nosotros</span>
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: '1.0625rem', lineHeight: '1.8', fontWeight: 400 }}>En El Soto Burger llevamos la pasión por la comida al siguiente nivel. Hamburguesas caseras, desayunos completos y el mejor ambiente de Móstoles.

          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-300"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderColor: '#1f2937'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.5)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 179, 0, 0.12)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1f2937';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>

              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3
              className="mb-2 font-bold tracking-tight"
              style={{
                fontSize: '1.25rem', // Adjusted font-size
                fontWeight: 600, // Adjusted font-weight
                color: '#FFB300'
              }}>

                {feature.title}
              </h3>
              <p className="text-gray-400" style={{ fontSize: '0.9375rem', lineHeight: '1.6', fontWeight: 400 }}>{feature.description}</p> {/* Adjusted font-size, removed font-medium, added fontWeight */}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}