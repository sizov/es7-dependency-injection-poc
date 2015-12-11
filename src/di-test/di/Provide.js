import { iocContainer } from './iocContainer';


export function provide(id) {

    return function (target, name, descriptor) {

        iocContainer.setDependencyById('realDuckQuackBehaviour', target);

    }
}