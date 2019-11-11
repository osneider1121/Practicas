import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  persona:Persona=new Persona();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("idPersona");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  Actualizar(persona:Persona){
    this.service.updatePersona2(persona)
    .subscribe(
      data=>{
        alert("se actualizo");
        this.router.navigate(["listar"]);
      }
    )
  }
}
