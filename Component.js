sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("nyt.artigos.Component", {

		apiKey: "08f9f248fde312d0fdc1205c781e3e47:8:68901588",
		
		metadata: {
			manifest: "json"
		},
		
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			
			var oManifest = this.getManifest();
			var sPath = oManifest["sap.ui5"].models[""].uri;
			
			var oModel = this.getModel();
			oModel.loadData(sPath,
			{
				"api-key": this.apiKey
			});
			
		}
	});
});