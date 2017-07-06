sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("nyt.artigos.controller.BaseController", {

		/**
		 *@memberOf Get API-KEY
		 */
		getAPIKey: function(oEvent) {
			var oComponent = this.getOwnerComponent();
			return oComponent.apiKey;
		}

	});
});