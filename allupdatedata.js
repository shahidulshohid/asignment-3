const {client}=require("./dbconfig");

const allUpDateData=async()=>{

    try {


        const database = client.db("school");

        const students = database.collection("students");

        const filter = {};

        const updateDoc = {

            $set: {

                roll:"2"
      
            },
      
          };

          const result = await students.updateMany(filter, updateDoc);

          console.log(`Updated ${result.modifiedCount} documents`);
        
    } catch (error) {
        
        console.log(error);
    }finally{

        await client.close();
    }
}

allUpDateData();