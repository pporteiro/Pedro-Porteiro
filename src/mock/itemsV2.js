const itemsV2 = [
  {
    id: "0",
    title: "Xiaomi Redmi 9A",
    description: "Smartphone 2 GB + 32 GB, Dual Sim, Grigio (gris granito)",
    price: 112,
    stock: 8,
    category: "mobile",
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
    category: "mobile",
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
    category: "mobile",
    pictureUrl:
      "https://m.media-amazon.com/images/I/719LT7l2iqS._AC_SY741_.jpg",
  },
  {
    id: "3",
    title: "Apple iPhone 13",
    description: "(128GB, Blue) [Locked] + Carrier Subscription",
    price: 829,
    stock: 8,
    category: "mobile",
    pictureUrl: "https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg",
  },
  {
    id: "4",
    title: "iPhone 11 Pro",
    description:
      "Totalmente desbloqueado y compatible con cualquier operador de elección (por ejemplo, AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc. ).",
    price: 407,
    stock: 8,
    category: "mobile",
    pictureUrl:
      "https://m.media-amazon.com/images/I/51+Uw6N7BnL._AC_SX679_.jpg",
  },
  {
    id: "5",
    title: "iPhone 12 Pro",
    description: "128 GB, azul pacífico - desbloqueado (renovado Premium)",
    price: 849,
    stock: 8,
    category: "mobile",
    pictureUrl:
      "https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SX679_.jpg",
  },
  {
    id: "6",
    title: "2021 Apple 12.9-inch iPad Pro - Silver",
    description:
      "Apple M1 chip for next-level performance\nBrilliant 12.9-inch Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color\nTrueDepth camera system featuring Ultra Wide camera with Center Stage\n12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR\nStay connected with ultrafast Wi-Fi\nGo further with all-day battery life\nThunderbolt port for connecting to fast external storage, displays, and docks",
    price: 609,
    stock: 50,
    category: "tablet",
    pictureUrl:
      "https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SX522_.jpg",
  },
  {
    id: "2",
    title: "SAMSUNG Galaxy Tab S7",
    description:
      "PC PERFORMANCE. TABLET PORTABILITY: Transform your tablet into a PC experience with DeX mode and the optional keyboard¹ with expanded trackpad. (Keyboard sold separately)\nENTERTAINMENT, UPGRADED: Experience cinematic viewing with larger edge-to-edge displays, TFT LCD screen, and AKG quad speakers with Dolby Atmos Surround sound.\nREDESIGNED S PEN INCLUDED: With improved 9ms Pen latency, the redesigned S Pen can control presentations and take notes effortlessly.\nCHANGE THE WAY YOU GAME: Bring console gaming anywhere thanks to available Wi-Fi connection, an immersive screen, and Bluetooth-enabled controller².\nCHARGE FAST. POWER FOR HOURS: Go for hours on a single charge³, and back to 100% with the fast-charging USB-C port.\nCAPTURE AND CONNECT: Experience stunning brightness and clarity with the wide 13MP and ultra-wide 5MP dual back, and 8MP front-facing cameras.\nSYNC AND SEND FROM ANY SPACE: Easily sync up and share content with compatible Samsung devices",
    price: 569,
    stock: 16,
    category: "tablet",
    pictureUrl:
      "https://m.media-amazon.com/images/I/711RMrNTakL._AC_SY879_.jpg",
  },
  {
    id: "3",
    title: "10' Windows 10 FWIN232 PLUS S2 Fusion5 Ultra Slim Windows Tablet",
    description:
      " Ultra Slim & Ultra Style: Windows 10 Pro Tablet - the ultimate user experience. This newest version of Windows Tablet PC from Fusion5 is fully-loaded with the latest user-friendly Windows 10 Professional Operating System. The perfect Windows tablet PC for your daily requirement, be it education, office work or industrial use.\nFeature-Rich: With 6GB DDR4 RAM and N3450 quad-core CPU, FWIN232+ S2 is powerful enough to handle your daily tasks. With a front facing webcam (2MP single camera only) and MIC, you can work from home or attend those classes.\n10'' Full HD IPS Screen for Optimal Viewing: FWIN232+ S2 Boasts a full HD IPS Screen making it perfect for viewing our favourite TV shows, movies, Youtube and playing games.\nFusionCharge FastCharge: With FusionCharge FastCharge, charge 80% in 45-50 minutes and 100% in 70-80 minutes.",
    price: 269,
    stock: 6,
    category: "tablet",
    pictureUrl:
      "https://m.media-amazon.com/images/I/812MP-TY6PL._AC_SX679_.jpg ",
  },

  {
    id: "4",
    title: " Acer Swift 3",
    description:
      "AMD Ryzen 7 4700U Octa-Core Mobile Processor (Up to 4.1 GHz) with Radeon Graphics; 8GB LPDDR4 Memory; 512GB PCIe NVMe SSD\n14' Full HD Widescreen IPS LED-backlit display (1920 x 1080 resolution; 16:9 aspect ratio)\nIntel wireless Wi-Fi 6 AX200 802.11ax; HD webcam (1280 x 720); Backlit keyboard; Fingerprint reader\n1 - USB Type-C port USB 3. 2 Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C and USB Charging, 1- USB 3. 2 Gen 1 port (featuring power-off charging), 1 - USB 2. 0 port and 1 - HDMI port\nJust 0.63' thin and 2.65 pounds and up to 11.5 hours of battery life",
    price: 709,
    stock: 23,
    category: "laptop",
    pictureUrl:
      "https://m.media-amazon.com/images/I/81nN5u1MEuL._AC_SX466_.jpg ",
  },

  {
    id: "5",
    title: " 2020 Apple MacBook Pro - Space Gray",
    description:
      "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance\nGet more done with up to 20 hours of battery life, the longest ever in a Mac\n8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever\n8-core GPU with up to 5x faster graphics for graphics-intensive apps and games\n16-core Neural Engine for advanced machine learning\n8GB of unified memory so everything you do is fast and fluid\nSuperfast SSD storage launches apps and opens files in an instant",
    price: 1299,
    stock: 5,
    category: "laptop",
    pictureUrl:
      "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SX522_.jpg ",
  },

  {
    id: "6",
    title: "2020 HP Pavilion 16.1'",
    description:
      "【Upgraded Configuration】 This computer has been upgraded to 32GB DDR4 RAM and 1024GB SSD Hard Drive. RAM is upgraded to 32GB DDR4 memory for multitasking Adequate high-bandwidth RAM to smoothly run multiple applications. The Hard Drive has upgraded to 1024GB SSD provides massive storage space for huge files, so that you can store important digital data and work your way through it with ease.\n【10th Gen Intel Core i7-10750H processor, up to 5.0 GHz】10th Gen Intel Core processor-powered systems take a huge leap forward in gaming, streaming and creativity, pushing a smooth, detailed, and vivid experience on highly portable devices. Intel Turbo Boost Technology delivers dynamic extra power when you need it.\n【16.1' FHD display】Make every level mesmerizing with a 144Hz, 16-inch, micro-edge, Full HD display. Along with enhanced Audio by B&O, you can see, do, hear, and play more without carrying more. Backlit keyboard: enjoy accurate typing, even in dim lighting.\n【NVIDIA GeForce GTX 1650Ti Graphics】Hit the sweet spot of ultimate GeForce gaming and impossibly sleek design with NVIDIA GTX graphics, designed to deliver the gaming performance you need in a thin, light form factor. Backed by 4GB GDDR6 dedicated video memory for a fast, advanced GPU to faster video and photo editing.",
    price: 1999,
    stock: 11,
    category: "laptop",
    pictureUrl:
      "https://m.media-amazon.com/images/I/710tjfg+TBL._AC_UY218_.jpg ",
  },
];

export default itemsV2;
