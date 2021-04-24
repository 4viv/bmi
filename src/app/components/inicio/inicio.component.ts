import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad: number = 22;
  peso: number = 60;
  altura: number = 160;
  sexo: string = '';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any){
    //console.log(event.target.value)
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Hombre'
  }

  femenino(){
    this.sexo = 'Mujer'
  }

  calcular(){

    const BMI = this.peso / Math.pow(this.altura / 100, 2);

    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
