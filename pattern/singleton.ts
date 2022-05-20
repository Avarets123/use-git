
class MyMap {
    private static instance: MyMap;
    map: Map<number, string> = new Map();

    private constructor() { }


    clean(): void {
        this.map = new Map();
    }


    public static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}


class ServiceSet {
    addMap(key: number, value: string): void {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}


class ServiceGet {
    getKeys(key: number) {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key))

    }
}

new ServiceSet().addMap(1, 'Its working !');
new ServiceGet().getKeys(1);