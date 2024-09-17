const ui = require("ui_lib/library");

ui.addMenuButton("Reset UUID", "refresh", () => {
    Vars.ui.showConfirm("Reset UUID", "Are you sure you want to reset UUID? We recommend to save it first", () => {
        Core.settings.put("uuid","");
	Vars.ui.showInfo("UUID has been reseted.");
    });
});

ui.addMenuButton("Get UUID", "paste", () => {
	Vars.ui.showTextInput("Your UUID is below.","UUID:",Vars.platform.getUUID()) {
    });
});

ui.addMenuButton("Set UUID", "wrench", () => {
	Vars.ui.showTextInput("[red]Be accurate with changing UUID maybe you will can't join servers. If you have problems reset UUID.","UUID:",Vars.platform.getUUID(), res => {
        Core.settings.put("uuid",res);
    });
});
