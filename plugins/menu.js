const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let mademenu = ` 👋*HELLO ${pushname} WELCOME QUEEN AMANDA-MD*
> ⚜️ *DOWNLOAD COMMANDS* 

${menu.download}

> ⚜️ *MAIN COMMANDS* 

${menu.main}

> ⚜️ *GROUPS COMMANDS*

${menu.group}

> ⚜️ *OWNER COMMANDS*

${menu.owner}

> ⚜️ *CONVERT COMMANDS*

${menu.convert}

> ⚜️ *SEARCH COMMANDS*

${menu.search}

*POWERD BY 𝐐𝐔𝐄𝐄𝐍 𝐀𝐌𝐀𝐍𝐃𝐀 ⚜️*
`
await conn.sendMeassage(from,{image:{url:"https://i.postimg.cc/xq615zVM/photo-2024-08-24-11-54-23.jpg"}},{quoted:mek}) 


}

}catch(e){
console.log(e)
reply(`${e}`)
    
