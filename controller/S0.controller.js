sap.ui.define([
	"nyt/articles/controller/BaseController.controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat"
], function(BaseController, JSONModel, DateFormat) {
	"use strict";

	return BaseController.extend("nyt.articles.controller.S0", {

		onInit: function(oEvent) {
			var dMinDate = new Date(1851, 8, 18);

			var oViewModelData = {
				isBusy: false,
				term: null,
				begin_date: null,
				end_date: null,
				min_date: dMinDate
			};

			var oViewModel = new JSONModel(oViewModelData);
			this.setModel(oViewModel, "view");
		},

		onUpdateFinished: function(oEvent) {
			this.getModel("view").setProperty("/isBusy", false);
		},

		/**
		 *@memberOf nyt.articles.controller.S0
		 */
		onSearch: function(oEvent) {
			var oModel = this.getView().getModel();
			var sTerm = oEvent.getParameters().query;

			this.getModel("view").setProperty("/isBusy", true);

			if (sTerm) {
				oModel.loadData("/api", {
					"api-key": this.getAPIKey(),
					q: oEvent.getParameters().query
				});
			} else {
				oModel.loadData("/api", {
					"api-key": this.getAPIKey()
				});
			}
		},

		/**
		 * A specific article (list item) was pressed
		 * Open the article in a new tab
		 * object oEvent
		 */
		onListItemPress: function(oEvent) {
			var oListItem = oEvent.getSource();
			var oBinding = oListItem.getBindingContext();
			var oObject = oBinding.getObject();
			var sUrl = oObject.web_url;
			window.open(sUrl, '_blank');
		},

		onPressFilter: function(oEvent) {
			this._getDialog().open();
		},

		onHandleFilterConfirm: function(oEvent) {

			function formatToYYYYMMDD(d) {
				var date = d ? d : new Date();
				return date.toISOString().slice(0, 10).replace(/-/g, '');
			}
			var oViewModel = this.getModel("view");

			var oModel = this.getView().getModel();
			oModel.loadData("/api", {
				"api-key": this.getAPIKey(),
				q: oViewModel.getProperty("/term"),
				begin_date: oViewModel.getProperty("/begin_date") ? oViewModel.getProperty("/begin_date") : formatToYYYYMMDD(oViewModel.getProperty(
					"/min_date")),
				end_date: oViewModel.getProperty("/end_date") ? oViewModel.getProperty("/end_date") : formatToYYYYMMDD()
			});
		},

		/**
		 * Formatter functions
		 */
		formatDocumentType: function(sDocumentType) {
			var sIcon;

			switch (sDocumentType) {
				case 'article':
					sIcon = 'document-text';
					break;
				case 'blog':
					sIcon = 'comment';
					break;
				case 'multimedia':
					sIcon = 'video';
					break;
				case 'topic':
					sIcon = 'inspection';
					break;
				default:
					sIcon = 'document';
					break;
			}
			return `sap-icon://${sIcon}`;
		},

		formatDate: function(sDate) {
			var d = new Date(sDate);
			var oDateConversor = sap.ui.core.format.DateFormat.getDateInstance({
				style: 'medium'
			});
			return oDateConversor.format(d);
		},

		formatDaysAgo: function(sDate) {
			var d = new Date(sDate);
			var dNow = new Date();

			return this._dateDiffInDays(d, dNow);
		},

		/**
		 * Internal functions
		 */
		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("nyt.articles.view.Search", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},

		/**
		 * @see https://stackoverflow.com/a/15289883/968144
		 */
		_dateDiffInDays(dBefore, dAfter) {
			var _MS_PER_DAY = 1000 * 60 * 60 * 24;
			// Discard the time and time-zone information.
			var utc1 = Date.UTC(dBefore.getFullYear(), dBefore.getMonth(), dBefore.getDate());
			var utc2 = Date.UTC(dAfter.getFullYear(), dAfter.getMonth(), dAfter.getDate());

			return Math.floor((utc2 - utc1) / _MS_PER_DAY);
		}

	});
});