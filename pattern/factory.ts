interface IInsurance {
    id: string;
    status: string;
    setVehicle(vehicle: any): any
    submit(): Promise<boolean>
}


class TFInsurance implements IInsurance {
    id: string;
    status: string;
    private vehicle: any

    setVehicle(vehicle: any) {
        this.vehicle = vehicle;
    }

    async submit() {

        const res = await fetch('TF', { method: 'POST', body: JSON.stringify({ vehicle: this.vehicle }) });
        const data = await res.json();
        return data.isSuccess;
    }

}

class ABInsurance implements IInsurance {
    id: string;
    status: string;
    private vehicle: any

    setVehicle(vehicle: any) {
        this.vehicle = vehicle;
    }

    async submit() {

        const res = await fetch('AB', { method: 'POST', body: JSON.stringify({ vehicle: this.vehicle }) });
        const data = await res.json();
        return data.isAccess;
    }

}


abstract class Insurance {
    db: any;

    abstract createInsurance(): IInsurance;

    saveHistory(ins: IInsurance) {
        this.db.save(ins.id, ins.status);
    }
}


class ABInsuranceFactory extends Insurance {
    createInsurance(): IInsurance {
        return new ABInsurance();
    }

}


class TFInsuranceFactory extends Insurance {
    createInsurance(): IInsurance {
        return new TFInsurance();
    }
}


const TFI = new TFInsuranceFactory();
const insuranceTF = TFI.createInsurance();



const ABI = new ABInsuranceFactory();
const insuranceAB = ABI.createInsurance();




// const INSURANCE_TYPE = {
//     tf: TFInsurance,
//     ab: ABInsurance
// };

// type IT = typeof INSURANCE_TYPE;


// class InsuranceFactoryAlt {
//     db: any;

//     createInsurance<T extends keyof IT>(type: T): IT[T] {

//         return INSURANCE_TYPE[type];
//     }

//     saveHistory(): void {
//         return
//      }
// }

// const insFac = new InsuranceFactoryAlt();
// const ins2 = new (insFac.createInsurance('ab'));


