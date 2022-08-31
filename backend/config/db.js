// eslint-disable-next-line import/no-unresolved
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // const databaseName='tripalong';
    console.log(process.env.MONGO_URL);
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
