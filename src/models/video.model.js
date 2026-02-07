import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new Schema(
    {
        videoFile:{
            type:String, // cloudenary url
            required:true, 
        },
         thumbnail:{
            type:String, // cloudenary url
            required:true, 
        },
         title:{
            type:String, 
            required:true, 
        },
         discription:{
            type:String, 
            required:true, 
        },
         duration:{
            type:Number, // cloudenary url
            required:true, 
        },
         viewa:{
            type:Number, // cloudenary url
            default:0, 
        },
         isPublished:{
            type:Boolean, // cloudenary url
            default:true, 
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
}
,{timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("video", VideoSchema)