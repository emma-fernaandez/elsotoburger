
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero({ scrollToMenu, scrollToReservation }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image - Sin parallax para compatibilidad móvil */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=2000&q=80)'
        }}>
        {/* Enhanced Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.7) 100%)'
          }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}>

          {/* Headline with Clean Gradient on First Line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-bold mb-6 tracking-tight mx-auto"
            style={{
              fontSize: 'clamp(2.25rem, 7vw, 4.5rem)',
              lineHeight: '1.1',
              fontWeight: 900,
              maxWidth: '1100px'
            }}>
            <span style={{ 
              background: 'linear-gradient(135deg, #FFB300 0%, #FF6C34 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Hamburguesas brutales</span>
            <br />
            <span style={{ 
              color: 'white',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
            }}>en Móstoles</span>
          </motion.h1>

          {/* Subheadline with Original Style */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}>
            Desayunos 🍳 · Hamburguesas 🍔 · Café ☕ · Cervezas bien frías 🍺
          </motion.p>

          {/* Enhanced Modern CTAs - Always Inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center mb-8">

            {/* Primary Button - Reservar */}
            <motion.button
              onClick={scrollToReservation}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full"
              style={{
                background: 'linear-gradient(135deg, #FFB300 0%, #FF6C34 100%)',
                boxShadow: '0 10px 30px rgba(255, 179, 0, 0.3)'
              }}>
              <div className="bg-[#ffb300] text-[#000000] px-6 sm:px-8 py-2.5 sm:py-3 font-bold relative z-10 flex items-center justify-center gap-2"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', letterSpacing: '0.025em', fontWeight: 600 }}>
                Reserva tu Mesa
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>

            {/* Secondary Button - Ver Menú */}
            <motion.button
              onClick={scrollToMenu}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold backdrop-blur-sm transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 179, 0, 0.5)',
                color: 'white',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                letterSpacing: '0.025em',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 179, 0, 0.15)';
                e.currentTarget.style.borderColor = '#FFB300';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.5)';
              }}>
              Ver Menú
            </motion.button>
          </motion.div>

          {/* Floating Reviews Badge - Centered Below Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center">
            <motion.div
              animate={{
                y: [0, -4, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-md"
              style={{
                borderColor: 'rgba(255, 179, 0, 0.3)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4" 
                    style={{ 
                      fill: '#FFB300',
                      color: '#FFB300'
                    }} 
                  />
                ))}
              </div>
              
              {/* Rating */}
              <span 
                className="font-bold text-base"
                style={{ 
                  color: '#FFB300',
                  letterSpacing: '0.025em'
                }}
              >
                4.5
              </span>
              
              {/* Divider */}
              <div 
                className="w-px h-5"
                style={{ background: 'rgba(255, 179, 0, 0.3)' }}
              />
              
              {/* Review Count */}
              <span 
                className="font-semibold text-sm text-white"
                style={{ 
                  letterSpacing: '0.025em'
                }}
              >
                +150 reseñas
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown style={{ color: '#FFB300' }} size={40} />
        </motion.div>
      </motion.div>
    </section>
  );
}
