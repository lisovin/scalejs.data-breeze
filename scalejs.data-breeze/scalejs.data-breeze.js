/*global define*/
define([
    'scalejs!core',
    './scalejs.data-breeze/data'
], function (
    core,
    data
) {
    'use strict';

    core.registerExtension({
        data: data
    });
});

