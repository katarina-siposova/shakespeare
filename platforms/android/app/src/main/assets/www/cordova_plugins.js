cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-sqlite.SQLitePlugin",
    "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
    "pluginId": "cordova-plugin-sqlite",
    "clobbers": [
      "window.sqlitePlugin",
      "cordova.plugins.sqlitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-sqlite": "1.0.3",
  "cordova-plugin-device": "2.0.3"
};
// BOTTOM OF METADATA
});