const config = require('../config')
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search)

                    
cmd({ 
    pattern: "song",
    desc: "songs downloader.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")  
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

  let desc = `  
  *QUEEN AMANDA SONG DOWNLOADER*

  title: ${data.title}
  description:  ${data.description}
  time:  ${data.time}
  views:  ${data.views}

  
  *MADE BY MAHIYA BOY <3* 
  `

  await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

  //download audio

  let down = await fg.yta(url)
  let downloadurl = down.dl_url

  // send audio message
  await conn.sendMeassage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
  await conn.sendMeassage(from,{document: {url:downloadurl},mimetype:"audio /mpeg",fileName:data.title + ".mp3",caption:"MADE BY MAHIYA BOY"},{quoted:mek})
    
    
     
  
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

//===============video+dl================

cmd({ 
    pattern: "video",
    desc: "video downloader.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")  
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

  let desc = `  
  *QUEEN AMANDA VIDEO DOWNLOADER*

  title: ${data.title}
  description:  ${data.description}
  time:  ${data.time}
  views:  ${data.views}

  
  *MADE BY MAHIYA BOY <3* 
  `

  await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

  //download videoo

  let down = await fg.ytv(url)
  let downloadurl = down.dl_url

  // send videoo message
  await conn.sendMeassage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
  await conn.sendMeassage(from,{document: {url:downloadurl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY MAHIYA BOY},{quoted:mek})
    
   
  
    
    
     
  
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
