const { App } = require("@slack/bolt");
require('dotenv').config();
const port = 8002;


const app = new App({
    token: process.env.GREENDOT_SLACK_BOT_TOKEN,
    signingSecret: process.env.GREENDOT_SLACK_SIGNING_SECRECT,
    socketMode: true,
    appToken:process.env.GREENDOT_SLACK_APP_TOKEN
});

// app.message("ducks", async ({message, say}) => {
//     await say("quaxkk")
// });


app.command("/greendot", async ({ command, ack, say }) => {
    ack()

    await say("quack!")
})


(async () => {
    await app.start(port)
    console.log(`⚡️ Bolt app is running on ${port}!`)
})();