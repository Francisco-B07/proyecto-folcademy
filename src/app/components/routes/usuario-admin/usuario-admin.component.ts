import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css'],
})
export class UsuarioAdminComponent implements OnInit {
  modalRef?: BsModalRef;
  message?: string;

  bsModalRef?: BsModalRef;
  confirmModalRef?: BsModalRef;
  confirmResolve?: () => void;
  confirmReject?: () => void;
  confirmPromise?: Promise<void>;

  pageActual: number = 1;
  opcion: string = 'usuarios';
  toSearch = '';

  seleccionoOpcion(opcion: string) {
    this.opcion = opcion;
  }
  usuarios: any[] = [
    {
      nombre: 'Crowfunding',
      apellido: 'Suscripcion',
      email: 'Soledadmartinez22@gmail.com',
    },
    {
      nombre: 'Proyecto donar',
      apellido: 'Donar',
      email: 'Soledadmartinez22@gmail.com',
    },
    {
      nombre: 'Proyecto Participar',
      apellido: 'Participar',
      email: 'Soledadmartinez22@gmail.com',
    },
  ];
  encountered: any[] = [];

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirmRemove(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }

  declineRemove(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  openModalWithInterceptor(confirmTemplate: TemplateRef<any>) {
    const closeInterceptor = () => {
      this.confirmPromise = new Promise((resolve, reject) => {
        this.confirmResolve = resolve;
        this.confirmReject = reject;
      });
      this.confirmModalRef = this.modalService.show(confirmTemplate, {
        class: 'modal-sm',
      });

      return this.confirmPromise;
    };
    this.bsModalRef = this.modalService.show(
      ModalContentWithInterceptorComponent,
      { closeInterceptor }
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  confirmClose(): void {
    if (this.confirmResolve) {
      this.confirmResolve();
    }
    this.confirmModalRef?.hide();
  }

  declineClose(): void {
    if (this.confirmReject) {
      this.confirmReject();
    }
    this.confirmModalRef?.hide();
  }

  ngOnInit(): void {}
  search() {
    this.encountered = this.usuarios.filter((res) => {
      if (res.title) {
        return res.title
          .toLocaleLowerCase()
          .match(this.toSearch.toLocaleLowerCase());
      }
      if (res.name) {
        return res.name
          .toLocaleLowerCase()
          .match(this.toSearch.toLocaleLowerCase());
      }
    });
  }
}
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content-with-interceptor',
  template: `
    <div class="modal-crear d-flex flex-column">
      <button
        type="button"
        class="close btn-close pull-right"
        aria-label="Close"
        (click)="bsModalRef?.hide()"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div class="d-flex justify-content-center">
        <img
          class="logo"
          src="../../../../assets/logo_talentojovenc 4.png"
          alt=""
        />
      </div>

      <form
        class="d-flex flex-column align-items-center"
        [formGroup]="usuarioForm"
        (ngSubmit)="crearUsuario()"
      >
        <div class="contenedor-input">
          <input
            type="text"
            formControlName="nombre"
            class="input-modal form-control form-control-lg"
            placeholder="Nombre..."
          />
          <div
            class="text-danger"
            *ngIf="
              usuarioForm.get('nombre')?.hasError('required') &&
              usuarioForm.get('nombre')?.touched
            "
          >
            <span>El nombre del usuario <strong>es obligatorio</strong></span>
          </div>
        </div>

        <div class="contenedor-input">
          <input
            type="text"
            formControlName="apellido"
            class="input-modal form-control form-control-lg"
            placeholder="Apellido..."
          />
          <div
            class="text-danger"
            *ngIf="
              usuarioForm.get('apellido')?.hasError('required') &&
              usuarioForm.get('apellido')?.touched
            "
          >
            <span>El apellido del usuario <strong>es obligatorio</strong></span>
          </div>
        </div>

        <div class="contenedor-input">
          <input
            type="email"
            formControlName="email"
            class="input-modal form-control form-control-lg"
            placeholder="Correo electronico..."
          />
          <div
            class="text-danger"
            *ngIf="
              usuarioForm.get('email')?.hasError('required') &&
              usuarioForm.get('email')?.touched
            "
          >
            <span>El email del usuario <strong>es obligatorio</strong></span>
          </div>
        </div>

        <div class="contenedor-boton-crear">
          <button
            type="submit"
            [disabled]="usuarioForm.invalid"
            class="boton-crear"
            (click)="crearUsuario()"
          >
            + Crear Usuario
          </button>
        </div>
        <div class="contenedor-boton-cancelar">
          <button
            type="button"
            class="btn btn-default"
            (click)="bsModalRef?.hide()"
          >
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .btn-close {
        position: relative;
        left: 465px;
        margin-top: 15px;
      }
      .logo {
        margin-top: 14px;
      }
      .input-modal {
        margin-top: 35px;
        border: solid 1px #857b7b;
        width: 340px;
        height: 39.23px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #555555;
      }
      .input-modal::placeholder {
        text-align: center;
      }
      .contenedor-boton-crear {
        height: 46px;
        margin-top: 56px;
      }
      .boton-crear {
        cursor: pointer;
        background: #ea138c;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 26.5px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
        width: 238px;
        height: 43px;
        border: none;
      }

      .boton-crear:hover {
        width: 240px;
        height: 45px;
        margin-top: -1px;
      }
      .boton-crear:disabled {
        background: #f077bb;
      }
      .contenedor-boton-cancelar {
        margin-top: 33px;
        margin-bottom: 70px;
        height: 30px;
      }
      .btn-default {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        color: #857b7b;
      }
      .btn-default:hover {
        border: transparent;
        font-size: 24px;
      }
      .text-danger {
        text-align: start;
        margin-left: 7px;
        margin-top: 3px;
      }
    `,
  ],
})
export class ModalContentWithInterceptorComponent {
  usuarioForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private modalService: BsModalService
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  crearUsuario() {
    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      email: this.usuarioForm.get('email')?.value,
    };
    console.log(USUARIO);

    this.modalService._hideModal();
    this.modalService._hideBackdrop();
  }
}
