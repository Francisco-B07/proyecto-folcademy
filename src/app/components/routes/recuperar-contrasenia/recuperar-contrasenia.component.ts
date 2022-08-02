import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/service/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css'],
  providers: [AuthService],
})
export class RecuperarContraseniaComponent implements OnInit {
  userEmail = new FormControl('');
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private authSvc:AuthService, private router:Router) {}

  ngOnInit(): void {}

  async onReset() {

    // try{
    //   await this.authSvc.resetPassword(email);
    //   window.alert('Email sent, check your inbox');
    //   this.router.navigate(['/cambio-contraseña'])
    //   const email = this.userEmail.value;
    // }
    // catch(error) {console.log(error)}

    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
