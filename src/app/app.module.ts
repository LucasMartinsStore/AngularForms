import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { SucessoCadastroComponent } from "./sucesso-cadastro/sucesso-cadastro.component";
import { FormsModule } from "@angular/forms";
import { MensagemErroComponent } from "./components/mensagem-erro/mensagem-erro.component";
import { MaiorIdadeDirective } from "./directives/maior-idade.directive";

import { HttpClientModule } from "@angular/common/http";
import { ValidatorCepDirective } from './directives/validator-cep.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    MensagemErroComponent,
    MaiorIdadeDirective,
    ValidatorCepDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
