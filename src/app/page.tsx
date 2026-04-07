import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <Image src="/logo-horizontal.svg" alt="Asimetrix" width={140} height={40} />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="material-symbols-outlined text-6xl text-[#00b894] mb-4">sensors</span>
          <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">Gateway LoRaWAN</h1>
          <p className="text-xl text-gray-600 mb-6">Guía de instalación y configuración</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-lg">schedule</span>
              5 min de lectura
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-lg">timer</span>
              20 min de instalación
            </span>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm step-card border-l-4 border-[#00b894]">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#00b894] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">01</span>
              <h2 className="text-2xl font-semibold text-[#1a1a2e]">Verificación eléctrica</h2>
            </div>
            <p className="text-gray-600 mb-4">Antes de comenzar, verifica los siguientes requisitos en el sitio de instalación:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Punto eléctrico a 220V
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Ambiente seco y protegido de la lluvia
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Conexión a internet por cable Ethernet o WiFi
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm step-card border-l-4 border-[#00b894]">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#00b894] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">02</span>
              <h2 className="text-2xl font-semibold text-[#1a1a2e]">Conexión y verificación</h2>
            </div>
            <p className="text-gray-600 mb-4">Conecta el Gateway al toma corriente y al router:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Conecta el cable de poder al Gateway
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Conecta el cable Ethernet al router
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Espera 2 minutos hasta que el LED se estabilice
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-[#1a1a2e] mb-2">Indicadores LED:</h3>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <span className="block w-4 h-4 rounded-full bg-green-500 mx-auto mb-1"></span>
                  <span className="text-gray-600">Verde: Conectado</span>
                </div>
                <div>
                  <span className="block w-4 h-4 rounded-full bg-blue-500 mx-auto mb-1"></span>
                  <span className="text-gray-600">Azul: Enviando datos</span>
                </div>
                <div>
                  <span className="block w-4 h-4 rounded-full bg-red-500 mx-auto mb-1"></span>
                  <span className="text-gray-600">Rojo: Error</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm step-card border-l-4 border-[#00b894]">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#00b894] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">03</span>
              <h2 className="text-2xl font-semibold text-[#1a1a2e]">Configuración de red</h2>
            </div>
            <p className="text-gray-600 mb-4">El Gateway se configura automáticamente. Verifica en la plataforma:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Accede a la plataforma Asimetrix
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Verifica que el Gateway aparezca en línea
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Confirma la recepción de datos de los nodos
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm step-card border-l-4 border-[#00b894]">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#00b894] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">04</span>
              <h2 className="text-2xl font-semibold text-[#1a1a2e]">Instalación final</h2>
            </div>
            <p className="text-gray-600 mb-4">Instala el Gateway en una posición elevada para mejor cobertura:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Instala a una altura mínima de 2 metros
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Evita obstáculos metálicos cercanos
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[#00b894]">check_circle</span>
                Mantén antenas orientadas hacia los nodos
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500">info</span>
              <div>
                <h3 className="font-semibold text-blue-800">Importante</h3>
                <p className="text-sm text-blue-700">Mantener el Gateway alejado de fuentes de interferencia como motores o equipos eléctricos grandes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">¿Necesitas ayuda?</h2>
          <p className="text-gray-600 text-center mb-8">Contacta a nuestro equipo de soporte</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#00b894] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white">person</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a2e]">Damian García</h3>
                <p className="text-sm text-gray-600">damian.garcia@asimetrix.co</p>
                <p className="text-sm text-gray-600">+57 311 2078988</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#00b894] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white">person</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a2e]">Manuela Chavarría</h3>
                <p className="text-sm text-gray-600">manuela.chavarria@asimetrix.co</p>
                <p className="text-sm text-gray-600">+57 318 2202707</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#1a1a2e] text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#00b894]">sensors</span>
            <span className="text-lg font-semibold">Gateway LoRaWAN</span>
          </div>
          <p className="text-gray-400">© 2026 Asimetrix - Monitoreo inteligente para tu producción</p>
        </div>
      </footer>
    </div>
  );
}