"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7424],{77424:function(d,b,a){a.d(b,{z:function(){return z}});var e=a(28045),c=a(16483);function f(b){var a,c;return a=b,a}function g(b){var a,c;return a=b,a}var h=a(17877);function i(a){return j(a)}function j(a,b){return null==a?a:{id:(0,c.Gg)(a,"id")?a.id:void 0,universeId:(0,c.Gg)(a,"universeId")?a.universeId:void 0,name:(0,c.Gg)(a,"name")?a.name:void 0,description:(0,c.Gg)(a,"description")?a.description:void 0,imageAssetId:(0,c.Gg)(a,"imageAssetId")?a.imageAssetId:void 0,periodType:(0,c.Gg)(a,"periodType")?g(a.periodType):void 0,productType:(0,c.Gg)(a,"productType")?f(a.productType):void 0,productStatusType:(0,c.Gg)(a,"productStatusType")?(0,h.Iv)(a.productStatusType):void 0,basePriceId:(0,c.Gg)(a,"basePriceId")?a.basePriceId:void 0,initialActivationTimestampMs:(0,c.Gg)(a,"initialActivationTimestampMs")?a.initialActivationTimestampMs:void 0,createdTimestampMs:(0,c.Gg)(a,"createdTimestampMs")?a.createdTimestampMs:void 0,updatedTimestampMs:(0,c.Gg)(a,"updatedTimestampMs")?a.updatedTimestampMs:void 0}}var k=a(87309),l=a(35111);function m(a){if(void 0!==a)return null===a?null:{dimension:(0,k.Z5)(a.dimension),values:a.values}}var n=a(9649);function o(a){return p(a)}function p(a,b){return null==a?a:{units:(0,c.Gg)(a,"units")?a.units:void 0,cents:(0,c.Gg)(a,"cents")?a.cents:void 0}}function q(a){return r(a)}function r(a,b){return null==a?a:{dimension:a.dimension,value:a.value}}function s(a){return t(a)}function t(a,b){return null==a?a:{timestamp:new Date(a.timestamp),value:a.value}}function u(a){return v(a)}function v(a,b){return null==a?a:{breakdowns:a.breakdowns.map(q),datapoints:a.datapoints.map(s)}}var w=a(61238);function x(a){return y(a)}function y(a,b){return null==a?a:{success:(0,c.Gg)(a,"success")?a.success:void 0,failureReason:(0,c.Gg)(a,"failureReason")?(0,w.zp)(a.failureReason):void 0}}var z=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}return(0,e._)(a,b),a.prototype.developerSubscriptionProductsActivateDeveloperSubscriptionRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsActivateDeveloperSubscription.");if(null===a.subscriptionProductId|| void 0===a.subscriptionProductId)throw new c.IC("subscriptionProductId","Required parameter requestParameters.subscriptionProductId was null or undefined when calling developerSubscriptionProductsActivateDeveloperSubscription.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/{subscriptionProductId}/activate".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))).replace("{".concat("subscriptionProductId","}"),encodeURIComponent(String(a.subscriptionProductId))),method:"POST",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(a){return x(a)})]}})})},a.prototype.developerSubscriptionProductsActivateDeveloperSubscription=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsActivateDeveloperSubscriptionRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsConfirmShortenedExperienceNameRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsConfirmShortenedExperienceName.");return d={},(f={})["Content-Type"]="application/json-patch+json",[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/shortened-name".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"POST",headers:f,query:d,body:function(a){if(void 0!==a)return null===a?null:{shortenedName:a.shortenedName}}(a.confirmShortenedExperienceNameRequest)},b)];case 1:return g=e.sent(),[2,new c.QG(g)]}})})},a.prototype.developerSubscriptionProductsConfirmShortenedExperienceName=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsConfirmShortenedExperienceNameRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsCreateDeveloperSubscriptionProductRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,i,j;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsCreateDeveloperSubscriptionProduct.");return d={},(i={})["Content-Type"]="application/json-patch+json",[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"POST",headers:i,query:d,body:function(a){if(void 0!==a){var b;return null===a?null:{productName:a.productName,productDescription:a.productDescription,productType:b=a.productType,basePriceId:a.basePriceId}}}(a.developerSubscriptionProductsCreateDeveloperSubscriptionProductRequest)},b)];case 1:return j=e.sent(),[2,new c.QG(j,function(d){var e,b,j,i,a,k;return null==(b=e=d)?b:{developerSubscription:(0,c.Gg)(b,"developerSubscription")?null==(a=i=b.developerSubscription)?a:{id:(0,c.Gg)(a,"id")?a.id:void 0,universeId:(0,c.Gg)(a,"universeId")?a.universeId:void 0,shopId:(0,c.Gg)(a,"shopId")?a.shopId:void 0,name:(0,c.Gg)(a,"name")?a.name:void 0,description:(0,c.Gg)(a,"description")?a.description:void 0,imageAssetId:(0,c.Gg)(a,"imageAssetId")?a.imageAssetId:void 0,periodType:(0,c.Gg)(a,"periodType")?g(a.periodType):void 0,developerSubscriptionProductType:(0,c.Gg)(a,"developerSubscriptionProductType")?f(a.developerSubscriptionProductType):void 0,productStatusType:(0,c.Gg)(a,"productStatusType")?(0,h.Iv)(a.productStatusType):void 0,createdTimestampMs:(0,c.Gg)(a,"createdTimestampMs")?a.createdTimestampMs:void 0,updatedTimestampMs:(0,c.Gg)(a,"updatedTimestampMs")?a.updatedTimestampMs:void 0}:void 0}})]}})})},a.prototype.developerSubscriptionProductsCreateDeveloperSubscriptionProduct=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsCreateDeveloperSubscriptionProductRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsDeactivateDeveloperSubscriptionRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsDeactivateDeveloperSubscription.");if(null===a.subscriptionProductId|| void 0===a.subscriptionProductId)throw new c.IC("subscriptionProductId","Required parameter requestParameters.subscriptionProductId was null or undefined when calling developerSubscriptionProductsDeactivateDeveloperSubscription.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/{subscriptionProductId}/deactivate".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))).replace("{".concat("subscriptionProductId","}"),encodeURIComponent(String(a.subscriptionProductId))),method:"POST",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(a){return x(a)})]}})})},a.prototype.developerSubscriptionProductsDeactivateDeveloperSubscription=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsDeactivateDeveloperSubscriptionRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsDeleteDeveloperSubscriptionRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsDeleteDeveloperSubscription.");if(null===a.subscriptionProductId|| void 0===a.subscriptionProductId)throw new c.IC("subscriptionProductId","Required parameter requestParameters.subscriptionProductId was null or undefined when calling developerSubscriptionProductsDeleteDeveloperSubscription.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/{subscriptionProductId}".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))).replace("{".concat("subscriptionProductId","}"),encodeURIComponent(String(a.subscriptionProductId))),method:"DELETE",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(a){return x(a)})]}})})},a.prototype.developerSubscriptionProductsDeleteDeveloperSubscription=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsDeleteDeveloperSubscriptionRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionPermissionRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetDeveloperSubscriptionPermission.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/permission".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"GET",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(b){var d,a,e;return null==(a=d=b)?a:{canUserEditExperienceSubscription:(0,c.Gg)(a,"canUserEditExperienceSubscription")?a.canUserEditExperienceSubscription:void 0}})]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionPermission=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetDeveloperSubscriptionPermissionRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionPricingRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetDeveloperSubscriptionPricing.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/prices".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"GET",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(b){var d,a,e;return null==(a=d=b)?a:{priceTierPrices:(0,c.Gg)(a,"priceTierPrices")?null===a.priceTierPrices?null:(0,c.Q8)(a.priceTierPrices,o):void 0}})]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionPricing=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetDeveloperSubscriptionPricingRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionProductByIdRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetDeveloperSubscriptionProductById.");if(null===a.subscriptionProductId|| void 0===a.subscriptionProductId)throw new c.IC("subscriptionProductId","Required parameter requestParameters.subscriptionProductId was null or undefined when calling developerSubscriptionProductsGetDeveloperSubscriptionProductById.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/{subscriptionProductId}".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))).replace("{".concat("subscriptionProductId","}"),encodeURIComponent(String(a.subscriptionProductId))),method:"GET",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(a){return i(a)})]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionProductById=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetDeveloperSubscriptionProductByIdRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionProductsByUniverseRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetDeveloperSubscriptionProductsByUniverse.");return d={},void 0!==a.cursor&&(d.Cursor=a.cursor),void 0!==a.resultsPerPage&&(d.ResultsPerPage=a.resultsPerPage),f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"GET",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(b){var d,a,e;return null==(a=d=b)?a:{developerSubscriptions:(0,c.Gg)(a,"developerSubscriptions")?null===a.developerSubscriptions?null:a.developerSubscriptions.map(i):void 0,previousCursor:(0,c.Gg)(a,"previousCursor")?a.previousCursor:void 0,nextCursor:(0,c.Gg)(a,"nextCursor")?a.nextCursor:void 0,hasMoreResults:(0,c.Gg)(a,"hasMoreResults")?a.hasMoreResults:void 0}})]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionProductsByUniverse=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetDeveloperSubscriptionProductsByUniverseRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionsAnalyticsRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetDeveloperSubscriptionsAnalytics.");return d={},(f={})["Content-Type"]="application/json-patch+json",[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/analytics".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"POST",headers:f,query:d,body:function(a){if(void 0!==a)return null===a?null:{metric:(0,l.iD)(a.metric),startTime:a.startTime.toISOString(),endTime:a.endTime.toISOString(),granularity:(0,n.pV)(a.granularity),breakdown:void 0===a.breakdown?void 0:null===a.breakdown?null:a.breakdown.map(k.Z5),filter:void 0===a.filter?void 0:null===a.filter?null:a.filter.map(m)}}(a.developerSubscriptionProductsGetDeveloperSubscriptionsAnalyticsRequest)},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(b){var c,a,d;return null==(a=c=b)?a:{values:a.values.map(u)}})]}})})},a.prototype.developerSubscriptionProductsGetDeveloperSubscriptionsAnalytics=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetDeveloperSubscriptionsAnalyticsRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetExperienceAppStoreNameByUniverseIdRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetExperienceAppStoreNameByUniverseId.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/app-store-experience-name".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"GET",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(b){var d,a,e;return null==(a=d=b)?a:{experienceAppStoreName:(0,c.Gg)(a,"experienceAppStoreName")?a.experienceAppStoreName:void 0}})]}})})},a.prototype.developerSubscriptionProductsGetExperienceAppStoreNameByUniverseId=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetExperienceAppStoreNameByUniverseIdRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsGetOrSuggestShortenedExperienceNameRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsGetOrSuggestShortenedExperienceName.");return d={},f={},[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/shortened-name".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))),method:"GET",headers:f,query:d},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(b){var d,a,e;return null==(a=d=b)?a:{shortenedName:(0,c.Gg)(a,"shortenedName")?a.shortenedName:void 0,suggestedShortenedName:(0,c.Gg)(a,"suggestedShortenedName")?a.suggestedShortenedName:void 0}})]}})})},a.prototype.developerSubscriptionProductsGetOrSuggestShortenedExperienceName=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsGetOrSuggestShortenedExperienceNameRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsUpdateDeveloperSubscriptionProductRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsUpdateDeveloperSubscriptionProduct.");if(null===a.subscriptionProductId|| void 0===a.subscriptionProductId)throw new c.IC("subscriptionProductId","Required parameter requestParameters.subscriptionProductId was null or undefined when calling developerSubscriptionProductsUpdateDeveloperSubscriptionProduct.");return d={},(f={})["Content-Type"]="application/json-patch+json",[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/{subscriptionProductId}".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))).replace("{".concat("subscriptionProductId","}"),encodeURIComponent(String(a.subscriptionProductId))),method:"PATCH",headers:f,query:d,body:function(a){if(void 0!==a)return null===a?null:{name:a.name,description:a.description,imageAssetId:a.imageAssetId}}(a.developerSubscriptionProductsUpdateDeveloperSubscriptionProductRequest)},b)];case 1:return g=e.sent(),[2,new c.QG(g,function(a){return x(a)})]}})})},a.prototype.developerSubscriptionProductsUpdateDeveloperSubscriptionProduct=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsUpdateDeveloperSubscriptionProductRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a.prototype.developerSubscriptionProductsUploadDeveloperSubscriptionImageRaw=function(a,b){return(0,e.a)(this,void 0,void 0,function(){var d,f,g,h,i;return(0,e.b)(this,function(e){switch(e.label){case 0:if(null===a.experienceId|| void 0===a.experienceId)throw new c.IC("experienceId","Required parameter requestParameters.experienceId was null or undefined when calling developerSubscriptionProductsUploadDeveloperSubscriptionImage.");if(null===a.subscriptionProductId|| void 0===a.subscriptionProductId)throw new c.IC("subscriptionProductId","Required parameter requestParameters.subscriptionProductId was null or undefined when calling developerSubscriptionProductsUploadDeveloperSubscriptionImage.");return d={},f={},h=(g=(0,c.j2)([{contentType:"multipart/form-data"}]))?new FormData:new URLSearchParams,void 0!==a.actingUserId&&h.append("ActingUserId",a.actingUserId),void 0!==a.imageFile&&h.append("ImageFile",a.imageFile),[4,this.request({path:"/v1/experiences/{experienceId}/experience-subscriptions/{subscriptionProductId}/upload-image".replace("{".concat("experienceId","}"),encodeURIComponent(String(a.experienceId))).replace("{".concat("subscriptionProductId","}"),encodeURIComponent(String(a.subscriptionProductId))),method:"POST",headers:f,query:d,body:h},b)];case 1:return i=e.sent(),[2,new c.QG(i,function(b){var d,a,e;return null==(a=d=b)?a:{status:(0,c.Gg)(a,"status")?a.status:void 0}})]}})})},a.prototype.developerSubscriptionProductsUploadDeveloperSubscriptionImage=function(a,b){return(0,e.a)(this,void 0,void 0,function(){return(0,e.b)(this,function(c){switch(c.label){case 0:return[4,this.developerSubscriptionProductsUploadDeveloperSubscriptionImageRaw(a,b)];case 1:return[4,c.sent().value()];case 2:return[2,c.sent()]}})})},a}(c.T2)},87309:function(c,a,b){b.d(a,{Z5:function(){return e},bb:function(){return d}});var d={Invalid:"Invalid",DeveloperSubscriptionProduct:"DeveloperSubscriptionProduct",PurchasePlatform:"PurchasePlatform",SubscriptionType:"SubscriptionType"};function e(a){return a}},35111:function(c,a,b){b.d(a,{UR:function(){return d},iD:function(){return e}});var d={Invalid:"Invalid",DeveloperSubscriptionSales:"DeveloperSubscriptionSales",DeveloperSubscriptionRevenue:"DeveloperSubscriptionRevenue",DeveloperSubscriptionCancellations:"DeveloperSubscriptionCancellations"};function e(a){return a}},61238:function(c,a,b){b.d(a,{S9:function(){return d},zp:function(){return e}});var d={Invalid:0,InvalidInput:1,InvalidProduct:2,ProductNotFound:3,TooManyRequests:4,CreationLimitExceeded:5,NotEligibleForDeveloperSubscriptions:6,PendingProductUpdate:7,Unauthorized:8,InternalError:9,ImageUploadError:10,UniverseNotFound:11,ProductNameAlreadyTaken:12,CannotChangeAppStoreName:13,ExperienceAppStoreNameAlreadyTaken:14,ProductContentModerated:15,InvalidShortenedName:16,ShortenedNameTaken:17,ShortenedNameModerated:18,ShortenedNameAlreadyConfirmed:19};function e(b){var a,c;return a=b,a}},9649:function(c,a,b){b.d(a,{"$b":function(){return d},pV:function(){return e}});var d={Invalid:"Invalid",Day:"Day",None:"None"};function e(a){return a}},17877:function(c,a,b){b.d(a,{Iv:function(){return e},zX:function(){return d}});var d={Inactive:1,Active:2,ToBeActivated:3,ToBeDeactivated:4,ToBeDeleted:5,Deleted:6};function e(b){var a,c;return a=b,a}}}])