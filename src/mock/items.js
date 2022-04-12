const items = [
  {
    id: "0",
    title: "Xiaomi Redmi 9A",
    description: "Smartphone 2 GB + 32 GB, Dual Sim, Grigio (gris granito)",
    price: 112,
    stock: 8,
    category: "electronics",
    pictureUrl:
      "https://m.media-amazon.com/images/I/81oPj2JzHDL._AC_SX679_.jpg",
  },
  {
    id: "1",
    title: "Xiaomi Redmi Note 10",
    description:
      "128 GB 4 GB RAM | GSM LTE Factory Unlocked Smartphone | Modelo internacional (gris ónix)",
    price: 207,
    stock: 8,
    category: "electronics",
    pictureUrl:
      "https://m.media-amazon.com/images/I/51hIPZc5OjL._AC_SX679_.jpg",
  },
  {
    id: "2",
    title: "Xiaomi Note 10",
    description:
      "5G + 4G LTE Volte Global Unlocked GSM 128GB + 4GB 48MP Triple cámara GSM en todo el mundo (no Verizon Boost Cricket), paquete de cargador rápido para coche (gris grafito)",
    price: 203,
    stock: 8,
    category: "electronics",
    pictureUrl:
      "https://m.media-amazon.com/images/I/719LT7l2iqS._AC_SY741_.jpg",
  },
  {
    id: "3",
    title: "Apple iPhone 13",
    description: "(128GB, Blue) [Locked] + Carrier Subscription",
    price: 829,
    stock: 8,
    category: "electronics",
    pictureUrl: "https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg",
  },
  {
    id: "4",
    title: "iPhone 11 Pro",
    description:
      "Totalmente desbloqueado y compatible con cualquier operador de elección (por ejemplo, AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc. ).",
    price: 407,
    stock: 8,
    category: "electronics",
    pictureUrl:
      "https://m.media-amazon.com/images/I/51+Uw6N7BnL._AC_SX679_.jpg",
  },
  {
    id: "5",
    title: "iPhone 12 Pro",
    description: "128 GB, azul pacífico - desbloqueado (renovado Premium)",
    price: 849,
    stock: 8,
    category: "electronics",
    pictureUrl:
      "https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SX679_.jpg",
  },
  {
    id: "MLA1106582850",
    title: "Amarok 3.0 Tdi V6 258cv Comfortline 4x4 Aut 2022",
    price: "7800000",
    pictureUrl:
      "http://http2.mlstatic.com/D_868563-MLA47635655141_092021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1106582850-amarok-30-tdi-v6-258cv-comfortline-4x4-aut-2022-_JM",
    description:
      "Garant\u00eda de f\u00e1brica, Revisado en el concesionario, Asesorate de la mejor manera. Te ofrecemos:\n-Excelentes Cr\u00e9ditos prendarios en cuotas fijas y en pesos incluso tasa0%\n-Mejor gestor\u00eda de leasing para empresas\n-Cotizaci\u00f3n de tu usado\n-Stock f\u00edsico y disponibilidad\n-Atenci\u00f3n Personalizada\n-Tomamos d\u00f3lares (consult\u00e1 la cotizaci\u00f3n)\n\nEL PRECIO PUBLICADO PUEDE VARIAR\nLA PLATAFORMA NO SE ACTUALIZA CONSTANTEMENTE POR ESA RAZON NO PODEMOS PONER EL PRECIO REAL DE VENTA\n\nEstamos a tu disposici\u00f3n por cualquier duda o consulta que tengas",
  },
  {
    id: "MLA1122979008",
    title: "Amarok Cd V6 Extreme 3.0 258cv 4x4 At 0km",
    price: "11799900",
    pictureUrl:
      "http://http2.mlstatic.com/D_676982-MLA47876080459_102021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1122979008-amarok-cd-v6-extreme-30-258cv-4x4-at-0km-_JM",
    description:
      "Con garantia de f\u00e1brica, Amarok V6 Extreme 3.0 258cv 4x4 AT\nPrimeros 3 service bonificados\ngarant\u00eda de 6 a\u00f1os o 150.000km\nMano de obra bonificada en 4\u00b0 service\n\nTOMAMOS USADOS\nFINANCIAMOS A TASA 0% HASTA $ 1.500.000 EN 6 O 9 MESES\nHASTA $2.700.000 EN 24 MESES TASA FIJA DEL 22%\n\nApto financiaci\u00f3n EMPRESAS hasta $4.300.000 tasa 36%\nTasas preferenciales\nApto cr\u00e9dito Mi PyMe\nPermuta\nNo dudes en consultar,. trabajamos con stock f\u00edsico real.\nEntrega inmediata.",
  },
  {
    id: "MLA1116441590",
    title: "Citroen 2021 Jumpy 1.6 Hdi Business L3",
    price: "5490000",
    pictureUrl:
      "http://http2.mlstatic.com/D_687941-MLA48601059070_122021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1116441590-citroen-2021-jumpy-16-hdi-business-l3-_JM",
    description:
      "NUEVA TASA PROMOCIONAL MES DE DICIEMBRE:\n\n*FINANCIACI\u00d3N HASTA EL 50% DEL VALOR DE LA UNIDAD en 12 cuotas a TASA FIJA del 23,90%, 24 cuotas a TASA FIJA del 28.90%, 36 cuotas a TASA FIJA del 34.90% o en hasta 48 cuotas a TASA FIJA del 37,90%. (PSA Citroen)\n\n*Financiaci\u00f3n hasta el 70% del valor de la unidad (Bco. Santander UVA) a tasa del 16.5%.\n\n-RECIBIMOS TU VEH\u00cdCULO USADO COMO PARTE DEL PAGO.\n\n\u00bfQUE ESTAS ESPERANDO? VENI A CONOCER NUESTRO LOCAL Y SUBITE A TU CITROEN OKM!!!\n\n-EL Precio publicado se refiere exclusivamente a precio contado efectivo o financiacion ajena a PSA. El precio con permuta ser\u00e1 seg\u00fan el valor de lista.\n-Gesti\u00f3n de cr\u00e9dito desde el mismo concesionario.",
  },
  {
    id: "MLA1116295130",
    title: "Citroen 2021 Berlingo Multispace 1.6 Hdi Xtr",
    price: "4000000",
    pictureUrl:
      "http://http2.mlstatic.com/D_728087-MLA48589271948_122021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1116295130-citroen-2021-berlingo-multispace-16-hdi-xtr-_JM",
    description:
      "*FINANCIACI\u00d3N EXCLUSIVA DE ABRIL--- HASTA $1.650.000 en 12 cuotas a TASA FIJA de 9.90%, 18 cuotas a TASA FIJA del 17.90%, 24 cuotas a TASA FIJA del 21.90%, 36 cuotas a TASA FIJA DEL 26.90% o en hasta 48 cuotas a TASA FIJA del 29,90%. (PSA Citroen)\n.\n*Financiaci\u00f3n hasta el 70% del valor de la unidad (Bco. Santander UVA) a tasa del 16,5%.\n\n-Recorda que recibimos tu VEH\u00cdCULO USADO como parte del pago.\n\n\u00bfQUE ESTAS EPERANDO? NO LO DUDES MAS Y SUBITE A TU OKM!!!\n\n*Gesti\u00f3n v\u00eda ONLINE o desde el mismo concesionario. (SOLO CON TU DNI)\n\n> Somos GERLI LITORAL Concesionario oficial Citro\u00ebn<",
  },
  {
    id: "MLA1106568408",
    title: "Volkswagen Amarok 3.0 Tdi V6 258cv Comfortline 4x4 At",
    price: "7799900",
    pictureUrl:
      "http://http2.mlstatic.com/D_658465-MLA47753943321_102021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1106568408-volkswagen-amarok-30-tdi-v6-258cv-comfortline-4x4-at-_JM",
    description:
      "Con garantia de f\u00e1brica, Asesorate de la mejor manera. Te ofrecemos:\n-Excelentes Cr\u00e9ditos prendarios en cuotas fijas y en pesos incluso tasa0%\n-Mejor gestor\u00eda de leasing para empresas\n-Cotizaci\u00f3n de tu usado\n-Stock f\u00edsico y disponibilidad\n-Atenci\u00f3n Personalizada\n-Tomamos d\u00f3lares (consult\u00e1 la cotizaci\u00f3n)\n\nEL PRECIO PUBLICADO PUEDE VARIAR\n\n\nEstamos a tu disposici\u00f3n por cualquier duda o consulta que tengas",
  },
  {
    id: "MLA1104359393",
    title: "Volkswagen Amarok 3.0 Tdi V6 258cv Highline 4x4 At",
    price: "10900000",
    pictureUrl:
      "http://http2.mlstatic.com/D_794837-MLA49042291257_022022-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1104359393-volkswagen-amarok-30-tdi-v6-258cv-highline-4x4-at-_JM",
    description:
      "Con garantia de f\u00e1brica, Aseguramos Stock Permanente - Entrega Inmediata\nMejoramos Cualquier Presupuesto\n\nEstamos preparados para que tu pr\u00f3xima experiencia con nosotros sea la mejor de todas.\n\n* AMAROK V6 HIGHLINE *\n\nLa pickup m\u00e1s potente del segmento\nLleg\u00f3 la nueva Amarok V6 con 258 caballos de potencia para seguir creando historia dentro de la industria automotriz.\nGarant\u00eda de 6 a\u00f1os \u00f3 150.000km\n3 primeros service bonificados.\nFinancia hasta $ 4.300.000 tasas preferenciales.\n\nConsulte sin compromiso.",
  },
  {
    id: "MLA1118554688",
    title: "Citroen 2021 Berlingo Furgon 1.6 Hdi Business",
    price: "3050000",
    pictureUrl:
      "http://http2.mlstatic.com/D_619885-MLA48756638568_012022-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1118554688-citroen-2021-berlingo-furgon-16-hdi-business-_JM",
    description:
      "FINANCIACION EXCLUSIVA HASTA EL 70% DEL VALOR DE LA UNIDAD EN 24 cuotas a TASA FIJA del 27.90%, 36 cuotas a TASA FIJA DEL 37.90% o en hasta 48 cuotas a TASA FIJA del 39,90%. (PSA Citroen)\n\n*FINANCIACI\u00d3N HASTA $850.000 en 18 cuotas a TASA FIJA DEL 14,90%!!! (PSA Citroen).\n\n*Financiaci\u00f3n hasta el 70% del valor de la unidad (Bco. Santander UVA) a tasa del 17,5%.\n\n-Recorda que recibimos tu VEH\u00cdCULO USADO como parte del pago.\n\n\u00bfQUE ESTAS EPERANDO? NO LO DUDES MAS Y SUBITE A TU OKM!!!\n\n*Gesti\u00f3n v\u00eda ONLINE o desde el mismo concesionario. (SOLO CON TU DNI)\n\n> Somos GERLI LITORAL Concesionario oficial Citro\u00ebn<",
  },
  {
    id: "MLA1115852890",
    title: "Citroen 2021 C 4 Cactus 1.6 Vti Feel Pk Plus Bt",
    price: "4200000",
    pictureUrl:
      "http://http2.mlstatic.com/D_646697-MLA48531811863_122021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1115852890-citroen-2021-c-4-cactus-16-vti-feel-pk-plus-bt-_JM",
    description:
      "\u00a1\u00a1STOCK DISPONIBLE PARA ENTREGA INMEDIATA!\n\nNUEVA TASAS PROMOCIONALES EXCLUSIVAS C4 CACTUS:\n\n*FINANCIACI\u00d3N HASTA $1.400.000 directa desde Citroen:\n12 cuotas a TASA FIJA del 12,90%\n18 cuotas a TASA FIJA del 17.90%\n24 cuotas a TASA FIJA del 24.90%\n36 cuotas a TASA FIJA del 34,90%\n\n*TASA PROMOCIONAL FIJA del 29.90% ( LINEA DE INCLUSION FINANCIERA) Bco. Santander.\n\n*Financiaci\u00f3n hasta el 85% del valor de la unidad a tasa del 16.5% (Bco. Santander UVA).\n\n-RECIBIMOS TU VEH\u00cdCULO USADO, SEA DE LA MARCA QUE SEA COMO PARTE DEL PAGO.\n\n\u00bfQUE ESTAS ESPERANDO? ACERCATE A NUESTRO CONCESIONARIO OFICIAL Y SUBITE A UN CITROEN OKM!!!\n\nBeneficios de comprar con nosotros: \n1 - Gesti\u00f3n de cr\u00e9dito desde el mismo concesionario\n2 - Seguro desde el Concesionario\n3 - Gestion de documentaci\u00f3n del usado que entregas y del que compras desde nuestra propia gestoria\n4 - Si entregas un auto no se va sin ser transferido\n5 - Todos nuestros OKM tienen 3 a\u00f1os de garantia y los usados 6 meses\n6 - Contamos con nuestra propia PostVenta con lo cual, todos nuestros autos son supervisados por expertos y podes seguir atendiendolo con nosotros!\n\nTODO EN UN SOLO LUGAR, CON NOSOTROS, QUE SOMOS Y QUEREMOS A LOS AUTOS COMO VOS! \n\nEn Gerli Somos distintos a todos, SOMOS IGUALES A VOS!",
  },
  {
    id: "MLA1106534643",
    title: "Amarok 2.0 Tdi 140 Cv Trendline 4x2 + Hard & Work 2022",
    price: "5149900",
    pictureUrl:
      "http://http2.mlstatic.com/D_666020-MLA47753885934_102021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1106534643-amarok-20-tdi-140-cv-trendline-4x2-hard-work-2022-_JM",
    description:
      "\u00danico due\u00f1o, Con garant\u00eda de f\u00e1brica, Amarok 2.0 140cv 4x2 MT\nPrimeros 1 service bonificado\nGarant\u00eda de 6 a\u00f1os o 150.000km\nMano de obra bonificada en 4\u00b0 service\n\nTasa 0% hasta $ 1.700.000\nApto financiaci\u00f3n hasta $4.300.000\nTasas preferenciales\nApto cr\u00e9dito Mi PyMe\nPermuta\nMejor Contado\nno dudes en consultar,. trabajamos con stock f\u00edsico reales. Entrega inmediata.",
  },
  {
    id: "MLA1106583053",
    title: "Volkswagen Vento 1.4 Tsi 250 Auto Autom\u00e1tico 2021",
    price: "7150000",
    pictureUrl:
      "http://http2.mlstatic.com/D_616308-MLA47586316930_092021-I.jpg",
    stock: "8",
    category: "cars",
    permalink:
      "https://auto.mercadolibre.com.ar/MLA-1106583053-volkswagen-vento-14-tsi-250-auto-automatico-2021-_JM",
    description:
      "Con garantia de f\u00e1brica, Vento 250 TSI 1.4 AT\nPrimer service bonificado\ngarant\u00eda de 3 a\u00f1os o 100.000km\nMano de obra bonificada en 2\u00b0 y 3\u00ba service\n\nApto financiaci\u00f3n hasta $3.100.000\nTasas preferenciales\nApto cr\u00e9dito Mi PyMe\nPermuta\nMejor Contado\nno dudes en consultar,. trabajamos con stock f\u00edsico reales. Entrega inmediata.",
  },
  {
    id: "MLA1130755695",
    title:
      "Venta Casa A Estrenar En Barrio Cerrado Prados Del Oeste - Country Moreno",
    price: "274000",
    pictureUrl:
      "http://http2.mlstatic.com/D_785906-MLA49576199413_042022-I.jpg",
    stock: "8",
    category: "real-state",
    permalink:
      "https://casa.mercadolibre.com.ar/MLA-1130755695-venta-casa-a-estrenar-en-barrio-cerrado-prados-del-oeste-country-moreno-_JM",
    description:
      'Descripci\u00f3n\nVenta Casa estilo Racionalista en Prados del Oeste, Club de Campo.\nPropiedad 5 Ambientes desarrollada en dos plantas con muy buena iluminaci\u00f3n y ventilaci\u00f3n en todos los ambientes, con frente parquizado e iluminado, cochera semicubierta para 2 veh\u00edculos + espacio cochera descubierta para 2 veh\u00edculos extra. Por la orientaci\u00f3n que tiene cuenta con sol en el parque todo el d\u00eda, ideal para aprovechar con amigos y familiares.\n\nIngresando encontramos un hall de recepci\u00f3n de doble altura y balconeado, dormitorio o escritorio, ba\u00f1o completo, y mediante espacio de doble circulaci\u00f3n llegamos al ambiente principal, living comedor con vista abierta al jard\u00edn a trav\u00e9s de los ventanales. Tiene la cocina integrada en forma de "U" con bajo mesada y alacenas, mesada de grafito, horno y anafe Domec y bacha de acero inoxidable Johnson y en continuado sigue la galer\u00eda semi cubierta con lavadero, dep\u00f3sito, parrilla, gabinete de guardado, isla con pileta de lavar y ba\u00f1o de exteriores completo. Jard\u00edn con piscina de 8 x 3 Mts. revestida en venecitas con borde at\u00e9rmico y cerco de protecci\u00f3n.\n\nEn la planta alta hay 3 dormitorios, el principal en suite con vestidor y vista hacia la pileta, los otros dos dormitorios tienen placard con interiores (uno con balc\u00f3n en forma de "L" y el segundo con vista al jard\u00edn), comparten ante ba\u00f1o y ba\u00f1o completo todo revestido en porcelanato.\n\nContactanos ahora y coordin\u00e1 tu visita!\n\n\n\nSeguinos en redes sociales y enterate de las mejores oportunidades en zona oeste.',
  },
  {
    id: "MLA1130763095",
    title: "Impecable Casa En Las Lomas , Divina!!!!!",
    price: "740000",
    pictureUrl:
      "http://http2.mlstatic.com/D_992443-MLA49576877253_042022-I.jpg",
    stock: "8",
    category: "real-state",
    permalink:
      "https://casa.mercadolibre.com.ar/MLA-1130763095-impecable-casa-en-las-lomas-divina-_JM",
    description:
      "Descripci\u00f3n\nExcelente e impecable propiedad en las Lomas de San Isidro, sobre calle muy pintoresca, frente a parques donados, actualmente Instituto , lo cual le da una extendida vista a jardines desde el frente.\nImperdible!\nSe trata de una casa muy solida con una calidad constructiva superior de dise\u00f1o moderno, muy fresca y actual.\nConstruida por el arquitecto Tonconogy , la misma ha sido ganadora de premios por su calidad constructivay dise\u00f1o moderno y minimalista.\n\nLote de 20 por 40 metros.\n\nRetiro de entada.\nHall amplio.\nLiving de doble altura con aberturas de aluminio y doble vidrio., con vista al jard\u00edn, hogar con vidrio tipo Bosca, super alegre y luminoso con aberturas de Aluminio y doble vidrio.\nToldo autom\u00e1tico con sensor de sol y viento.\nComedor.\nDesde e comedor ingresamos al estar / comedor de diario amplio con aberturas corredizas y persiana automatizada. con salida a galer\u00eda .\nC\u00f3moda Cocina al frente .\nLavadero y muy buena habitaci\u00f3n de servicio .\nSobre el lateral , parrilla, ba\u00f1o para la pileta, Gabinete de calera .\nAmplio espacio para guardado de varios autos.\n\nExterior :\nGran pileta con revestimiento de porcelanato, Luces Led y rebalse Finland\u00e9s.\nDivino jard\u00edn , excelente entorno, muy silenciosa!\nTaller usos m\u00faltiples al fondo.\n\nPlanta alta\nMaster suite con vestidor , con vista al jard\u00edn.\nDos dormitorios que comparten un ba\u00f1o.\nEscritorio que balconea al Living con cerramiento de vidrio.\nTodos los dormitorios con persianas gradhermetic.\nAltillo para guardado.\n\nCircuito de 5 c\u00e1maras de seguridad.\nAlarma de rayos en el frente y contra frente.\n\nAire acondicionado en los dormitorios.\nCalefacci\u00f3n losa radiante por caldera dual.\n\n\nLas im\u00e1genes, medidas, superficies y proporciones son aproximadas y se exponen a t\u00edtulo informativo. La venta de dicho inmueble est\u00e1 supeditada a que el propietario tr\u00e1mite el C\u00f3digo de Transferencia de Inmuebles (COTI) de conformidad con la normativa vigente ante la AFIP.\n\nLlamanos al 4737-4244 o escribinos gtraversi@ricardotiscornia.com.ar\nContactanos por Whatsapp desde tu m\u00f3vil +54 9 11 5 576 6159\nricardotiscornia.com.ar\n@ricardotiscorniapropiedades\nCUCICBA 6020- CMCPSI 5963\n\n\n\n\n\n\n\n\n\nLas im\u00e1genes, medidas, superficies y proporciones son aproximadas y se exponen a t\u00edtulo informativo.\nCUCICBA 6020- CMCPSI 5963",
  },
  {
    id: "MLA1130755678",
    title:
      "Duplex 3 Ambientes Con Cochera En Villa Ballester Zona Holter (uf1)",
    price: "123000",
    pictureUrl:
      "http://http2.mlstatic.com/D_668967-MLA49576195258_042022-I.jpg",
    stock: "8",
    category: "real-state",
    permalink:
      "https://casa.mercadolibre.com.ar/MLA-1130755678-duplex-3-ambientes-con-cochera-en-villa-ballester-zona-holter-uf1-_JM",
    description:
      "Descripci\u00f3n\nComplejo de seis c\u00f3modos Duplex a estrenar de 3 ambientes en Ballester, zona Colegio Holters.\n\nCaracter\u00edsticas de las unidades:\nEn planta baja nos encontramos con c\u00f3moda cocina equipada con muebles bajo mesada, mesada en granito con bacha de acero inoxidable y griferia monocomando FV. Living comedor integrado a la cocina y toilette de recepci\u00f3n con griferia FV y sanitarios Ferrum.\nPisos de porcelanato de 60x60 San Lorenzo.\n\nEn planta alta disponemos de dos dormitorios con amplios placares y ba\u00f1o completo con ba\u00f1era, griferia FV y sanitarios Ferrum.\nPreinstalacion de aire acondicionado.\nPisos flotantes de 10mm.\nEn el patio contamos con parrilla y al frente una cochera.\n\nPosesi\u00f3n inmediata para los dos duplex al frente.\n\nForma de pago:\n70% al boleto y posesi\u00f3n.\nSaldo del 30% financiable en 36 cuotas en d\u00f3lares con un 6% de inter\u00e9s anual.\n\nContactanos ahora y coordina tu visita!\n\nSeguinos en redes sociales y enterate de las mejores oportunidades en zona oeste.",
  },
  {
    id: "MLA1130695105",
    title: "Casa En Venta El Cazador Toma Propiedad / Financia",
    price: "129000",
    pictureUrl:
      "http://http2.mlstatic.com/D_924234-MLA49575061889_042022-I.jpg",
    stock: "8",
    category: "real-state",
    permalink:
      "https://casa.mercadolibre.com.ar/MLA-1130695105-casa-en-venta-el-cazador-toma-propiedad-financia-_JM",
    description:
      "Descripci\u00f3n\nCorredor Responsable: MUDATE SA - Miguel Canovas CUCICBA 7864 / CMCPSI 6660 -\nContacto: Debora Guerci\nOPORTUNIDAD TOMA PROPIEDAD EN PARTE DE PAGO HASTA u$s 80000 O FINANCIA DUE\u00d1O DIRECTO\nBELLISIMA CASA EMPLAZADA DENTRO DEL BARRIO EL CAZADOR EN UN BARRIO SEMICERRADO LA PRUDENCIA\n\nSI LO QUE BUSCAS ES ARMONIA , PAZ Y CONTACTO CON LA NATURALEZA ESTE ES TU LUGAR\n\nDISE\u00d1ADA PARA DISFRUTAR EL JARDIN COMO EL INTERIOR POR SU BUEN GUSTO Y CALIDEZ\n\nLA CASA POSEE UN EXTENSO JARDIN DE 1000 METROS ,PERGOLA ,ARBOLES FRUTALES ( NARANJA, MANZANA,POMELOS .. ) PARQUIZADO CON GRAMA BAHIANA ,ILUMINACION CON FAROLES ESTRATEGICAMENTE DISPUESTOS .\nGALERIA CON PARRILLA ,BA\u00d1O EXTERNO\n\nCUANDO INGRESAMOS A LA PROPIEDAD NOS ENCONTRAMOS CON UNN AMPLIO LIVING COMEDOR ,CON VISTAS AL JARDIN DE INVIERNO. UNA ESTUFA A LE\u00d1A TROMEN QUE CALEFACCIONA TODO EL SECTOR\nCOCINNA CON MUEBLES COMPLETO DE ESTILO ,MESADA DE MADERA Y AMPLIA BARRA DESAYUNADORA QUE CONECTA CON EL LIVING Y HACE MAS AMPLIO Y CALIDO EL LUGAR DIARIO\nLOS PISOS SON DE PORCELANATO SIMIL MADERA MARCA PORTO BELLO\nCALEFACCION POR RADIADORES EN TODOS LOS AMBIENTES\nLAVADERO\nBA\u00d1O COMPLETO\nAIRE ACONDICIONADO EN LOS DOS DORMITORIOS\nDORMITORIO CON VISTA AL JARDIN\nAMPLIO DORMITORIO EN SUITE CON VESTIDOR\nLOS SANITARIOS SON MARCA ROCA ,GRIFERIA FV\nCALDERA DUAL\nCONEXION EN EL TECHO PARA INSTALAR UN TERMOTANQUE SOLAR\n\nLA CASA ES SO\u00d1ADA TENES QUE VENIR A CONOCERLA PUES CADA DETALLE ES UNA OBRA DE ARTE\n\n\n\nLa oficina es de operaci\u00f3n y gesti\u00f3n independiente.\nLa presente publicaci\u00f3n describe las caracter\u00edsticas esenciales del inmueble, debi\u00e9ndose consultar al corredor p\u00fablico inmobiliario responsable de la operaci\u00f3n por la eventual actualizaci\u00f3n de las medidas, descripciones arquitect\u00f3nicas y funcionales, valores de expensas, servicios, impuestos, precios y dem\u00e1s informaci\u00f3n, cuyos valores son aproximados. Los agentes/gestores NO ejercen el corretaje inmobiliario. Todas las operaciones inmobiliarias son objeto de intermediaci\u00f3n y conclusi\u00f3n por parte del corredor p\u00fablico inmobiliario responsable de la presente publicaci\u00f3n.\nCompr\u00e1 la casa que quer\u00e9s! No la que pod\u00e9s. Acced\u00e9 a un pr\u00e9stamo por hasta el 30% del valor de esta propiedad. Simul\u00e1 tu cuota en Lendar.",
  },
  {
    id: "MLA1130770480",
    title: "Casa - Armenio",
    price: "950000",
    pictureUrl:
      "http://http2.mlstatic.com/D_761921-MLA49577556822_042022-I.jpg",
    stock: "8",
    category: "real-state",
    permalink:
      "https://casa.mercadolibre.com.ar/MLA-1130770480-casa-armenio-_JM",
    description:
      "Descripci\u00f3n\nMagn\u00edfica casa en venta de estilo colonial con excelente construcci\u00f3n desarrollada en 3 plantas con gran jard\u00edn al Golf.\n\nPlanta Baja:\n- Hall de recepci\u00f3n.\n- Living Comedor.\n- Cocina con Comedor Diario con salida al jard\u00edn\n- Toilette.\n- Lavadero\n\nPlanta Alta:\n- Suite principal\n- 4 dormitorios en Suite.\n- Playroom\n\nTercer Planta:\n- Altillo de gran tama\u00f1o con ba\u00f1o completo\n\nSubsuelo:\n- Amplio espacio, para gimnasio o sala de juegos.\n\nTambi\u00e9n cuenta con:\n-Cochera cubierta para dos autos.\n- Calefacci\u00f3n por losa radiante.\n- Amplia Galer\u00eda con amplia pileta, vestuario con ba\u00f1o y ducha.\n- Jard\u00edn parquizado.\n\nTodos los dormitorios cuentan con una salida a un balc\u00f3n con vista al golf.\nZona de servicio separada de la casa con acceso independiente.\n\n? 2021 Coldwell Banker. Todos los derechos reservados. Coldwell Banker y los logotipos de Coldwell Banker son marcas de servicio de propiedad de Coldwell Banker Real Estate LLC. El sistema Coldwell Banker? est\u00e1 compuesto por oficinas propias de propiedad de una subsidiaria de Realogy Brokerage Group LLC y por oficinas adheridas al Sistema Coldwell Banker que son de propiedad y operaci\u00f3n independientes. En cumplimiento con la normativa vigente, los asistentes NO ejercen el corretaje inmobiliario. La intermediaci\u00f3n y conclusi\u00f3n de las operaciones inmobiliarias es desarrollada por Martilleros y Corredores P\u00fablicos. Esta Oficina Inmobiliaria se encuentra a cargo de Viviana Pedrosa CUCICBA 7470 Tomo 1 folio 278 CMCPSI 6565 Libro 10 Folio 60 adheridos al Sistema Coldwell Banker Grupo Morada, C.U.I.T.: 23175138714, Colectora Oeste, KM 49, 5 Ramal Pilar, Paralelo 50, Entrada Sur, oficina 211, Pilar.\n\n2022 Coldwell Banker. Todos los derechos reservados. Coldwell Banker y los logotipos de Coldwell Banker son marcas de servicio de propiedad de Coldwell Banker Real Estate LLC. El sistema Coldwell Banker est\u00e1 compuesto por oficinas propias de propiedad de una subsidiaria de Realogy Brokerage Group LLC y por oficinas adheridas al Sistema Coldwell Banker que son de propiedad y operaci\u00f3n independientes. En cumplimiento con la normativa vigente, los asistentes NO ejercen el corretaje inmobiliario. La intermediaci\u00f3n y conclusi\u00f3n de las operaciones inmobiliarias es desarrollada por Martilleros y Corredores P\u00fablicos. Esta Oficina Inmobiliaria se encuentra a cargo de Viviana Pedrosa CUCICBA 7470 Tomo 1 folio 278 CMCPSI 6565 Libro 10 Folio 60 adherido/a al Sistema Coldwell Banker Grupo Morada, C.U.I.T.: 23175138714, Colectora Oeste, KM 49, 5 Ramal Pilar, Paralelo 50, Entrada Sur, oficina 210, Pilar y Corredor Bancalari Localidad Pacheco, partido de Tigre. Complejo comercial Euskal Herria Plaza, Local 48.",
  },
];

export default items;
