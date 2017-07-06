sap.ui.define([
	"nyt/artigos/controller/BaseController.controller"
], function(BaseController) {
	"use strict";
	
	return BaseController.extend("nyt.artigos.controller.S0", {

		/**
		 *@memberOf nyt.artigos.controller.S0
		 */
		onSearch: function(oEvent) {
			var oModel = this.getView().getModel();

			oModel.loadData("/api", {
				"api-key": this.getAPIKey(),
				q: oEvent.getParameters().query
			});
		}

	});
});