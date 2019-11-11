import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService}from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas:Persona[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(
      data=>{
        this.personas=data;
      })
   }
   Editar(persona:Persona){
    localStorage.setItem("idPersona",persona.idPersona.toString());
    this.router.navigate(["editar"]);
   }


}
