module.exports = {
  name: 'assessments',
  description: 'Provides assessment Details',
  execute(message, args){
const embed = {
  "description": "Assessment Details (Credits to nella for compiling these.) ",
  "color": 1447749,
  "footer": {},
  "author": {
    "name": "Assessments",
    "url": "https://discordapp.com",
    "icon_url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
  },
  "thumbnail": {
    "url": "https://static.wixstatic.com/media/97c299_b74650ab49334b998c4108d4300ba874~mv2.png/v1/fill/w_109,h_108,al_c,q_85,usm_0.33_1.00_0.00/BSU%20LOGO.webp"
  },
  "fields": [
    {
      "name": ":floppy_disk: Code Lab I",
      "value": "**[JAN 10] - Chapter 6 & 7**\nRepository + PowerPoint slides \n• Ch. 6 - Arrays \n• Ch. 7 - Functions \n\n**[JAN 26] - Utility App**\nWord Document\n1,000 words min.\n• Source code file\n• Lots of explanation\n• System flowchart\n• (optional) pseudocode\n\n:paperclip:  Details: https://drive.google.com/file/d/10jD24R21-7v25DSBc8p7xU83yqZVrQqH/view?usp=sharing\n\n"
    },
    {
      "name": ":desktop: (BSc) Intro to Computing",
      "value": "**[JAN 17] - Research Project: Word Document**\n2,000 words min.\n• Technology Convergence\n\n:paperclip:  Details: https://drive.google.com/file/d/1onbu5fjk6_dcYsOe3sOstcJri7NfYtGZ/view?usp=sharing\n:paperclip:  Sample: https://drive.google.com/file/d/1GpJtPqiP_daEqok4dBGrG6kacFVJEVRp/view?usp=sharing\n\n"
    },
    {
      "name": ":desktop: (DCC) Fundamentals of Computing",
      "value": "**[DEC 9] - Video Presentation: Digital Revolution**\n 3 minutes min. | 6 minutes max.\n• Detailed history of technological progress until Digital Revolution\n\n:paperclip: Details: https://drive.google.com/file/d/10XiETyX2juzkbG5P-pS6zDfjVAa6nmvp/view?usp=drivesdk"
    },
    {
      "name": ":book: Digital Storytelling",
      "value": "**[DEC 12] - Portfolio Submissions: Google Drive Link**\n• Photoshop - selective coloration/decoloration, image blend and coloration\n• 30-sec timelapse\n• Advertisement storyboard\n\n**[JAN 30] - Sway Portfolio: Finished Sway Link **\n+ Word Document with essay that must include:\n• Digistory Experience (Video)\n• Twine story\n• 30-sec timelapse\n• Photoshop - selective coloration/decoloration, image blend and coloration\n• Advertisement storyboard\n• Photography works\n• Stop Motion\n\n:paperclip:  Details: https://docs.google.com/document/d/1ph0hcKs3oEWy9k13C3tcXtspLJMqs2UXF_AUd4codsg/edit\n:paperclip:  Sample: https://sway.office.com/DGdGGsAvgZY5uJwa?ref=Link\n"
    }
  ]
};
message.channel.send({ embed });
  }
}