import { provide } from '../di/Provide';

@provide('quackBehaviour')
class FakeQuackBehaviour {

    constructor() {
    }

    quack() {
        console.info('Quacking, kind of');
    }
}

export default FakeQuackBehaviour