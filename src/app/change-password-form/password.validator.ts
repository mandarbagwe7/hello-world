import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator{
    static oldPasswordCheck(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if(control.value !== '1234'){
                resolve({oldPasswordNotMatched: true});
            }
            else resolve(null);
        });
    }

    static passwordShouldMatch(control: AbstractControl): ValidationErrors | null {
        if(control.get('newpassword').value !== control.get('confirmpassword').value){
            return { confirmPasswordNotSame: true };
        }
        
        return null;
    }
}