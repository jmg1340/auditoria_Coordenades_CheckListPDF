let oAudit = {


  
  // idAuditoria: null,
  data: "31/12/2021",
  nomCentre: "Nom del centre",
  tecnic: "Jordi Miserachs",

  sector: "Sector XX",
  domicili: "Carrer Tal, numero qual, codi postal ciutat",
  DC: "Nom del director del centre",
  interlocutors: "nom director, JASP",



  // INSTALACIONS I COMUNICACIONS

  instalacionsComunicacions: {

    informacioPrevia: {

      CA: {
        codi: "ASXXXX",
        idSiteBT: 1234567,
        totalUsuaris: 10,
        Linia1: "Linia dades principal",
        Linia2: "Linia dades backup",
        CiscPrime: {
          NumRouters: 1,
          NumSwitchs: 3,
          NumAPsWifi: 2
        },
        CuesImpressioMTF: 1,
        CuesImpressio: 5
      },
      TareasRequeridas:{
        RetirarMinipacsDelRack: true,
        RevisarCascosJabra: true,
        RetirarDelRack: true,
        Otras: null
      }
    },



    sala: {
      existeix: null,     // propietat NO Rafa. Aportada per JMG
      centreSecundari: {
        existeix: true,
        idCentrePrincipal: "aaa"
      },

      accessibilitat: {
        cerraduraPorta: {
          existeix: null,
          observacions: "observacions cerradura Porta"
        },
        estatPorta: "abierta",	// oberta / tancada
        zonaPasLliure: {
          existeix: true,
          observacions: "observacions zona de pas lliure",
        },
      },

      proveidorWAN: {
        estatInstalacio: "correcto",	// valor entre 1 - 5
        instalacionsObsoletes: {
          existeix: false,
          observacions: "observacions instalacions obsoletes"
        },
        idLinia1: {
          existeix: true,
          observacions: "observacions idLinia 1"
        },
        idLinia2: {
          existeix: false,
          observacions: "observacions idLinia 2"
        },
        estatConvertidorLinia1: "deficiente", 	// valor 1 - 5
        estatConvertidorLinia2: "mejorable",	// valor 1 - 5
      },

      SAI : {
        estatSAI: "aceptable",	// valor 1 - 5
        connexioSwitch: {
          existeix: false,
          connexioPortSW1Gi26: true,
          connexio: {
            SW: "SW2",
            port: 23
          }

        },
        instalacioSAI: "sueloJuntoRack",	// opcions: enrackat; a terra dins el rack; al terra junt al rack
        elementsConnectatsSAI: {
          router: true,
          switchs: true,
					switch1: true,
					switch2: true,
					switch3: true,
          convertidorLinia1: true,
          convertidorLinia2: true,
					raspberry: true,
					filMusical: true,
					ampliFilM: true,
          altres: true
        },
        elementsRegletaNeta: {
          router: true,
          switchs: true,
					switch1: true,
					switch2: true,
					switch3: true,
          convertidorLinia1: true,
          convertidorLinia2: true,
					raspberry: true,
					filMusical: true,
					ampliFilM: true,
          altres: true
        },
        elementsRegletaBruta: {
          router: true,
          switchs: true,
					switch1: true,
					switch2: true,
					switch3: true,
          convertidorLinia1: true,
          convertidorLinia2: true,
					raspberry: true,
					filMusical: true,
					ampliFilM: true,
          altres: true
        },
      },

      aspecteSala: "deficiente",	// valor 1 - 5
      climatitzacio: {
        existeix: true,
        observacions: "observacions climatitzacio"
      },
      ventilacio: {
        existeix: true,
        observacions: "observacions ventilacio"
      },
      latiguillos: {
        existeix: true,
        observacions: "observacions latiguillos"
      },
      // numRacksAdecuats: {
      //   existeix: true,
      //   observacions: "observacions num racks adecuat"
      // },
      elementsBaixaInventari: {
        existeix: false,
        observacions: "observacions elements baixa inventari"
      },

      numRacks: 3,
      numRacksAdecuat: {
        existeix: true,
        observacions: "observacions num racks adecuat"
      },


      racks: [

        {
          idRack: null,
          ubicacio: "ubicacio rack 1",
          tipusRack: "armario",
          estatGeneral: "muy deficiente",
          aspecteNeteja: "muy deficiente",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "muy deficiente",
            pPanels: {
              numPPanelActius: 3,
              categoriesPPanel: "cat6"
            },
            estatTerminacions: "muy deficiente",
            duplicadorPorts: false,
            cablejatObsolet: true
          },
          electricitat: {
            estat: "muy deficiene",
            regletaSuministramentNet: true,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "Obs rack 1"
        },

        {
          idRack: null,
          ubicacio: "sala administracio",
          tipusRack: "cofre",
          estatGeneral: "deficiente",
          aspecteNeteja: "deficiente",
          pany: {
            existeix: false,
            clauAlPany: true,
            estatPany: "cerrada"
          },
          zonaPasLliure: true,
          cablejat: {
            aspecte: "deficiente",
            pPanels: {
              numPPanelActius: 5,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "mejorable",
            duplicadorPorts: false,
            cablejatObsolet: true
          },
          electricitat: {
            estat: "deficiente",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: true,
            observacions: "obs electricitat"
          },
          ventilacio: false,
          dispositiusObsolets: true,
          observacions: "obs rack 2"
        },

        {
          idRack: null,
          ubicacio: "ubicacio rack 3",
          tipusRack: "cofre",
          estatGeneral: "aceptable",
          aspecteNeteja: "aceptable",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "aceptable",
            pPanels: {
              numPPanelActius: 4,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "aceptable",
            duplicadorPorts: true,
            cablejatObsolet: false
          },
          electricitat: {
            estat: "aceptable",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "obs rack 3"
        },

        {
          idRack: null,
          ubicacio: "ubicacio rack 4",
          tipusRack: "cofre",
          estatGeneral: "mejorable",
          aspecteNeteja: "mejorable",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "mejorable",
            pPanels: {
              numPPanelActius: 4,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "mejorable",
            duplicadorPorts: true,
            cablejatObsolet: false
          },
          electricitat: {
            estat: "mejorable",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "obs rack 4"
        },

        {
          idRack: null,
          ubicacio: "ubicacio rack 5",
          tipusRack: "cofre",
          estatGeneral: "correcto",
          aspecteNeteja: "correcto",
          pany: {
            existeix: true,
            clauAlPany: false,
            estatPany: "abierta"
          },
          zonaPasLliure: false,
          cablejat: {
            aspecte: "correcto",
            pPanels: {
              numPPanelActius: 4,
              categoriesPPanel: "cat5e"
            },
            estatTerminacions: "correcto",
            duplicadorPorts: true,
            cablejatObsolet: false
          },
          electricitat: {
            estat: "correcto",
            regletaSuministramentNet: false,
            regletaSuministramentBrut: false,
            observacions: "obs electricitat"
          },
          ventilacio: true,
          dispositiusObsolets: false,
          observacions: "obs rack 5"
        }


			]
    },


    llocsDeTeball : {
      estatCablejat: "aceptable", 	// valor 1 - 5

      puntsXarxa: {
        estat: "deficiente",	// valor 1 - 5
        identificacio: {
          existeix: true,		// true / false
          observacions: "observacions punts identificacio punts xarxa"
        },
        suficientsPunts: {
          existeix: false, 	// true / false
          observacions: "observacins punts suficients"
        },
        miniSwitchs: {
          existeix: true, 	// true / false
          observacions: "observacions miniswitchs"
        }
      },

      electricitat: {
        estat: "correcto",	// valor 1 - 5
        suficientsEndolls: {
          existeix: false,		// true / false
          observacions: "observacions suficients endolls"
        },
        regletes: {
          existeix: true, 	// true / false
          observacions: "observacions regletes"
        },
        regletesCascada: {
          existeix: false, 	// true / false
          observacions: "observacions regletes en cascada"
        }
      },

      observacions: "observacions generals dels llocs de treball"
    },

    LAN : {

      SWidentificats: {  // estan identificats ?
        existeix: true,		// true / false
        observacions: "observacions switchs identificats"
      },
      wifiAPs: {
        quantitat: 2,
        ubicacio: {
          salaEspera: false,
          altres: "ubicades en un altre lloc"
        },
        APvisible: {  // estan identificats ?
          existeix: false,		// true / false
          observacions: "observacions app visible"
        },
        coberturaPROAS: {  // estan identificats ?
          existeix: false,		// true / false
          observacions: "observacions cobertura PROAS"
        },
        carteleriaWifi: {  // estan identificats ?
          existeix: true,		// true / false
          observacions: "observacions carteleria wifi"
        },
        observacions: "observacions AP wifi"
      },

      NumCuesImpressioMTF: 1,
      NumCuesImpressio: 6,
      altresDispositius: "altres dispositius",
      coberturaWifi: {
        dbProas: "4 dbs",
        dbSalaReunions: "6 dbs",
        altre1: {
          lloc: "lloc Altre1",
          dbAltre1: "dbs altre1"
        },
        altre2: {
          lloc: "lloc Altre2",
          dbAltre2: "dbs altre2"
        },
        observacionsCoberturaWifi: "observacions cobertura wifi"
      },
      observacions: "observacions generals LAN",
    },


    equipamentConexions: {
      connexioPortSW1Gi23: true,
      altraConnexioSW: "SW1",
      altraConnexioGi: 26,
    },

    pendriveBIOS : {
      existeix: true,		// true / false
      ubicacio: "ubicacio",
      observacions: "observacions pendrive BIOS"
    },

    filMusical: {
      existeix: true,
      connexioSwitch: "SW2",
      connexioPort: 24,
      observacions: "observacions fil musical"
    },

    telemedicina : {
      existeix: true, 	// true / false
      observacions: "observacions telemedicina",
      dispositius: {
        TV32: true,		// true / false
        Jabra510: true,	// true / false
        camaraIP: true,	// true / false
        DisplayPort: true, 	// true / false
      },
      estat: "deficiente",	// valor 1 - 5
    },

    LectorCDDVDExtern : {
      existeix: false,		// true / false
      observacions: "observacions lector cd extern"
    },

    observacions: "observacions intalacions i comunicacions"

  },



  // COMUNICACIONS UNIFICADES

  comunicacionsUnificades : {
    salaReunions: {
      existeix: true,
      numero: 2,
      capacitat: "capacitat sala reunions",
      mides: "mides sala reunions",
      dispositius: {
        SX10: true,		// true / false
        SX80: true,		// true / false
        roomkit: true,	// true / false
        DX80: true,	// true / false
        camaraWeb: true,  // true / false
        tablet: true, 	// true / false
        mando: true,		// true / false
        altaveu: true, 	// true / false
        TV: true,		// true / false
        projector: true, // true / false
        PC: true, // true / false
        displayPortHDMI: true, 	// true / false
        conversorVGA_HDMI: true,	// true / false
        cableAudio: true,	// true / false
        duplicadorHDMI: true,	// true / false
      },
      recomanacions: {
				renovarPorjector: true,
				dotacioWebCam: true,
				DotacioJabra: true,
				altres: "altres recomanacions"
			},
    },
    videoconferencia : {
      // existeix: null, 	// true / false
      // observacionsExistencia: null,
      operativa: true,	// true / false
      observacionsOperativa: "observacions videoconferencia operativa",
      // estat: null,		// valor 1 - 5
      prova: {
        feta: true,
        observacions: "observacions prova",
        trucada: true,	// true / false
        compartirPc: true, // true / false
        audio: true,	// true / false
        video: true, 	// true / false
        resultat: "aceptable",	// valor 1 - 5
      },
      // observacions: null
    },

    telefonSupervivencia : {
      existeix: true,		// true / false
      observacionsExistencia: "observacions existencia telefon",
      DDI: "xxx.xxx.xxx",
      instruccions: false,
      estat: "deficiente",		// valor 1 - 5
      ubicacio: "ubicacio telefon supervivencia",
			resultatProva: "correcto",
      prova : {
        trucadaSortint: true,	// true / false
        trucadaEntrant: true, 	// true / false
        desconectarTensio: true,
        nivellAudioRing: true
      },
      nivellCobertura: 2,
      nivellBateria: "3",
      connectatCorrent: true,
      instruccionsProperes: false,
      observacions: "observacions telefon supervivencia",
    },

    auricularsRecanvi: {
      existeix: true,		// true / false
      observacions: "observacions auriculars recanvi",
      quantitat: 3,	// numero
    },

		observacions: "observacions comunicacions unificades"

  },


  // SEGURETAT DE LA INFORMACIO

  seguretatInformacio : {

    taulesNetes : {
      documentacioSobreTaules: {
        existeix: true,		// true / false
        observacions: "observacons documentacio sobre taules"
      },
      documentacioImpresores : {
        existeix: false,		// true / false
        observacions: "observacions documentacio impresores"
      },
      documentacioPapeleres : {
        existeix: true,		// true / false
        observacions: "observacions documentacio papereres"
      }
    },

    destruccioDocuments: {
      destructoraPapers: {
        existeix: false,			// true / false
        observacionsPapers: "observacio destructora papers",
        complementCDs: true,	// true / false
        observacionsCDs: "observaciosns complement CDs",
        quantitat: 3,		// numero
      },
      contenidorSegur: {
        existeix: false,			// true / false
        observacions: "observacions contenidors segurs",
        quantitat: 2,		// numero
      }
    },

    OrientacioPantalles: {
      exterior: true, 		// true / false
      observacionsExterior: "observacions orientacio exterior pantalles",
      zonaPas: false, 			// true / false
      observacionsZonaPas: "observacions zona pas"
    },

    carteleriaLOPD: {
      PROAS: true, 		// true / false
      observacionsPROAS: "observacions cartelleria LOPD dels PROAS",
      CEX: false, 			// true / false
      observacionsCEX: "observacions cartelleria LOPD CCEE"
    },

    materialBaixaInventari: {
      existeix: true, 	// true / false
      observacions: "observacions material baixa"
    },

    suportsFisics: {
      existeix: true, 	// true / false
      observacions: "observacions suports fisics"
    },

    documentacioSensible: {
      existeix: false, 	// true / false
      observacions: "observacions documentacio sensible"
    },

    expedientsGreus: {
      existeix: true, 	// true / false
      observacions: "observacions expedients greus"
    },



    accesAlCentre : {
      personalIntern: {
        usuarisAmbClaus: {
          existeix: true,		// true / false
          observacions: "observacions acces personal intern" 	// numero
        },
        codisAlarma: {
          tipus: "individuales",		// individuals / generic
          observacions: "observacions codis alarma personal intern" 	// numero
        },
      },
      personalExtern: {

        llibreRegistre: {
          existeix: false,		// true / false
          observacions: "observacions llibre registre personal extern" 	// numero
        },
        usuarisAmbClaus: {
          existeix: true,		// true / false
          observacions: "observacions usuaris externs amb claus personal extern" 	// numero
        },
        codisAlarma: {
          tipus: "genericos",		// individuals / generic
          observacions: "observacions codis alarma personal extern" 	// numero
        },
      },
      accesForaHorariHabitual: {
        existeix: true,		// true / false
        observacions: "observacions acces fora horari habitual" 	// numero
      },

      observacions: "observacions acces al centre",
    },





    // seguridad fisica i del entorno


    alarmaIntrusio: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },
    alarmaIncendis: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    videovigilancia : {
      existeix: null,		// true / false
      observacions: null,
      gestioInterna: {
        existeix: null,
        observacions: null,
        gravacioImatges: {
          personalAmbAcces: null,
          periodeConservacio: null
        },
      },
      gestioExterna: {
        existeix: null,
        observacionsExistencia: null,
        periodeConservacio: null,
        evidencia: null,
        observacionsEvidencia: null
      },

      retol: {
        existeix: null,		// true / false
        observacions: null 	// numero
      },
      carteleriaActualitzada: {
        existeix: null,		// true / false
        observacions: null 	// numero
      },
    },



    // Seguretat de les operacions

    // continuidad de negocio

    centresAlternatiusGADA: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    telefonSupervivencia: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    procedimentsPaper: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    pendriveEmergencia: {
      ubicacioCorrecte : {
        existeix: null,		// Esta en un sobre enganxat al rack ?
        observacions: null
      },
      ultimaVersio : {
        existeix: null,		// true / false
        observacions: null
      },
      actualitzacio : {
        feta: null, 	// true / false
        observacions: null
      },
    },


    // seguretat de les comunicacions

    accesSegurSalaComunicacions: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    accesSegurRack: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    SAIRack: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    puntsXarxaSalaEspera: {
      existeix: null,		// true / false
      observacions: null 	// numero
    },

    observacions: null

  },

  formacio: {
    auriculars: {
      formacioFeta: null,
      observacions: null
    },

    videoconferencia: {
      formacioFeta: null,
      instruccionsEntregades: null,
      observacions: null
    },

    llicenciesM3: {
      formacioFeta: null,
      observacions: null
    },

    telefonSupervivencia: {
      formacioFeta: null,
      observacions: null
    },

    observacions: null
  },

  valoracions: {
    usuari: {
      queixes: null,
      suggeriments: null,
      millores: null
    },

    tecnic: {
      valoracions: null
    }
  },

  accionsMillora: {
    observacions:{
      rack:{
        neteja: false,
        sanejar: false,
        retirarPatchP: false,
        retirarRack: false
      },
      wanSanejar: false,
      sala: {
        neteja: false,
        retirarObjectes: false
      },
      SAI: {
        revisoDispNoConnectats: false,
      },
      enviarPendriveBIOS: false,
      enviarLatiguillos: false,
      llocsTreball: {
        ampliacioPuntsXarxa: false,
        revisarPresesXarxa: false,
        revisarCaixaConexions: false,
      },
      revisarTelemedicina: false,
      revisarVideoconferencia: false,
      enviarWebcam: false,
      CU: {
        enviarAuricularsReserva: false,
        enviarAltaveu: false,
      },
      enviarLectorCDDVD: false,
      renoveProjector: false,
      altres: null
    },

    NC: {
      enviarPendriveEmergencia: false,
      solicitarDestructoraPaper: false,
      solicitarContenidor: false,
      visibilitatPantalles: false,
      salaRackSenseClau: false,
      rackSenseClaus: false,
      carteleriaLOPD: false,
      suportsBackup: false,
      docsSensibles: false,
      altres: null
    }
  }

}
