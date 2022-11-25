const {client}=require("./dbconfig");

const multipleDataFind=async()=>{

    try {
        
        const database = client.db("school");

        const students = database.collection("students");

        const query={};

        const cursor=students.find(query);

        if ((await cursor.estimatedDocumentCount) === 0) {

            console.log("No documents found!");
      
          }else{

            const students=await cursor.toArray();

            await students.forEach(student=>console.log(student));
          }

    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

multipleDataFind();