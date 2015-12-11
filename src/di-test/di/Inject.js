import { iocContainer } from './iocContainer';


export function inject(id) {

    return function (target, name, descriptor) {

        let originalGetter = descriptor.get;

        descriptor.get = function () {
            var originalGetterResult = originalGetter.call(this);
            if (originalGetterResult) {
                return originalGetterResult;
            }
            return iocContainer.getDependencyInstanceById(id);
        };

    }
}