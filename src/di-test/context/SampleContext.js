import { iocContainer } from '../di/iocContainer';

//import { RealQuackBehaviour } from '../behaviours/RealQuackBehaviour'



////
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
////


//this is an empty class that just imports Classes to be instantiated
class RealContext {

    bootstrap() {

        //TODO: you can have decorator for this, smth like @contextBootstrapper
        iocContainer.bootstrap([
            RealQuackBehaviour
        ]);
    }
}

export default RealContext;