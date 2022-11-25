const{client}=require("./dbconfig");

const singleDataFind=async()=>{

    try {

        const database = client.db("school");

        const students = database.collection("students");

        const query = { name: "sakkhor" };

        const result = await students.findOne(query);

        console.log(result);
        
    } catch (error) {
        console.log(error);
    }finally{

        await client.close();
    }
}

singleDataFind();