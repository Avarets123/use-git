interface IProvider {
    sendMessage(mes: string): void;
    connect(config: unknown): void;
    disconnect(): void;
}


class Telegramm implements IProvider {

    sendMessage(mes: string): void {
        console.log(mes);
    }

    connect(config: string): void {
        console.log(`Connect` + config);
    }


    disconnect(): void {
        console.log(`Disconnect`);
    }
}

class WhatsUp implements IProvider {

    sendMessage(mes: string): void {
        console.log(mes);
    }

    connect(config: string): void {
        console.log(`Connect` + config);
    }


    disconnect(): void {
        console.log(`Disconnect`);
    }
}



class NotificationSender {

    constructor(private provider: IProvider) { }

    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}



class DelayNotificationSender extends NotificationSender {

    constructor(provider: IProvider) {
        super(provider);
    }

    sendDelay() {

    }

}


const telegramm = new NotificationSender(new Telegramm());
const whatsUp = new DelayNotificationSender(new WhatsUp());

whatsUp.sendDelay();
telegramm.send();
