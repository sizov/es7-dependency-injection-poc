import { inject } from './di/Inject';

class Duck {

    constructor(name) {
        console.log('Duck', name, 'is created');
    }

    get quackBehaviour() {
        return this._quackBehaviour;
    }

    @inject('quackBehaviour')
    set quackBehaviour(value) {
        this._quackBehaviour = value;
    }

    quack() {
        if (!this.quackBehaviour) {
            console.warn('quackBehaviour is missing');
            return;
        }

        this.quackBehaviour.quack();
    }
}

export default Duck;