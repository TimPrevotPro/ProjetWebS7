import { defineRule } from "vee-validate";
import { email, required, min, max } from '@vee-validate/rules';

defineRule('email', (value: string) => {
    if (email(value) && required(value)){
        return true;
    }
    return "Veuillez entrer une adresse mail valide"
});

defineRule('user', (value: string) => {
    if(required(value)){
        return true;
    }
    return "Vous devez compléter ce champ"
});

defineRule('password', (value: string) => {
    if (required(value) && min(value, {length: 8}) && max(value, {length: 20})){
        return true;
    }
    return "Votre mot de passe doit avoir une longueur de 8 à 20 caractères"
});

defineRule('confirmPassword', (value: string, [target]: any, ctx: any) => {
    if(required(value) && value === ctx.form[target]){
        return true;
    }
    return "Le mot de passe doit être identique"
});
