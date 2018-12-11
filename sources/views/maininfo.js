import {JetView} from "webix-jet";
import "webix/photo";
import "webix/profilelabel";
import {getProfileData} from "models/profile";

export default class MainInfoView extends JetView {
	socIcon(type){
		return {
			view:"icon", icon:`mdi mdi-${type}`, click:() => {
				window.open(this.getRoot().getValues()[type]);
			}
		};
	}
	config(){
		return {
			view:"form", height:322,
			rows:[
				{
					cols:[
						{},
						{ view:"photo", width:150, height:150, name:"photo", css:"profile_photo" },
						{}
					]
				},
				{
					view:"profilelabel", css:"doc_main", name:"doctor",
					template:obj => `<span class="doc_name">Dr. ${obj}</span>`
				},
				{
					view:"profilelabel", css:"doc_main", name:"job",
					template:obj => `<span class="doc_field">${obj}</span>`
				},
				{
					cols:[
						{},
						this.socIcon("facebook"),
						this.socIcon("linkedin"),
						this.socIcon("instagram"),
						this.socIcon("youtube"),
						this.socIcon("twitter"),
						this.socIcon("vk"),
						{}
					]
				}
			]
		};
	}
	init(){
		this.getRoot().setValues(getProfileData());
	}
}