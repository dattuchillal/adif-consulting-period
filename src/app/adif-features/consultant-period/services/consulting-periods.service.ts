import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Budget {
  codigo_sap_expediente: string;
  cod_sociedad: string;
}

export interface Periodo {
  periodo: string;
  codigo: string;
}

export interface Cert {
  periodo: string;
  codigo: string;
  tstamp: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultingPeriodsService {
  private readonly certUri = environment.serverUrl + '/adif/cert';
  private readonly budgetListUri = environment.serverUrl + '/adif/budget/list';
  constructor(
    private http: HttpClient
  ) { }

  getAllCodigo(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.budgetListUri);
  }

  cert(cert: Periodo): Observable<Cert> {
    return this.http.post<Cert>(this.certUri, cert);
  }

}
