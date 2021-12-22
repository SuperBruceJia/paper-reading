
<?php
    if($userid!="" && $lang)
    {
        $url="https://scholar.google.com/citations?view_op=list_works&hl=".$lang."&user=".$userid."&pagesize=".$pagesize;
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 60);
        $GScontent=curl_exec($curl);
        curl_close($curl);
    }
    else
    {
        print "ERROR: Cannot find Google Scholar Account and Language </br>";
    }
?>
