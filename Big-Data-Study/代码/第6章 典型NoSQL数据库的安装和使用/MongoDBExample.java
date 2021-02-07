import java.util.ArrayList;
import java.util.List; 
import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters; 
public class TestMongoDB {
    /**
     * @param args
     */
    public static void main(String[] args) {
//      insert();//插入数据。执行插入时，可将其他三句函数调用语句注释，下同
        find(); //查找数据
//      update();//更新数据
//      delete();//删除数据
    }
    /**
     * 返回指定数据库中的指定集合
     * @param dbname 数据库名
     * @param collectionname 集合名
     * @return
     */
    //MongoDB无需预定义数据库和集合,在使用的时候会自动创建
    public static MongoCollection<Document> getCollection(String dbname,String collectionname){
        //实例化一个mongo客户端,服务器地址：localhost(本地)，端口号：27017
        MongoClient  mongoClient=new MongoClient("localhost",27017);
        //实例化一个mongo数据库
        MongoDatabase mongoDatabase = mongoClient.getDatabase(dbname);
        //获取数据库中某个集合
        MongoCollection<Document> collection = mongoDatabase.getCollection(collectionname);
        return collection;
    }
    /**
     * 插入数据
     */
    public static void insert(){
        try{
            //连接MongoDB，指定连接数据库名，指定连接表名。
            MongoCollection<Document> collection= getCollection("School","student");    //数据库名:School 集合名:student
            //实例化一个文档,文档内容为{sname:'Mary',sage:25}，如果还有其他字段，可以继续追加append
            Document doc1=new Document("sname","Mary").append("sage", 25);
            //实例化一个文档,文档内容为{sname:'Bob',sage:20}
            Document doc2=new Document("sname","Bob").append("sage", 20);
            List<Document> documents = new ArrayList<Document>(); 
            //将doc1、doc2加入到documents列表中
            documents.add(doc1); 
            documents.add(doc2); 
            //将documents插入集合
            collection.insertMany(documents);  
            System.out.println("插入成功"); 
        }catch(Exception e){
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        }
    }
    /**
     * 查询数据
     */
    public static void find(){
        try{
            MongoCollection<Document> collection = getCollection("School","student");  //数据库名:School 集合名:student
            //通过游标遍历检索出的文档集合 
//          MongoCursor<Document>  cursor= collection.find(new Document("sname","Mary")). projection(new Document("sname",1).append("sage",1).append("_id", 0)).iterator();   //find查询条件：sname='Mary'。projection筛选：显示sname和sage,不显示_id(_id默认会显示)
            //查询所有数据
            MongoCursor<Document>  cursor= collection.find().iterator();
            while(cursor.hasNext()){
                System.out.println(cursor.next().toJson());
            }
        }catch(Exception e){
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        }
    }
    /**
     * 更新数据
     */
    public static void update(){
        try{
            MongoCollection<Document> collection = getCollection("School","student");  //数据库名:School 集合名:student
             //更新文档，将文档中sname='Mary'的文档修改为sage=22   
             collection.updateMany(Filters.eq("sname", "Mary"), new Document("$set",new Document("sage",22)));  
             System.out.println("更新成功！");
        }catch(Exception e){
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        }
    }
    /**
     * 删除数据
     */
    public static void delete(){
        try{
            MongoCollection<Document> collection = getCollection("School","student");  //数据库名:School 集合名:student
                //删除符合条件的第一个文档  
            collection.deleteOne(Filters.eq("sname", "Bob"));  
            //删除所有符合条件的文档  
            //collection.deleteMany (Filters.eq("sname", "Bob"));
            System.out.println("删除成功！");
        }catch(Exception e){
            System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        }
    }
}