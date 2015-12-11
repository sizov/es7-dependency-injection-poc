import { context } from '../lib/di/Context';

import RealQuackBehaviour from '../behaviours/RealQuackBehaviour'

@context('mainContext')
class RealContext {

    bootstrap() {
        return [
            RealQuackBehaviour
        ];
    }
}

export default RealContext;