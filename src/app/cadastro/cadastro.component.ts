import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  consultaCep(ev: any, formsRegister: NgForm) {
    const cep = ev.target.value;
    if (cep !== "") {
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
        this.populandoEndereco(resultado, formsRegister);
      });
    }
  }

  populandoEndereco(dados: any, formsRegister: NgForm) {
    formsRegister.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["sucesso"]);
    } else {
      alert("Formulário inválido");
    }

    console.log(form.controls);
  }
}
