import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
    { id: 3, nombre: 'Agitador Magnético', precio: 300, cantidadExistente: 15, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/agitador_magnetico_1_equipos.jpg' },
    { id: 15, nombre: 'Almohadillas Cloro DPD Hach', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/almohadillas_cloro_dpd_hach_reactivos.jpg' },
    { id: 16, nombre: 'Anemometro', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/anemometro_1_equipos.jpg' },
    { id: 17, nombre: 'Datalogger Elitech', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/datalogger_elitech_1_equipos.jpg' },
    { id: 18, nombre: 'Datalogger Elitech Grande', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/datalogger_elitech_grande_equipos.jpg' },
    { id: 19, nombre: 'Hisopos Pera', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/hisopos_pera_equipos.jpg' },
    { id: 20, nombre: 'Incubadora Pollos 1', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/incubadora_pollos1_equipos.jpg' },
    { id: 21, nombre: 'Incubadora Pollos 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/incubadora_pollos2_equipos.jpg' },
    { id: 22, nombre: 'Luxometro Certificado', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/luxometro_certificado_equipos.jpg' },
    { id: 23, nombre: 'Luxometro Economico', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/luxometro_economico_1_equipos.jpg' },
    { id: 24, nombre: 'Medidor Gases H2S CO O2 Certificado', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/medidor_gases_H2S_CO_O2_certificado_1_equipos.jpg' },
    { id: 25, nombre: 'Medidor Sonido Certificado', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/medidor_sonido_certificado_1_equipos.jpg' },
    { id: 26, nombre: 'Pluviometro', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pluviometro_1_equipos.jpg' },
    { id: 27, nombre: 'Refractometro Densidad Orina Perros Gatos', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/refractometro_densidad_orina_perros_gatos_equipos.jpg' },
    { id: 28, nombre: 'Refractrometro Brix Miel', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/refractrometro_brix_miel_equipos.jpg' },
    { id: 29, nombre: 'Refractrometro Salinometro', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/refractrometro_salinometro_equipos.jpg' },
    { id: 30, nombre: 'Soporte Universal Aros Pinzas', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/soporte_universal_aros_pinzas_equipos.jpg' },
    { id: 31, nombre: 'Soporte Universal Aros Pinzas 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/soporte_universal_aros_pinzas2_equipos.jpg' },
    { id: 32, nombre: 'Tiras Amonio 0-100ppm', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/tiras_amonio_0_100ppm_reactivos.jpg' },
    { id: 33, nombre: 'Tiras Cloro Hach', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/tiras_cloro_hach_reactivos.jpg' },
    { id: 34, nombre: 'Tiras Sulfato 200-1600ppm', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/tiras_sulfato_200_1600ppm_reactivos.jpg' },
    { id: 35, nombre: 'Balanza AWS 1000g', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/balanzas_equipos/balanza_aws_1000g.jpg' },
    { id: 36, nombre: 'Balanza AWS 200g', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/balanzas_equipos/balanza_aws_200g.jpg' },
    { id: 37, nombre: 'Balanza Masas', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/balanzas_equipos/balanza_masas.jpg' },
    { id: 38, nombre: 'Balanza Wellish 5000g', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/balanzas_equipos/balanza_wellish_5000g_1.jpg' },
    { id: 39, nombre: 'Balanza Wellish 5000g 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/balanzas_equipos/balanza_wellish_5000g_2.jpg' },
    { id: 40, nombre: 'Beaker 100mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/beaker_100mL.jpg' },
    { id: 41, nombre: 'Beaker 200mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/beaker_200mL.jpg' },
    { id: 42, nombre: 'Beaker 250mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/beaker_250mL.jpg' },
    { id: 43, nombre: 'Beaker 500mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/beaker_500mL.jpg' },
    { id: 44, nombre: 'Beaker 50mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/beaker_50mL.jpg' },
    { id: 45, nombre: 'Beaker Vidrio 500mL Agarradero', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/beaker_vidrio_500mL_agarradero.jpg' },
    { id: 46, nombre: 'Botella Vidrio 500mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/botella_vidrio_500mL.jpg' },
    { id: 47, nombre: 'Bureta 25mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/bureta_25mL.jpg' },
    { id: 48, nombre: 'Bureta 50mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/bureta_50mL_1.jpg' },
    { id: 49, nombre: 'Bureta Automatica 50mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/bureta_automatica_50mL.jpg' },
    { id: 50, nombre: 'Conos Imhoff 1000mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/conos_imhoff_1000mL_1.jpg' },
    { id: 51, nombre: 'Conos Imhoff 1000mL 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/conos_imhoff_1000mL_2.jpg' },
    { id: 52, nombre: 'Envases Vidrio Ambar Transparente', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/envases_vidrio_ambar_transparente.jpg' },
    { id: 53, nombre: 'Erlenmeyer 500mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/erlenmeyer_500mL_1.jpg' },
    { id: 54, nombre: 'Gradilla Tubos 20-21mm 40pozos', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/gradilla_tubos_20_21mm_40pozos.jpg' },
    { id: 55, nombre: 'Kit Erlenmeyer 50 hasta 1000mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/kit_erlenmeyer_50_hasta_1000mL.jpg' },
    { id: 56, nombre: 'Pipeta 10mL ClaseA', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/pipeta_10mL_claseA.jpg' },
    { id: 57, nombre: 'Pipeta 5mL ClaseA', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/pipeta_5mL_claseA.jpg' },
    { id: 58, nombre: 'Pipetas 10mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/pipetas_10mL.jpg' },
    { id: 59, nombre: 'Probeta Plastica 250mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/probeta_plastica_250mL.jpg' },
    { id: 60, nombre: 'Probeta Vidrio 500mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/probeta_vidrio_500mL.jpg' },
    { id: 61, nombre: 'Probeta Vidrio 50mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/probeta_vidrio_50mL.jpg' },
    { id: 62, nombre: 'Succionador Pipeta 10mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/succionador_pipeta_10mL.jpg' },
    { id: 63, nombre: 'Tubos Plastico Centrifuga 15mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/tubos_plastico_centrifuga_15mL.jpg' },
    { id: 64, nombre: 'Tubos Vidrio Tapa Rosca 15mL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/cristaleria/tubos_vidrio_tapa_rosca_15mL.jpg' },
    { id: 65, nombre: 'Kit Kitasato Embudo Buchnner', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/equipos_filtracion_cristaleria/kit_kitasato_embudo_buchnner.jpg' },
    { id: 66, nombre: 'Kit Kitasato Embudo Buchnner 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/equipos_filtracion_cristaleria/kit_kitasato_embudo_buchnner_2.jpg' },
    { id: 67, nombre: 'Papeles Filtro', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/equipos_filtracion_cristaleria/papeles_filtro.jpg' },
    { id: 68, nombre: 'Micropipeta 100uL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/micropipetas_cristaleria/micropipeta_100uL_1.jpg' },
    { id: 69, nombre: 'Micropipeta 100uL 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/micropipetas_cristaleria/micropipeta_100uL_2.jpg' },
    { id: 70, nombre: 'Puntas 1000uL', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/micropipetas_cristaleria/puntas_1000uL.jpg' },
    { id: 71, nombre: 'Conductimetro Apera', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/conductimetro_apera_1.jpg' },
    { id: 72, nombre: 'Conductimetro TDS', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/conductimetro_tds.jpg' },
    { id: 73, nombre: 'pHmetro Alimento', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/pHmetro_alimento_2.jpg' },
    { id: 74, nombre: 'pHmetro Bolsillo', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/pHmetro_bolsillo_3.jpg' },
    { id: 75, nombre: 'pHmetro Bolsillo Alimento', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/pHmetro_bolsillo_alimento_1.jpg' },
    { id: 76, nombre: 'pHmetro Bolsillo Milwaukee', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/pHmetro_bolsillo_milwaukee.jpg' },
    { id: 77, nombre: 'pHmetro Bolsillo Yinnik', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pHmetro_equipos/pHmetro_bolsillo_yinnik.jpg' },
    { id: 78, nombre: 'Kit Tamices 20cm', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/tamices_equipos/kit_tamices_20cm_1.jpg' },
    { id: 79, nombre: 'Tamices 30cm', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/tamices_equipos/tamices_30cm1.jpg' },
    { id: 80, nombre: 'Tamices 30cm 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/tamices_equipos/tamices_30cm2.jpg' },
    { id: 81, nombre: 'Termohigrometro', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termohigrometro_1.jpg' },
    { id: 82, nombre: 'Termohigrometro Traceable', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termohigrometro_traceable_1.jpg' },
    { id: 83, nombre: 'Termometro Alimentos Largo 25cm', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termometro_alimentos_largo_25cm.jpg' },
    { id: 84, nombre: 'Termometro Deltatrak', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termometro_deltatrak.jpg' },
    { id: 85, nombre: 'Termometro Infrarrojo', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termometro_infrarrojo_3.jpg' },
    { id: 86, nombre: 'Termometro Para Carne', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termometro_para_carne_1.jpg' },
    { id: 87, nombre: 'Termometros Infrarrojo', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termometros_infrarrojo_1.jpg' },
    { id: 88, nombre: 'Termometros Infrarrojo 2', precio: 0, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/termometros_equipos/termometros_infrarrojo_2.jpg' }
  ];

  constructor() { }

  getProducts(categoria?: string) {
    if (categoria) {
      return of(this.products.filter(p => p.categoria === categoria));
    }
    return of(this.products);
  }

  getProduct(id: number) {
    return of(this.products.find(p => p.id === id));
  }

  searchProducts(term: string) {
    return of(this.products.filter(p => p.nombre.toLowerCase().includes(term.toLowerCase())));
  }
}