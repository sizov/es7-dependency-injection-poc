import { provide } from '../di/Provide';

@provide('quackBehaviour')
class RealQuackBehaviour {

    constructor() {
        console.log('RealQuackBehaviour is created');
    }

    quack() {
        console.info('Quacking for real!');
    }
}

export default RealQuackBehaviour