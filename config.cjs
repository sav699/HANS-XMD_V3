

// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"sES3L7jwoVeE6zf7/32+kxKRK1p35eCjb+QZMbgQsX4="},"public":{"type":"Buffer","data":"iVnCV3xlmwhholaXgjP7fV5SV7brKJOxqPPu4LRJuQI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+KQ3B5P6GiVa3ruHEhRxkjhJqzwOS6sQ4Hxr/UPz6HE="},"public":{"type":"Buffer","data":"kUIy2M8emyLdnFyGrH7Chc6cYVxYdlTSBvXLHwR8a0g="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OGJpQ28EqGb22YBHquJKo2EFmXNO++0NLmzgzJGbsFk="},"public":{"type":"Buffer","data":"3MLjjFv10YuZVDnX50qDzLj6fVJN9YU0lF/9fADK6mM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uIas+W4QkByVSaVLF37rqJnvTBpnb6JACPmE5ygghGQ="},"public":{"type":"Buffer","data":"fTSrpcLFCPAtkpghFC45p+CbdXvyyDswU6Lnd/rBkUA="}},"signature":{"type":"Buffer","data":"BtoTbWafcJaeyhAOhkbrpohdc0HdYlwZhitHaO4dB/hPOLhx9MQIGuFw/z+Vn0df0dNh52uj85WoDdOvaii3Dw=="},"keyId":1},"registrationId":30,"advSecretKey":"bNSlZZAFdoCh2G/gkIHoYqDKs2B2Vu6SzISCHWozmJY=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"B893PZKM","me":{"id":"263776695904:4@s.whatsapp.net","name":"UNBANNED","lid":"113069711737076:4@lid"},"account":{"details":"CKT0iPoDEIbLkcIGGA4gACgA","accountSignatureKey":"QUGxv/dclgV8HhOsQY7G1yhZpZMLpDQT1I7ulkIMMAI=","accountSignature":"rI2HoZjjCBqWdDSfcbUbbsvgPGLaLxKi7cteWt5YTUYgtxnuLR2sin91Jxqx/jwdiu8fNF73Pjqf2PT1MmxuBQ==","deviceSignature":"FyuwsBjEOf9j4iYHdRSog+VdCq7K49pdQwelBocE343M43yGPxxouiHH7L2S5gUPKVCgs6OsKSOhVywjqanwAQ=="},"signalIdentities":[{"identifier":{"name":"263776695904:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUFBsb/3XJYFfB4TrEGOxtcoWaWTC6Q0E9SO7pZCDDAC"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUIEg=="},"lastAccountSyncTimestamp":1749312917,"myAppStateKeyId":"AAAAAP2V"}",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTOREACT_STATUS: process.env.AUTOREACT_STATUS !== undefined ? process.env.AUTOREACT_STATUS === 'true' : false,
   /*auto block only for 221 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©HansTz",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255659728029",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
