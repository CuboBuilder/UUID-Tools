const ui = require("ui_lib/library");

ui.addMenuButton("Reset UUID", "refresh", () => {
    Vars.ui.showConfirm("Reset UUID", "Are you sure you want to reset UUID? We recommend saving it first.", () => {
        Core.settings.put("uuid", "");
        Vars.ui.showInfo("UUID has been reset.");
    });
});

ui.addMenuButton("Get UUID", "paste", () => {
    Vars.ui.showTextInput("Your UUID is below.", "UUID:", Vars.platform.getUUID(), () => {
    });
});

ui.addMenuButton("Set UUID", "wrench", () => {
    Vars.ui.showTextInput(
        "[red]Be accurate with changing the UUID; you may not be able to join servers. If you have problems, reset the UUID.",
        "UUID:",
        Vars.platform.getUUID(),
        (res) => {
            Core.settings.put("uuid", res);
        }
    );
});
