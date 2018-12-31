import { Component } from '@angular/core';


declare var jsPDF: any; // Important

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libraries-export-app';


  imprimeJson(){


    var tablaSegundaPagina = {
      has_contrato : "ha descripcion",
      grower: "nombre_agricultor descripcion",
      parent_lines_male:"lines males",
      parent_lines_female:"lines female",
      male_basic_seed:"male basic seed",
      female_basic_seed:"female basic seed",
      sowing_date_female:"sowing date female ",
      sowing_date_male1:"sowing date male 1",
      sowing_date_male2:"sowing date male 2"
    };

    var arraytablaSegundaPagina = [];
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Primera fila
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Segunda fila
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Tercera fila
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Cuarta fila
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Quinta fila
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Sexta fila
    arraytablaSegundaPagina.push(tablaSegundaPagina); // Enésima fila


    console.log("\nTABLA DE PRIMERA PÁGINA <= No es primordial esta tabla. Enfocarse en el informe más abajo\n");
    for(var i=0;i<arraytablaSegundaPagina.length;i++){      
      var arrayIn = arraytablaSegundaPagina[i];
      for (var key in arrayIn){
        if (arrayIn.hasOwnProperty(key)) {
          //console.log("Valores: ",key,":",arrayIn[key]);
        }
      }

    }





    var informe = {
      /*Esta es la tabla superior*/
      nombre_variedad: "nombre_variedad descripcion",
      nombre_agricultor:"nombre_agricultor descripcion",
      locality: "locality descripcion",
      ha: "ha descripcion",
      flowering_start_female: "flowering_start_female descripcion",
      flowering_start_male: "flowering_start_male descripcion",      
      flowering_end_female: "flowering_end_female descripcion",
      flowering_end_male: "flowering_end_male descripcion",      
      crop_story:[/*Este array es de máximo 4 y mínimo zero*/
        {
          year: "2018",
          detail:"Canola"
        },
        {
          year: "2017",
          detail:"Maravilla"
        },
        {
          year: "2016",
          detail:"Maiz"
        },
        {
          year: "2015",
          detail:"Frejol"
        }
      ],
      isolation:"isolation descripcion",
      trimming_female:"trimming_female descripcion",
      trimming_male:"trimming_male descripcion",
      seeding_date_female:"seeding_date_female descripcion",
      seeding_date_male:"seeding_date_male descripcion",
      bee_in_field:"bee_in_field descripcion",
      estimated_yield_potential:"estimated_yield_potential descripcion",
      average_plant:"average_plant descripcion",
      /*Van 2 imágenes*/
      images:[{
        path: "http://localhost/imagen1.jpeg"
      },{
        path: "http://localhost/imagen2.jpeg"
      }],
      /*Tabla final*/
      estado_general: "Buena",
      estado_crecimiento: "Buena", 
      estado_malezas: "Regular",
      estado_fitosantiario:"Buena", 
      humedad_suelo: "Buena"
    };
    /*Los posibles valores para los estado tienen diferentes colores*/  
    /* 
      Excelente : Azul
      Buena: Verde
      Regular: Amarillo
      Mala: Rojo
      Sin Especificar: Plomo
      Baja : Plomo  /  Si es estado_malezas y Baja : Verde
      Alta : Verde  /  Si es estado_malezas y Alta : Rojo
    */ 

    var array = [];
    array.push(informe); // Primera página | El informe traerá otros datos por cada array
    array.push(informe); // Segunda página | El informe traerá otros datos por cada array
    array.push(informe); // Tercera página | El informe traerá otros datos por cada array
    array.push(informe); // Cuarta página | El informe traerá otros datos por cada array
    array.push(informe); // Quinta página | El informe traerá otros datos por cada array
    array.push(informe); // Sexta página | El informe traerá otros datos por cada array
    array.push(informe); // Enésima página | El informe traerá otros datos por cada array


    for(var i=0;i<array.length;i++){
      console.log("\nPágina "+(i+1)+"\n");
      var arrayIn = array[i];
      for (var key in arrayIn){
        if (arrayIn.hasOwnProperty(key)) {
          console.log("Valores: ",key,":",arrayIn[key]);
        }
      }

    }
    


  }


  downloadPDFHTML(){


    



  //variedadr html = "<html><head><meta charset='utf8'><title>SuitArt Business Card</title><style>#bg {            position: fixed;            z-index: -1;            top: 0;            left: 0;            width: 100%;                opacity: 0.5;                filter: alpha(opacity=50); /* For IE8 and earlier */            }            #bgicon {              position: fixed;              z-index: -1;              top: -0;              left: 0;              width: 10%;              }            .page {          text-align: center;          top: 320px;          padding-top: 100px;        }        td{            padding-top: 5px;            padding-left: 5px;            font-size: 10px;            font-family: Arial;        }        .imgClass{          width: 90%;        }        body{          font-size: 10px;          font-family: Arial;        }        </style>      </head>      <body >      <img id="bg" src="/home/ignacio/Escritorio/Proyectos Independientes/Curimapu/curimapu-api/resources/fondo.jpg" alt="Fondo" />      <img id="bgIcon" src="/home/ignacio/Escritorio/Proyectos Independientes/Curimapu/curimapu-api/resources/icon.jpg" alt="Fondo" />        <div class="page">        <h1>INFORME VISITA CULTIVO</h1>        <table border="1px solid" width="100%">        <tbody>        <tr>        <td width="50%">        <p><strong>Fecha:</strong> ${fec}</p>        <p>&nbsp;</p>        <p><strong>Agricultor:</strong>${contrato.id_agricultor.razon_social ? fnFormatoTexto(contrato.id_agricultor.razon_social) : '' } </p>        <p><strong>Telefono:</strong> ${contrato.id_agricultor.telefono[0] ? contrato.id_agricultor.telefono[0] : '' }</p>        <p><strong>E-Mail:&nbsp; </strong>${contrato.id_agricultor.email ? contrato.id_agricultor.email : '' }</p>        <p><strong>Especie:</strong> ${contrato.id_especie.nombre ? fnFormatoTexto(contrato.id_especie.nombre) : '' }</p>        </td>        <td width="50%">        <p><strong>Superficie:</strong> ${contrato.superficie ? fnFormatoTexto(contrato.superficie) : ''}</p>        <p><strong>Variedad:&nbsp; </strong>${variedad ? fnFormatoTexto(variedad) : '' }</p>        <p><strong>Potrero:</strong>${contrato.id_ficha.potrero ? fnFormatoTexto(contrato.id_ficha.potrero) : ''}</p>        </td>        </tr>        </tbody>        </table>        <p>&nbsp;</p>        <table border="1px" width="100%">        <tbody>        <tr>        <td width="50%">        <p><strong>Estado Fenol&oacute;gico:</strong>${visita.estado_fenologico}</p>        <p><strong>Estado malezas:</strong>${visita.estado_maleza}</p>        <p><strong>Cosecha: </strong>${visita.cosecha}</p>        </td>        <td width="50%">        <p><strong>Humedad:</strong> ${visita.humedad_suelo}</p>        <p><strong>Estado de crecimiento:</strong>${visita.estado_crecimiento}</p>            <p><strong>Estado fitosanitario:</strong> ${visita.estado_fitosantiario}</p>        <p><strong>Estado general del cultivo:</strong> ${visita.estado_general}</p>        </td>        </tr>        </tbody>        </table>        </div>        <br />        <h3>OBSERVACIONES GENERALES:</h3>       <p>        ${fnFormatoTexto(visita.observacion)}       </p>       <h3>RECOMENDACIONES:</h3>       <p>        ${fnFormatoTexto(visita.recomendaciones)}       </p>       ${img}      </body>    </html>";
	  var html = "<html><body><h1>Hola Artiko</h1></body>    </html>";
	  let doc = new jsPDF();
	  doc.fromHTML(html, 10, 10, {'width': 180});
	  doc.save('FichaPreContratoHTML.pdf');
  }

  downloadPDF(){


  	let doc = new jsPDF();
  	doc.setFontSize(18);
    //doc.text(7, 15, "Ficha Pre-Contrato");
    doc.autoTableSetDefaults({
        headerStyles: {fillColor: [155, 89, 182]}, // Purple
        startY: 25, 
        margin: {top: 45},
        addPageContent: function(data) {
            doc.setFontSize(20);
            doc.text('Ficha Pre-Contrato', 17, 20);
        }
    });
    doc.setFontSize(12);
    

    var cols = [{
      title: "Details",
      dataKey: 'details'
    }, {
      title: "Values",
      dataKey: 'values'
     }];


    var  item = {      
      "Fieldman" :  "Artiko",
      "Especie" : "Maravilla"
    }; 
    let rows1 = Object.keys(item).map((key) => {  
      return { 'details': key, 'values': item[key] };
    });    

    var optionsContainer = {
      horizontal: {
        startY: 30, 
        styles: {           
          fontSize: 7
        },
        margin: {horizontal: 17},
        drawHeaderRow: () => false,
        columnStyles: {
          text: {columnlumnWidth: 'auto'},
            details: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        }
      }
    };
    doc.autoTable(cols, rows1, optionsContainer['horizontal']);

    top = doc.autoTable.previous.finalY;

    doc.text(17, top + 15, "Detalles del agricultor");

    var top = doc.autoTable.previous.finalY;
    var item2 = {      
      "Razón Social" : "razon social",
      "Dirección" : "direccion",
      "Región" : "region",
      "Representante Legal" : "representante_legal",
      "Email" : "email"
    }; 
    var rows2 = Object.keys(item2).map((key) => {  
      return { 'details': key, 'values': item2[key] };
    });


   doc.autoTable(cols, rows2, {
    drawHeaderRow: () => false,
        startY: top + 19,
        margin: {horizontal: 17},
        styles: {
          columnWidth: 'wrap',
          fontSize: 7},
        columnStyles: {
          text: {columnlumnWidth: 'auto'},
          details: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        }
      
    });

   var item3 = {      
      "Rut" : "rut",
      "Comuna" : "comuna",
      "Telefono" : "telefono",
      "Rut Representante Legal" : "rut representante_legal",
      "Giro" : "Agrícola"
    }; 
    var rows3 = Object.keys(item3).map((key) => {  
      return { 'details': key, 'values': item3[key] };
    });

   doc.autoTable(cols, rows3, {
    drawHeaderRow: () => false,
        startY: top + 19,
        margin: {horizontal: 110},
        styles: {columnWidth: 'wrap',
          fontSize: 7},
        columnStyles: {
          text: {columnlumnWidth: 'auto'},
          details: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        }
      
    });

    top = doc.autoTable.previous.finalY;

    doc.text(17, top + 15, "Datos del Predio");

    top = doc.autoTable.previous.finalY;

    var item4 = {      
      "Nombre del Predio" : "Nombre Predio",
      "Comuna" : "comuna"
    }; 
    var rows4 = Object.keys(item4).map((key) => {  
      return { 'details': key, 'values': item4[key] };
    });

    doc.autoTable(cols, rows4, {
    drawHeaderRow: () => false,
        startY: top + 19,
        margin: {horizontal: 17},
        styles: {columnWidth: 'wrap',
          fontSize: 7},
        columnStyles: {
          text: {columnlumnWidth: 'auto'},
          details: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        }
      
    });

    var item5 = {      
      "Región" : "region",
      "Localidad" : "Localidad"
    }; 
    var rows5 = Object.keys(item5).map((key) => {  
      return { 'details': key, 'values': item5[key] };
    });

    doc.autoTable(cols, rows5, {
    drawHeaderRow: () => false,
        startY: top + 19,
        margin: {horizontal: 110},
        styles: {columnWidth: 'wrap',
          fontSize: 7},
        columnStyles: {
          text: {columnlumnWidth: 'auto'},
          details: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        }
      
    });

    top = doc.autoTable.previous.finalY;

    doc.text(17, top + 15, "Datos del Potrero");

    top = doc.autoTable.previous.finalY;

    var titles = [
        {title: "Nombre\nPotrero", dataKey: "potrero"},
        {title: "HAS", dataKey: "has"},
        {title: "Cultivo\nAnterior 1", dataKey: "ultimos_cultivos1"},
        {title: "Cultivo\nAnterior 2", dataKey: "ultimos_cultivos2"},
        {title: "Cultivo\nAnterior 3", dataKey: "ultimos_cultivos3"},
        {title: "Cultivo\nAnterior 4", dataKey: "ultimos_cultivos4"}
    ];

    var values = [{
         potrero: "potrero",
         has: "has",
         ultimos_cultivos1: "ultimos cultivos 1",
         ultimos_cultivos2: "ultimos cultivos 2",
         ultimos_cultivos3: "ultimos cultivos 3",
         ultimos_cultivos4: "ultimos cultivos 4"
    }];

    doc.autoTable(titles, values, {
        startY: top + 19,
        headerStyles: {fillColor: [41, 128, 185]}, 
        margin: {horizontal: 17},
        styles: {columnWidth: 'auto',
          fontSize: 7},
        columnStyles: {
          text: {columnWidth: 'auto'}
        }
    });

    top = doc.autoTable.previous.finalY;

    var titles1 = [
        {title: "Riego", dataKey: "tipo_riego"},
        {title: "Suelo", dataKey: "tipo_suelo"},
        {title: "Coordenadas", dataKey: "norting"},
        {title: "Coordenadas", dataKey: "easting"},
    ];

    var values1 = [{
         tipo_riego: "tipo_riego",
         tipo_suelo: "tipo_suelo",
         norting: "norting",
         easting: "easting",
    }];

    doc.autoTable(titles1, values1, {
        startY: top + 3,
        headerStyles: {fillColor: [41, 128, 185]}, 
        margin: {horizontal: 17},
        styles: {columnWidth: 'auto',
          fontSize: 7},
        columnStyles: {
          text: {columnWidth: 'auto'}
        }
    });
    
    top = doc.autoTable.previous.finalY;

    doc.text(17, top + 15, "Observaciones");

    top = doc.autoTable.previous.finalY;

    var titles2 = [
        {title: "Observaciones", dataKey: "observaciones"}
    ];

    var values2 = [{
         observaciones: "observaciones"
    }];

    doc.autoTable(titles2, values2, {
        startY: top + 19  ,
        headerStyles: {fillColor: [41, 128, 185]}, 
        margin: {horizontal: 17},
        styles: {columnWidth: 'auto',
          fontSize: 7},
        columnStyles: {
          text: {columnWidth: 'auto'}
        }
    });
    


    doc.save('FichaPreContrato.pdf');



  }
}