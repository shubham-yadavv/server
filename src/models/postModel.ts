import mongoose from 'mongoose';

//interface for post
export interface IPost extends mongoose.Document {
    title: string;
    body: string;
}

// schema for post
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title'],
        unique: true,
    },
    body: {
        type: String,
        required: [true, 'A post must have a body'],
    },
});


// default export
export default mongoose.model<IPost>('Post', postSchema);
