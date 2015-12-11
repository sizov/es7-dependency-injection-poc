class IocContainer {

    constructor() {
        var privateIocContainerStore = {};

        this.getDependencyInstanceById = function (id) {
            return privateIocContainerStore[id];
        };

        this.setDependencyById = function (id, DependencyProviderClass) {
            if (privateIocContainerStore[id]) {
                throw new Error('Error setting instance by ID, it has already been set');
            }

            privateIocContainerStore[id] = new DependencyProviderClass();
        };
    }
}


export const iocContainer = new IocContainer();