
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from './menuData';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('hamburguesas');

  const tabs = [
    { id: 'hamburguesas', label: 'Hamburguesas', icon: '🍔' },
    { id: 'bocadillos', label: 'Bocadillos', icon: '🥖' },
    { id: 'sandwiches', label: 'Sándwiches', icon: '🥪' },
    { id: 'raciones', label: 'Raciones', icon: '🍟' },
    { id: 'cervezas', label: 'Cervezas', icon: '🍺' },
    { id: 'bebidas', label: 'Bebidas', icon: '🥤' }
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
            className="mb-4 font-bold tracking-tight"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            <span style={{ color: '#FFB300' }}>Nuestro </span>
            <span style={{ color: 'white' }}>Menú</span>
          </h2>
          <p className="text-gray-400" style={{ fontSize: '1.0625rem', fontWeight: 400 }}>Sabores auténticos que te conquistarán</p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'shadow-lg'
                    : 'bg-gray-900 border-2 border-gray-800'
                }`}
                style={{
                  fontSize: '0.9375rem',
                  letterSpacing: '0.025em',
                  fontWeight: 600,
                  ...(activeTab === tab.id
                    ? {
                        background: '#FFB300',
                        color: 'white'
                      }
                    : {
                        color: '#9ca3af'
                      }
                  )
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = '#111111';
                    e.currentTarget.style.color = '#FFB300';
                    e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = '#111827';
                    e.currentTarget.style.color = '#9ca3af';
                    e.currentTarget.style.borderColor = '#1f2937';
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{tab.icon}</span>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="columns-1 md:columns-2 gap-6"
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 break-inside-avoid mb-6"
                style={{ 
                  background: 'rgba(0, 0, 0, 0.4)', 
                  borderColor: '#1f2937',
                  padding: '1.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 179, 0, 0.5)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 179, 0, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1f2937';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Unified Layout for Mobile and Desktop */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 overflow-hidden rounded-xl" style={{ width: '90px', height: '90px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 
                        className="transition-colors tracking-tight flex-1" 
                        style={{ 
                          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                          fontWeight: 600,
                          color: '#FFB300',
                          lineHeight: '1.2'
                        }}
                      >
                        {item.name}
                      </h3>
                      <span 
                        className="bg-black rounded-lg flex-shrink-0"
                        style={{ 
                          fontSize: 'clamp(0.875rem, 2vw, 1rem)', 
                          color: 'white', 
                          padding: '0.375rem 0.75rem', 
                          fontWeight: 600 
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-400 leading-relaxed" 
                      style={{ 
                        fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)',
                        lineHeight: '1.5',
                        fontWeight: 400
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
