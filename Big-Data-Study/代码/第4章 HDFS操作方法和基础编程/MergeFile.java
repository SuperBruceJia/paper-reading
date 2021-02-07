import java.io.IOException;
import java.io.PrintStream;
import java.net.URI;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;

/**
 * ���˵��ļ��������ض��������ļ� 
 */
class MyPathFilter implements PathFilter {
     String reg = null; 
     MyPathFilter(String reg) {
          this.reg = reg;
     }
     public boolean accept(Path path) {
		if (!(path.toString().matches(reg)))
			return true;
		return false;
	}
}
/***
 * ����FSDataOutputStream��FSDataInputStream�ϲ�HDFS�е��ļ�
 */
public class MergeFile {
	Path inputPath = null; //���ϲ����ļ����ڵ�Ŀ¼��·��
	Path outputPath = null; //����ļ���·��
	public MergeFile(String input, String output) {
		this.inputPath = new Path(input);
		this.outputPath = new Path(output);
	}
	public void doMerge() throws IOException {
		Configuration conf = new Configuration();
		conf.set("fs.defaultFS","hdfs://localhost:9000");
          conf.set("fs.hdfs.impl","org.apache.hadoop.hdfs.DistributedFileSystem");
		FileSystem fsSource = FileSystem.get(URI.create(inputPath.toString()), conf);
		FileSystem fsDst = FileSystem.get(URI.create(outputPath.toString()), conf);
				//������˵�����Ŀ¼�к�׺Ϊ.abc���ļ�
		FileStatus[] sourceStatus = fsSource.listStatus(inputPath,
				new MyPathFilter(".*\\.abc")); 
		FSDataOutputStream fsdos = fsDst.create(outputPath);
		PrintStream ps = new PrintStream(System.out);
		//����ֱ��ȡ����֮���ÿ���ļ������ݣ��������ͬһ���ļ���
		for (FileStatus sta : sourceStatus) {
			//�����ӡ��׺��Ϊ.abc���ļ���·�����ļ���С
			System.out.print("·����" + sta.getPath() + "    �ļ���С��" + sta.getLen()
					+ "   Ȩ�ޣ�" + sta.getPermission() + "   ���ݣ�");
			FSDataInputStream fsdis = fsSource.open(sta.getPath());
			byte[] data = new byte[1024];
			int read = -1;
			
			while ((read = fsdis.read(data)) > 0) {
				ps.write(data, 0, read);
				fsdos.write(data, 0, read);
			}
			fsdis.close();			
		}
		ps.close();
		fsdos.close();
	}
	public static void main(String[] args) throws IOException {
		MergeFile merge = new MergeFile(
				"hdfs://localhost:9000/user/hadoop/",
				"hdfs://localhost:9000/user/hadoop/merge.txt");
		merge.doMerge();
	}
}