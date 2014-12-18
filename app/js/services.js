'use strict';

var geoServices = angular.module('geoServices', ['ngResource']);

geoServices.factory('Zip', ['$resource',
    function($resource){
        //return $resource('https://api3.geo.admin.ch/rest/services/api/SearchServer?type=locations&origins=zipcode');
        return $resource('https://api3.geo.admin.ch/rest/services/api/SearchServer?type=locations&origins=zipcode', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);










/**
 * Created by giovanni on 18/12/14.
 */
