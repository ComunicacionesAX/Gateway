"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"es"|"en">("es");
  
  const texts = {
    es: {
      header: "Guía de instalación",
      back: "Volver al Hub",
      heroTag: "Gateway",
      heroDesc: "Sigue cada paso para una correcta instalación.",
      readTime: "5 min de lectura",
      installTime: "20 min de instalación",
      step1: "Verificación del breaker",
      step1Check: "Verifica que el breaker de los dispositivos esté en ON",
      step2: "Conexión del Gateway",
      step2Desc: "Verifica que el Gateway esté conectado a la corriente y que esté encendido.",
      step3: "Verificación de internet",
      step3Desc: "Valida que la red a la que está conectada el Gateway sí tenga internet.",
      colInfo: "Información",
      on: "ON",
      mode: "Mode",
      solution: "Solución",
      equiposOff: "Equipo apagado",
      verifyConn: "Verificar la conexión eléctrica o el botón de encender",
      envioDatos: "Envío de datos",
      envioOk: "Envío exitoso de datos a la plataforma",
      recepcion: "Recepción de datos",
      recibeInfo: "El equipo recibe información de los sensores",
      fallo: "Fallo de envío",
      verNet: "Verificar red (internet)",
      verPaso3: "Ver paso 3",
      nota: "Nota importante",
      restart: "Si al conectarse al router no da internet, reinicia el equipo desconectando el cable de abajo del router y reconectándolo en el mismo puerto.",
      report: "Reporta el fallo a la persona encargada.",
      tel: "Tel: +57 304 666 0685",
      necesitaAyuda: "¿Necesitas ayuda?",
      contacto: "Contacta a nuestro equipo de soporte",
      stepPasos: "Paso",
      footer: "© 2026 Asimetrix - Monitoreo inteligente para tu producción",
    },
    en: {
      header: "Installation Guide",
      back: "Back to Hub",
      heroTag: "Gateway",
      heroDesc: "Follow each step for a correct installation.",
      readTime: "5 min read",
      installTime: "20 min installation",
      step1: "Breaker Verification",
      step1Check: "Verify that the device breaker is ON",
      step2: "Gateway Connection",
      step2Desc: "Verify that the Gateway is connected to power and turned on.",
      step3: "Internet Verification",
      step3Desc: "Validate that the network connected to the Gateway has internet.",
      colInfo: "Information",
      on: "ON",
      mode: "Mode",
      solution: "Solution",
      equiposOff: "Equipment off",
      verifyConn: "Verify electrical connection or power button",
      envioDatos: "Data sending",
      envioOk: "Successful data sending to platform",
      recepcion: "Data reception",
      recibeInfo: "Equipment receives information from sensors",
      fallo: "Sending failure",
      verNet: "Verify network (internet)",
      verPaso3: "See step 3",
      nota: "Important note",
      restart: "If connecting to the router does not provide internet, restart the equipment by disconnecting the cable from the bottom of the router and reconnecting it to the same port.",
      report: "Report the failure to the person in charge.",
      tel: "Tel: +57 304 666 0685",
      necesitaAyuda: "Do you need help?",
      contacto: "Contact our support team",
      stepPasos: "Step",
      footer: "© 2026 Asimetrix - Intelligent monitoring for your production",
    }
  };

  const t = texts[lang];

  return (
    <div className="min-h-screen bg-[#f6fafb] font-sans">
      {/* Header */}
      <header className="bg-surface sticky top-0 w-full z-50 border-b border-[#c1c7cf]/20">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#014469]">auto_stories</span>
            <h1 className="text-lg font-bold text-[#014469] tracking-tight">{t.header}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="px-3 py-1 text-sm font-medium text-[#014469] bg-[#e5e9ea] rounded-lg hover:bg-[#dfe3e4]">
              {lang === "es" ? "EN" : "ES"}
            </button>
            <Image src="/logo-horizontal.svg" alt="Asimetrix" className="h-8" width={120} height={32} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <a href="https://asimetrix-hub.vercel.app/#" className="inline-flex items-center gap-2 text-[#014469] hover:text-[#275c82] transition-colors mb-6">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="font-medium">{t.back}</span>
        </a>
        
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#014469] text-white text-sm font-bold tracking-widest uppercase rounded-lg shadow-lg shadow-[#014469]/30 mb-4">
                <span className="material-symbols-outlined text-lg">router</span>
                {t.heroTag}
              </span>
              <p className="text-[#41474e] text-lg max-w-2xl leading-relaxed">
                {t.heroDesc}
              </p>
            </div>
            <div className="w-full lg:w-1/4">
            </div>
          </div>
        </section>

        {/* Timeline Steps */}
        <section className="mb-16 bg-[#f0f4f5] p-8 rounded-xl relative overflow-hidden">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#275c82]/20 text-[#014469] text-xs font-semibold rounded-full">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {t.readTime}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#00626a]/20 text-[#00484f] text-xs font-semibold rounded-full">
              <span className="material-symbols-outlined text-sm">timer</span>
              {t.installTime}
            </span>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between gap-4">
            <div className="absolute top-6 left-0 w-full h-0.5 bg-[#c1c7cf]/20 hidden md:block -translate-y-1/2 z-0"></div>
            {/* Step 1 */}
            <div className="relative z-10 flex md:flex-col items-center md:items-start gap-3 flex-1 bg-[#dfe3e4]/50 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#e5e9ea] flex items-center justify-center text-[#014469] border border-[#c1c7cf]/20">
                <span className="material-symbols-outlined text-lg">bolt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#41474e] font-bold text-xs tracking-widest uppercase">{t.stepPasos} 1</span>
                <span className="text-sm font-semibold text-[#181c1d]">{t.step1}</span>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex md:flex-col items-center md:items-start gap-3 flex-1 bg-[#dfe3e4]/50 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#e5e9ea] flex items-center justify-center text-[#014469] border border-[#c1c7cf]/20">
                <span className="material-symbols-outlined text-lg">power</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#41474e] font-bold text-xs tracking-widest uppercase">{t.stepPasos} 2</span>
                <span className="text-sm font-semibold text-[#181c1d]">{t.step2}</span>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex md:flex-col items-center md:items-start gap-3 flex-1 bg-[#dfe3e4]/50 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[#e5e9ea] flex items-center justify-center text-[#014469] border border-[#c1c7cf]/20">
                <span className="material-symbols-outlined text-lg">wifi</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#41474e] font-bold text-xs tracking-widest uppercase">{t.stepPasos} 3</span>
                <span className="text-sm font-semibold text-[#181c1d]">{t.step3}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Step Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Step 1 Card */}
          <div className="flex flex-col gap-6 p-8 bg-white rounded-xl shadow-sm border-t-4 border-[#275c82]">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-[#c1c7cf] opacity-30">01</span>
              <span className="material-symbols-outlined text-[#014469] text-3xl">bolt</span>
            </div>
            <h3 className="text-xl font-bold text-[#181c1d] tracking-tight">{t.step1}</h3>
            <div className="bg-[#e5e9ea] p-4 rounded-lg">
              <ul className="text-xs space-y-3 font-medium text-[#41474e]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#00626a]">check_circle</span>
                  {t.step1Check}
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="flex flex-col gap-6 p-8 bg-white rounded-xl shadow-sm border-t-4 border-[#275c82]">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-[#c1c7cf] opacity-30">02</span>
              <span className="material-symbols-outlined text-[#014469] text-3xl">power</span>
            </div>
            <h3 className="text-xl font-bold text-[#181c1d] tracking-tight">{t.step2}</h3>
            <p className="text-[#41474e] text-sm leading-6 mb-4">
              {t.step2Desc}
            </p>
            <div className="bg-[#e5e9ea] p-4 rounded-lg overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#c1c7cf]">
                    <th className="text-left py-3 px-3 font-semibold text-[#181c1d]">{t.colInfo}</th>
                    <th className="text-center py-3 px-2 font-semibold text-[#181c1d]">{t.on}</th>
                    <th className="text-center py-3 px-2 font-semibold text-[#181c1d]">{t.mode}</th>
                    <th className="text-center py-3 px-2 font-semibold text-[#181c1d]">{t.mode}</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#181c1d]">{t.solution}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#c1c7cf]/30">
                    <td className="py-3 px-3 font-medium">{t.equiposOff}</td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-gray-400 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-gray-400 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full border border-gray-400 inline-block bg-white"></span></td>
                    <td className="py-3 px-3 text-[#41474e]">{t.verifyConn}</td>
                  </tr>
                  <tr className="border-b border-[#c1c7cf]/30">
                    <td className="py-3 px-3 font-medium">{t.envioDatos}</td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-green-600 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full border-2 border-gray-300 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-green-600 inline-block"></span></td>
                    <td className="py-3 px-3 text-[#41474e]">{t.envioOk}</td>
                  </tr>
                  <tr className="border-b border-[#c1c7cf]/30">
                    <td className="py-3 px-3 font-medium">{t.recepcion}</td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-green-600 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-green-600 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-blue-600 inline-block"></span></td>
                    <td className="py-3 px-3 text-[#41474e]">{t.recibeInfo}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">{t.fallo}</td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-green-600 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full border-2 border-gray-300 inline-block"></span></td>
                    <td className="py-3 px-2 text-center"><span className="w-4 h-4 rounded-full bg-red-600 inline-block"></span></td>
                    <td className="py-3 px-3 text-[#41474e]">{t.verNet}<br/><em className="text-xs italic">{t.verPaso3}</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="flex flex-col gap-6 p-8 bg-white rounded-xl shadow-sm border-t-4 border-[#275c82]">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-[#c1c7cf] opacity-30">03</span>
              <span className="material-symbols-outlined text-[#014469] text-3xl">wifi</span>
            </div>
            <h3 className="text-xl font-bold text-[#181c1d] tracking-tight">{t.step3}</h3>
            <p className="text-[#41474e] text-sm leading-6 mb-4">
              {t.step3Desc}
            </p>
          </div>

          {/* Nota Aclaratoria */}
          <div className="bg-[#00626a]/20 border border-[#00626a]/30 p-6 rounded-xl mt-4 col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#00484f] font-bold text-sm mb-3">
              <span className="material-symbols-outlined text-lg">info</span>
              {t.nota}
            </div>
            <p className="text-xs text-[#41474e] mb-4">
              {t.restart}
            </p>
            <p className="text-xs text-[#41474e] mb-2">
              {t.report}
            </p>
            <p className="text-xs text-[#014469] font-semibold">
              Damian García, {t.tel}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f0f4f5] rounded-xl p-8 md:p-12">
          <h4 className="text-[#014469] text-2xl font-bold mb-6 text-center">{t.necesitaAyuda}</h4>
          <p className="text-[#41474e] text-center mb-8">{t.contacto}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#275c82] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-white">person</span>
              </div>
              <h5 className="font-bold text-lg text-[#181c1d] mb-2">Damian García</h5>
              <p className="text-sm text-[#41474e] mb-1">damian.garcia@asimetrix.co</p>
              <p className="text-sm text-[#014469] font-semibold">+57 311 2078988</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#275c82] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-white">person</span>
              </div>
              <h5 className="font-bold text-lg text-[#181c1d] mb-2">Manuela Chavarría</h5>
              <p className="text-sm text-[#41474e] mb-1">manuela.chavarria@asimetrix.co</p>
              <p className="text-sm text-[#014469] font-semibold">+57 318 2202707</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f0f4f5] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#014469]">router</span>
            <span className="font-bold text-[#014469]">Gateway</span>
          </div>
          <p className="text-[#41474e] text-sm">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}