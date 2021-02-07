import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List; 
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.*;
import org.apache.hadoop.hbase.client.*;
import org.apache.hadoop.hbase.util.Bytes; 
public class ImportHBase extends Thread {
    public Configuration config;
    public Connection conn;
    public Table table;
    public Admin admin;
    public ImportHBase() {
        config = HBaseConfiguration.create();
//      config.set("hbase.master", "master:60000");
//      config.set("hbase.zookeeper.quorum", "master");
        try {
        	conn = ConnectionFactory.createConnection(config);
            admin = conn.getAdmin();
            table = conn.getTable(TableName.valueOf("user_action"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    } 
    public static void main(String[] args) throws Exception {
        if (args.length == 0) {       //第一个参数是该jar所使用的类，第二个参数是数据集所存放的路径
            throw new Exception("You must set input path!");
        }
        String fileName = args[args.length-1];  //输入的文件路径是最后一个参数
        ImportHBase test = new ImportHBase();
        test.importLocalFileToHBase(fileName);
    }
    public void importLocalFileToHBase(String fileName) {
        long st = System.currentTimeMillis();
        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(new FileInputStream(
                    fileName)));
            String line = null;
            int count = 0;
            while ((line = br.readLine()) != null) {
                count++;
                put(line);
                if (count % 10000 == 0)
                    System.out.println(count);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally { 
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            try {
                table.close(); // must close the client
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        long en2 = System.currentTimeMillis();
        System.out.println("Total Time: " + (en2 - st) + " ms");
    }
    @SuppressWarnings("deprecation")
    public void put(String line) throws IOException {
        String[] arr = line.split("\t", -1);
        String[] column = {"id","uid","item_id","behavior_type","item_category","date","province"};
 
        if (arr.length == 7) {
            Put put = new Put(Bytes.toBytes(arr[0]));// rowkey
            for(int i=1;i<arr.length;i++){
                put.addColumn(Bytes.toBytes("f1"), Bytes.toBytes(column[i]),Bytes.toBytes(arr[i]));
            }
            table.put(put); // put to server
        }
    }
    public void get(String rowkey, String columnFamily, String column,
            int versions) throws IOException {
        long st = System.currentTimeMillis();
        Get get = new Get(Bytes.toBytes(rowkey));
        get.addColumn(Bytes.toBytes(columnFamily), Bytes.toBytes(column));
        Scan scanner = new Scan(get);
        scanner.readVersions(versions);
        ResultScanner rsScanner = table.getScanner(scanner);
        for (Result result : rsScanner) {
            final List<Cell> list = result.listCells();
            for (final Cell kv : list) {
                System.out.println(Bytes.toStringBinary(kv.getValueArray()) + "\t"
                        + kv.getTimestamp()); // mid + time
            }
        }
        rsScanner.close();
        long en2 = System.currentTimeMillis();
        System.out.println("Total Time: " + (en2 - st) + " ms");
    }
}