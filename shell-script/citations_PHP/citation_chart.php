<?php
	
    if($GScontent=="")
    //this will make sure you include the curl.php line above
    {
		echo "<font color=red>you have to include curl.php with userid and language first</font>";
		echo "<br>";
    }else
    {
		print get_chart($GScontent, $url );
    }
    
	function get_chart($GScontent, $url)
	{
		$GSText= '';
		$output = preg_match_all('/<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_co" role="region" aria-labelledby="gsc_prf_t-ath">/',$GScontent,$matches);

        if(!isset($matches[1][0]))
		{
			$output = preg_match_all('/<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_lcl" role="main" id="gsc_prf_w">/',$GScontent,$matches);
		}

		$GSText= isset($matches[1][0])?$matches[1][0]:'e1';
		// GET THE TOTAL CITATIONS
		preg_match_all('/Citations<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$GSText,$matches);
		$citations = isset($matches[1][0])?$matches[1][0]:'e2';

		preg_match_all('/h-index<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$GSText,$matches);
		$hindex = isset($matches[1][0])?$matches[1][0]:'e3';
		
		preg_match_all('/i10-index<\/a><\/td><td class="gsc_rsb_std">(\d+)<\/td>/is',$GSText,$matches);
		$i10index = isset($matches[1][0])?$matches[1][0]:'e4';
		
		//PUT THEM TOGETHER
		preg_match_all('/<style>(.+)/is',$GSText,$matches);
		$GSText2 = isset($matches[1][0])?$matches[1][0]:'e5';
		$GSText2 = '<style>'.$GSText2;

		$dom = new DOMDocument();
		$dom->preserveWhiteSpace = FALSE;
		@$dom->loadHTML($GSText2);
		$dom->formatOutput = TRUE;

		$links = $dom->getElementsByTagName('a');

		for ($i = $links->length - 1; $i >= 0; $i--)
		{
			$linkNode = $links->item($i);
			$text = $linkNode->textContent;
			$style = $linkNode->getAttribute("style");
			$class = $linkNode->getAttribute("class");
			$div = $dom->createElement("div", $text);
			$div->setAttribute("class","$class");
			$div->setAttribute("style","$style");
			$linkNode->parentNode->replaceChild($div, $linkNode);
		}
		
		$today = date("D, F j, Y");
		//current date
		$getchart = $dom->saveHTML();
		$GSText3 = ': <a href="'.$url.'" target=_blank style="color:black;">'.$citations.'</a>';
		
//		$GSText3 = '<a href="'.$url.'">Google Scholar</a> real-time citations: <a href="'.$url.'" target=_blank>'.$citations.'</a> '.$today.'<br> &nbsp; &nbsp;&nbsp; h-index: '.$hindex.'&nbsp; &nbsp; &nbsp;  i10-index: '.$i10index.$getchart;
//
		return $GSText3;
	}
?>
