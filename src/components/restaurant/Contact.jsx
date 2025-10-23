
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare, User, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: '2',
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir el mensaje de WhatsApp
    const mensaje = `🍔 *RESERVA EL SOTO BURGER*
    
👤 *Nombre:* ${formData.nombre}
📱 *Teléfono:* ${formData.telefono}
📅 *Fecha:* ${formData.fecha}
🕐 *Hora:* ${formData.hora}
👥 *Número de personas:* ${formData.personas}
${formData.comentarios ? `💬 *Comentarios:* ${formData.comentarios}` : ''}

¡Esperamos confirmar tu reserva pronto! 🔥`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/34613899413?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, '_blank');
  };

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FFB300 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="mb-4 font-bold tracking-tight" 
            style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            <span style={{ color: '#FFB300' }}>Reserva tu </span>
            <span style={{ color: 'white' }}>Mesa</span>
          </h2>
          <p className="text-gray-400" style={{ fontSize: '1.0625rem', fontWeight: 400 }}>
            Completa el formulario y te enviaremos la reserva por WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="backdrop-blur border border-gray-800 rounded-2xl p-8" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                  <User size={18} style={{ color: '#FFB300' }} />
                  Nombre completo *
                </label>
                <Input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="bg-black border-gray-700 text-gray-100 focus:border-[#FFB300] focus:ring-[#FFB300]"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                  <Phone size={18} style={{ color: '#FFB300' }} />
                  Teléfono *
                </label>
                <Input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+34 XXX XXX XXX"
                  className="bg-black border-gray-700 text-gray-100 focus:border-[#FFB300] focus:ring-[#FFB300]"
                />
              </div>

              {/* Fecha */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                  <Calendar size={18} style={{ color: '#FFB300' }} />
                  Fecha *
                </label>
                <Input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  min={today}
                  required
                  className="bg-black border-gray-700 text-gray-100 focus:border-[#FFB300] focus:ring-[#FFB300]"
                />
              </div>

              {/* Hora */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                  <Clock size={18} style={{ color: '#FFB300' }} />
                  Hora *
                </label>
                <Input
                  type="time"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-700 text-gray-100 focus:border-[#FFB300] focus:ring-[#FFB300]"
                />
              </div>

              {/* Número de personas */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-gray-300 mb-2" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                  <Users size={18} style={{ color: '#FFB300' }} />
                  Número de personas *
                </label>
                <select
                  name="personas"
                  value={formData.personas}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 text-gray-100 rounded-md px-3 py-2 focus:border-[#FFB300] focus:ring-[#FFB300] focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                  <option value="10+">Más de 10 personas</option>
                </select>
              </div>
            </div>

            {/* Comentarios */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-gray-300 mb-2" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                <MessageSquare size={18} style={{ color: '#FFB300' }} />
                Comentarios o peticiones especiales
              </label>
              <Textarea
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                placeholder="Alergias, preferencias de mesa, ocasiones especiales..."
                rows={4}
                className="bg-black border-gray-700 text-gray-100 focus:border-[#FFB300] focus:ring-[#FFB300]"
              />
            </div>

            {/* Botón de envío */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-black px-8 py-3 rounded-full font-semibold transition-all"
              style={{
                background: 'linear-gradient(135deg, #FFB300 0%, #FF6C34 100%)',
                boxShadow: '0 8px 20px rgba(255, 179, 0, 0.4)',
                fontWeight: 600,
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 179, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 179, 0, 0.4)';
              }}
            >
              <span className="flex items-center justify-center">
                Enviar Reserva por WhatsApp
              </span>
            </motion.button>

            <p className="text-gray-500 text-sm text-center mt-4" style={{ fontWeight: 400 }}>
              * Campos obligatorios. Al enviar, se abrirá WhatsApp para confirmar tu reserva.
            </p>
          </form>
        </motion.div>

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400" style={{ fontWeight: 400 }}>
            ¿Prefieres llamar? <a href="tel:+34613899413" className="transition-colors" style={{ color: '#FFB300', fontWeight: 600 }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF6C34'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFB300'}>+34 613 89 94 13</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
