import { iocContainer } from './iocContainer';

export function context(contextId) {

    return function (target, name, descriptor) {

        let originalBootstrap = target.prototype.bootstrap;

        target.prototype.bootstrap = function () {
            var originalBootstrapResult = originalBootstrap.call(this, arguments);
            console.log('Context', contextId, 'bootstrapped');
            iocContainer.setContextDependencies(originalBootstrapResult);
            return originalBootstrapResult;
        }
    }
}