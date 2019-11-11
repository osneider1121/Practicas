import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private service:ServiceService, private router:Router) { }


  ngOnInit() {
  }
  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("se agergo exitosamente");
      this.router.navigate(["listar"]);
    })
  }
}
