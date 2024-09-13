const ui = require("ui_lib/library");

ui.addMenuButton("Reset UUID", "refresh", () => {
    Vars.ui.showConfirm("Reset UUID", "Are you sure you want to reset UUID?", () => {
        Core.settings.put("uuid","");
	Vars.ui.showInfo("UUID has been reseted. Restart game to apply changes.");
    });
});

ui.addMenuButton("Get UUID", "paste", () => {
    Vars.ui.showConfirm("Get UUID", "Get UUID?", () => {
        Vars.ui.showInfo(Vars.platform.getUUID());
    });
});

ui.addMenuButton("Set UUID", "wrench", () => {
	Vars.ui.showTextInput("[red]If you mess it up and cant join servers, you must reset it!\nIt will not check the UUID for validity\n[white]The current UUID has been placed in the text field for your convenience.","UUID:",Vars.platform.getUUID(), res => {
        Core.settings.put("uuid",res);
    });
});
