import { provide } from '../lib/di/Provide';

@provide('quackBehaviour')
class RealQuackBehaviour {

    constructor() {
    }

    quack() {
        console.info('Quacking for real!');
    }
}

export default RealQuackBehaviour