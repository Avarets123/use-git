function Component(id: number) {
    console.log('init Component');
    return (target: Function) => {
        console.log('run Component');
        target.prototype.id = id;
    }
}


function Logger() {
    console.log('init Logger');
    return (target: Function) => {
        console.log('run Logger');
    }
}

function Method(target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor ) {
    console.log(propertyKey);
    const oldValue = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
        return args[0] * 10;
    }
}


function Prop(target: Object, propertyKey: string) {

    let value: number;

    const setter = (newValue: number) => {
        console.log('Setter');
        return newValue;
    };

    const getter = () => {
        console.log('getter');
        return value;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    }) 

}

@Logger()
@Component(1)

export class User {
   @Prop id: number;


    @Method
    update(newId: number)  {
        this.id = newId;
        return this.id;
    }

}

console.log(new User().id);
console.log(new User().update(32));