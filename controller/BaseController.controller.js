sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("nyt.articles.controller.BaseController", {

		/**
		 * Get Controller's view model
		 */
		getModel: function(sName) {
			return this.getView().getModel(sName);
		},
		
		/**
		 * Set Controller's view model
		 */
		setModel: function(oModel,sName) {
			return this.getView().setModel(oModel,sName);
		},
		
		
		/**
		 *@memberOf Get API-KEY
		 */
		getAPIKey: function(oEvent) {
			var oComponent = this.getOwnerComponent();
			return oComponent.apiKey;
		}

	});
});