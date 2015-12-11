import { provide } from '../di/Provide';

@provide('quackBehaviour')
//TODO; prevent this to run provide if context has been initialized already
class FakeQuackBehaviour {

    constructor() {
    }

    quack() {
        console.info('Quacking, kind of');
    }
}

export default FakeQuackBehaviour