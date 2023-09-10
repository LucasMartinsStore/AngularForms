import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  private readonly API = "https://viacep.com.br/ws/";

  constructor(private httpClient: HttpClient) {}

  getConsultaCep(cep: string) {
    return this.httpClient.get(`${this.API}${cep}/json`);
  }
}
