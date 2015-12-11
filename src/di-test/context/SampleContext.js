import { iocContainer } from '../di/iocContainer';

import RealQuackBehaviour from '../behaviours/RealQuackBehaviour'


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