#!/bin/bash
#�������������ļ������û�ִ��pre_deal.sh����ʱ�ṩ�ĵ�һ��������Ϊ�����ļ�����
infile=$1
#������������ļ������û�ִ��pre_deal.sh����ʱ�ṩ�ĵڶ���������Ϊ����ļ�����
outfile=$2
#ע�⣬����$infile> $outfile�������}���������ַ��ĺ���
awk -F "," 'BEGIN{
srand();
        id=0;
        Province[0]="ɽ��";Province[1]="ɽ��";Province[2]="����";Province[3]="�ӱ�";Province[4]="����";Province[5]="���ɹ�";Province[6]="�Ϻ���";
        Province[7]="������";Province[8]="������";Province[9]="�����";Province[10]="����";Province[11]="�㶫";Province[12]="����";Province[13]="����"; 
        Province[14]="�㽭";Province[15]="����";Province[16]="�½�";Province[17]="����";Province[18]="����";Province[19]="����";Province[20]="����";
        Province[21]="������";Province[22]="����";Province[23]="����"; Province[24]="����";Province[25]="����";Province[26]="�ຣ";Province[27]="�Ĵ�";
        Province[28]="����"; Province[29]="����";Province[30]="����";Province[31]="���";Province[32]="����";Province[33]="̨��";
    }
    {
        id=id+1;
        value=int(rand()*34);       
        print id"\t"$1"\t"$2"\t"$3"\t"$5"\t"substr($6,1,10)"\t"Province[value]
    }' $infile> $outfile