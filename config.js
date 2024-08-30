//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/50938644459 , https://wa.me/2250503486357";
global.sudo = process.env.SUDO || "50938644459";
global.owner = process.env.OWNER_NUMBER || "2250503486357";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg,https://telegra.ph/file/9deb04066bb23928364eb.jpg,https://telegra.ph/file/a883ea1d150f9db4033ac.jpg,https://telegra.ph/file/a449aee68cc980769cf24.jpg,https://telegra.ph/file/0ed72840be5821352f6e1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Z4Uy90RmFVSGpPYWVobFZiaE00RnRNdUFjd01kZGxYVGdFb2pHMUhtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFViRmlRZGY2NDlKUGIxTUF6Q3JtYTVQV05vOWRtcVZHaTBEVFQ5WHJsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSDZsUnQzaUVoMHpvaXVPTk5uU2g2aFZxYWdhQjFialRIU0ZORjh6YlhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3bmdMS2xRZjNnYlppaGZSZUZDT2NyVnFLdm93NkJQOXVaSzYwNHFvM1E4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQUkJlM0tsMFAvTGtkOE9rZmQyWkpsMGNYLzVxVDFNbDlTU2pBM3ZjMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBDREJKWW9kLzlkdVoyeHR1ZWQrTWlRUW5ZRmhDZ1AxS3czN1BkM3RMMFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJUa29iTDJHU1c4UkpwUmlMRjV2YnBjelM0aytFeU1LVjBYNnlKNk9Hbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhMaXRZZ3M1QnFsSitmZndWQTFMb1V0NE1BeWxYWnNFMFRHOUo4eWowRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU4aG5qWm9ucndGek5SM2VucHBIYTIwbjdaOTJnY2hNdnhGMUtBNlF0aFUvNU9JbXg5TDFueTBma1hsdEdxMno0b2YxK1hraE56aVpvTTBtd1ZGVERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJWK0tQL1dibmRMcklIbDFHSk55amFlZENIU1NDOWprSThVbnFkeHFrNkdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzay1seUNFTlRFaThJdldJVThIcENnIiwicGhvbmVJZCI6ImMyNWQwYmQ1LWI0ZjAtNGYxNC1iYzcyLTRjOGViMmRhMTJmZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVZzkvUjRIemU0TW9EWlFxOXhabXg0ZTZoeUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHhsOU5rcHEzOWYwbUgvL3ZBVEpaL2RqY3JVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldKQ1ZNUlo5IiwibWUiOnsiaWQiOiIyMjUwNTAzNDg2MzU3OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44COVE1Q44CPc2hhZG93In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMzI2ZXdCRU4yK3VyWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTaTY1N1I2TkNrZENCY3lONWFnNVBVVXlJNjIwV1IvN0RiOWNkVEdBbVFzPSIsImFjY291bnRTaWduYXR1cmUiOiJsbzdjS2paM0cydDl6RXFyVExEV0dJK09jZXhLUEF2VlZaSkx1VkVORDV1R2g3SlAyU3JVTXBodTNaK2xUQ0VxUFBRcjdNdnFOMTdRVDZGRkt5eEpBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSWFLY3B1VzEzWmIxN3RBalNUM3NwN3d3U1hPMThNV29RMmNaNHZQOGx6NGRLTWh2U3RVaTNYbEdrc3N3bzN3dnN0MUtlWDBYRHdJcEUwaXY3VGVYQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwNTAzNDg2MzU3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVW91dWUwZWpRcEhRZ1hNamVXb09UMUZNaU90dEZrZit3Mi9YSFV4Z0prTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDgxNzI1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTEkifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || ".",
  packname: process.env.PACK_NAME || ".",
  botname: process.env.BOT_NAME || "*𖤐*",
  ownername: process.env.OWNER_NAME || ".",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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
