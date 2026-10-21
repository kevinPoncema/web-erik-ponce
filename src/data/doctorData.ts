export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  whatsappText: string;
}

export interface CredentialItem {
  degree: string;
  institution: string;
  location: string;
  periodOrTag: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PatientResourceItem {
  title: string;
  summary: string;
  tips: string[];
}

export const DOCTOR_INFO = {
  name: "Dr. Erick Ponce",
  fullTitle: "Dr. Erick Ponce | Cirujano Ortopeda y Traumatólogo en San Pedro Sula y Valle de Sula",
  brandName: "Dr. Erick Ponce",
  brandSubtitle: "Ortopedia & Traumatología",
  specialty: "Cirujano Ortopeda y Traumatólogo",
  city: "San Pedro Sula",
  department: "Cortés",
  region: "Valle de Sula y Noroccidente de Honduras",
  country: "Honduras",
  postalCode: "211101",
  coverageAreas: [
    "San Pedro Sula",
    "Choloma",
    "Villanueva",
    "La Lima",
    "El Progreso (Yoro)",
    "Puerto Cortés",
    "Cofradía",
    "Santa Cruz de Yojoa",
    "Valle de Sula y Noroccidente de Honduras"
  ],
  // Obfuscated chunks for anti-scraper reconstruction on client
  phoneDisplayParts: ["+504", "3191", "3419"],
  phoneRawEncoded: "KzUwNDMxOTEzNDE5", // Base64 for +50431913419
  waNumEncoded: "NTA0MzE5MTM0MTk=", // Base64 for 50431913419
  emailUserEncoded: "ZXBvbmNlMjI5MA==", // Base64 for eponce2290
  emailDomainEncoded: "aG90bWFpbC5jb20=", // Base64 for hotmail.com
  instagramHandle: "@dr.erickponceortopeda",
  instagramUrl: "https://www.instagram.com/dr.erickponceortopeda/",
  doctoresDeHondurasUrl: "https://doctoresdehonduras.com/doctores/detalles/1144",
  googleReviewsUrl: "https://share.google/kmUuJdPVSDUFEKli0",
  whatsappApiUrl: "https://api.whatsapp.com/send/?phone=%2B50431913419&text=Hola%20Dr.%20Erick%20Ponce,%20quisiera%20agendar%20una%20consulta%20m%C3%A9dica.&type=phone_number&app_absent=0",
  whatsappFabUrl: "https://wa.me/50431913419?text=Hola%20Dr.%20Erick%20Ponce,%20quisiera%20agendar%20una%20consulta%20médica.",
  siteUrl: "https://drerickponceortopeda.com",
};

export const TRUST_BADGES = [
  {
    short: "UNAH-VS",
    label: "Doctor en Medicina y Cirugía",
    country: "Honduras",
  },
  {
    short: "Especialidad en Guatemala",
    label: "Ortopedia y Traumatología (CMM / UMG)",
    country: "Guatemala",
  },
  {
    short: "Fellowship en Argentina",
    label: "Artroscopia y Medicina del Deporte (UCES)",
    country: "Argentina",
  },
];

export const METRICS_BAR = [
  {
    title: "Especialista Certificado",
    subtitle: "Formación internacional en Guatemala y Argentina",
    icon: "shield-check",
  },
  {
    title: "Cirugía de Mínima Invasión",
    subtitle: "Menor dolor postoperatorio y recuperación acelerada",
    icon: "sparkles",
  },
  {
    title: "Medicina del Deporte & Artroscopia",
    subtitle: "Reintegro funcional seguro para atletas y pacientes activos",
    icon: "activity",
  },
  {
    title: "Atención en Centros Quirúrgicos de SPS",
    subtitle: "Hospital Betesda, Clínica Fe y Esperanza y centros aliados en SPS y Valle de Sula",
    icon: "hospital",
  },
];

export const ACADEMIC_CREDENTIALS: CredentialItem[] = [
  {
    degree: "Doctor en Medicina y Cirugía",
    institution: "Universidad Nacional Autónoma de Honduras en el Valle de Sula (UNAH-VS)",
    location: "San Pedro Sula, Honduras",
    periodOrTag: "Grado Médico",
    description: "Formación médica integral con excelencia clínica y compromiso humanitario en el Valle de Sula.",
  },
  {
    degree: "Especialidad en Ortopedia y Traumatología",
    institution: "Centro Médico Militar / Universidad Mariano Gálvez (UMG)",
    location: "Ciudad de Guatemala, Guatemala",
    periodOrTag: "Posgrado Quirúrgico",
    description: "Entrenamiento de alta exigencia en trauma complejo, osteosíntesis avanzada, cirugía reconstructiva articular y ortopedia pediátrica y del adulto.",
  },
  {
    degree: "Fellowship en Artroscopia y Medicina del Deporte",
    institution: "Sports Med Academy / Universidad de Ciencias Empresariales y Sociales (UCES)",
    location: "Buenos Aires, Argentina",
    periodOrTag: "Alta Especialidad",
    description: "Subespecialización avanzada en cirugía artroscópica de rodilla y hombro, preservación articular, reconstrucción ligamentaria y traumatología deportiva.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "fracturas-traumatologia",
    badge: "Urgencias 24/7 y Trauma",
    title: "Fracturas y Traumatología de Urgencia",
    description: "Manejo clínico y quirúrgico oportuno de fracturas en adultos y niños. Aplicamos técnicas modernas de fijación y osteosíntesis para restaurar la anatomía ósea con seguridad.",
    highlights: [
      "Fracturas en adultos y adultos mayores",
      "Traumatología infantil (tallo verde y supracondíleas)",
      "Luxaciones, esguinces severos y politraumatismos",
    ],
    image: "./assets/img/servicios/fracturas.webp",
    imageAlt: "Tratamiento de fracturas y traumatología de urgencia en San Pedro Sula por el Dr. Erick Ponce",
    whatsappText: "Hola Dr. Erick Ponce, necesito valoración por una fractura o urgencia traumatológica en San Pedro Sula.",
  },
  {
    id: "rodilla-artroscopia",
    badge: "Cirugía Articular",
    title: "Lesiones de Rodilla y Artroscopia",
    description: "Diagnóstico preciso y cirugía artroscópica de mínima invasión para aliviar el dolor, corregir la inestabilidad y preservar tu articulación con incisiones milimétricas.",
    highlights: [
      "Lesiones de meniscos y sutura meniscal",
      "Reconstrucción de Ligamento Cruzado (LCA / LCP)",
      "Artrosis de rodilla (gonartrosis) y desgaste de cartílago",
    ],
    image: "./assets/img/servicios/rodilla.webp",
    imageAlt: "Cirugía de artroscopia de rodilla, meniscos y ligamento cruzado en San Pedro Sula - Dr. Erick Ponce",
    whatsappText: "Hola Dr. Erick Ponce, quisiera agendar una consulta por dolor o lesión de rodilla / artroscopia.",
  },
  {
    id: "hombro-manguito-rotador",
    badge: "Miembro Superior",
    title: "Hombro y Manguito Rotador",
    description: "Soluciones especializadas para el dolor nocturno de hombro, pérdida de fuerza y limitación de movimiento mediante rehabilitación dirigida o reparación artroscópica.",
    highlights: [
      "Rupturas y tendinitis del manguito rotador",
      "Inestabilidad y luxación recurrente de hombro",
      "Bursitis subacromial, hombro congelado y dolor crónico",
    ],
    image: "./assets/img/servicios/hombro.webp",
    imageAlt: "Especialista en hombro y cirugía de manguito rotador en San Pedro Sula - Dr. Erick Ponce",
    whatsappText: "Hola Dr. Erick Ponce, me gustaría agendar una evaluación por dolor de hombro / manguito rotador.",
  },
  {
    id: "medicina-deportiva",
    badge: "Alto Rendimiento",
    title: "Medicina Deportiva y Artroscopia",
    description: "Atención enfocada en el reintegro seguro y eficiente del atleta profesional o amateur. Abordamos lesiones musculares, tendinosas y articulares con protocolos actualizados.",
    highlights: [
      "Reintegro deportivo seguro y prevención de recaídas",
      "Esguinces de tobillo, lesiones tendinosas y sobrecarga",
      "Artroscopia deportiva de rodilla, hombro y tobillo",
    ],
    image: "./assets/img/servicios/medicina-deportiva.webp",
    imageAlt: "Medicina deportiva y traumatología del deporte en San Pedro Sula con el Dr. Erick Ponce",
    whatsappText: "Hola Dr. Erick Ponce, quisiera consultar por una lesión deportiva para evaluación especializada.",
  },
  {
    id: "terapias-biologicas",
    badge: "Ortobiología Regenerativa",
    title: "Terapias Biológicas y Viscosuplementación",
    description: "Alternativas no quirúrgicas de medicina regenerativa para controlar el dolor articular, mejorar la lubricación y retrasar el desgaste en pacientes con artrosis o tendinopatías.",
    highlights: [
      "Aplicación de Plasma Rico en Plaquetas (PRP)",
      "Viscosuplementación con ácido hialurónico",
      "Infiltraciones articulares precisas para alivio del dolor",
    ],
    image: "./assets/img/servicios/terapias-biologicas.webp",
    imageAlt: "Terapias biológicas, Plasma Rico en Plaquetas (PRP) e infiltraciones articulares en San Pedro Sula",
    whatsappText: "Hola Dr. Erick Ponce, deseo información sobre Plasma Rico en Plaquetas (PRP) e infiltraciones articulares.",
  },
  {
    id: "ortopedia-general-columna",
    badge: "Cuidado Integral",
    title: "Ortopedia General, Columna, Mano y Pie",
    description: "Evaluación integral de patologías degenerativas y compresivas del sistema músculo-esquelético para devolverte una marcha sin dolor y mejorar tu calidad de vida diaria.",
    highlights: [
      "Dolor lumbar, ciática y trastornos de columna",
      "Artrosis de cadera y manejo del dolor articular",
      "Fascitis plantar, neuroma de Morton y túnel carpiano",
    ],
    image: "./assets/img/servicios/ortopedia-general.webp",
    imageAlt: "Ortopedia general, dolor de columna, cadera, mano y pie en San Pedro Sula - Dr. Erick Ponce",
    whatsappText: "Hola Dr. Erick Ponce, quisiera agendar una consulta de ortopedia general / dolor articular o de columna.",
  },
];

export const PATIENT_RESOURCES: PatientResourceItem[] = [
  {
    title: "Preparación para Cirugía y Cuidados Previos",
    summary: "Indicaciones clave antes de un procedimiento artroscópico o cirugía ortopédica programada.",
    tips: [
      "Presenta tus exámenes preoperatorios completos y estudios por imagen (Rayos X o Resonancia Magnética).",
      "Informa sobre cualquier medicamento anticoagulante, antihipertensivo o suplemento al menos 7 días antes.",
      "Respeta el ayuno preoperatorio indicado por el equipo quirúrgico y anestesiología.",
    ],
  },
  {
    title: "Signos de Alarma ante un Traumatismo o Caída",
    summary: "¿Cuándo acudir de inmediato a valoración traumatológica por una lesión aguda?",
    tips: [
      "Deformidad visible en la extremidad, inflamación rápida o hematoma extenso.",
      "Incapacidad para apoyar el pie, caminar o movilizar la articulación afectada.",
      "Adormecimiento, hormigueo o cambio de coloración en los dedos de la mano o del pie.",
    ],
  },
  {
    title: "Rehabilitación Funcional y Cuidado Articular",
    summary: "Pilares para una recuperación exitosa tras una lesión deportiva, infiltración o cirugía.",
    tips: [
      "El apego al protocolo de fisioterapia progresiva es tan importante como el procedimiento médico.",
      "Mantén un peso saludable y fortalecimiento muscular periarticular para proteger tus rodillas y caderas.",
      "No ignores el dolor articular persistente por más de 2 semanas; el diagnóstico temprano evita cirugías mayores.",
    ],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "¿Cómo agendo mi cita con el Dr. Erick Ponce?",
    answer: "Puedes agendar tu consulta médica de forma rápida y directa haciendo clic en cualquiera de los botones de WhatsApp de este sitio web o llamando al +504 3191-3419. Atendemos a pacientes de San Pedro Sula, Choloma, Villanueva, El Progreso, La Lima y alrededores, coordinando el centro médico (Hospital Betesda, Clínica Fe y Esperanza, Hospital Militar Regional del Norte u hospitales aliados) que te resulte más accesible.",
  },
  {
    question: "¿Qué debo llevar a mi primera consulta ortopédica?",
    answer: "Te recomiendo traer tus estudios de imagen previos si ya cuentas con ellos (radiografías, resonancia magnética, tomografías o ultrasonidos, ya sea en físico o en formato digital), antecedentes médicos relevantes y una lista de los medicamentos que tomas. Si aún no te has realizado estudios, durante tu consulta física evaluaré tu caso e indicaré únicamente los exámenes estrictamente necesarios.",
  },
  {
    question: "¿Atiende emergencias por fracturas en San Pedro Sula y alrededores?",
    answer: "Sí. Brindo atención prioritaria para urgencias traumatológicas como fracturas en adultos y niños (incluyendo fracturas pediátricas en tallo verde y supracondíleas), luxaciones y lesiones deportivas agudas en centros quirúrgicos y hospitalarios de San Pedro Sula las 24 horas del día. Puedes comunicarte de inmediato al +504 3191-3419 para coordinar la recepción hospitalaria.",
  },
  {
    question: "¿Realiza valoraciones y segunda opinión para cirugía de rodilla u hombro?",
    answer: "Por supuesto. Cuento con formación de posgrado en Ortopedia y Traumatología y un Fellowship en Artroscopia y Medicina del Deporte en Buenos Aires, Argentina. Realizo valoraciones integrales y segundas opiniones quirúrgicas para lesiones de meniscos, ligamento cruzado y rupturas del manguito rotador, priorizando siempre alternativas conservadoras y ortobiológicas (PRP) cuando son viables, o técnicas artroscópicas de mínima invasión.",
  },
];

export const CLINIC_LOCATIONS = [
  {
    name: "Hospital Betesda",
    area: "San Pedro Sula, Cortés",
    type: "Consultas y Procedimientos Quirúrgicos (Previa Cita)",
  },
  {
    name: "Clínica Fe y Esperanza",
    area: "San Pedro Sula, Cortés",
    type: "Consulta Externa Especializada y Valoración Ortopédica",
  },
  {
    name: "Hospital Militar Regional del Norte",
    area: "San Pedro Sula, Cortés",
    type: "Consulta Ortopédica, Infiltraciones y Cirugía Ambulatoria",
  },
];
