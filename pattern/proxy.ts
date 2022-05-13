interface IPaymentDetails {
    id: number;
    sum: number;
};

interface IPaymentAPI {
    getPaymentDetail(id: number): IPaymentDetails | undefined;
};

class PaymentAPI implements IPaymentAPI {
    private data = [{ id: 1, sum: 12000 }];

    getPaymentDetail(id: number): IPaymentDetails | undefined {
        return this.data.find(i => i.id === id);
    }
};


class PaymentAccessProxy implements IPaymentAPI {

    constructor(private api: PaymentAPI, private userId: number) { }

    getPaymentDetail(id: number): IPaymentDetails | undefined {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }

        console.log(`Error ! Error !`);
        return undefined;
    }

}

const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);