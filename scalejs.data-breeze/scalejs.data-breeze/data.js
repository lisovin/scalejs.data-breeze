/*global define*/
define([
    'scalejs!core',
    'breeze',
    'breeze.metadata-helper',
    'q'
], function (
    core,
    breeze
) {
    'use strict';

    var // imports
        camelCaseConvention = breeze.NamingConvention.camelCase,
        // vars
        helper = new breeze.MetadataHelper('App'),
        addTypeToStore = helper.addTypeToStore,
        metadataStore,
        entityManager;

    function createEntityManager() {
        metadataStore = new breeze.MetadataStore({
            namingConvention: camelCaseConvention
        });

        helper.addDataService(metadataStore, '');

        entityManager = new breeze.EntityManager({
            serviceName: '',
            metadataStore: metadataStore
        });
    }

    function registerEntityType(entityType, initializer) {
        addTypeToStore(metadataStore, entityType);
        metadataStore.registerEntityTypeCtor(entityType.shortName, null, initializer);
    }

    function getAllEntities(entityType) {
        var query,
            apps;

        query = breeze.EntityQuery.from(entityType + 's');
        apps = entityManager.executeQueryLocally(query);

        return apps;
    }

    function executeQueryLocally(query) {
        var items = entityManager.executeQueryLocally(query);

        return items;
    }

    createEntityManager();

    return {
        registerEntityType: registerEntityType,
        createEntity: entityManager.createEntity.bind(entityManager),
        getAllEntities: getAllEntities,
        executeQueryLocally: executeQueryLocally,
        breeze: breeze,
        types: breeze.DT
    };
});

