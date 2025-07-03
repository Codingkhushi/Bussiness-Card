const zod = require("zod");

const createCard = zod.object({
    Name : zod.string(),
    Description : zod.string(),
    SocialMediaLinks : zod.object({
        linkedIn : zod.string().url(),
        Twitter : zod.string().url(),
        Github : zod.string().url()
    }),
    Interest : zod.string(),
    //id : zod.string()
})

module.exports = {
    createCard
}