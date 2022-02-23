import mongoose from 'mongoose'

export function connectMongoose (url){
    mongoose.connect(url).then(()=>{
        console.log('Connected to Database')
    }).catch ((err)=>{
        console.log(err)
    })
}