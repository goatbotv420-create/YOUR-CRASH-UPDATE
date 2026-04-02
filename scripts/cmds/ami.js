const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "Tamim Bbz",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`🅳︎🅾︎ 🅽︎🅾︎🆃︎ 🆃︎🆁︎🆄︎🆂︎🆃︎ 🆃︎🅷︎🅴︎ 🅱︎🅾︎🆃︎ 🅾︎🅿︎🅴︎🆁︎🅰︎🆃︎🅾︎🆁︎
--------------------------------------------
╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝ 

💖🌸ইসলামিক পরিচয় পর্ব 🌸💖 

- নাম    : TᗩᗰIᗰ  🅰︎🅷︎🅰︎🅼︎🅴︎🅳︎ 

-𝙵𝙱      : 𝚃𝚊𝚖𝚒𝚖 𝙱𝚋𝚣
︵💚🌺🦋
●━━• 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 ---🤗🥀 

●━━•*༅༎ Tamim Bbz (ছোট নবাব )---•☺️✌️ 

༅༎ლ ࿐🤍💖🌺 

- বর্তমান ঠিকানা: 𝙽𝚒𝚖𝚜𝚑𝚊𝚛, 𝙲𝚘𝚒𝚕𝚕𝚊 

- স্থায়ী ঠিকানা  : 𝙽𝚒𝚖𝚜𝚑𝚊𝚛, 𝙲𝚘𝚒𝚕𝚕𝚊 

- বয়স        : 18+

- GENDER     : 𝙼𝚊𝚕𝚎

- উচ্চতা    	 : 𝙽/𝙰

- জন্ম তারিখ   : 𝙺𝚘𝚒𝚝𝚊𝚖 𝚗𝚊

- পেশা      	 : 𝚂𝚝𝚞𝚍𝚎𝚗𝚝

- যোগ্যতা      :  𝙸𝚗𝚝𝚎𝚛 2nd 𝚢𝚎𝚊𝚛 end

- রিলেশন শিপ  : 𝙿𝚞𝚛𝚎 𝚜𝚒𝚗𝚐𝚕𝚎 𝚙𝚛𝚘 𝚖𝚎𝚡 

- প্রিয়জন      : 𝙼𝚊𝚊 / 𝙱𝚊𝚋𝚊❤️‍🩹

- প্রিয় রং      : 🅆🄷🄸🅃🄴 🤍

- প্রিয় খাবার    :  বিরিয়ানি 🤤

- শখ         : ✨ধর্মীয় আলোচনা✨ ছবি দেখা✨ বই  পড়া✨ অনেক রাতে হাটতে যাওয়া✨ প্রিও মানুষ টাকে নিয়ে বেস্তো থাকা✨ তাকে খুসি করা 

- ইচ্ছা         : একজন হালাল মুসলিম পর্দা সিল মেয়ে কে লাইফ পার্টনার বানানো 

- আসল পরিচয়  : ইসলাম🌸🌺 

- 🄵🄰🄲🄴🄱🄾🄾🄺  🄸🄳  🄽🄰🄼🄴 :  Tamim Bbz 

- 🄵🄰🄲🄴🄱🄾🄾🄺  🄸🄳  🄻🄸🄽🄺 : https://www.facebook.com/share/197MBXX5HM/

- What's up link  : https://wa.me/qr/NEPLYIFIXKD7I1

𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 01322962662  /মেয়ে হইলে ইনবক্স এ নক দিও_!😁 

- 𝚃𝚎𝚕𝚒𝚐𝚛𝚊𝚖 𝚒𝚍 :  tamim bbz

[ 𝐖𝐞𝐛 𝐬𝐢𝐭𝐞 ] 🌐 𝙽/𝙰

 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚈𝙾𝚄𝚂𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙲𝚁𝙰𝚂𝙷 𝙱𝙾𝚃`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://i.imgur.com/iEniGFA.jpeg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
