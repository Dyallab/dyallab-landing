// import React from 'react';
// import { Code, Cloud, Workflow, Archive as Architecture, Users, FileText, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

// function App() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <Code className="h-8 w-8 text-indigo-600" />
//             <span className="text-2xl font-bold text-gray-800">Dyallab</span>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Servicios</a>
//             <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">Nosotros</a>
//             <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contacto</a>
//           </nav>
//           <a 
//             href="#contact" 
//             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
//           >
//             Contáctanos
//           </a>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                 Transformamos tu infraestructura tecnológica
//               </h1>
//               <p className="text-xl mb-8">
//                 Soluciones de desarrollo e infraestructura para llevar tu empresa al siguiente nivel
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                 <a 
//                   href="#services" 
//                   className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
//                 >
//                   Nuestros Servicios
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </a>
//                 <a 
//                   href="#contact" 
//                   className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center"
//                 >
//                   Hablemos
//                 </a>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <img 
//                 src="https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
//                 alt="Equipo de desarrollo" 
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Ofrecemos soluciones integrales para optimizar tu infraestructura tecnológica y mejorar tus procesos de desarrollo
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-4 bg-indigo-100 rounded-full inline-block mb-4">
//                 <Cloud className="h-8 w-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Manejo de Infraestructura</h3>
//               <p className="text-gray-600 mb-4">
//                 Optimizamos tu infraestructura tanto on-premise como en la nube para maximizar rendimiento y reducir costos.
//               </p>
//               <ul className="text-gray-600 space-y-2">
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Migración a la nube</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Optimización de recursos</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Monitoreo y alertas</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Service 2 */}
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-4 bg-indigo-100 rounded-full inline-block mb-4">
//                 <Workflow className="h-8 w-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Mejoras en el Ciclo de Desarrollo</h3>
//               <p className="text-gray-600 mb-4">
//                 Optimizamos tu proceso de desarrollo para entregar software de calidad de manera más rápida y eficiente.
//               </p>
//               <ul className="text-gray-600 space-y-2">
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Automatización de pruebas</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Integración continua</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Entrega continua</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Service 3 */}
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-4 bg-indigo-100 rounded-full inline-block mb-4">
//                 <Code className="h-8 w-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Integración de Prácticas DevOps</h3>
//               <p className="text-gray-600 mb-4">
//                 Implementamos metodologías DevOps para mejorar la colaboración entre equipos y acelerar el tiempo de entrega.
//               </p>
//               <ul className="text-gray-600 space-y-2">
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Cultura DevOps</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Automatización de procesos</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Infraestructura como código</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Service 4 */}
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-4 bg-indigo-100 rounded-full inline-block mb-4">
//                 <Architecture className="h-8 w-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Soluciones de Arquitectura</h3>
//               <p className="text-gray-600 mb-4">
//                 Diseñamos arquitecturas escalables y robustas que se adaptan a las necesidades específicas de tu negocio.
//               </p>
//               <ul className="text-gray-600 space-y-2">
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Microservicios</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Arquitecturas cloud-native</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Diseño de sistemas distribuidos</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Service 5 */}
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-4 bg-indigo-100 rounded-full inline-block mb-4">
//                 <Users className="h-8 w-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Capacitaciones de Equipo</h3>
//               <p className="text-gray-600 mb-4">
//                 Formamos a tu equipo en las últimas tecnologías y metodologías para potenciar su rendimiento.
//               </p>
//               <ul className="text-gray-600 space-y-2">
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Workshops técnicos</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Formación en nuevas tecnologías</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Mentorías personalizadas</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Service 6 */}
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-4 bg-indigo-100 rounded-full inline-block mb-4">
//                 <FileText className="h-8 w-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Documentación Técnica</h3>
//               <p className="text-gray-600 mb-4">
//                 Creamos documentación clara y detallada para facilitar el mantenimiento y la evolución de tus sistemas.
//               </p>
//               <ul className="text-gray-600 space-y-2">
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Documentación de APIs</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Manuales técnicos</span>
//                 </li>
//                 <li className="flex items-start">
//                   <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Guías de arquitectura</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <img 
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
//                 alt="Equipo Dyallab" 
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//             <div className="md:w-1/2 md:pl-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
//               <p className="text-gray-600 mb-6">
//                 En Dyallab, somos un equipo de profesionales apasionados por la tecnología y comprometidos con la excelencia. Nuestra misión es ayudar a las empresas a optimizar sus procesos tecnológicos para alcanzar su máximo potencial.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Con años de experiencia en el sector, hemos trabajado con empresas de todos los tamaños, desde startups hasta grandes corporaciones, proporcionando soluciones personalizadas que se adaptan a sus necesidades específicas.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-3xl font-bold text-indigo-600">100+</p>
//                   <p className="text-gray-600">Proyectos completados</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-3xl font-bold text-indigo-600">50+</p>
//                   <p className="text-gray-600">Clientes satisfechos</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-3xl font-bold text-indigo-600">10+</p>
//                   <p className="text-gray-600">Años de experiencia</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-3xl font-bold text-indigo-600">24/7</p>
//                   <p className="text-gray-600">Soporte técnico</p>
//                 </div>
//               </div>
//               <a 
//                 href="#contact" 
//                 className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors inline-block"
//               >
//                 Trabaja con nosotros
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Lo que dicen nuestros clientes</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Empresas que han confiado en nosotros para transformar su infraestructura tecnológica
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-xl font-bold text-indigo-600">A</span>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">Ana Rodríguez</h4>
//                   <p className="text-gray-600">CTO, TechStart</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "Dyallab transformó completamente nuestra infraestructura cloud, reduciendo nuestros costos en un 40% y mejorando el rendimiento de nuestras aplicaciones."
//               </p>
//             </div>
            
//             {/* Testimonial 2 */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-xl font-bold text-indigo-600">M</span>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">Miguel Sánchez</h4>
//                   <p className="text-gray-600">Director de IT, GlobalCorp</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "La implementación de prácticas DevOps por parte de Dyallab nos permitió reducir el tiempo de entrega de nuevas funcionalidades de semanas a días."
//               </p>
//             </div>
            
//             {/* Testimonial 3 */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-xl font-bold text-indigo-600">L</span>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">Laura Martínez</h4>
//                   <p className="text-gray-600">CEO, InnovaSoft</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">
//                 "Las capacitaciones proporcionadas por Dyallab elevaron significativamente las habilidades técnicas de nuestro equipo, permitiéndonos abordar proyectos más complejos."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h2>
//               <p className="text-gray-600 mb-8">
//                 Estamos aquí para ayudarte a transformar tu infraestructura tecnológica. Contáctanos y descubre cómo podemos impulsar tu negocio.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <Mail className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-1">Email</h4>
//                     <p className="text-gray-600">info@dyallab.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <Phone className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-1">Teléfono</h4>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <MapPin className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-1">Ubicación</h4>
//                     <p className="text-gray-600">Av. Tecnológica 123, Ciudad Innovación</p>
//                   </div>
//                 </div>
                
//                 <div className="flex space-x-4 mt-8">
//                   <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
//                     <Twitter className="h-5 w-5 text-gray-700" />
//                   </a>
//                   <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
//                     <Linkedin className="h-5 w-5 text-gray-700" />
//                   </a>
//                   <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
//                     <Github className="h-5 w-5 text-gray-700" />
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 md:pl-12">
//               <form className="bg-white p-8 rounded-lg shadow-md">
//                 <div className="mb-6">
//                   <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="Tu nombre"
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="tu@email.com"
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
//                   <input 
//                     type="text" 
//                     id="subject" 
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="¿En qué podemos ayudarte?"
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
//                   <textarea 
//                     id="message" 
//                     rows={4}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="Cuéntanos más sobre tu proyecto..."
//                   ></textarea>
//                 </div>
                
//                 <button 
//                   type="submit" 
//                   className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
//                 >
//                   Enviar mensaje
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-8 md:mb-0">
//               <div className="flex items-center space-x-2 mb-4">
//                 <Code className="h-8 w-8 text-indigo-400" />
//                 <span className="text-2xl font-bold">Dyallab</span>
//               </div>
//               <p className="text-gray-400 max-w-md">
//                 Transformamos tu infraestructura tecnológica para impulsar el crecimiento de tu negocio.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//               <div>
//                 <h4 className="text-lg font-bold mb-4">Servicios</h4>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Infraestructura</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desarrollo</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DevOps</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arquitectura</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h4 className="text-lg font-bold mb-4">Empresa</h4>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Equipo</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreras</a></li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h4 className="text-lg font-bold mb-4">Legal</h4>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a></li>
//                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400">© {currentYear} Dyallab. Todos los derechos reservados.</p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Github className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;