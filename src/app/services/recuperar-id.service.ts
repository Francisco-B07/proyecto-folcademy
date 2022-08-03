import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecuperarIdService {
  id: number = -1;
  private recuperarIdSubject: Subject<number> = new Subject<number>();
  constructor() {}
  recuperarIdObservable = this.recuperarIdSubject.asObservable();
  public recuperarId(id: number) {
    this.id = id;
    this.recuperarIdSubject.next(id);
  }
}
