import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"



const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    views:{
     type:Number,
     default:0
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isPublished:{
        type:Boolean,
        default:true
    }
  },
  { timestamps: true },
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
