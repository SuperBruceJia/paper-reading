WCOUT=wc_out
WCTMP=wc_tmp
INPUTPATH=ex_data/wc
KVAL=10

WordCount: WordCount.jar
	hdfs dfs -rm -r -f $(WCOUT)
	hadoop jar $< $(basename $<) $(INPUTPATH) $(WCOUT)

MaxWordCount: MaxWordCount.jar
	hdfs dfs -rm -r -f $(WCOUT) $(WCTMP)
	hadoop jar $< $(basename $<) $(INPUTPATH) $(WCTMP) $(WCOUT)

TopKWordCount: TopKWordCount.jar
	hdfs dfs -rm -r -f $(WCOUT) $(WCTMP)
	hadoop jar $< $(basename $<) $(INPUTPATH) $(WCTMP) $(WCOUT) $(KVAL)





%.jar: %.java
	hadoop com.sun.tools.javac.Main $<
	jar cf $@ $(basename $<)*.class

clean:
	rm -f *.class *.jar
	hdfs dfs -rm -r -f $(WCOUT) $(WCTMP)

	
