
<?php
    
    if($GScontent=="")
    {
        echo "<font color=red>you have to include curl.php with userid and language first</font>";
    }else
    {
    $output = preg_match_all('/<td class="gsc_a_c"><a href="https:\/\/scholar.google.com\/scholar\?oi=bibs&amp;hl=en&amp;oe=ASCII&amp;cites='.$paperid.'" class="gsc_a_ac gs_ibl">(.*)<\/a><\/td>/U', $GScontent,$matches);
    
    #echo $matches[1][0]."<br>";
echo " <a href=https://scholar.google.com/scholar?oi=bibs&hl=en&cites=".$paperid."&as_sdt=5 target=_blank> ". $matches[1][0]."</a> ";
    }
?>
