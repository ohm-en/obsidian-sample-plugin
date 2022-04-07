// This import appears to be required in the main file for proper function;
import { Plugin } from 'obsidian';

export default function constructor(app, manifest) {
	const plugin = new Plugin(app, manifest);
	
	 plugin.onload = async function() {
		//const commands = [{
		//	id: "open-files-url",
		//	name: "Open Files URL",
		//	callback: function() {
		//
		//	}
		//}];
		// Arrow funtion (`=>`) implies access to `this`;
		//commands.forEach((command) => {
		//	this.addCommand(command);
		//});
	}
	
	return plugin;
}
