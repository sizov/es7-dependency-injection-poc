import { iocContainer } from './iocContainer';

export function provide(id) {

    return function (target, name, descriptor) {

        iocContainer.registerProvider(id, target);
    }
}