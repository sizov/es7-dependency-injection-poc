function findIdsByProvider(RequiredProvider, providersById) {
    var result = [];

    for (var id in providersById) {
        var providers = providersById[id];
        if (providers.indexOf(RequiredProvider) !== -1) {
            result.push(id);
        }
    }

    return result;
}

class IocContainer {

    constructor() {
        var singleDependencyInstanceById = {},
            providersById = {};

        function setDependencyById(id, dependency) {
            if (singleDependencyInstanceById[id]) {
                throw new Error('Error setting instance by ID, it has already been set');
            }

            singleDependencyInstanceById[id] = dependency;
        }

        this.getDependencyInstanceById = function (id) {
            return singleDependencyInstanceById[id];
        };

        this.registerProvider = function (id, Provider) {
            var providers = providersById[id];
            if (!providers) {
                providers = [];
                providersById[id] = providers;
            }

            providers.push(Provider);
        };

        this.setContextDependencies = function (requiredProviders) {
            requiredProviders.forEach(function (RequiredProvider) {
                var idsByProvider = findIdsByProvider(RequiredProvider, providersById),
                    providerInstance = new RequiredProvider();

                idsByProvider.forEach(function (id) {
                    setDependencyById(id, providerInstance);
                });

            })
        }
    }
}


export const iocContainer = new IocContainer();