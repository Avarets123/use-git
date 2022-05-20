class Notify {
    send(template: string, to: string) {
        console.log(` Отправка ${template}: ${to}`);
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}


class Template {
    private templates = [
        { name: 'other', template: '<h1>Example</h1>' }
    ];


    getByName(name: string) {
        return this.templates.find(t => t.name === name);
    }
}


class NotificationFacade {
    private notify: Notify = new Notify();
    private logger: Log = new Log();
    private template: Template = new Template();


    send(to: string, templateName: string) {
        const data = this.template.getByName(templateName);

        if (!data) {
            this.logger.log(`Not found`);
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log(`Sended !`);
    }
}


const facade = new NotificationFacade();

facade.send('afdsfs', 'other');