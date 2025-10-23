
import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e3f09aa0664c700f0964ec/bcf123167_logo-sotoburger-Photoroom.png"
                alt="El Soto Burger Logo" className="h-22 w-20 object-contain" />


            </div>
            <p className="text-gray-400 leading-relaxed" style={{ fontWeight: 400 }}>
              Las mejores hamburguesas, desayunos y cervezas de Móstoles. Sabores que te harán volver.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="mb-4 font-semibold tracking-tight"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#FFB300'
              }}>

              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>

                  Menú
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('horarios')}
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>

                  Horarios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>

                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="mb-4 font-semibold tracking-tight"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#FFB300'
              }}>

              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} style={{ color: '#FFB300' }} />
                <span className="text-gray-400">C. de Joaquín Blume, 25, 28935 Móstoles, Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0" size={20} style={{ color: '#FFB300' }} />
                <a
                  href="tel:+34613899413"
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>

                  +34 613 89 94 13
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="flex-shrink-0" size={20} style={{ color: '#FFB300' }} />
                <a
                  href="https://instagram.com/elsotoburger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFB300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>

                  @elsotoburger
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500" style={{ fontWeight: 400 }}>
            © 2025 El Soto Burger. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

}