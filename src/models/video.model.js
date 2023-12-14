const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const mongooseAggregatePaginit = require('mongoose-aggregate-paginate-v2')

const videoSchema =
    new Schema({
        videoFile: {
            type: String, //url
            required: true,
        },
        thumbnail: {
            type: String, //url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginit);

module.exports = mongoose.model("Video", videoSchema)