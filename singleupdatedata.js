const {client}=require("./dbconfig");

const singleUpDateData=async()=>{

    try {

        const database = client.db("school");

        const students = database.collection("students");

        const filter = {name: "sakkhor" };

        const options = { upsert: true };

        const updateDoc = {

            $set: {
      
              isStudent:true,
      
            },
      
          };

          const result = await students.updateOne(filter, updateDoc, options);

          console.log(

            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      
          );
        
    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

singleUpDateData();