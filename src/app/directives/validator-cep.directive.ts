import { ConsultaCepService } from "./../service/consulta-cep/consulta-cep.service";
import { Directive } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from "@angular/forms";
import { Observable, map } from "rxjs";

@Directive({
  selector: "[validatorCep]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidatorCepDirective,
      multi: true,
    },
  ],
})
export class ValidatorCepDirective implements AsyncValidator {
  constructor(private consultaCepService: ConsultaCepService) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.consultaCepService
      .getConsultaCep(cep)
      .pipe(map((cep: any) => (cep.erro ? { validatorCep: true } : null)));
  }
}
