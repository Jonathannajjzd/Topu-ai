//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "25765809718";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hLM0tOOHlYTzZJS1p0b0MzeURFSkxNd3lubWtYL0ZuWjdCWkFuRE8zOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVR0bzk4bGJSek9DZG10ek4yU2RGUllTWVZDVnh1YjFVdTRxZmpzRW1TQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Ti9XUWFJdW1SZExOR1QvZEkyc1owN1RKalN2QlBHdVFiL1drNmZoUldRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISDc2SlJDdk51M2ZPZ0JTdEJJTUFKTnFSMnd1Y1BNY2xneU8rUHI0cWtRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BclJEOXRJUUpNZVpIdWNleUtOaGNQTmVUdnYraXZUdXVYWlhDSDUra1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFkQU9ONlMrOE5yTy9WdGlJNGY0ZVhPRTkrYU52VkFlakNyZmE0bkJEMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJyYmFkclZodjBoaU5UQkdMUjFnZXIvbWFNV3FySnYxdCsxZ09jMUxuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXFYUmplRURVSzlBQWd6Nys5U0xYRFhOK0lVN1doWk9hZTd2UEhmcFhFTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHM2cvTldxUjVlN1NRQUZ6N3V3QzlUaFBxTURISE5IMDEyVnorMGZsc2xZaFh2MzRaTk1RMHhHdFczY0MxUStSc3BFdlZjOVRCT3AwNUxQWnVUaGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiIvSjFLRFFNdWhsZitJTGQxRmF5VjIzZXRNL3h6VGNpUk42ck5jdnZyMDY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NzY1ODA5NzE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwN0Q4MzQ1NDBDREM2RTUyNEM0OTc2M0UyNEVEOTcwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjExNjAyMDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBMcmFVN1FwVDI2ejd4QndpNHlkWUEiLCJwaG9uZUlkIjoiNTc1Yzg4NzMtZWRlMC00OTljLTgyM2QtMTJhZTcyZjQzNDlmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJIMC83d1BBNW9RQ1RsSU9XdGdqTGRRYkc0OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRG5HNG0zcEU1S1R2bnBad2Y5S2xXY0lHNDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN01NNjhNUFQiLCJtZSI6eyJpZCI6IjI1NzY1ODA5NzE4OjUxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuODq+OCt+ODleOCoeODvCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHY3aHZnQ0VQMmoyN1FHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidTYrcnpxQTFwTU51U0dvb1dHcDVkZjN0cFo2Ukw1TVRHcC8ycWg5YWNtVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQWxFZkEwbnA4Yk9HQm9qbitmYS9xdGtNVnJsN2c5Uk5pTWJnVGt4aEtEc29IUEJ2aG1pekh0SldTVFN0YkszRGttREpUdmUwaTJFUzdLLzN4OXEvQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IldoRjZwS1ZUNjc2L2pDTmJ1M0JzU0JSeEIyWFhSanpkSTRadFdlWWdPWE01TSs3cEdJbEc1T0VJR1NnSjl2L3NiaHJORmxacE94ZlI4VjA3VVRlMGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU3NjU4MDk3MTg6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnV2cTg2Z05hVERia2hxS0ZocWVYWDk3YVdla1MrVEV4cWY5cW9mV25KbCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTE2MDIwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIODkifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
