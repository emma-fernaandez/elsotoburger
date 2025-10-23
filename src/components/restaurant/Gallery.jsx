
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function Gallery() {
  useEffect(() => {
    // Cargar el script de Elfsight si no está ya cargado
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', '');
    
    // Verificar si el script ya existe
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (!existingScript) {
      document.body.appendChild(script);
    }

    return () => {
      // Limpiar el script al desmontar (opcional)
      // Nota: Remover el script puede causar problemas si otros componentes también lo necesitan.
      // En muchos casos, se prefiere dejar los scripts globales cargados una vez.
      // Sin embargo, siguiendo el patrón original, se incluye la limpieza.
      if (script.parentNode && !document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
            className="mb-6 tracking-tight" 
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            <span style={{ color: '#FFB300' }}>Síguenos en </span>
            <span style={{ color: 'white' }}>Instagram</span>
          </h2>
          <a
            href="https://instagram.com/elsotoburger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors"
            style={{ fontSize: '1.0625rem', color: '#FFB300', fontWeight: 600 }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6C34'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#FFB300'}
          >
            <Instagram size={24} />
            @elsotoburger
          </a>
        </motion.div>

        {/* Elfsight Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <div 
            className="elfsight-app-e5695cdf-fca2-4564-a776-ccd1a7582e72" 
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
}
