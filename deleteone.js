const {client}=require("./dbconfig");

const deleteOneData=async()=>{

    try {

        const database = client.db("school");

        const students = database.collection("students");

        const query = { name: "sakkhor" };

        const result = await students.deleteOne(query);

        if (result.deletedCount === 1) {

            console.log("Successfully deleted one document.");
      
          } else {
      
            console.log("No documents matched the query. Deleted 0 documents.");
      
          }
        
    } catch (error) {
        
        console.log(error);
    }finally{

        await client.close();
    }
}

deleteOneData();