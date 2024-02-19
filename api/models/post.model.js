import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: true, 
    },
    content: { 
        type: String,
        required: true, 
    },
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-7ae47.appspot.com/o/101113063.jpg?alt=media&token=4a6ce224-1f19-4478-8607-985336091408',
    },
    categories: {
        type: String,
        default: 'uncategorized',
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;