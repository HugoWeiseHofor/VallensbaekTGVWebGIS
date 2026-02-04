var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PlanfladeSpildevand_2 = new ol.format.GeoJSON();
var features_PlanfladeSpildevand_2 = format_PlanfladeSpildevand_2.readFeatures(json_PlanfladeSpildevand, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanfladeSpildevand = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanfladeSpildevand.addFeatures(features_PlanfladeSpildevand_2);
var lyr_PlanfladeSpildevand = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanfladeSpildevand, 
                style: style_PlanfladeSpildevand_2,
                popuplayertitle: 'Planflade Spildevand',
                interactive: true,
    title: 'Planflade Spildevand<br />\
    <img src="styles/legend/PlanfladeSpildevand_2_0.png" /> Anlægsprojekter<br />\
    <img src="styles/legend/PlanfladeSpildevand_2_1.png" /> Masterplan<br />' });
var format_PlanfladeVand_3 = new ol.format.GeoJSON();
var features_PlanfladeVand_3 = format_PlanfladeVand_3.readFeatures(json_PlanfladeVand, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanfladeVand = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanfladeVand.addFeatures(features_PlanfladeVand_3);
var lyr_PlanfladeVand = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanfladeVand, 
                style: style_PlanfladeVand_3,
                popuplayertitle: 'Planflade Vand',
                interactive: true,
                title: '<img src="styles/legend/PlanfladeVand.png" /> Planflade Vand'
            });
var format_ProjektfladeSpildevand_4 = new ol.format.GeoJSON();
var features_ProjektfladeSpildevand_4 = format_ProjektfladeSpildevand_4.readFeatures(json_ProjektfladeSpildevand, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjektfladeSpildevand = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjektfladeSpildevand.addFeatures(features_ProjektfladeSpildevand_4);
var lyr_ProjektfladeSpildevand = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjektfladeSpildevand, 
                style: style_ProjektfladeSpildevand_4,
                popuplayertitle: 'Projektflade Spildevand',
                interactive: true,
                title: '<img src="styles/legend/ProjektfladeSpildevand.png" /> Projektflade Spildevand'
            });
var format_Antropogentlandskab_5 = new ol.format.GeoJSON();
var features_Antropogentlandskab_5 = format_Antropogentlandskab_5.readFeatures(json_Antropogentlandskab, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antropogentlandskab = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antropogentlandskab.addFeatures(features_Antropogentlandskab_5);
var lyr_Antropogentlandskab = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antropogentlandskab, 
                style: style_Antropogentlandskab_5,
                popuplayertitle: 'Antropogent landskab',
                interactive: true,
                title: '<img src="styles/legend/Antropogentlandskab.png" /> Antropogent landskab'
            });
var format_S_6 = new ol.format.GeoJSON();
var features_S_6 = format_S_6.readFeatures(json_S, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S.addFeatures(features_S_6);
var lyr_S = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S, 
                style: style_S_6,
                popuplayertitle: 'Sø',
                interactive: true,
                title: '<img src="styles/legend/S.png" /> Sø'
            });
var format_Marinflade_7 = new ol.format.GeoJSON();
var features_Marinflade_7 = format_Marinflade_7.readFeatures(json_Marinflade, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marinflade = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marinflade.addFeatures(features_Marinflade_7);
var lyr_Marinflade = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marinflade, 
                style: style_Marinflade_7,
                popuplayertitle: 'Marin flade',
                interactive: true,
                title: '<img src="styles/legend/Marinflade.png" /> Marin flade'
            });
var format_Strandvold_8 = new ol.format.GeoJSON();
var features_Strandvold_8 = format_Strandvold_8.readFeatures(json_Strandvold, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandvold = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandvold.addFeatures(features_Strandvold_8);
var lyr_Strandvold = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandvold, 
                style: style_Strandvold_8,
                popuplayertitle: 'Strandvold',
                interactive: true,
                title: '<img src="styles/legend/Strandvold.png" /> Strandvold'
            });
var format_Erosionsdal_9 = new ol.format.GeoJSON();
var features_Erosionsdal_9 = format_Erosionsdal_9.readFeatures(json_Erosionsdal, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erosionsdal = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erosionsdal.addFeatures(features_Erosionsdal_9);
var lyr_Erosionsdal = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erosionsdal, 
                style: style_Erosionsdal_9,
                popuplayertitle: 'Erosionsdal',
                interactive: true,
                title: '<img src="styles/legend/Erosionsdal.png" /> Erosionsdal'
            });
var format_Bundmorneflade_10 = new ol.format.GeoJSON();
var features_Bundmorneflade_10 = format_Bundmorneflade_10.readFeatures(json_Bundmorneflade, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundmorneflade = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundmorneflade.addFeatures(features_Bundmorneflade_10);
var lyr_Bundmorneflade = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundmorneflade, 
                style: style_Bundmorneflade_10,
                popuplayertitle: 'Bundmoræneflade',
                interactive: true,
                title: '<img src="styles/legend/Bundmorneflade.png" /> Bundmoræneflade'
            });
var format_TerrnnrtgrundvandsommermiddelmunderterrnHIP_11 = new ol.format.GeoJSON();
var features_TerrnnrtgrundvandsommermiddelmunderterrnHIP_11 = format_TerrnnrtgrundvandsommermiddelmunderterrnHIP_11.readFeatures(json_TerrnnrtgrundvandsommermiddelmunderterrnHIP, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrnnrtgrundvandsommermiddelmunderterrnHIP = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrnnrtgrundvandsommermiddelmunderterrnHIP.addFeatures(features_TerrnnrtgrundvandsommermiddelmunderterrnHIP_11);
var lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrnnrtgrundvandsommermiddelmunderterrnHIP, 
                style: style_TerrnnrtgrundvandsommermiddelmunderterrnHIP_11,
                popuplayertitle: 'Terrænnært grundvand sommermiddel [m under terræn] (HIP)',
                interactive: true,
    title: 'Terrænnært grundvand sommermiddel [m under terræn] (HIP)<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_11_0.png" /> 0-1 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_11_1.png" /> 1-2 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_11_2.png" /> 2-3 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_11_3.png" /> 3-7 m<br />' });
var format_TerrnnrtgrundvandvintermiddelmunderterrnHIP_12 = new ol.format.GeoJSON();
var features_TerrnnrtgrundvandvintermiddelmunderterrnHIP_12 = format_TerrnnrtgrundvandvintermiddelmunderterrnHIP_12.readFeatures(json_TerrnnrtgrundvandvintermiddelmunderterrnHIP, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrnnrtgrundvandvintermiddelmunderterrnHIP = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrnnrtgrundvandvintermiddelmunderterrnHIP.addFeatures(features_TerrnnrtgrundvandvintermiddelmunderterrnHIP_12);
var lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrnnrtgrundvandvintermiddelmunderterrnHIP, 
                style: style_TerrnnrtgrundvandvintermiddelmunderterrnHIP_12,
                popuplayertitle: 'Terrænnært grundvand vintermiddel [m under terræn] (HIP)',
                interactive: true,
    title: 'Terrænnært grundvand vintermiddel [m under terræn] (HIP)<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_12_0.png" /> 0-1 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_12_1.png" /> 1-2 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_12_2.png" /> 2-3 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_12_3.png" /> 3-7 m<br />' });
var format_Risikoforhavvandsindsivning_13 = new ol.format.GeoJSON();
var features_Risikoforhavvandsindsivning_13 = format_Risikoforhavvandsindsivning_13.readFeatures(json_Risikoforhavvandsindsivning, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Risikoforhavvandsindsivning = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Risikoforhavvandsindsivning.addFeatures(features_Risikoforhavvandsindsivning_13);
var lyr_Risikoforhavvandsindsivning = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Risikoforhavvandsindsivning, 
                style: style_Risikoforhavvandsindsivning_13,
                popuplayertitle: 'Risiko for havvandsindsivning',
                interactive: true,
    title: ' <img src="styles/legend/Risikoforhavvandsindsivning_13_0.png" /> Risiko for havvandsindsivning'
});
var format_RisikoforoversvmmelseKystdirektoratet_14 = new ol.format.GeoJSON();
var features_RisikoforoversvmmelseKystdirektoratet_14 = format_RisikoforoversvmmelseKystdirektoratet_14.readFeatures(json_RisikoforoversvmmelseKystdirektoratet, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforoversvmmelseKystdirektoratet = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforoversvmmelseKystdirektoratet.addFeatures(features_RisikoforoversvmmelseKystdirektoratet_14);
var lyr_RisikoforoversvmmelseKystdirektoratet = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforoversvmmelseKystdirektoratet, 
                style: style_RisikoforoversvmmelseKystdirektoratet_14,
                popuplayertitle: 'Risiko for oversvømmelse (Kystdirektoratet)',
                interactive: true,
                title: '<img src="styles/legend/RisikoforoversvmmelseKystdirektoratet.png" /> Risiko for oversvømmelse (Kystdirektoratet)'
            });
var format_RisikoforstningsskaderGEO_15 = new ol.format.GeoJSON();
var features_RisikoforstningsskaderGEO_15 = format_RisikoforstningsskaderGEO_15.readFeatures(json_RisikoforstningsskaderGEO, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforstningsskaderGEO = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforstningsskaderGEO.addFeatures(features_RisikoforstningsskaderGEO_15);
var lyr_RisikoforstningsskaderGEO = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforstningsskaderGEO, 
                style: style_RisikoforstningsskaderGEO_15,
                popuplayertitle: 'Risiko for sætningsskader (GEO)',
                interactive: true,
    title: 'Risiko for sætningsskader (GEO)<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_15_0.png" /> 0-0,01<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_15_1.png" /> 0,01-0,02<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_15_2.png" /> 0,02-0,05<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_15_3.png" /> 0,05-0,1<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_15_4.png" /> >0,1<br />' });
var format_Boringerdybdeim_16 = new ol.format.GeoJSON();
var features_Boringerdybdeim_16 = format_Boringerdybdeim_16.readFeatures(json_Boringerdybdeim, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boringerdybdeim = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boringerdybdeim.addFeatures(features_Boringerdybdeim_16);
var lyr_Boringerdybdeim = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boringerdybdeim, 
                style: style_Boringerdybdeim_16,
                popuplayertitle: 'Boringer (dybde i m)',
                interactive: true,
    title: 'Boringer (dybde i m)<br />\
    <img src="styles/legend/Boringerdybdeim_16_0.png" /> 0 m - 0 m<br />\
    <img src="styles/legend/Boringerdybdeim_16_1.png" /> 0 m - 6 m<br />\
    <img src="styles/legend/Boringerdybdeim_16_2.png" /> 6 m - 12 m<br />\
    <img src="styles/legend/Boringerdybdeim_16_3.png" /> 12 m - 18 m<br />\
    <img src="styles/legend/Boringerdybdeim_16_4.png" /> 18 m+<br />' });
var format_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17 = new ol.format.GeoJSON();
var features_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17 = format_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17.readFeatures(json_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17.addFeatures(features_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17);
var lyr_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17, 
                style: style_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17,
                popuplayertitle: 'Indledende skadesberegninger - Gennemsnitlig skadesomkostninger før tiltag [DKK/år',
                interactive: true,
    title: 'Indledende skadesberegninger - Gennemsnitlig skadesomkostninger før tiltag [DKK/år]<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17_6.png" /> 120000 +<br />' });
var format_Vandlb100mbuffer_18 = new ol.format.GeoJSON();
var features_Vandlb100mbuffer_18 = format_Vandlb100mbuffer_18.readFeatures(json_Vandlb100mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb100mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb100mbuffer.addFeatures(features_Vandlb100mbuffer_18);
var lyr_Vandlb100mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb100mbuffer, 
                style: style_Vandlb100mbuffer_18,
                popuplayertitle: 'Vandløb 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb100mbuffer.png" /> Vandløb 100m buffer'
            });
var format_Vandlb20mbuffer_19 = new ol.format.GeoJSON();
var features_Vandlb20mbuffer_19 = format_Vandlb20mbuffer_19.readFeatures(json_Vandlb20mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb20mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb20mbuffer.addFeatures(features_Vandlb20mbuffer_19);
var lyr_Vandlb20mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb20mbuffer, 
                style: style_Vandlb20mbuffer_19,
                popuplayertitle: 'Vandløb 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb20mbuffer.png" /> Vandløb 20m buffer'
            });
var format_Vandlb10mbuffer_20 = new ol.format.GeoJSON();
var features_Vandlb10mbuffer_20 = format_Vandlb10mbuffer_20.readFeatures(json_Vandlb10mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb10mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb10mbuffer.addFeatures(features_Vandlb10mbuffer_20);
var lyr_Vandlb10mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb10mbuffer, 
                style: style_Vandlb10mbuffer_20,
                popuplayertitle: 'Vandløb 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb10mbuffer.png" /> Vandløb 10m buffer'
            });
var format_Vandlb2mbuffer_21 = new ol.format.GeoJSON();
var features_Vandlb2mbuffer_21 = format_Vandlb2mbuffer_21.readFeatures(json_Vandlb2mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb2mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb2mbuffer.addFeatures(features_Vandlb2mbuffer_21);
var lyr_Vandlb2mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb2mbuffer, 
                style: style_Vandlb2mbuffer_21,
                popuplayertitle: 'Vandløb 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb2mbuffer.png" /> Vandløb 2m buffer'
            });
var format_Vandlb_22 = new ol.format.GeoJSON();
var features_Vandlb_22 = format_Vandlb_22.readFeatures(json_Vandlb, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb.addFeatures(features_Vandlb_22);
var lyr_Vandlb = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb, 
                style: style_Vandlb_22,
                popuplayertitle: 'Vandløb',
                interactive: true,
                title: '<img src="styles/legend/Vandlb.png" /> Vandløb'
            });
var format_Ser100mbuffer_23 = new ol.format.GeoJSON();
var features_Ser100mbuffer_23 = format_Ser100mbuffer_23.readFeatures(json_Ser100mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser100mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser100mbuffer.addFeatures(features_Ser100mbuffer_23);
var lyr_Ser100mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser100mbuffer, 
                style: style_Ser100mbuffer_23,
                popuplayertitle: 'Søer 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser100mbuffer.png" /> Søer 100m buffer'
            });
var format_Ser20mbuffer_24 = new ol.format.GeoJSON();
var features_Ser20mbuffer_24 = format_Ser20mbuffer_24.readFeatures(json_Ser20mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser20mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser20mbuffer.addFeatures(features_Ser20mbuffer_24);
var lyr_Ser20mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser20mbuffer, 
                style: style_Ser20mbuffer_24,
                popuplayertitle: 'Søer 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser20mbuffer.png" /> Søer 20m buffer'
            });
var format_Ser10mbuffer_25 = new ol.format.GeoJSON();
var features_Ser10mbuffer_25 = format_Ser10mbuffer_25.readFeatures(json_Ser10mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser10mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser10mbuffer.addFeatures(features_Ser10mbuffer_25);
var lyr_Ser10mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser10mbuffer, 
                style: style_Ser10mbuffer_25,
                popuplayertitle: 'Søer 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser10mbuffer.png" /> Søer 10m buffer'
            });
var format_Ser2mbuffer_26 = new ol.format.GeoJSON();
var features_Ser2mbuffer_26 = format_Ser2mbuffer_26.readFeatures(json_Ser2mbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser2mbuffer = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser2mbuffer.addFeatures(features_Ser2mbuffer_26);
var lyr_Ser2mbuffer = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser2mbuffer, 
                style: style_Ser2mbuffer_26,
                popuplayertitle: 'Søer 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser2mbuffer.png" /> Søer 2m buffer'
            });
var format_Ser_27 = new ol.format.GeoJSON();
var features_Ser_27 = format_Ser_27.readFeatures(json_Ser, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser.addFeatures(features_Ser_27);
var lyr_Ser = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser, 
                style: style_Ser_27,
                popuplayertitle: 'Søer',
                interactive: true,
                title: '<img src="styles/legend/Ser.png" /> Søer'
            });
var format_Jordforureningvidenniveau2V2_28 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau2V2_28 = format_Jordforureningvidenniveau2V2_28.readFeatures(json_Jordforureningvidenniveau2V2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau2V2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau2V2.addFeatures(features_Jordforureningvidenniveau2V2_28);
var lyr_Jordforureningvidenniveau2V2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau2V2, 
                style: style_Jordforureningvidenniveau2V2_28,
                popuplayertitle: 'Jordforurening videnniveau 2 (V2)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau2V2.png" /> Jordforurening videnniveau 2 (V2)'
            });
var format_Jordforureningvidenniveau1V1_29 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau1V1_29 = format_Jordforureningvidenniveau1V1_29.readFeatures(json_Jordforureningvidenniveau1V1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau1V1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau1V1.addFeatures(features_Jordforureningvidenniveau1V1_29);
var lyr_Jordforureningvidenniveau1V1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau1V1, 
                style: style_Jordforureningvidenniveau1V1_29,
                popuplayertitle: 'Jordforurening videnniveau 1 (V1)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau1V1.png" /> Jordforurening videnniveau 1 (V1)'
            });
var format_Gammelkystlinje18701899_30 = new ol.format.GeoJSON();
var features_Gammelkystlinje18701899_30 = format_Gammelkystlinje18701899_30.readFeatures(json_Gammelkystlinje18701899, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gammelkystlinje18701899 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gammelkystlinje18701899.addFeatures(features_Gammelkystlinje18701899_30);
var lyr_Gammelkystlinje18701899 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gammelkystlinje18701899, 
                style: style_Gammelkystlinje18701899_30,
                popuplayertitle: 'Gammel kystlinje (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/Gammelkystlinje18701899.png" /> Gammel kystlinje (1870-1899)'
            });
var format_EngeogMoser18701899_31 = new ol.format.GeoJSON();
var features_EngeogMoser18701899_31 = format_EngeogMoser18701899_31.readFeatures(json_EngeogMoser18701899, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EngeogMoser18701899 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EngeogMoser18701899.addFeatures(features_EngeogMoser18701899_31);
var lyr_EngeogMoser18701899 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EngeogMoser18701899, 
                style: style_EngeogMoser18701899_31,
                popuplayertitle: 'Enge og Moser (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/EngeogMoser18701899.png" /> Enge og Moser (1870-1899)'
            });
var format_Frededeomrder_32 = new ol.format.GeoJSON();
var features_Frededeomrder_32 = format_Frededeomrder_32.readFeatures(json_Frededeomrder, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder.addFeatures(features_Frededeomrder_32);
var lyr_Frededeomrder = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder, 
                style: style_Frededeomrder_32,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder.png" /> Fredede områder'
            });
var format_Spildevandskloakering_33 = new ol.format.GeoJSON();
var features_Spildevandskloakering_33 = format_Spildevandskloakering_33.readFeatures(json_Spildevandskloakering, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spildevandskloakering = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spildevandskloakering.addFeatures(features_Spildevandskloakering_33);
var lyr_Spildevandskloakering = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spildevandskloakering, 
                style: style_Spildevandskloakering_33,
                popuplayertitle: 'Spildevandskloakering',
                interactive: true,
                title: '<img src="styles/legend/Spildevandskloakering.png" /> Spildevandskloakering'
            });
var format_IngenKloakering_34 = new ol.format.GeoJSON();
var features_IngenKloakering_34 = format_IngenKloakering_34.readFeatures(json_IngenKloakering, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IngenKloakering = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IngenKloakering.addFeatures(features_IngenKloakering_34);
var lyr_IngenKloakering = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IngenKloakering, 
                style: style_IngenKloakering_34,
                popuplayertitle: 'Ingen Kloakering',
                interactive: true,
                title: '<img src="styles/legend/IngenKloakering.png" /> Ingen Kloakering'
            });
var format_VedtagetSeperatkloakering_35 = new ol.format.GeoJSON();
var features_VedtagetSeperatkloakering_35 = format_VedtagetSeperatkloakering_35.readFeatures(json_VedtagetSeperatkloakering, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedtagetSeperatkloakering = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedtagetSeperatkloakering.addFeatures(features_VedtagetSeperatkloakering_35);
var lyr_VedtagetSeperatkloakering = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedtagetSeperatkloakering, 
                style: style_VedtagetSeperatkloakering_35,
                popuplayertitle: 'Vedtaget Seperatkloakering',
                interactive: true,
                title: '<img src="styles/legend/VedtagetSeperatkloakering.png" /> Vedtaget Seperatkloakering'
            });
var format_Vallensbk_36 = new ol.format.GeoJSON();
var features_Vallensbk_36 = format_Vallensbk_36.readFeatures(json_Vallensbk, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vallensbk = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vallensbk.addFeatures(features_Vallensbk_36);
var lyr_Vallensbk = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vallensbk, 
                style: style_Vallensbk_36,
                popuplayertitle: 'Vallensbæk',
                interactive: false,
                title: '<img src="styles/legend/Vallensbk.png" /> Vallensbæk'
            });

// Ikke Kort
//definer undergrupper først, dernæst overgruppen
var group_kloakering = new ol.layer.Group({
    layers: [
        lyr_IngenKloakering,
        lyr_Spildevandskloakering,
        lyr_VedtagetSeperatkloakering,
    ],
    fold: 'open',
    title: 'Kloakering'
})
var group_IKKEkort = new ol.layer.Group({
    layers: [
        group_kloakering
    ],
    fold: 'open',
    title: '"IKKE" kort'
})

// Måske ikke kort
//definer undergrupper først, dernæst overgruppen

var group_soer = new ol.layer.Group({
    layers: [
        lyr_Ser100mbuffer,
        lyr_Ser20mbuffer,
        lyr_Ser10mbuffer,
        lyr_Ser2mbuffer,
        lyr_Ser,
    ],
    fold: 'close',
    title: 'Søer'
})


var group_vandlb = new ol.layer.Group({
    layers: [
        lyr_Vandlb100mbuffer,
        lyr_Vandlb20mbuffer,
        lyr_Vandlb10mbuffer,
        lyr_Vandlb2mbuffer,
        lyr_Vandlb,
    ],
    fold: 'close',
    title: 'Vandløb'
})

var group_jordforurening = new ol.layer.Group({
    layers: [
        lyr_Jordforureningvidenniveau1V1,
        lyr_Jordforureningvidenniveau2V2,
    ],
    fold: 'close',
    title: 'Jordforurening'
})


var group_MaskeIKKEkort = new ol.layer.Group({
    layers: [
        group_soer,
        group_vandlb,
        group_jordforurening,
        lyr_Gammelkystlinje18701899,
        lyr_EngeogMoser18701899,
        lyr_Frededeomrder,
    ],
    fold: 'open',
    title: '"MÅSKE IKKE" kort'
})

// Projekt- og Planfalder
var group_projektogplanflader = new ol.layer.Group({
    layers: [
        lyr_PlanfladeSpildevand,
        lyr_PlanfladeVand,
        lyr_ProjektfladeSpildevand,
    ],
    fold: 'close',
    title: 'Projekt- og Planfalder'
})

//Analyser og anden data

var group_geomorfologi = new ol.layer.Group({
    layers: [
        lyr_Bundmorneflade,
        lyr_Erosionsdal,
        lyr_Strandvold,
        lyr_S,
	    lyr_Marinflade,
	    lyr_Antropogentlandskab
    ],
    fold: 'close',
    title: 'Geomorfologi (GEUS)'
})

var group_Terrnnrtgrundvand = new ol.layer.Group({
    layers: [
        lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP,
        lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP
,
    ],
    fold: 'close',
    title: 'Terrænnært grundvand sommer- og vintermiddel [m under terræn] (HIP)'
})

var group_Boringerdybdeim = new ol.layer.Group({
    layers: [
        lyr_Boringerdybdeim,
    ],
    fold: 'close',
    title: 'Boringer (dybde i m)'
})

var group_RisikoforstningsskaderGEO = new ol.layer.Group({
    layers: [
        lyr_RisikoforstningsskaderGEO,
    ],
    fold: 'close',
    title: 'Risiko for sætningsskader (GEO)'
})


var group_analyserogandendata = new ol.layer.Group({
    layers: [
        group_geomorfologi,
        lyr_Risikoforhavvandsindsivning,
	    lyr_RisikoforoversvmmelseKystdirektoratet,
        group_RisikoforstningsskaderGEO,
        group_Boringerdybdeim,
        group_Terrnnrtgrundvand,
	    lyr_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17,
    ],
    fold: 'open',
    title: 'Analyser og anden data'
})

// baggrundskort

var group_baggrundskort = new ol.layer.Group({
    layers: [
        lyr_ESRIGraylight_0,
        lyr_OpenStreetMap_1,
    ],
    fold: 'close',
    title: 'Baggrundskort'
})

lyr_ESRIGraylight_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PlanfladeSpildevand.setVisible(false);lyr_PlanfladeVand.setVisible(false);lyr_ProjektfladeSpildevand.setVisible(false);lyr_Antropogentlandskab.setVisible(false);lyr_S.setVisible(false);lyr_Marinflade.setVisible(false);lyr_Strandvold.setVisible(false);lyr_Erosionsdal.setVisible(false);lyr_Bundmorneflade.setVisible(false);lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP.setVisible(false);lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP.setVisible(false);lyr_Risikoforhavvandsindsivning.setVisible(false);lyr_RisikoforoversvmmelseKystdirektoratet.setVisible(false);lyr_RisikoforstningsskaderGEO.setVisible(false);lyr_Boringerdybdeim.setVisible(false);lyr_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17.setVisible(true);lyr_Vandlb100mbuffer.setVisible(false);lyr_Vandlb20mbuffer.setVisible(false);lyr_Vandlb10mbuffer.setVisible(false);lyr_Vandlb2mbuffer.setVisible(false);lyr_Vandlb.setVisible(false);lyr_Ser100mbuffer.setVisible(false);lyr_Ser20mbuffer.setVisible(false);lyr_Ser10mbuffer.setVisible(false);lyr_Ser2mbuffer.setVisible(false);lyr_Ser.setVisible(false);lyr_Jordforureningvidenniveau2V2.setVisible(false);lyr_Jordforureningvidenniveau1V1.setVisible(false);lyr_Gammelkystlinje18701899.setVisible(false);lyr_EngeogMoser18701899.setVisible(false);lyr_Frededeomrder.setVisible(false);lyr_Spildevandskloakering.setVisible(true);lyr_IngenKloakering.setVisible(true);lyr_VedtagetSeperatkloakering.setVisible(true);lyr_Vallensbk.setVisible(true);
var layersList = [group_baggrundskort, group_projektogplanflader, group_analyserogandendata, group_MaskeIKKEkort, group_IKKEkort];
lyr_PlanfladeSpildevand.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PLANNAVN': 'PLANNAVN', 'PROJEKTNUM': 'PROJEKTNUM', 'STATUS': 'STATUS', 'FASE': 'FASE', 'STYLE_REGE': 'STYLE_REGE', 'PLANLAGTST': 'PLANLAGTST', 'PLANLAGTSL': 'PLANLAGTSL', 'PLANLÆGGER': 'PLANLÆGGER', 'PROJEKTCHE': 'PROJEKTCHE', 'PROJEKTEJE': 'PROJEKTEJE', 'PROJEKTLED': 'PROJEKTLED', 'BEM': 'BEM', 'TYPE': 'TYPE', 'CVR_KOMBIN': 'CVR_KOMBIN', 'FORSYNINGS': 'FORSYNINGS', 'TEMAER_KOM': 'TEMAER_KOM', 'SIDSTOPDAT': 'SIDSTOPDAT', 'INITIALER': 'INITIALER', 'KI_LINK': 'KI_LINK', });
lyr_PlanfladeVand.set('fieldAliases', {'fid': 'fid', });
lyr_ProjektfladeSpildevand.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROJEKTNAV': 'PROJEKTNAV', 'PROJEKTNUM': 'PROJEKTNUM', 'UNDERPROJE': 'UNDERPROJE', 'STATUS': 'STATUS', 'FASE': 'FASE', 'PLANLAGTST': 'PLANLAGTST', 'FORVENTETS': 'FORVENTETS', 'FORVENTE_1': 'FORVENTE_1', 'PROJEKTLED': 'PROJEKTLED', 'TEGNER': 'TEGNER', 'TILSYN': 'TILSYN', 'BEM': 'BEM', 'PROJEKT_DO': 'PROJEKT_DO', 'PROJEKTERI': 'PROJEKTERI', 'PPL_CODE_V': 'PPL_CODE_V', 'CVR_KOMBIN': 'CVR_KOMBIN', 'FORSYNINGS': 'FORSYNINGS', 'TEMAER_KOM': 'TEMAER_KOM', 'SIDSTOPDAT': 'SIDSTOPDAT', 'INITIALER': 'INITIALER', 'layer': 'layer', 'path': 'path', });
lyr_Antropogentlandskab.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_S.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Marinflade.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Strandvold.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Erosionsdal.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Bundmorneflade.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'class_range': 'class_range', });
lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'class_range': 'class_range', });
lyr_Risikoforhavvandsindsivning.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RisikoforoversvmmelseKystdirektoratet.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RisikoforstningsskaderGEO.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Boringerdybdeim.set('fieldAliases', {'fid': 'fid', 'dgunr': 'dgunr', 'url': 'url', 'kode': 'kode', 'kode_tekst': 'kode_tekst', 'postnr': 'postnr', 'boringsby': 'boringsby', 'sted1': 'sted1', 'komnr': 'komnr', 'kommunenav': 'kommunenav', 'region': 'region', 'region_tek': 'region_tek', 'dybde': 'dybde', 'dybde_num': 'dybde_num', 'dato': 'dato', 'aar': 'aar', 'aar_num': 'aar_num', 'formaal': 'formaal', 'formaal_te': 'formaal_te', 'anvendelse': 'anvendelse', 'anvendel_1': 'anvendel_1', 'formanv': 'formanv', 'formanv_te': 'formanv_te', 'id': 'id', 'borid': 'borid', 'broendbore': 'broendbore', 'cyklogram': 'cyklogram', 'dataejer': 'dataejer', 'anlaegid': 'anlaegid', 'anlaegnr': 'anlaegnr', 'anlaegsnav': 'anlaegsnav', 'journr': 'journr', 'virktyp': 'virktyp', 'virktypt': 'virktypt', 'hovedtype': 'hovedtype', 'xutm': 'xutm', 'yutm': 'yutm', 'terraen_ko': 'terraen_ko', 'dgunr_org': 'dgunr_org', 'txt_search': 'txt_search', 'symbol_out': 'symbol_out', 'rgb': 'rgb', });
lyr_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr_17.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Vandlb100mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb20mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb10mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb2mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Ser100mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser20mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser10mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser2mbuffer.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Jordforureningvidenniveau2V2.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_Jordforureningvidenniveau1V1.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_Gammelkystlinje18701899.set('fieldAliases', {'fid': 'fid', });
lyr_EngeogMoser18701899.set('fieldAliases', {'fid': 'fid', });
lyr_Frededeomrder.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Spildevandskloakering.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_IngenKloakering.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'CG_ID': 'CG_ID', 'navn': 'navn', 'regionskode': 'regionskode', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'udenforkommuneinddeling': 'udenforkommuneinddeling', });
lyr_VedtagetSeperatkloakering.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_Vallensbk.set('fieldAliases', {'fid': 'fid', 'navn': 'navn', });
lyr_PlanfladeSpildevand.set('fieldImages', {'fid': '', 'ID': 'Range', 'PLANNAVN': 'TextEdit', 'PROJEKTNUM': 'TextEdit', 'STATUS': 'TextEdit', 'FASE': 'TextEdit', 'STYLE_REGE': 'TextEdit', 'PLANLAGTST': 'Range', 'PLANLAGTSL': 'Range', 'PLANLÆGGER': 'TextEdit', 'PROJEKTCHE': 'TextEdit', 'PROJEKTEJE': 'TextEdit', 'PROJEKTLED': 'TextEdit', 'BEM': 'TextEdit', 'TYPE': 'TextEdit', 'CVR_KOMBIN': 'TextEdit', 'FORSYNINGS': 'TextEdit', 'TEMAER_KOM': 'TextEdit', 'SIDSTOPDAT': 'DateTime', 'INITIALER': 'TextEdit', 'KI_LINK': 'TextEdit', });
lyr_PlanfladeVand.set('fieldImages', {'fid': 'TextEdit', });
lyr_ProjektfladeSpildevand.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'PROJEKTNAV': 'TextEdit', 'PROJEKTNUM': 'TextEdit', 'UNDERPROJE': 'TextEdit', 'STATUS': 'TextEdit', 'FASE': 'TextEdit', 'PLANLAGTST': 'TextEdit', 'FORVENTETS': 'DateTime', 'FORVENTE_1': 'DateTime', 'PROJEKTLED': 'TextEdit', 'TEGNER': 'TextEdit', 'TILSYN': 'TextEdit', 'BEM': 'TextEdit', 'PROJEKT_DO': 'DateTime', 'PROJEKTERI': 'TextEdit', 'PPL_CODE_V': 'TextEdit', 'CVR_KOMBIN': 'TextEdit', 'FORSYNINGS': 'TextEdit', 'TEMAER_KOM': 'TextEdit', 'SIDSTOPDAT': 'DateTime', 'INITIALER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Antropogentlandskab.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_S.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Marinflade.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Strandvold.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Erosionsdal.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Bundmorneflade.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP.set('fieldImages', {'fid': 'TextEdit', 'class': 'TextEdit', 'class_range': 'TextEdit', });
lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP.set('fieldImages', {'fid': 'TextEdit', 'class': 'TextEdit', 'class_range': 'TextEdit', });
lyr_Risikoforhavvandsindsivning.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_RisikoforoversvmmelseKystdirektoratet.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_RisikoforstningsskaderGEO.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Boringerdybdeim.set('fieldImages', {'fid': 'TextEdit', 'dgunr': 'TextEdit', 'url': 'TextEdit', 'kode': 'TextEdit', 'kode_tekst': 'TextEdit', 'postnr': 'Range', 'boringsby': 'TextEdit', 'sted1': 'TextEdit', 'komnr': 'Range', 'kommunenav': 'TextEdit', 'region': 'Range', 'region_tek': 'TextEdit', 'dybde': 'TextEdit', 'dybde_num': 'TextEdit', 'dato': 'DateTime', 'aar': 'TextEdit', 'aar_num': 'Range', 'formaal': 'TextEdit', 'formaal_te': 'TextEdit', 'anvendelse': 'TextEdit', 'anvendel_1': 'TextEdit', 'formanv': 'TextEdit', 'formanv_te': 'TextEdit', 'id': 'Range', 'borid': 'Range', 'broendbore': 'TextEdit', 'cyklogram': 'TextEdit', 'dataejer': 'TextEdit', 'anlaegid': 'Range', 'anlaegnr': 'TextEdit', 'anlaegsnav': 'TextEdit', 'journr': 'TextEdit', 'virktyp': 'TextEdit', 'virktypt': 'TextEdit', 'hovedtype': 'TextEdit', 'xutm': 'TextEdit', 'yutm': 'TextEdit', 'terraen_ko': 'TextEdit', 'dgunr_org': 'TextEdit', 'txt_search': 'TextEdit', 'symbol_out': 'TextEdit', 'rgb': 'TextEdit', });
lyr_Vandlb100mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb20mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb10mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb2mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ser100mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser20mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser10mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser2mbuffer.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Jordforureningvidenniveau2V2.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_Jordforureningvidenniveau1V1.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_Gammelkystlinje18701899.set('fieldImages', {'fid': 'TextEdit', });
lyr_EngeogMoser18701899.set('fieldImages', {'fid': 'TextEdit', });
lyr_Frededeomrder.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Spildevandskloakering.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', });
lyr_IngenKloakering.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', 'CG_ID': 'Range', 'navn': 'TextEdit', 'regionskode': 'Range', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'udenforkommuneinddeling': 'TextEdit', });
lyr_VedtagetSeperatkloakering.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'TextEdit', 'temanavn': 'TextEdit', 'objekt_id': 'TextEdit', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'TextEdit', 'oprindelse': 'TextEdit', 'statuskode': 'TextEdit', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'TextEdit', 'vaerd1201a': 'TextEdit', 'type1201b': 'TextEdit', 'vaerd1201b': 'TextEdit', 'staar1201': 'TextEdit', 'sluaar1201': 'TextEdit', 'datoforsl': 'TextEdit', 'datovedt': 'TextEdit', 'datoaflyst': 'TextEdit', 'datoikraft': 'TextEdit', 'datostart': 'TextEdit', 'datoslut': 'TextEdit', });
lyr_Vallensbk.set('fieldImages', {'fid': 'TextEdit', 'navn': 'TextEdit', });
lyr_PlanfladeSpildevand.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PLANNAVN': 'no label', 'PROJEKTNUM': 'no label', 'STATUS': 'no label', 'FASE': 'no label', 'STYLE_REGE': 'no label', 'PLANLAGTST': 'no label', 'PLANLAGTSL': 'no label', 'PLANLÆGGER': 'no label', 'PROJEKTCHE': 'no label', 'PROJEKTEJE': 'no label', 'PROJEKTLED': 'no label', 'BEM': 'no label', 'TYPE': 'no label', 'CVR_KOMBIN': 'no label', 'FORSYNINGS': 'no label', 'TEMAER_KOM': 'no label', 'SIDSTOPDAT': 'no label', 'INITIALER': 'no label', 'KI_LINK': 'no label', });
lyr_PlanfladeVand.set('fieldLabels', {'fid': 'no label', });
lyr_ProjektfladeSpildevand.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PROJEKTNAV': 'no label', 'PROJEKTNUM': 'no label', 'UNDERPROJE': 'no label', 'STATUS': 'no label', 'FASE': 'no label', 'PLANLAGTST': 'no label', 'FORVENTETS': 'no label', 'FORVENTE_1': 'no label', 'PROJEKTLED': 'no label', 'TEGNER': 'no label', 'TILSYN': 'no label', 'BEM': 'no label', 'PROJEKT_DO': 'no label', 'PROJEKTERI': 'no label', 'PPL_CODE_V': 'no label', 'CVR_KOMBIN': 'no label', 'FORSYNINGS': 'no label', 'TEMAER_KOM': 'no label', 'SIDSTOPDAT': 'no label', 'INITIALER': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Antropogentlandskab.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_S.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Marinflade.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Strandvold.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Erosionsdal.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Bundmorneflade.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP.set('fieldLabels', {'fid': 'no label', 'class': 'no label', 'class_range': 'no label', });
lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP.set('fieldLabels', {'fid': 'no label', 'class': 'no label', 'class_range': 'no label', });
lyr_Risikoforhavvandsindsivning.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RisikoforoversvmmelseKystdirektoratet.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RisikoforstningsskaderGEO.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Boringerdybdeim.set('fieldLabels', {'fid': 'no label', 'dgunr': 'no label', 'url': 'no label', 'kode': 'no label', 'kode_tekst': 'no label', 'postnr': 'no label', 'boringsby': 'no label', 'sted1': 'no label', 'komnr': 'no label', 'kommunenav': 'no label', 'region': 'no label', 'region_tek': 'no label', 'dybde': 'no label', 'dybde_num': 'no label', 'dato': 'no label', 'aar': 'no label', 'aar_num': 'no label', 'formaal': 'no label', 'formaal_te': 'no label', 'anvendelse': 'no label', 'anvendel_1': 'no label', 'formanv': 'no label', 'formanv_te': 'no label', 'id': 'no label', 'borid': 'no label', 'broendbore': 'no label', 'cyklogram': 'no label', 'dataejer': 'no label', 'anlaegid': 'no label', 'anlaegnr': 'no label', 'anlaegsnav': 'no label', 'journr': 'no label', 'virktyp': 'no label', 'virktypt': 'no label', 'hovedtype': 'no label', 'xutm': 'no label', 'yutm': 'no label', 'terraen_ko': 'no label', 'dgunr_org': 'no label', 'txt_search': 'no label', 'symbol_out': 'no label', 'rgb': 'no label', });
lyr_Vandlb100mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb20mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb10mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb2mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ser100mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser20mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser10mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser2mbuffer.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Jordforureningvidenniveau2V2.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_Jordforureningvidenniveau1V1.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_Gammelkystlinje18701899.set('fieldLabels', {'fid': 'no label', });
lyr_EngeogMoser18701899.set('fieldLabels', {'fid': 'no label', });
lyr_Frededeomrder.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Spildevandskloakering.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_IngenKloakering.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'CG_ID': 'no label', 'navn': 'no label', 'regionskode': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'udenforkommuneinddeling': 'no label', });
lyr_VedtagetSeperatkloakering.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_Vallensbk.set('fieldLabels', {'fid': 'no label', 'navn': 'no label', });
lyr_Vallensbk.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});