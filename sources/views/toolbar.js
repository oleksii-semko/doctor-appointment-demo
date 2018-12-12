import {JetView} from "webix-jet";
import ProfileMenuView from "views/profilemenu";
import ThemeSettingsView from "views/themesettings";

export default class ToolView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			view:"toolbar",
			css:theme.toolbar,
			height:56,
			elements:[
				{ width:4 },
				{ css:"logo" },
				{},
				{
					paddingY:7,
					rows:[
						{
							margin:8,
							cols:[
								{
									view:"icon", icon:"mdi mdi-settings",
									tooltip:"Open theme settings",
									click:function(){
										this.$scope.themeSettings.showPopup(this.$view);
									}
								},
								{
									view:"icon", icon:"mdi mdi-account",
									tooltip:"Open profile options",
									click:function(){
										this.$scope.profileMenu.showMenu(this.$view);
									}
								}
							]
						}
					]
				},
				{ width:6 }
			]
		};
	}
	init(){
		this.profileMenu = this.ui(ProfileMenuView);
		this.themeSettings = this.ui(ThemeSettingsView);
	}
}
