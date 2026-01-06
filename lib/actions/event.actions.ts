'use server'; 
// all the code will be executed on the server side and not exposed important information to the client
import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";
// no need to worry about request and response as this is server side function

export const getSimilarEventBySlug = async (slug: string) => {
    try {
        // connect to the database
        await connectDB();
        const event = await Event.findOne({ slug });
        // fetch the event by slug
        return await Event.find({
            _id: { $ne: event?._id }, // exclude the current event
            tags: { $in: event?.tags } // find events with at least one matching tag
        }).lean(); // <--- ADD THIS to convert Mongoose documents to plain JS objects
        
}
catch {  
        return [];
    }
};
