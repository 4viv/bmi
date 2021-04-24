import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  resultado: string = '';
  interpretacion: string = '';

  constructor(public route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi);
   }

  ngOnInit(): void {
    this.getResultado()
  }

  getResultado(){
    if (this.bmi >= 30) {
      this.resultado = 'Obesidad';
      this.interpretacion = 'Según su indice de masa corporal usted padece obesidad';
    } else
    if (this.bmi >= 25) {
      this.resultado = 'Peso superior al normal';
      this.interpretacion = 'Tienes un indice de masa corporal superior al recomendado';
    }else
    if(this.bmi >= 18.5) {
      this.resultado = 'Peso normal';
      this.interpretacion = 'Tienes un indice de masa corporal adecuado ';
    } else {
      this.resultado = 'Peso inferior al normal';
      this.interpretacion = 'Tu indice de masa corporal es mas bajo del recomendado';
    }
  }
}
