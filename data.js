// ============================================
// DONNÉES RÉELLES U18F 25/26
// Source : DATAS U18F 25_26.xlsx
// ============================================

const PERIODS = ['Septembre', 'Novembre', 'Janvier', 'Mai'];

const DATA = {
  "Alina": { poste:"1re Ligne", stats:{
    Septembre:{taille:null,poids:70.4,yoyo:560,palier:15,dc_1rm:37.5,tirage_1rm:42.5,sdt_1rm:85,v10:2.11,v20:3.76,v25:4.6,v50:8.78,broad:170},
    Novembre:{poids:70.7,yoyo:560,palier:14.1,flex:21.8,ext:30.83,dc_1rm:42.5,tirage_1rm:50,sdt_1rm:95,hipthrust:125,v10:2.04,v20:3.66,v25:4.44,v50:8.41},
    Janvier:{poids:70.4,yoyo:480,palier:14.4,dc_1rm:null,squat_1rm:70,v10:2.15,v20:3.75,v30:5.38,v40:7.05,broad:null},
    Mai:{yoyo:480,palier:14.1,dc:42.5,tirage:50,broad:182,v10:2.1,v20:3.7,v30:5.18,v40:6.76}
  }},
  "Amaia": { poste:"Demi-mêlée", stats:{
    Septembre:{poids:61.5,yoyo:1480,palier:17,dc_1rm:37.5,tirage_1rm:47.5,sdt_1rm:75,v10:1.97,v20:3.43,v25:4.28,v50:7.74,broad:193},
    Novembre:{poids:61.7,yoyo:1480,palier:13.3,flex:20.6,ext:33.39,dc_1rm:45,tirage_1rm:50,sdt_1rm:125,hipthrust:120,v10:1.82,v20:3.26,v25:3.92,v50:7.27,broad:200},
    Janvier:{poids:62.8,yoyo:1240,palier:16.4,dc_1rm:50,squat_1rm:70,v10:1.81,v20:3.17,v30:4.49,v40:5.87,broad:191},
    Mai:{yoyo:1120,palier:16.1,dc:52.5,tirage:50,broad:200,v10:1.88,v20:3.26,v30:4.56,v40:5.88}
  }},
  "Andréa": { poste:"1re Ligne", stats:{
    Septembre:{poids:77.1,yoyo:560,palier:null,dc_1rm:null,tirage_1rm:null,sdt_1rm:52.5,v10:2.02,v20:3.52,v25:4.3,v50:8.11,broad:193},
    Novembre:{taille:76,poids:null,yoyo:560,palier:15.2,flex:25.9,ext:34.08,dc_1rm:60},
    Janvier:{palier:13.3,yoyo:400,dc_1rm:90,v10:1.97,v20:3.41,v30:4.78,v40:6.06,broad:166},
    Mai:{}
  }},
  "Annaelle": { poste:"1re Ligne", stats:{
    Septembre:{poids:89.2,yoyo:440,palier:13.5,dc_1rm:45,tirage_1rm:60,sdt_1rm:95,v10:2.23,v20:3.9,v25:4.88,v50:9.39,broad:170},
    Novembre:{taille:87.4,yoyo:440,palier:21.5,flex:25.6,ext:29.29,dc_1rm:50,tirage_1rm:60,sdt_1rm:125,hipthrust:140,v10:2.11,v20:3.7,v25:4.6,v50:8.71},
    Janvier:{poids:86.65,yoyo:440,palier:13.4,dc_1rm:53,v10:2.02,v20:3.5,v30:4.96,v40:6.53,broad:157},
    Mai:{yoyo:440,palier:13.4,dc:55,tirage:60}
  }},
  "Augustine": { poste:"3e Ligne", stats:{
    Septembre:{poids:64,yoyo:1400,palier:18.5,dc_1rm:50,tirage_1rm:50,sdt_1rm:105,v10:1.94,v20:3.32,v25:4.07,v50:7.5,broad:202},
    Novembre:{taille:64.1,yoyo:1400,palier:9.8,flex:25.7,ext:40.09,dc_1rm:58,tirage_1rm:55,sdt_1rm:130,hipthrust:165,v10:1.84,v20:3.22,v25:3.98,v50:7.21,broad:210},
    Janvier:{poids:65.4,yoyo:1160,palier:15.8,dc_1rm:60,squat_1rm:85,v10:1.95,v20:3.29,v30:4.63,v40:5.95,broad:198},
    Mai:{yoyo:1080,palier:15.8,dc:55,tirage:58,broad:195,v10:1.91,v20:3.26,v30:4.59,v40:5.87}
  }},
  "Calliopée": { poste:"3e Ligne", stats:{
    Septembre:{poids:63.4,palier:17.5,dc_1rm:45,tirage_1rm:48,sdt_1rm:100,v10:1.95,v20:3.39,v25:4.11,v50:7.71},
    Novembre:{taille:65,dc_1rm:50,tirage_1rm:60,sdt_1rm:110,hipthrust:150,v10:1.96,v20:3.46,v25:4.24,v50:7.9},
    Janvier:{},
    Mai:{dc:40,tirage:53,broad:205,v10:1.94,v20:3.44,v30:4.87,v40:6.27}
  }},
  "Camille": { poste:"1re Ligne", stats:{
    Septembre:{poids:72.5,yoyo:400,palier:12.5,dc_1rm:35,tirage_1rm:40,sdt_1rm:80},
    Novembre:{yoyo:400},
    Janvier:{},
    Mai:{tirage:50}
  }},
  "Candice": { poste:"Centre", stats:{
    Septembre:{poids:65.5,yoyo:560,v10:1.99,v20:3.53,v25:4.15,v50:7.93,broad:197},
    Novembre:{}, Janvier:{}, Mai:{}
  }},
  "Charlotte": { poste:"Ailier/Arrière", stats:{
    Septembre:{poids:59.3,yoyo:1400,palier:18.5,dc_1rm:37.5,tirage_1rm:45,sdt_1rm:90,v10:1.92,v20:3.32,broad:187},
    Novembre:{taille:59.6,yoyo:1400,palier:14.6,flex:25.5,ext:42.79,dc_1rm:45,tirage_1rm:47.5,sdt_1rm:125,hipthrust:150,v10:1.82,v20:3.19,v25:3.91,v50:7.14},
    Janvier:{poids:61.25,squat_1rm:45,v10:1.93,v20:3.31,v30:4.61,v40:5.94},
    Mai:{dc:45,tirage:50,broad:209,v10:1.8,v20:3.13,v30:4.39,v40:5.6}
  }},
  "Ciara": { poste:"3e Ligne", stats:{
    Septembre:{poids:59,yoyo:680,palier:16,dc_1rm:30,tirage_1rm:42.5,sdt_1rm:70,v10:2.13,v20:3.73,v25:4.41,v50:8.49,broad:180},
    Novembre:{taille:61,yoyo:680,palier:12.1,flex:28.4,ext:46.56,dc_1rm:35,tirage_1rm:45,sdt_1rm:110,hipthrust:90,v10:2,v20:3.53,v25:4.19,v50:7.8,broad:199},
    Janvier:{poids:62.3,yoyo:960,palier:15.5,dc_1rm:42.5,squat_1rm:70,v10:1.85,v20:3.24,v30:4.62,v40:6.05,broad:184},
    Mai:{dc:42.5,tirage:45}
  }},
  "Clara": { poste:"Ailier/Arrière", stats:{
    Septembre:{poids:65.9,yoyo:960,dc_1rm:37.5,tirage_1rm:37.5,sdt_1rm:70,v10:1.71,v20:3.1,v25:3.73,v50:6.94},
    Novembre:{taille:68,yoyo:960,palier:12.7,flex:25.9,ext:38.09,dc_1rm:42.5,tirage_1rm:50,sdt_1rm:90,hipthrust:120,v10:1.79,v20:3.12,v25:3.76,v50:6.93,broad:215},
    Janvier:{yoyo:960,v10:1.73,v20:2.99,v30:4.2,v40:5.47,broad:214},
    Mai:{}
  }},
  "Danaé": { poste:"2e Ligne", stats:{
    Septembre:{palier:17,dc_1rm:42.5,tirage_1rm:40,sdt_1rm:80,v10:2.13,v20:3.72,v25:4.43,v50:8.36,broad:178},
    Novembre:{taille:65,flex:21,ext:32.31,dc_1rm:45,tirage_1rm:45},
    Janvier:{poids:65.4,dc_1rm:45},
    Mai:{dc:40,tirage:40}
  }},
  "Elyna": { poste:"1re Ligne", stats:{
    Septembre:{poids:80.1,yoyo:560},
    Novembre:{taille:79.5,yoyo:560,v10:1.98,v20:3.54,v25:4.2,v50:8},
    Janvier:{v10:1.96,v20:3.44,v30:4.94,v40:6.47},
    Mai:{broad:190,v10:1.93,v20:3.4,v30:4.85,v40:6.27}
  }},
  "Emilie": { poste:"3e Ligne", stats:{
    Septembre:{poids:71.4,yoyo:640,palier:16.5,dc_1rm:45,tirage_1rm:45,sdt_1rm:95,v10:2.04,v20:3.59,v25:4.33,v50:8.09,broad:187},
    Novembre:{taille:72.6,yoyo:640,palier:14.6,flex:25.9,ext:35.67,dc_1rm:50,tirage_1rm:55,sdt_1rm:130,hipthrust:160,v10:1.9,v20:3.36,v25:4.15,v50:7.71},
    Janvier:{poids:74.8,yoyo:840,palier:15.1,dc_1rm:50,squat_1rm:80,v10:1.84,v20:3.28,v30:4.64,v40:6.09,broad:187},
    Mai:{yoyo:840,palier:15.2,dc:53,tirage:60,broad:189,v10:1.87,v20:3.3,v30:4.64,v40:5.97}
  }},
  "Faustine": { poste:"3e Ligne / 1re Ligne", stats:{
    Septembre:{poids:72.3,yoyo:440,palier:14,dc_1rm:40,tirage_1rm:50,sdt_1rm:90,v10:2.15,v20:3.84,v25:4.73,v50:9.18,broad:180},
    Novembre:{taille:70,yoyo:440,palier:13.9,flex:21.1,ext:30.14,dc_1rm:45,tirage_1rm:52.5,sdt_1rm:112.5,hipthrust:110,v10:2.08,v20:3.73,v25:4.5,v50:8.49,broad:179},
    Janvier:{poids:73},
    Mai:{dc:55,tirage:57.5}
  }},
  "Ines": { poste:"2e Ligne", stats:{
    Septembre:{poids:61.1,palier:13,dc_1rm:30,tirage_1rm:40,sdt_1rm:75,v10:2.19,v20:3.88,v25:4.67,v50:9.66,broad:153},
    Novembre:{taille:64,flex:21.1,ext:32.97,broad:172},
    Janvier:{poids:68.25,yoyo:400,dc_1rm:32.5,squat_1rm:40,v10:2.11,v20:3.66,v30:5.19,v40:6.79},
    Mai:{dc:35,tirage:45}
  }},
  "Ines R": { poste:"Demi-mêlée", stats:{
    Septembre:{poids:54.55,yoyo:1040,palier:17,dc_1rm:40,tirage_1rm:35,sdt_1rm:75,v10:2.08,v20:3.66,v25:4.44,v50:8.38,broad:196},
    Novembre:{taille:54.1,yoyo:1040,palier:14.7,flex:22.8,ext:42.14,dc_1rm:40,tirage_1rm:45,sdt_1rm:90,hipthrust:130,v10:1.9,v20:3.38,v25:4.19,v50:7.86},
    Janvier:{yoyo:1120,dc_1rm:40,squat_1rm:60,v10:1.87,v20:3.27,v30:4.61,v40:6.06,broad:200},
    Mai:{yoyo:880,palier:15.3,dc:40,tirage:40,broad:193,v10:1.95,v20:3.48,v30:4.86,v40:6.31}
  }},
  "Jade": { poste:"3e Ligne", stats:{
    Septembre:{poids:54.5,yoyo:1000,palier:15.5,dc_1rm:32.5,tirage_1rm:40,sdt_1rm:75,v10:2.19,v20:3.92,v25:4.68,v50:8.92,broad:160},
    Novembre:{taille:55,yoyo:1000,palier:10.2,flex:18.9,ext:34.36,dc_1rm:35,tirage_1rm:55,sdt_1rm:100,hipthrust:110,v10:2.01,v20:3.58,v25:4.3,v50:8.17,broad:190},
    Janvier:{poids:51.25,yoyo:960,palier:15.5,dc_1rm:45,squat_1rm:75,v10:1.96,v20:3.47,v30:4.93,v40:6.53,broad:178},
    Mai:{yoyo:640,palier:14.5,dc:42.5,tirage:55,broad:184,v10:1.95,v20:3.45,v30:4.89,v40:6.37}
  }},
  "Kélia": { poste:"Centre", stats:{
    Septembre:{poids:60.2,yoyo:960,palier:16.5,dc_1rm:32.5,tirage_1rm:35,sdt_1rm:70,v10:1.91,v20:3.32,v25:3.97,v50:7.38,broad:207},
    Novembre:{taille:59.6,yoyo:960,dc_1rm:35,tirage_1rm:42.5,sdt_1rm:100,v10:1.77,v20:3.14,v25:3.82,v50:7.08},
    Janvier:{yoyo:1000,v10:1.79,v20:3.11,v30:4.39,v40:5.71,broad:215},
    Mai:{}
  }},
  "Kira": { poste:"1re Ligne", stats:{
    Septembre:{poids:83.7,yoyo:560,palier:15.5,dc_1rm:50,tirage_1rm:55,sdt_1rm:70,v10:2.3,v20:3.95,v25:4.67,v50:8.65,broad:166},
    Novembre:{taille:83.9,yoyo:560,palier:15,flex:24.1,ext:28.72,dc_1rm:60,tirage_1rm:55,broad:187},
    Janvier:{poids:85.4,yoyo:360,dc_1rm:57.5,squat_1rm:90,v10:1.95,v20:3.45,v30:4.89,v40:6.43,broad:163},
    Mai:{yoyo:560,palier:14.3,dc:60,tirage:60,broad:174,v10:2.01,v20:3.69,v30:5,v40:6.41}
  }},
  "Lily B": { poste:"3e Ligne", stats:{
    Septembre:{poids:59.4,yoyo:1200,palier:17.5,dc_1rm:40,tirage_1rm:50,sdt_1rm:100,v10:2,v20:3.53,v25:4.26,v50:8.04,broad:190},
    Novembre:{taille:62.6,yoyo:1200,palier:19.1,flex:26,ext:41.53,dc_1rm:50,tirage_1rm:60,sdt_1rm:110,hipthrust:150,v10:1.89,v20:3.31,v25:3.96,v50:7.28,broad:202},
    Janvier:{poids:64.5,yoyo:960,palier:15.5,dc_1rm:55,v10:1.9,v20:3.3,v30:4.63,v40:5.95},
    Mai:{yoyo:920,palier:15.4,dc:62.5,tirage:67.5,broad:211,v10:1.89,v20:3.24,v30:4.52,v40:5.81}
  }},
  "Lily N": { poste:"1re Ligne", stats:{
    Septembre:{poids:68.3,yoyo:760,palier:16.5,dc_1rm:45,tirage_1rm:50,sdt_1rm:92.5,v10:2.03,v20:3.55,v25:4.35,v50:8.24,broad:193},
    Novembre:{taille:67,yoyo:760,palier:14.2,flex:31.7,ext:47.31,dc_1rm:50,tirage_1rm:42.5,sdt_1rm:100,hipthrust:160,v10:1.94,v20:3.42,v25:4.27,v50:8.01,broad:202},
    Janvier:{poids:67.8,yoyo:960,palier:15.5,dc_1rm:55,v10:1.93,v20:3.4,v30:4.81,v40:6.34,broad:196},
    Mai:{yoyo:800,palier:15.1,dc:55,tirage:55,broad:210,v10:1.97,v20:3.44,v30:4.84,v40:6.26}
  }},
  "Loréana": { poste:"1re Ligne", stats:{
    Septembre:{poids:81.3,yoyo:440,palier:13.5,dc_1rm:45,tirage_1rm:55,sdt_1rm:95,v10:2.04,v20:3.59,v25:4.38,v50:8.18,broad:180},
    Novembre:{taille:84,yoyo:440,palier:17.6,flex:34.8,ext:41.43,sdt_1rm:125,hipthrust:145},
    Janvier:{palier:13.3,yoyo:480,dc_1rm:55,squat_1rm:90,v10:1.93,v20:3.39,v30:4.81,v40:6.34,broad:202},
    Mai:{yoyo:360,palier:13.2,dc:50,tirage:55,broad:200,v10:1.92,v20:3.38,v30:4.73,v40:6.07}
  }},
  "Louane D": { poste:"Ailier/Arrière", stats:{
    Septembre:{poids:55.6,dc_1rm:50,tirage_1rm:45,sdt_1rm:100,v10:1.84,v20:3.26,v25:3.96,v50:7.48,broad:199},
    Novembre:{taille:55.6,palier:16,flex:26.9,ext:48.38,dc_1rm:50,tirage_1rm:55,sdt_1rm:122.5,hipthrust:140,v10:1.8,v20:3.18,v25:3.8,v50:7.09},
    Janvier:{poids:58.25,dc_1rm:53,squat_1rm:90,v10:1.77,v20:3.09,v30:4.35,v40:5.66,broad:202},
    Mai:{dc:55,tirage:55,broad:208,v10:1.85,v20:3.22,v30:4.53,v40:5.84}
  }},
  "Louanne Dom": { poste:"Centre", stats:{
    Septembre:{poids:69.2,yoyo:760,palier:15.5,dc_1rm:55,tirage_1rm:55,sdt_1rm:90,v10:2.08,v20:3.59,v25:4.31,v50:7.98,broad:200},
    Novembre:{taille:70.3,yoyo:760,palier:13.1,flex:24.9,ext:35.42,dc_1rm:60,tirage_1rm:55,sdt_1rm:120,v10:1.91,v20:3.37,v25:4.1,v50:7.48},
    Janvier:{poids:69.9,yoyo:800,palier:15.1,dc_1rm:65,squat_1rm:90,v10:1.87,v20:3.25,v30:4.55,v40:5.98,broad:207},
    Mai:{yoyo:720,palier:14.7,dc:67.5,tirage:65}
  }},
  "Lylou": { poste:"2e Ligne", stats:{
    Septembre:{poids:71.9,yoyo:440,palier:15.5,dc_1rm:42.5,tirage_1rm:49,sdt_1rm:80,v10:2.05,v20:3.68,v25:4.41,v50:8.5,broad:185},
    Novembre:{taille:74.5,yoyo:440,palier:15.7,flex:32.9,ext:44.16,dc_1rm:45,tirage_1rm:55,sdt_1rm:110,hipthrust:110,v10:1.96,v20:3.5,v25:4.34,v50:8.1,broad:200},
    Janvier:{palier:14.6,yoyo:680,dc_1rm:50},
    Mai:{dc:50,tirage:55}
  }},
  "Maëna": { poste:"Ailier/Arrière", stats:{
    Septembre:{poids:60.1,yoyo:880,palier:15.5,dc_1rm:37.5,tirage_1rm:50,sdt_1rm:80,v10:1.92,v20:3.3,v25:3.99,v50:7.36,broad:203},
    Novembre:{yoyo:880,palier:20.4,flex:25.9,ext:52.5},
    Janvier:{poids:58.6,dc_1rm:52.5,v10:1.86,v20:3.23,v30:4.55,v40:5.82},
    Mai:{yoyo:600,palier:14.4,dc:55,tirage:57.5,broad:223,v10:1.87,v20:3.31,v30:4.42,v40:5.63}
  }},
  "Malaury": { poste:"3e Ligne", stats:{
    Septembre:{poids:64.7,yoyo:1040,palier:16.5,dc_1rm:43,tirage_1rm:50,sdt_1rm:85,v10:2.02,v20:3.52,v25:4.41,v50:8.47,broad:183},
    Novembre:{taille:63.3,yoyo:1040,palier:13.1,flex:26.2,ext:41.39,dc_1rm:50,tirage_1rm:50,sdt_1rm:105,hipthrust:145,v10:1.96,v20:3.47,v25:4.3,v50:8.07},
    Janvier:{poids:64.7,yoyo:960,palier:15.5,dc_1rm:53,squat_1rm:85,v10:1.89,v20:3.35,v30:4.71,v40:6.22,broad:185},
    Mai:{yoyo:880,palier:15.3,dc:53,tirage:48,broad:197,v10:1.94,v20:3.54,v30:4.8,v40:6.2}
  }},
  "Margaux": { poste:"Centre", stats:{
    Septembre:{poids:69.9,yoyo:560,dc_1rm:42.5,tirage_1rm:52.5,sdt_1rm:100,v10:1.94,v20:3.39,v25:4.07,v50:7.62,broad:202},
    Novembre:{taille:70,yoyo:560,v10:1.78,v20:3.17,v25:4,v50:7.4},
    Janvier:{v10:1.74,v20:3.06,v30:4.33,v40:5.74,broad:210},
    Mai:{}
  }},
  "Mathilde": { poste:"Demi-Ouverture / 1re Ligne", stats:{
    Septembre:{poids:74.3,yoyo:360},
    Novembre:{taille:78.9,yoyo:360,sdt_1rm:130},
    Janvier:{yoyo:240,v10:2,v20:3.47,v30:4.91,v40:6.35},
    Mai:{dc:50,tirage:55,v10:1.96,v20:3.43,v30:4.79,v40:6.13}
  }},
  "Maylis": { poste:"Ailier/Arrière / 3e Ligne", stats:{
    Septembre:{poids:54.9,yoyo:1040,palier:17,dc_1rm:37.5,tirage_1rm:49,sdt_1rm:80,v10:1.97,v20:3.47,v25:4.28,v50:8.02,broad:175},
    Novembre:{taille:56.4,yoyo:1040,palier:19.9,flex:20.9,ext:37.06,dc_1rm:42.5,tirage_1rm:52.5,sdt_1rm:110,hipthrust:100,v10:1.88,v20:3.39,v25:3.95,v50:7.39},
    Janvier:{palier:15.5,yoyo:960,dc_1rm:45,squat_1rm:60,v10:1.79,v20:3.14,v30:4.41,v40:5.82,broad:185},
    Mai:{yoyo:840,palier:15.2,dc:45,broad:191,v10:1.81,v20:3.22,v30:4.51,v40:5.87}
  }},
  "Méloée": { poste:"Demi-Ouverture", stats:{
    Septembre:{poids:65.4,yoyo:760,palier:16.5,dc_1rm:55,tirage_1rm:55,sdt_1rm:110,v10:1.99,v20:3.43,v25:4.12,v50:7.61,broad:192},
    Novembre:{taille:67.4,yoyo:760,palier:14.2,flex:19.6,ext:29.08,dc_1rm:60,tirage_1rm:63,sdt_1rm:135,hipthrust:150,v10:1.87,v20:3.27,v25:4.01,v50:7.34},
    Janvier:{poids:68.8,yoyo:800,palier:15.1,dc_1rm:60,squat_1rm:100,v10:1.86,v20:3.18,v30:4.45,v40:5.8,broad:200},
    Mai:{yoyo:760,palier:14.8,dc:60,tirage:63,broad:223,v10:1.9,v20:3.31,v30:4.55,v40:5.81}
  }},
  "Morgane": { poste:"Ailier/Arrière / Centre", stats:{
    Septembre:{poids:65.1,yoyo:1080,palier:17,dc_1rm:35,tirage_1rm:55,sdt_1rm:90,v10:1.95,v20:3.37,v25:4.1,v50:7.69,broad:192},
    Novembre:{taille:64.6,yoyo:1080,palier:16.8,flex:20.4,ext:31.58,dc_1rm:47.5,tirage_1rm:62.5,sdt_1rm:145,hipthrust:140,v10:1.83,v20:3.24,v25:3.96,v50:7.38},
    Janvier:{poids:66.5,yoyo:960,palier:15.5,dc_1rm:80,v10:1.97,v20:3.41,v30:4.79,v40:6.13},
    Mai:{yoyo:760,palier:14.8,dc:50,broad:198,v10:1.88,v20:3.28,v30:4.61,v40:5.91}
  }},
  "Romane": { poste:"Demi-Ouverture", stats:{
    Septembre:{poids:58.1,yoyo:720,palier:15.5,dc_1rm:35,tirage_1rm:42.5,sdt_1rm:75,v10:1.99,v20:3.52,v25:4.22,v50:8.03,broad:189},
    Novembre:{taille:59.4,yoyo:720,palier:16.5,flex:26.8,ext:45.12,dc_1rm:42.5,tirage_1rm:50,sdt_1rm:110,hipthrust:140,v10:1.83,v20:3.26,v25:3.97,v50:7.37},
    Janvier:{poids:59.4,dc_1rm:42.5,squat_1rm:70,v10:1.79,v20:3.15,v30:4.43,v40:5.83,broad:209},
    Mai:{yoyo:680,palier:14.6,dc:45,tirage:55,broad:207,v10:1.83,v20:3.29,v30:4.6,v40:5.97}
  }},
  "Shayna": { poste:"3e Ligne", stats:{
    Septembre:{poids:66.3,yoyo:640,palier:14,dc_1rm:38,tirage_1rm:38.5,sdt_1rm:80,v10:2.19,v20:3.88,broad:164},
    Novembre:{taille:66.2,yoyo:640,palier:14,flex:20.3,ext:30.66,dc_1rm:40,tirage_1rm:50,sdt_1rm:110,hipthrust:140,v10:2.06,v20:3.75,v25:4.75,v50:8.5},
    Janvier:{poids:68.05,dc_1rm:40,squat_1rm:80,v10:2.07,v20:3.62,v30:5.17,v40:6.75},
    Mai:{yoyo:640,palier:14.5,dc:40,tirage:40,broad:187,v10:2,v20:3.52,v30:5,v40:6.51}
  }},
  "Zoé": { poste:"1re Ligne / 2e Ligne", stats:{
    Septembre:{poids:63.9,yoyo:920,palier:17,dc_1rm:50,tirage_1rm:40,sdt_1rm:100,v10:2.07,v20:3.65,v25:4.55,v50:8.64,broad:167.5},
    Novembre:{taille:63.7,yoyo:920,palier:19.8,flex:27.2,ext:42.7,dc_1rm:55,tirage_1rm:60,sdt_1rm:125,hipthrust:145,v10:1.89,v20:3.37,v25:4.21,v50:7.93},
    Janvier:{poids:68.15,yoyo:960,palier:15.5,dc_1rm:60,squat_1rm:90,v10:1.86,v20:3.26,v30:4.59,v40:6.02,broad:189},
    Mai:{yoyo:840,palier:15.2,dc:62.5,tirage:60,broad:195,v10:1.92,v20:3.34,v30:4.69,v40:6.03}
  }}
};
