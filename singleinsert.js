const {client}=require("./dbconfig");

const singleDataInsert=async()=>{

    try {

        const database = client.db("school");

        const students= database.collection("students");

        const doc = {

            name:"shahidul islam",

            city:"Bogura"
      
          }

          const result = await students.insertOne(doc);

          console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

singleDataInsert();