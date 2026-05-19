const chatmodel = require('../models/chat.model')


async function chatcreate(req,res){
    const {title} = req.body
    const user = req.user
    const chat = await chatmodel.create({
        user:user._id,
        title
    })

    res.status(200).json({
        message:"chat created successfully",
        chat
    })
}

module.exports = chatcreate