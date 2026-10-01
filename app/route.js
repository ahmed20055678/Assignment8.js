const authcontroller=require('./controller')
const {Router}=require('express')
const authRouter=Router()
authRouter.post('/signup',authcontroller.signup)
authRouter.post('/signup/gmail',authcontroller.signupeWithGmail)
authRouter.post('/signin',authcontroller.signin)
authRouter.post('/getprofile',authcontroller.getProfile)
module.exports=authRouter