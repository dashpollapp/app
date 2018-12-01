export default class Enum {
    constructor(enumObj) {
        const handler = {
            get(target, name) {
                if (target[name]) {
                    return target[name];
                }
                throw new Error(`No such enumerator: ${name}`);
            },
        };

        return new Proxy(Object.freeze(enumObj), handler);
    }
}