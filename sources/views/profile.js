import {JetView,plugins} from "webix-jet";
import MainInfoView from "views/maininfo";
import ReviewsView from "views/reviews";
import FriendsView from "views/friends";

export default class ProfileView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			view:"scrollview", borderless:true,
			body:{
				type:"space",
				cols:[
					{
						type:"wide",
						maxWidth:360,
						rows:[
							MainInfoView,
							ReviewsView
						]
					},
					{
						rows:[
							{
								view:"toolbar", css:theme,
								paddingX:17, elements:[
									{
										view:"segmented", localId:"segmented",
										width:300,
										options:[
											{ id:"profileinfo", value:"About" },
											{ id:"settings", value:"Settings" }
										]
									},
									{}
								]
							},
							{ $subview:true }
						]
					},
					{
						type:"wide",
						rows:[
							FriendsView,
							{}
						]
					}
				]
			}
		};
	}
	init(){
		this.use(plugins.Menu,{
			id:"segmented",
			urls:{
				"profileinfo":"profileinfo/about"
			}
		});
	}
}