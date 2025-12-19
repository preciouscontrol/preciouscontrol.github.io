import { GalleryImage, ProjectCategory, ProjectSubtype } from "@/components/Gallery";

// Lista estática de imagens - muito mais rápido que import.meta.glob em runtime
export const projectImages: GalleryImage[] = [
  // Andaime - Abrigos
  { id: "abrigos-1", src: "/projects/Andaime/Abrigos/10511439_827086173980627_8729347444403345016_o.jpg", alt: "Abrigos", category: "scaffolding", subtype: "shelters" },
  { id: "abrigos-2", src: "/projects/Andaime/Abrigos/10733932_827086210647290_7606414780940842104_o.jpg", alt: "Abrigos", category: "scaffolding", subtype: "shelters" },
  { id: "abrigos-3", src: "/projects/Andaime/Abrigos/485277814_1842555173173461_1946806534764468533_n.jpg", alt: "Abrigos", category: "scaffolding", subtype: "shelters" },
  { id: "abrigos-4", src: "/projects/Andaime/Abrigos/4902.jpg", alt: "Abrigos", category: "scaffolding", subtype: "shelters" },

  // Andaime - Coberturas provisórias
  { id: "coberturas-1", src: "/projects/Andaime/Coberturas provisórias/P1010014.jpg", alt: "Coberturas provisórias", category: "scaffolding", subtype: "temporary-covers" },
  { id: "coberturas-2", src: "/projects/Andaime/Coberturas provisórias/P1010017.jpg", alt: "Coberturas provisórias", category: "scaffolding", subtype: "temporary-covers" },
  { id: "coberturas-3", src: "/projects/Andaime/Coberturas provisórias/P1010018.jpg", alt: "Coberturas provisórias", category: "scaffolding", subtype: "temporary-covers" },
  { id: "coberturas-4", src: "/projects/Andaime/Coberturas provisórias/P1010021.jpg", alt: "Coberturas provisórias", category: "scaffolding", subtype: "temporary-covers" },

  // Andaime - Escadas
  { id: "escadas-1", src: "/projects/Andaime/Escadas/10428401_827084463980798_7540797148024419745_o.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-2", src: "/projects/Andaime/Escadas/10687496_801671509870856_7509949887065899371_o.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-3", src: "/projects/Andaime/Escadas/1424266_704976012848822_2093039749_n.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-4", src: "/projects/Andaime/Escadas/1511719_801671466537527_2757479663171929263_o.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-5", src: "/projects/Andaime/Escadas/1973557_827085043980740_6626827266564750318_o.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-6", src: "/projects/Andaime/Escadas/3869.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-7", src: "/projects/Andaime/Escadas/3987.2.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-8", src: "/projects/Andaime/Escadas/4627.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-9", src: "/projects/Andaime/Escadas/5000.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-10", src: "/projects/Andaime/Escadas/BRIO-andamio-multidireccional-caract-4-AMP.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-11", src: "/projects/Andaime/Escadas/IMG_20251208_123920.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-12", src: "/projects/Andaime/Escadas/IMG_20251208_124204.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-13", src: "/projects/Andaime/Escadas/IMG_20251208_130855.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-14", src: "/projects/Andaime/Escadas/IMG_20251208_131201.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },
  { id: "escadas-15", src: "/projects/Andaime/Escadas/IMG_20251208_132817.jpg", alt: "Escadas", category: "scaffolding", subtype: "stairs" },

  // Andaime - Fachada
  { id: "fachada-1", src: "/projects/Andaime/Fachada/280972611_5376984519032487_4734836883172175439_n.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },
  { id: "fachada-2", src: "/projects/Andaime/Fachada/34200294_229778577784470_4586139248008101888_n.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },
  { id: "fachada-3", src: "/projects/Andaime/Fachada/IMG_20251208_123542.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },
  { id: "fachada-4", src: "/projects/Andaime/Fachada/IMG_20251208_132229.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },
  { id: "fachada-5", src: "/projects/Andaime/Fachada/IMG_20251208_132233.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },
  { id: "fachada-6", src: "/projects/Andaime/Fachada/IMG_20251208_132547.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },
  { id: "fachada-7", src: "/projects/Andaime/Fachada/IMG_20251208_133911.jpg", alt: "Fachada", category: "scaffolding", subtype: "facade" },

  // Andaime - Passarelas
  { id: "passarelas-1", src: "/projects/Andaime/Passarelas/23658650_139573890138273_3092248839651690341_n.jpg", alt: "Passarelas", category: "scaffolding", subtype: "walkways" },
  { id: "passarelas-2", src: "/projects/Andaime/Passarelas/DSCN0794.jpg", alt: "Passarelas", category: "scaffolding", subtype: "walkways" },

  // Andaime - Rolante
  { id: "rolante-1", src: "/projects/Andaime/Rolante/2993(pic).jpg", alt: "Rolante", category: "scaffolding", subtype: "rolling" },
  { id: "rolante-2", src: "/projects/Andaime/Rolante/4616.jpg", alt: "Rolante", category: "scaffolding", subtype: "rolling" },
  { id: "rolante-3", src: "/projects/Andaime/Rolante/4619.jpg", alt: "Rolante", category: "scaffolding", subtype: "rolling" },
  { id: "rolante-4", src: "/projects/Andaime/Rolante/4858.jpg", alt: "Rolante", category: "scaffolding", subtype: "rolling" },
  { id: "rolante-5", src: "/projects/Andaime/Rolante/4973.jpg", alt: "Rolante", category: "scaffolding", subtype: "rolling" },

  // Andaime - Suspenso
  { id: "suspenso-1", src: "/projects/Andaime/Suspenso/10679961_827084693980775_2561741481601419100_o.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-2", src: "/projects/Andaime/Suspenso/10680112_827084177314160_2031116016265433791_o.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-3", src: "/projects/Andaime/Suspenso/10683626_801671493204191_2460892156646165841_o.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-4", src: "/projects/Andaime/Suspenso/1400552_827085453980699_4170020288356286003_o.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-5", src: "/projects/Andaime/Suspenso/1957766_827084943980750_4026544429108776393_o.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-6", src: "/projects/Andaime/Suspenso/2.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-7", src: "/projects/Andaime/Suspenso/275947836_2224169251093626_6942230809236716793_n.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-8", src: "/projects/Andaime/Suspenso/34158563_229778701117791_6552028629306441728_n.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-9", src: "/projects/Andaime/Suspenso/485118604_1842555143173464_699370865892056128_n.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-10", src: "/projects/Andaime/Suspenso/556037258_24889928890616176_4629543079016982020_n.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-11", src: "/projects/Andaime/Suspenso/IMG_20251208_131145.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-12", src: "/projects/Andaime/Suspenso/IMG_9570.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-13", src: "/projects/Andaime/Suspenso/P1010002.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-14", src: "/projects/Andaime/Suspenso/P1010005.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-15", src: "/projects/Andaime/Suspenso/P4050022.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },
  { id: "suspenso-16", src: "/projects/Andaime/Suspenso/P5170019.jpg", alt: "Suspenso", category: "scaffolding", subtype: "suspended" },

  // Logística - Armazenagem
  { id: "armazenagem-1", src: "/projects/Logistica/Armazenagem/IMG-20211220-WA0000.jpg", alt: "Armazenagem", category: "logistics", subtype: "storage" },
  { id: "armazenagem-2", src: "/projects/Logistica/Armazenagem/IMG-20251215-WA0000.jpg", alt: "Armazenagem", category: "logistics", subtype: "storage" },
  { id: "armazenagem-3", src: "/projects/Logistica/Armazenagem/IMG-20251215-WA0001.jpg", alt: "Armazenagem", category: "logistics", subtype: "storage" },
  { id: "armazenagem-4", src: "/projects/Logistica/Armazenagem/IMG-20251215-WA0002.jpg", alt: "Armazenagem", category: "logistics", subtype: "storage" },
  { id: "armazenagem-5", src: "/projects/Logistica/Armazenagem/IMG-20251215-WA0003.jpg", alt: "Armazenagem", category: "logistics", subtype: "storage" },

  // Logística - Energia provisória
  { id: "energia-1", src: "/projects/Logistica/Energia provisória/IMG_20251208_125709.jpg", alt: "Energia provisória", category: "logistics", subtype: "temporary-power" },
  { id: "energia-2", src: "/projects/Logistica/Energia provisória/IMG_20251208_125746.jpg", alt: "Energia provisória", category: "logistics", subtype: "temporary-power" },
  { id: "energia-3", src: "/projects/Logistica/Energia provisória/IMG_20251208_130306.jpg", alt: "Energia provisória", category: "logistics", subtype: "temporary-power" },
  { id: "energia-4", src: "/projects/Logistica/Energia provisória/IMG_20251208_132449.jpg", alt: "Energia provisória", category: "logistics", subtype: "temporary-power" },

  // Logística - Instalações provisórias
  { id: "instalacoes-1", src: "/projects/Logistica/Instalações provisórias/IMG-20230530-WA0000.jpg", alt: "Instalações provisórias", category: "logistics", subtype: "temporary-facilities" },
  { id: "instalacoes-2", src: "/projects/Logistica/Instalações provisórias/IMG-20231020-WA0000.jpg", alt: "Instalações provisórias", category: "logistics", subtype: "temporary-facilities" },
  { id: "instalacoes-3", src: "/projects/Logistica/Instalações provisórias/IMG_20251208_125120.jpg", alt: "Instalações provisórias", category: "logistics", subtype: "temporary-facilities" },

  // Logística - Transportes
  { id: "transportes-1", src: "/projects/Logistica/Transportes/483825809_1834313173997661_3779689986371509839_n.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
  { id: "transportes-2", src: "/projects/Logistica/Transportes/483831341_1834316220664023_8681263814471981835_n.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
  { id: "transportes-3", src: "/projects/Logistica/Transportes/483842750_1834312977331014_6061626406948518619_n.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
  { id: "transportes-4", src: "/projects/Logistica/Transportes/484014858_1834315957330716_5954773635652870332_n.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
  { id: "transportes-5", src: "/projects/Logistica/Transportes/58419653_427275888034737_6041747645087612928_n.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
  { id: "transportes-6", src: "/projects/Logistica/Transportes/IMG-20230705-WA0019.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
  { id: "transportes-7", src: "/projects/Logistica/Transportes/IMG-20230717-WA0009.jpg", alt: "Transportes", category: "logistics", subtype: "transport" },
];
