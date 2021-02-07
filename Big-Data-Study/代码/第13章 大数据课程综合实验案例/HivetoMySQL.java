import java.sql.*;
import java.sql.SQLException;

public class HivetoMySQL {
    private static String driverName = "org.apache.hive.jdbc.HiveDriver";
    private static String driverName_mysql = "com.mysql.jdbc.Driver";
    public static void main(String[] args) throws SQLException {
        try {
            Class.forName(driverName);
        }catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.exit(1);
        }
        Connection con1 = DriverManager.getConnection("jdbc:hive2://localhost:10000/default", "hive", "hive");//后两个参数是用户名密码

        if(con1 == null)
            System.out.println("连接失败");
        else {
            Statement stmt = con1.createStatement();
            String sql = "select * from dblab.user_action";
            System.out.println("Running: " + sql);
            ResultSet res = stmt.executeQuery(sql);

            //InsertToMysql
            try {
                Class.forName(driverName_mysql);
                Connection con2 = DriverManager.getConnection("jdbc:mysql://localhost:3306/dblab","root","root");
                String sql2 = "insert into user_action(id,uid,item_id,behavior_type,item_category,visit_date,province) values (?,?,?,?,?,?,?)";
                PreparedStatement ps = con2.prepareStatement(sql2);
                while (res.next()) {
                    ps.setString(1,res.getString(1));
                    ps.setString(2,res.getString(2));
                    ps.setString(3,res.getString(3));
                    ps.setString(4,res.getString(4));
                    ps.setString(5,res.getString(5));
                    ps.setDate(6,res.getDate(6));
                    ps.setString(7,res.getString(7));
                    ps.executeUpdate();
                }
                ps.close();
                con2.close();
                res.close();
                stmt.close();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
        con1.close();
    }
}