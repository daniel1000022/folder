!function(){var n={907:function(e,t,n){var r={"./2dThumbnailComponent.js":401};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=907},441:function(e,t,n){var r={"./thumbnailConstants.js":846};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=441},297:function(e,t,n){var r={"./2dThumbnailController.js":162};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=297},484:function(e,t,n){var r={"./imageLoadDirective.js":912,"./thumbnailErrorDirective.js":906};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=484},44:function(e,t,n){var r={"./thumbnailService.js":270};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=44},671:function(e,t,n){var r={"./components/templates/2dThumbnail.html":393};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=671},544:function(e){function i(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function o(e){return e.split("/").pop().replace(".html","")}var t={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,t,r,a){return e.module(t,[]).run(["$templateCache",function(n){r&&r.keys().forEach(function(e){var t=i(o(e));n.put(t,r(e))}),a&&a.keys().forEach(function(e){var t=i(o(e));n.put(t,a(e).replace(/<\/?script[^>]*>/gi,""))})}])}};e.exports=t},401:function(e,t,n){"use strict";n.r(t);var r={templateUrl:"2d-thumbnail",bindings:{thumbnailType:"<",thumbnailTargetId:"<",thumbnailOptions:"<?",onSuccess:"<",onFailure:"<",altName:"<"},controller:"2dThumbnailController"};n(809).Z.component("thumbnail2d",r),t.default=r},846:function(e,t,n){"use strict";n.r(t);var r=n(205),n=n(809),r={thumbnailTypes:r.ThumbnailTypes,thumbnailStates:r.ThumbnailStates,formats:r.ThumbnailFormat,avatarHeadshotSize:r.ThumbnailAvatarHeadshotSize,gameIconSize:r.ThumbnailGameIconSize,thumbnailAvatarsSize:r.ThumbnailAvatarsSize};n.Z.constant("thumbnailConstants",r),t.default=r},162:function(e,t,n){"use strict";n.r(t);var o=n(205),u=n(604),n=n(809);function r(e,n){var a=this,r="",i=o.ThumbnailStates;a.getCssClasses=function(){return a.isThumbnailRequestSending?"shimmer":n.getCssClass(a.thumbnailState)},a.setThumbnailLoadFailed=function(){},a.isLazyLoadingEnabled=function(){return a.thumbnailOptions&&a.thumbnailOptions.isLazyLoading},a.updateImageLoadMetrics=function(e){var t=e-a.startTime,e=a.performance.retryAttempts;u.Z.logMeasurement("ThumbnailLoadDurationWebapp",{Status:"Success",ThumbnailType:"".concat(a.thumbnailType,"_2d"),Version:a.version,Value:t.toString()}),(e?u.Z.logMeasurement("ThumbnailRetryWebapp",{ThumbnailType:"".concat(a.thumbnailType,"_2d"),Version:a.version,Value:e.toString()}):u.Z.logMeasurement("ThumbnailNoRetrySuccessWebapp",{ThumbnailType:"".concat(a.thumbnailType,"_2d"),Version:a.version})).catch(console.debug)};function t(){var e,t="".concat(a.thumbnailType,":").concat(a.thumbnailTargetId);a.startTime=(new Date).getTime(),r!==t&&(r=t,a.thumbnailState=i.loading,t=(null===(e=a.thumbnailOptions)||void 0===e?void 0:e.size)||o.DefaultThumbnailSize,e=(null===(e=a.thumbnailOptions)||void 0===e?void 0:e.format)||o.DefaultThumbnailFormat,a.isThumbnailRequestSending=!0,n.getThumbnailImage(a.thumbnailType,a.thumbnailTargetId,t,e).then(function(e){var t=e.thumbnail,n=t.state,r=t.imageUrl,t=t.version,e=e.performance;a.thumbnailState=n,a.thumbnailUrl=r,a.performance=e,a.version=t,a.onSuccess&&a.onSuccess(e)}).catch(function(e){a.thumbnailState=i.error,a.onFailure&&a.onFailure(e)}).finally(function(){a.isThumbnailRequestSending=!1}))}a.$onInit=t,a.$onChanges=t}r.$inject=["$scope","thumbnailService"],n.Z.controller("2dThumbnailController",r),t.default=r},912:function(e,t,n){"use strict";function r(){return{restrict:"A",link:function(e,t){t.bind("load",function(){e.$evalAsync(function(){e.$parent.$ctrl.updateImageLoadMetrics((new Date).getTime()),e.isLoaded=!0})})}}}n.r(t),n(809).Z.directive("imageLoad",r),t.default=r},906:function(e,t,n){"use strict";function r(){return{scope:{thumbnailError:"<"},link:function(e,t){t.on("error",e.thumbnailError)}}}n.r(t),n(809).Z.directive("thumbnailError",r),t.default=r},270:function(e,t,n){"use strict";n.r(t);var i=n(394),n=n(809);function r(e){return{getThumbnailImage:function(n,r,a){return e(function(t,e){i.Z.getThumbnailImage(n,a,null,r).then(function(e){t(e)}).catch(e)})},getCssClass:function(e){return i.Z.getCssClass(e)},reloadThumbnailImage:function(n,r,a){return e(function(t,e){i.Z.reloadThumbnailImage(n,a,null,r).then(function(e){t(e)}).catch(e)})}}}r.$inject=["$q"],n.Z.factory("thumbnailService",r),t.default=r},809:function(e,t,n){"use strict";var r=n(734),r=n.n(r)().module("thumbnails",["robloxApp","thumbnailsTemplates","angularLazyImg"]);t.Z=r},999:function(){angular.module("angularLazyImg",[]).factory("LazyImgMagic",["$window","$rootScope","lazyImgConfig","lazyImgHelpers",function(e,r,t,n){"use strict";var a,i,o,u,s,l,c,m;function h(){for(var e=o.length-1;0<=e;e--){var t=o[e];t&&n.isElementInView(t.$elem[0],s.offset,a)&&(function(n){var e=new Image;e.onerror=function(){s.errorClass&&n.$elem.addClass(s.errorClass),r.$emit("lazyImg:error",n),s.onError(n)},e.onload=function(){var e,t;e=n.$elem,t=n.src,"img"===e[0].nodeName.toLowerCase()?e[0].src=t:e.css("background-image",'url("'+t+'")'),n.$elem.removeClass(s.loadingClass),s.successClass&&n.$elem.addClass(s.successClass),r.$emit("lazyImg:success",n),s.onSuccess(n)},e.src=n.src}(t),o.splice(e,1))}0===o.length&&p()}function f(t){m.forEach(function(e){e[t]("scroll",l),e[t]("touchmove",l)}),i[t]("resize",l),i[t]("resize",c)}function b(){u=!0,setTimeout(function(){h(),f("on")},1)}function p(){u=!1,f("off")}function d(e){e.addClass(s.loadingClass),this.$elem=e}return u=!(o=[]),s=t.getOptions(),i=angular.element(e),a=n.getWinDimensions(),c=n.throttle(function(){a=n.getWinDimensions()},60),m=[s.container||i],l=n.throttle(h,30),d.prototype.setSource=function(e){this.src=e,o.unshift(this),u||b()},d.prototype.removeImage=function(){var e;e=this,-1!==(e=o.indexOf(e))&&o.splice(e,1),0===o.length&&p()},d.prototype.checkImages=function(){h()},d.addContainer=function(e){p(),m.push(e),b()},d.removeContainer=function(e){p(),m.splice(m.indexOf(e),1),b()},d}]).provider("lazyImgConfig",function(){"use strict";this.options={offset:100,errorClass:null,successClass:null,onError:function(){},onSuccess:function(){},loadingClass:"icon-placeholder-game"},this.$get=function(){var e=this.options;return{getOptions:function(){return e}}},this.setOptions=function(e){angular.extend(this.options,e)}}).factory("lazyImgHelpers",["$window",function(e){"use strict";return{isElementInView:function(e,t,n){var r=e.getBoundingClientRect(),a=n.height+t;return e.offsetParent&&0<=r.left&&r.right<=n.width+t&&(0<=r.top&&r.top<=a||r.bottom<=a&&r.bottom>=0-t)},getWinDimensions:function(){return{height:e.innerHeight,width:e.innerWidth}},throttle:function(r,a,i){var o,u;return function(){var e=i||this,t=+new Date,n=arguments;o&&t<o+a?(clearTimeout(u),u=setTimeout(function(){o=t,r.apply(e,n)},a)):(o=t,r.apply(e,n))}}}}]).directive("lazyImg",["$rootScope","LazyImgMagic",function(a,i){"use strict";return{link:function(e,t,n){var r=new i(t);n.$observe("lazyImg",function(e){e&&r.setSource(e)}),e.$on("$destroy",function(){r.removeImage()}),a.$on("lazyImg.runCheck",function(){r.checkImages()}),a.$on("lazyImg:refresh",function(){r.checkImages()})},restrict:"A"}}]).directive("lazyImgContainer",["LazyImgMagic",function(n){"use strict";return{link:function(e,t){n.addContainer(t),e.$on("$destroy",function(){n.removeContainer(t)})},restrict:"A"}}])},779:function(e,t){var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r,a=typeof n;if("string"==a||"number"==a)e.push(n);else if(Array.isArray(n))!n.length||(r=u.apply(null,n))&&e.push(r);else if("object"==a)if(n.toString===Object.prototype.toString||n.toString.toString().includes("[native code]"))for(var i in n)o.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):void 0===(n=function(){return u}.apply(t,[]))||(e.exports=n)}()},393:function(e){e.exports='<span ng-class="$ctrl.getCssClasses()" class="thumbnail-2d-container" thumbnail-type="{{ $ctrl.thumbnailType }}" thumbnail-target-id="{{ $ctrl.thumbnailTargetId }}"> <img ng-if="$ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled()" ng-src="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed" ng-class="{\'loading\': $ctrl.thumbnailUrl && !isLoaded }" image-load alt="{{$ctrl.altName}}" title="{{$ctrl.altName}}"/> <img ng-if="$ctrl.thumbnailUrl && $ctrl.isLazyLoadingEnabled()" lazy-img="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed"/> </span> '},205:function(e,t,n){"use strict";n.r(t),n.d(t,{ThumbnailMetadataUrl:function(){return o},BatchRequestError:function(){return r},RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum:function(){return a},ThumbnailTypes:function(){return i},DefaultBatchSize:function(){return s},ThumbnailCooldown:function(){return u},DefaultThumbnailSize:function(){return C},DefaultThumbnailFormat:function(){return w},ThumbnailGameIconSize:function(){return l},ThumbnailGamePassIconSize:function(){return c},ThumbnailAssetsSize:function(){return m},ThumbnailAvatarsSize:function(){return h},ThumbnailAvatarHeadshotSize:function(){return f},ThumbnailGroupIconSize:function(){return b},ThumbnailBadgeIconSize:function(){return p},ThumbnailDeveloperProductIconSize:function(){return d},ThumbnailGameThumbnailSize:function(){return g},ThumbnailUniverseThumbnailSize:function(){return T},ThumbnailStates:function(){return y},ThumbnailFormat:function(){return v},ReturnPolicy:function(){return S},FeatureName:function(){return I},LoadSuccessName:function(){return O},LoadRetrySuccessName:function(){return x},RetryPerThumbnailType:function(){return R},LoadSuccessMetricsType:function(){return A},LoadFailureName:function(){return z},LoadFailureMetricsType:function(){return E},DEFAULT_META_DATA:function(){return P}});var r,a,i,t=n(792),o=t.EnvironmentUrls.thumbnailsApi+"/v1/metadata";(t=r=r||{}).processFailure="processFailure",t.unretriableFailure="unretriableFailure",t.maxAttemptsReached="maxAttemptsReached",(t=a=a||{}).Avatar="Avatar",t.AvatarHeadShot="AvatarHeadShot",t.GameIcon="GameIcon",t.BadgeIcon="BadgeIcon",t.GameThumbnail="GameThumbnail",t.GamePass="GamePass",t.Asset="Asset",t.BundleThumbnail="BundleThumbnail",t.Outfit="Outfit",t.GroupIcon="GroupIcon",t.DeveloperProduct="DeveloperProduct",t.PlaceIcon="PlaceIcon",(t=i=i||{}).avatar="Avatar",t.avatarHeadshot="AvatarHeadshot",t.gameIcon="GameIcon",t.gameThumbnail="GameThumbnail",t.badgeIcon="BadgeIcon",t.gamePassIcon="GamePass",t.assetThumbnail="Asset",t.bundleThumbnail="BundleThumbnail",t.userOutfit="Outfit",t.groupIcon="GroupIcon",t.developerProductIcon="DeveloperProduct",t.universeThumbnail="UniverseThumbnail",t.universeThumbnails="UniverseThumbnails",t.placeGameIcon="PlaceGameIcon";var u,s=100;(t=u=u||{})[t.maxRetryAttempts=10]="maxRetryAttempts",t[t.minCooldown=1e3]="minCooldown",t[t.maxCooldown=3e4]="maxCooldown";var l,c,m,h,f,b,p,d,g,T,y,v,S,C="150x150",w="png";(t=l=l||{}).size50="50x50",t.size150="150x150",t.size512="512x512",(c=c||{}).size150="150x150",(t=m=m||{}).size150="150x150",t.size420="420x420",(t=h=h||{}).size100="100x100",t.size352="352x352",t.size720="720x720",(t=f=f||{}).size48="48x48",t.size60="60x60",t.size150="150x150",(t=b=b||{}).size150="150x150",t.size420="420x420",(p=p||{}).size150="150x150",(d=d||{}).size150="150x150",(t=g=g||{}).width768="768x432",t.width576="576x324",t.width480="480x270",t.width384="384x216",t.width256="256x144",(t=T=T||{}).width768="768x432",t.width576="576x324",t.width480="480x270",t.width384="384x216",t.width256="256x144",(t=y=y||{}).error="Error",t.complete="Completed",t.inReview="InReview",t.pending="Pending",t.blocked="Blocked",(t=v=v||{}).png="png",t.jpg="jpg",t.jpeg="jpeg",(t=S=S||{}).PlaceHolder="PlaceHolder",t.AutoGenerated="AutoGenerated",t.ForceAutoGenerated="ForceAutoGenerated";var I="Thumbnail2DWeb",O="LoadSuccess",x="RetryLoadSuccess",R="RetryPerThumbnailType",A="Sequence",z="LoadFailure",E="Counter",P={thumbnailMetricsSampleSize:10,isWebappUseCacheEnabled:!1,webappCacheExpirationTimespan:"00:00:00",requestMinCooldown:1e3,requestMaxCooldown:3e3,requestMaxRetryAttempts:5,requestBatchSize:100,concurrentThumbnailRequestCount:1}},394:function(e,t,n){"use strict";function i(t,e,n,r,a,i){return void 0===n&&(n=o.ThumbnailFormat.jpeg),r||a?t?(t!==o.ThumbnailTypes.gameIcon&&t!==o.ThumbnailTypes.gameThumbnail&&t!==o.ThumbnailTypes.placeGameIcon&&t!==o.ThumbnailTypes.universeThumbnail||(n=o.ThumbnailFormat.png),n={targetId:r,token:a,type:t,format:n,size:e},e=[o.ThumbnailTypes.universeThumbnails,o.ThumbnailTypes.universeThumbnail].includes(t)?"universeThumbnailProcessor":"thumbnail2dProcessor",l.processThumbnailBatchRequest(n,function(e){return t===o.ThumbnailTypes.universeThumbnail?s.handle(e,1):t===o.ThumbnailTypes.universeThumbnails?s.handle(e,10):u.handle(e)},e,i)):new Promise(function(e,t){t(new Error("ThumbnailType can not be empty."))}):new Promise(function(e,t){t(new Error("TargetId or token can not be empty."))})}var r=n(123),a=n(112),o=n(205),u=a.Z.batchRequestHandler,s=a.Z.universeThumbnailHandler,l=r.Z.defaultThumbnailRequester;t.Z=(null===(t=window.RobloxThumbnails)||void 0===t?void 0:t.thumbnailService)||{getThumbnailImage:function(e,t,n,r,a){return void 0===n&&(n=o.ThumbnailFormat.jpeg),i(e,t,n,r,a,!1)},getCssClass:function(e){return{"icon-broken":e===o.ThumbnailStates.error,"icon-in-review":e===o.ThumbnailStates.inReview,"icon-blocked":e===o.ThumbnailStates.blocked,"icon-pending":e===o.ThumbnailStates.pending}},reloadThumbnailImage:function(e,t,n,r,a){return void 0===n&&(n=o.ThumbnailFormat.jpeg),i(e,t,n,r,a,!0)}}},112:function(e,t,n){"use strict";n.d(t,{o:function(){return c},Z:function(){return h}});var r=CoreRobloxUtilities,t=n(979),u=n(205),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},i=t.Z.transformThumbnailType,o=r.dataStores.thumbnailsDataStore,l=r.dataStores.gameThumbnailsDataStore,c=(m.prototype.handle=function(a,i){var o=this;return new Promise(function(t){o.storeInstance(a,i).then(function(e){var n=new Map,r={};(null!==(e=null===(e=null==e?void 0:e.data)||void 0===e?void 0:e.data)&&void 0!==e?e:new Array).forEach(function(e){n.set(o.keySetter(e),e)}),a.forEach(function(e){var t,e=o.keyGetter(e);n.has(e)?(t=n.get(e))&&o.validator(t)&&(r[e]=o.resultSetter(t,i)):(t={},t=i&&1<i?{thumbnails:[]}:{thumbnail:{targetId:e,state:u.ThumbnailStates.error}},r[e]=s(s({},t),{errorcode:3,errorMessage:"id doesn't exist"}))}),t(r)}).catch(function(){t({})})})},m);function m(e,t,n,r,a){this.storeInstance=e,this.keySetter=t,this.keyGetter=n,this.validator=r,this.resultSetter=a}var h={batchRequestHandler:new c(function(e){var n=e.map(function(e){var t=e.data,n=t.type,t=a(t,["type"]),e=e.key;return s({requestId:e,type:i(n)},t)});return new Promise(function(e,t){o.getBatchThumbnails(n).then(e).catch(t)})},function(e){return e.requestId||""},function(e){return e.key},function(e){return e.state!==u.ThumbnailStates.pending},function(e){return{thumbnail:e}}),universeThumbnailHandler:new c(function(r,a){return new Promise(function(e,t){var n;l.getAllUniverseThumbnails(r.map(function(e){return e.data.targetId||0}),null===(n=r[0])||void 0===n?void 0:n.data.size,null===(n=r[0])||void 0===n?void 0:n.data.format,null===(n=r[0])||void 0===n?void 0:n.data.isCircular,a).then(e).catch(t)})},function(e){return e.universeId.toString()},function(e){return e.data.targetId?e.data.targetId.toString():""},function(e){return!e.error},function(e,t){return 1===t?{thumbnail:e.thumbnails[0]}:{thumbnails:e.thumbnails}})}},123:function(e,t,n){"use strict";n.d(t,{x:function(){return a},Z:function(){return h}});var r=n(720),u=n(604),s=n(205);var t=function(){var e=null===(e=document.getElementsByName("thumbnail-meta-data")[0])||void 0===e?void 0:e.dataset;return e?{thumbnailMetricsSampleSize:parseInt(e.thumbnailMetricsSampleSize||"",10),isWebappUseCacheEnabled:"True"===e.isWebappCacheEnabled,webappCacheExpirationTimespan:e.webappCacheExpirationsTimespan||"",requestMinCooldown:parseInt(e.requestMinCooldown||"",10),requestMaxCooldown:parseInt(e.requestMaxCooldown||"",10),requestMaxRetryAttempts:parseInt(e.requestMaxRetryAttempts||"",10),requestBatchSize:parseInt(e.requestBatchSize||"",10),concurrentThumbnailRequestCount:parseInt(e.concurrentThumbnailRequestCount||"",10)}:s.DEFAULT_META_DATA},n=n(979),l=t,c=n.Z.getCachePropertiesFromMetaData,m=n.Z.shouldLogMetrics,a=(i.prototype.getThumbnailRequesterProperties=function(e){return e?{getFailureCooldown:this.batchRequestFactory.createExponentialBackoffCooldown(e.requestMinCooldown,e.requestMaxCooldown),maxRetryAttempts:e.requestMaxRetryAttempts,batchSize:e.requestBatchSize,concurrentRequestCount:e.concurrentThumbnailRequestCount,debugMode:!0}:{getFailureCooldown:this.batchRequestFactory.createExponentialBackoffCooldown(s.ThumbnailCooldown.minCooldown,s.ThumbnailCooldown.maxCooldown),maxRetryAttempts:s.ThumbnailCooldown.maxRetryAttempts,batchSize:s.DefaultBatchSize,debugMode:!0}},i.prototype.getThumbnailRequester=function(e,t,n){var r=this;if(t in this.thumbnailRequesters)return this.thumbnailRequesters[t];n=this.batchRequestFactory.createRequestProcessor(e,function(e){return r.thumbnailItemIdSerializer(e)},this.getThumbnailRequesterProperties(n));return this.thumbnailRequesters[t]=n},i.prototype.processThumbnailBatchRequest=function(e,t,n,r){void 0===n&&(n=this.thumbnailProcessorKeySerializer(e));var a=e.type,i=void 0===a?"custom":a,o=l(),n=this.getThumbnailRequester(t,n,o);r&&n.invalidateItem(e);r=c(o);return n.queueItem(e,void 0,r).then(function(e){return e}).catch(function(e){return console.debug({error:e}),u.Z&&m(o)&&e===s.BatchRequestError.maxAttemptsReached&&u.Z.logMeasurement("ThumbnailTimeoutWebapp",{ThumbnailType:i+"_2d",Version:"TN2"}).catch(console.debug),Promise.reject(e)})},i);function i(e,t){this.thumbnailRequesters={},this.batchRequestFactory=new r.BatchRequestFactory,this.thumbnailItemIdSerializer=e,this.thumbnailProcessorKeySerializer=t}function o(e){var t=e.targetId,n=void 0===t?0:t,r=e.token,a=e.type,i=e.size,t=e.format,e=e.isCircular;return n.toString()+":"+r+":"+a+":"+i+":"+t+":"+(e?"circular":"regular")}var h={defaultThumbnailRequester:new a(function(e){var t=e.type,n=e.targetId,n=void 0===n?0:n;return t===s.ThumbnailTypes.universeThumbnail||t===s.ThumbnailTypes.universeThumbnails?n.toString():o(e)},o),customThumbnailRequester:new a(function(e){return e.key},function(){return"customThumbnailRequester"})}},979:function(e,t,n){"use strict";var r=n(205),a=((n={})[r.ThumbnailTypes.avatar]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Avatar,n[r.ThumbnailTypes.avatarHeadshot]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.AvatarHeadShot,n[r.ThumbnailTypes.gameIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GameIcon,n[r.ThumbnailTypes.badgeIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.BadgeIcon,n[r.ThumbnailTypes.gamePassIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GamePass,n[r.ThumbnailTypes.assetThumbnail]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Asset,n[r.ThumbnailTypes.bundleThumbnail]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.BundleThumbnail,n[r.ThumbnailTypes.userOutfit]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Outfit,n[r.ThumbnailTypes.groupIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GroupIcon,n[r.ThumbnailTypes.placeGameIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.PlaceIcon,n[r.ThumbnailTypes.developerProductIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.DeveloperProduct,n[r.ThumbnailTypes.gameThumbnail]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GameThumbnail,n);function i(e){e=e.split(":");return 1e3*(60*parseInt(e[0],10)*60+60*parseInt(e[1],10)+parseInt(e[2],10))}t.Z={transformThumbnailType:function(e){return a[e]},getExpirationMsFromString:i,getThumbnailRequesterProperties:function(e,t){return t?{getFailureCooldown:e.createExponentialBackoffCooldown(t.requestMinCooldown,t.requestMaxCooldown),maxRetryAttempts:t.requestMaxRetryAttempts,batchSize:t.requestBatchSize,concurrentRequestCount:t.concurrentThumbnailRequestCount,debugMode:!0}:{getFailureCooldown:e.createExponentialBackoffCooldown(r.ThumbnailCooldown.minCooldown,r.ThumbnailCooldown.maxCooldown),maxRetryAttempts:r.ThumbnailCooldown.maxRetryAttempts,batchSize:r.DefaultBatchSize,debugMode:!0}},getCachePropertiesFromMetaData:function(e){if(e)return{useCache:e.isWebappUseCacheEnabled,expirationWindowMS:i(e.webappCacheExpirationTimespan)}},shouldLogMetrics:function(e){return!e||(e=e.thumbnailMetricsSampleSize,Math.floor(100*Math.random())<=e)}}},904:function(e,t){"use strict";t.Z={getMetaData:function(){var e=document.getElementsByName("performance")[0];return e?{performanceMetricsBatchWaitTime:function(e){if(!e)return 0;e=e.split(":");return 1e3*(60*parseInt(e[0]||"",10)*60+60*parseInt(e[1]||"",10)+parseInt(e[2]||"",10))}(e.getAttribute("data-ui-performance-metrics-batch-wait-time")),performanceMetricsBatchSize:parseInt(e.getAttribute("data-ui-performance-metrics-batch-size")||"",10)}:{}}}},604:function(e,t,n){"use strict";var r=n(720),a=n(31),i=n(904),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},s=new r.BatchRequestFactory,l=0,n=i.Z.getMetaData(),i=n.performanceMetricsBatchWaitTime,n=n.performanceMetricsBatchSize,c=s.createRequestProcessor(function(e){var t={url:(0,a.Co)(),retryable:!0,withCredentials:!0},n=e.map(function(e){e=e.data,e.taskId,e=u(e,["taskId"]);return o({},e)});return r.httpService.post(t,n).then(function(){var t={};return e.forEach(function(e){e=e.key;t[e]=!0}),t})},function(e){e=e.taskId;return(null==e?void 0:e.toString())||""},{getFailureCooldown:s.createExponentialBackoffCooldown(1e3,3e3),maxRetryAttempts:5,batchSize:n||a.e$,processBatchWaitTime:i||a.DT});t.Z={logMeasurement:function(e,t){var n=l;l+=1;t={metricName:e,jsonData:JSON.stringify(t)};return c.queueItem(o({taskId:n},t))}}},31:function(e,t,n){"use strict";n.d(t,{Co:function(){return a},e$:function(){return i},DT:function(){return o}});var t=n(792),r=t.EnvironmentUrls.thumbnailsApi,a=function(){return r+"/v1/measurements"},i=100,o=1e3},720:function(e){"use strict";e.exports=CoreUtilities},792:function(e){"use strict";e.exports=Roblox},734:function(e){"use strict";e.exports=angular}},r={};function f(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,f),t.exports}f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e=f(734),t=f.n(e),n=f(544),S=f(205),C=React,w=f.n(C),r=f(779),I=f.n(r),e=PropTypes,r=f.n(e),O=f(604),x=f(394),e=f(123),R=f(112);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=e.onLoad,n=e.errorIconClass,r=e.thumbnailUrl,a=e.imgClassName,i=e.containerClass,o=e.altName,e=I()("thumbnail-2d-container",n,i),n=s((0,C.useState)(I()(a,"loading")),2),i=n[0],u=n[1];(0,C.useEffect)(function(){null===r&&u(I()(a,"loading"))},[r,a]);return w().createElement("span",{className:e},r&&w().createElement("img",{className:i,src:r,alt:o,title:o,onLoad:function(){t(),u(a)}}))}i.defaultProps={errorIconClass:"",thumbnailUrl:"",imgClassName:"",containerClass:"",altName:"",onLoad:function(){}},i.propTypes={errorIconClass:r().string,thumbnailUrl:r().string,imgClassName:r().string,containerClass:r().string,altName:r().string,onLoad:r().func};var A=i;function o(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function z(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=new e.x(function(e){return e.targetId},function(){return"customThumbnailRequester"});function l(e){var r=e.type,n=e.targetId,t=e.token,i=e.size,a=e.imgClassName,o=e.containerClass,u=e.format,s=e.altName,l=e.onLoad,c=e.getThumbnail,m=E((0,C.useState)((new Date).getTime()),2),h=m[0],f=(m[1],E((0,C.useState)(null),2)),b=f[0],p=f[1],e=E((0,C.useState)(null),2),m=e[0],d=e[1],f=I()(x.Z.getCssClass(b)),e=E((0,C.useState)("shimmer"),2),b=e[0],g=e[1],e=E((0,C.useState)(null),2),T=e[0],y=e[1],v=(0,C.useMemo)(function(){return new R.o(function(){return new Promise(function(t,e){c().then(function(e){t({data:{data:[z(z({},e.data),{},{targetId:n})]}})}).catch(e)})},function(e){return e.targetId},function(e){return e.key},function(e){return e.state!==S.ThumbnailStates.pending},function(e){return{thumbnail:e}})},[n,c]),e=(0,C.useCallback)(function(){var e,t,n;T&&(e=(new Date).getTime()-h,t=T.retryAttempts,n=T.version,O.Z.logMeasurement("ThumbnailLoadDurationWebapp",{Status:"Success",ThumbnailType:"".concat(r,"_2d"),Version:n,Value:e.toString()}).catch(console.debug),(t?O.Z.logMeasurement("ThumbnailRetryWebapp",{ThumbnailType:"".concat(r,"_2d"),Version:n,Value:t.toString()}):O.Z.logMeasurement("ThumbnailNoRetrySuccessWebapp",{ThumbnailType:"".concat(r,"_2d"),Version:n})).catch(console.debug)),l&&l()},[T]);return(0,C.useEffect)(function(){g("shimmer"),p(null),d(null);var a=!1,e=x.Z.getThumbnailImage(r,i,u,n,t);return c&&(e=P.processThumbnailBatchRequest({targetId:n},function(e){return v.handle(e)})),e.then(function(e){var t=e.thumbnail,n=t.state,r=t.imageUrl,t=t.version,e=e.performance;a||(p(n),d(r),g(""),e&&!c&&y(z({version:t},e)))}).catch(function(e){console.debug(e),a||g("")}),function(){a=!0}},[r,n,t,i,a,c]),w().createElement(A,{thumbnailUrl:m,errorIconClass:f,imgClassName:a,altName:s,onLoad:e,containerClass:I()(b,o)})}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){function n(){var e=(e=g)>=c.length-1?0:e+1;T(e)}var r=e.type,a=e.targetId,i=e.size,t=e.imgClassName,o=e.containerClass,u=e.format,s=e.altName,l=y((0,C.useState)(null),2),c=l[0],m=l[1],h=y((0,C.useState)(null),2),f=h[0],b=h[1],e=y((0,C.useState)(null),2),l=e[0],p=e[1],h=y((0,C.useState)("shimmer"),2),e=h[0],d=h[1],h=y((0,C.useState)(0),2),g=h[0],T=h[1];return(0,C.useEffect)(function(){var e,t;return c&&(t=c[g],b(t.state),p(t.imageUrl),d(""),e=setInterval(n,4e3)),function(){clearInterval(e)}},[c,g]),(0,C.useEffect)(function(){var t=!1;return x.Z.getThumbnailImage(r,i,u,a).then(function(e){t||m(e.thumbnails)}).catch(function(){t||d("")}),function(){t=!0}},[r,a,i,t,u]),w().createElement(A,{thumbnailUrl:l,errorIconClass:I()(x.Z.getCssClass(f)),imgClassName:t,altName:s,containerClass:I()(e,o)})}function h(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}l.defaultProps={targetId:0,token:"",size:"150x150",imgClassName:"",containerClass:"",format:"png",altName:"",onLoad:function(){},getThumbnail:null},l.propTypes={type:r().string.isRequired,targetId:r().number,token:r().string,size:r().string,format:r().string,imgClassName:r().string,containerClass:r().string,altName:r().string,onLoad:r().func,getThumbnail:r().func},e=l,m.defaultProps={size:"576x324",imgClassName:"",containerClass:"",format:"png",altName:""},m.propTypes={type:r().string.isRequired,targetId:r().number.isRequired,size:r().string,format:r().string,imgClassName:r().string,containerClass:r().string,altName:r().string},r=m,f(999),f(809),window.RobloxThumbnails=function(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}({Thumbnail2d:e,Thumbnail2dCarouselContainer:r,thumbnailService:x.Z},S),(0,n.importFilesUnderPath)(f(907)),(0,n.importFilesUnderPath)(f(441)),(0,n.importFilesUnderPath)(f(297)),(0,n.importFilesUnderPath)(f(484)),(0,n.importFilesUnderPath)(f(44)),r=f(671),(0,n.templateCacheGenerator)(t(),"thumbnailsTemplates",r,null)}()}();
//# sourceMappingURL=https://js.rbxcdn.com/3a798d00b62e5ee269152249aa6588c2-thumbnails.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Thumbnails");