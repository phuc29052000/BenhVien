import { Observable } from 'rxjs';

export class InforMain {
        fullname!: string;
        birthday!: string;
        gender !: boolean;
        phoneNumber !: string;
        city !: string;
        district !: string;
        address !: string;
}

export class InforReception {
      hospital_Day !: string;
      subclass !: string;
      type !: string;
      source !:string;
      institute !:string;
      accident !:string;
      object !: string;
      group !:string;
      rank !:string;
      position !:string;
      unit !:string;
}

export class RegisterMedical {
    examination !: string;
    guarantee !: string;
    freeNumber !: string;
    exempt !: string;
    service !: string;
    room !: string;
}

export class InsuranceCard {
    idCard !: string;
    nameCard !: string;
    birthday !: string ;
}

export class Relatives {
    relationship !: string;
    fullName !: string;
    phoneNumber !: string;
    address !:string;
}

export abstract class  PatientData{


}




