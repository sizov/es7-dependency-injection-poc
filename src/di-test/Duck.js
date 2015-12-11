import { inject } from './di/Inject';

class Duck {

    constructor(name) {
        console.log('Duck', name, 'is created');
    }

    @inject('quackBehaviour')
    get quackBehaviour() {
        return this._quackBehaviour;
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