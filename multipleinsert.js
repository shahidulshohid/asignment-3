const { client } = require("./dbconfig");

const moultipleInsertData = async()=>{

    try {

        const database = client.db("school");

        const students = database.collection("students");

        const docs = [

            { name: "shahidul islam", healthy: false },
      
            { name: "sakkhor", healthy: true },
      
            { name: "satu sah", healthy: false }
      
          ];

          const result = await students.insertMany(docs);

          console.log(`${result.insertedCount} documents were inserted`);
        
    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

moultipleInsertData();