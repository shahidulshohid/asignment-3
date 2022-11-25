const {client}=require("./dbconfig");

const deleteAllData=async()=>{

    try {

        const database = client.db("school");

        const students = database.collection("students");

        const query = {};

        const result = await students.deleteMany(query);

        console.log("Deleted " + result.deletedCount + " documents");

    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

deleteAllData();