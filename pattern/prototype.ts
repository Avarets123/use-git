interface IPrototype<T> {
    clone(): T
}

class UserHistory implements IPrototype<UserHistory> {
    createdAt: Date;


    constructor(public email: string, public name: string) {

        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let proto = new UserHistory(this.email, this.name);
        proto.createdAt = this.createdAt;
        return proto;
    }
}


const hist = new UserHistory('sdfasf@.ru', 'proto');

const proto = hist.clone();

console.log(proto);