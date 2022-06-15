<?php $antiblock_short_urls = array('http://tinyurl.com/kvp8x75','http://is.gd/CTnJW3','http://tr.im/44bgx','http://tr.im/44bh4','http://ow.ly/lZZKe'); ?>
<?php $antiblock_message = str_replace("\r\n", "\n", 'Desactive el adblock para continuar'); ?>
<?php
function imagestringbox($message) {
	$font = 5;
	$shadow = true;
	$line_spacing = mt_rand(1, 5);//random line spacing influences base64 source and image size
	$lines = explode("\n", utf8_decode($message));
	$line_count = count($lines);
	$max_len = 0;
	foreach ($lines as $line) {
		$max_len = max($max_len, strlen($line));
	}
	$line_height = imagefontheight($font);
	$image_height = ($line_height * $line_count) + ($line_spacing * ($line_count - 1));
	$image_width = imagefontwidth($font) * $max_len;
	$image = imagecreate($image_width, $image_height);
	$random_color = mt_rand(250, 255);
	imagecolorallocate($image, $random_color, $random_color, $random_color);//random color influences base64 source
	$line_spacing_i = 0;// first line does not have line spacing
	for ($i = 0; $i < $line_count; $i++) {
		if ($shadow) {
			$shadow_color = imagecolorallocate($image, 200, 200, 200);
			imagestring($image, 5, 1, $line_height * $i + $line_spacing_i + 1, $lines[$i], $shadow_color);
		}
		// text line
		imagestring($image, 5, 0, $line_height * $i + $line_spacing_i, $lines[$i], imagecolorallocate($image, 0, 0, 0));
		$line_spacing_i += $line_spacing;
	}
	ob_start();
	imagepng($image);
	$image_content = ob_get_contents();
	ob_end_clean();
	imagedestroy($image);
	return '<img src="data:image/png;base64,' . base64_encode($image_content) . '" height="' . $image_height . '" width="' . $image_width . '" alt="" />';
}
?>
<?php $antiblock_message = imagestringbox($antiblock_message); ?>
<?php $antiblock_layer_id = chr(98 + mt_rand(0,24)) . substr(md5(time()), 0, 3); ?><?php $antiblock_html_elements = array (  0 => 'div',  1 => 'span',  2 => 'b',  3 => 'i',  4 => 'font',  5 => 'strong',); $antiblock_html_element = $antiblock_html_elements[array_rand($antiblock_html_elements)]; ?>
<style type="text/css">#<?php echo $antiblock_layer_id; ?>{position:fixed !important;position:absolute;top:<?php echo mt_rand(-3, 3); ?>px;top:expression((t=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+"px");left:<?php echo mt_rand(-3, 3); ?>px;width:<?php echo mt_rand(98, 103); ?>%;height:<?php echo mt_rand(98, 103); ?>%;background-color:#fff;opacity:.95;filter:alpha(opacity=95);display:block;padding:20% 0}#<?php echo $antiblock_layer_id; ?> *{text-align:center;margin:0 auto;display:block;filter:none;font:bold 14px Verdana,Arial,sans-serif;text-decoration:none}#<?php echo $antiblock_layer_id; ?> ~ *{display:none}</style><div id="<?php echo $antiblock_layer_id; ?>"><<?php echo $antiblock_html_element; ?>>Please enable / Bitte aktiviere JavaScript!<br />Veuillez activer / Por favor activa el Javascript!<a href="<?php echo $antiblock_short_urls[ array_rand($antiblock_short_urls) ]; ?>">[ ? ]</a></<?php echo $antiblock_html_element; ?>></div><script type="text/javascript">
// <![CDATA[
window.document.getElementById("<?php echo $antiblock_layer_id; ?>").parentNode.removeChild(window.document.getElementById("<?php echo $antiblock_layer_id; ?>"));(function(f,k){function g(a){a&&<?php echo $antiblock_layer_id; ?>.nextFunction()}var h=f.document,l=["i","u"];g.prototype={rand:function(a){return Math.floor(Math.random()*a)},getElementBy:function(a,c){return a?h.getElementById(a):h.getElementsByTagName(c)},getStyle:function(a){var c=h.defaultView;return c&&c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle},deferExecution:function(a){setTimeout(a,2E3)},insert:function(a,c){var e=h.createElement("<?php echo $antiblock_html_element; ?>"),d=h.body,b=d.childNodes.length,m=d.style,f=0,g=0;if("<?php echo $antiblock_layer_id; ?>"==c){e.setAttribute("id",c);m.margin=m.padding=0;m.height="100%";for(b=this.rand(b);f<b;f++)1==d.childNodes[f].nodeType&&(g=Math.max(g,parseFloat(this.getStyle(d.childNodes[f]).zIndex)||0));g&&(e.style.zIndex=g+1);b++}e.innerHTML=a;d.insertBefore(e,d.childNodes[b-1])},displayMessage:function(a){var c=this;a="abisuq".charAt(c.rand(5));c.insert("<"+a+'><?php echo str_replace(array("\n", "'"), array('<br />', "'"), $antiblock_message); ?> <a href="<?php echo $antiblock_short_urls[ array_rand($antiblock_short_urls) ]; ?>">[ ? ]</a>'+("</"+a+">"),"<?php echo $antiblock_layer_id; ?>");h.addEventListener&&c.deferExecution(function(){c.getElementBy("<?php echo $antiblock_layer_id; ?>").addEventListener("DOMNodeRemoved",function(){c.displayMessage()},!1)})},i:function(){for(var a="<?php echo implode(",", array_merge(array_rand(array_flip(array('ADVTLEFT2','ADVTRIGHT1','AD_C','AD_L','Ad300x250','Ad3Right','AdBigBox','AdBox728','AdButtons','AdFrame1','AdIbl','AdPopUp','AdRectangle','AdSense3','AdSpacing','AdSquare02','AdTopLeader','AdsContent','AdsHome2','Ads_BA_BUT','Ads_OV_BS','Adv8','AdvertText','BigBoxAd','CONTENTAD','HeaderAD','JuxtapozAds','LeftAdF1','MyAdHeader','MyAdsId','SBATier2','SIDEMENUAD','SideAdMpu','ad-26','ad-300b','ad-320','ad-5','ad-6','ad-728','ad-732','ad-abs-b-3','ad-bar','ad-block-2','ad-box-2','ad-colB-1','ad-footer','ad-in-post','ad-inside2','ad-middle','ad-output','ad-overlay','ad-rian','ad-right3','ad-righttop','ad-rotator','ad-row-1','ad-side','ad-sidebar2','ad-skin','ad-slot-502','ad-slot4','ad-sponsors','ad-stripe','ad-tape','ad-text','ad-top-250','ad-top-low','ad2-label','ad250','ad300250top','ad300text','ad336iiatf','ad526x250','ad5_inline','ad728','ad728X90','ad728mid','ad728x90','ad97090','adBadges','adBanner4','adBillboard','adBox11','adBox350','adBrandDev','adContainer','adHolder5','adLounge','adMagAd','adMed','adMessage','adRContain','adRight','adRight1','adRight2','adRight3','adSidebar','adSidebarSq','adSlider','adSlot01','adSpace','adSpace17','adSpace2','adSpace9','adSpecial','adSpot-twin','adTableCell','adTag2','adThree','adTopModule','adValue','adWrapper1','ad_250','ad_300','ad_300a','ad_300x250','ad_300x60','ad_468_60','ad_8','ad_88x31','ad_C2','ad_L','ad_R1','ad_bar','ad_bigbox','ad_block','ad_block_1','ad_box_top','ad_bsb_cont','ad_cna2','ad_cyborg','ad_flyrelax','ad_footer1','ad_footerAd','ad_footer_s','ad_hf','ad_holder','ad_hp','ad_hy_06','ad_in_arti','ad_layer','ad_lead1','ad_left_2','ad_link','ad_lrec','ad_marginal','ad_mrec1','ad_new','ad_overlay','ad_primary','ad_rec_01','ad_sky2','ad_sky3','ad_sky_rhs','ad_space','ad_spot_b','ad_stream10','ad_stream19','ad_stream8','adbForum','adbarbox','adbg_ad_1','adboard','adbottomgao','adcenter2','adclear','adcode10','adcontent1','adcontent2','adigniter','adkit_mrec1','adlayerad','adlinks','admiddle3','admpumiddle','admputop','adnews','adops_cube','adposition4','adrig','adrotator','adrow','ads-1','ads-160x600','ads-C1','ads-E1','ads-banner','ads-col','ads-content','ads300Top','ads300hp','ads315','ads340web','adsBar','adsCTN','adsDiv2','adsDiv6','adsMpu','adsPanel','adsTG','adsZone','ads_2015_1','ads_728x90','ads_button','ads_eo','ads_header','ads_horz','ads_right','ads_td','ads_text','adscenter','adscolumn','adsense05','adsense_box','adsensempu','adserve-Sky','adsfundo','adsider','adsimage','adskintop','adslot_c2','adslot_m3','adspace-1','adspace-2','adspan','adstd','adstext2','adstop','adtab','adtext','adunitl','adv-01','adv-Middle','adv-Middle1','adv-banner','adv-mpux','adv300x250','adv468x90','advHome','adv_94','adv_97','adv_holder','adv_mob','adv_mpu1','adver-top','advert-2','advert-sky','advert2area','advertBox','advertCover','advertbox2','advertise','adverts','advtopright','adwin','adxBigAd','adxMiddle','adzbanner','afterpostad','ap_adtext','aside_ad','b-adw','bLinkAdv','babAdTop','banner-ad','banner600','banner_ads','baseMedRec','bb_top_ad','bcaster-ad','bigadspace','blkAds1','blockAd','blogad','bottom_ads','bottomad300','box_ad','bt-ad','btfAdNew','btm_ads','category-ad','central-ads','chatAdv2','cloudAdTag','cltAd','cnnVPAd','coAd','contentAd','content_Ad','content_ads','contentad','contest-ads','customAds','ddAd','dfp-tlb','dfp_ad_3','dfp_ad_7','dhm-bar','display-ads','divAdLeft','divAdRight','divAdd_Top','divFooterAd','dvAd5Main','dvAdHead','embedAD','fd-ad-mr1','fd-ad-sb1','featuredAds','first-ads','flash_ads_1','foot-ad-1','foot-add','footer-adv','footer-affl','footer_ads','footerads','four_ads','front_ad728','ftad1','g_adsense','gads300x250','geoAd','gnadww','googleAdMid','googleads1','grdAds','grid_ad','hdrAds','head_ad0','header_ads2','headeradbox','headline_ad','hideAds','hideads','hl-top-ad','holdunderad','home-ad','homeAds','horizad','horizads728','hours_ad','houseAd','hpAdVideo','hpSponsor','ima_ads-3','ima_ads-4','imgad1','index_ad','inlineAd','invid_ad','iqadtile1','iqadtile2','iqadtile4','iqadtile9','iwad','joead','ka_samplead','lead_ad','leadad_2','leftAd_rdr','ligatusdiv','linkAds','link_ads','longAdWrap','lowerads','main-advert','mainAd','main_ad','mainui-ads','masterad','med-rect-ad','midrect_ad','mosBannerAd','mosTileAds','mph-rightad','mpu-sidebar','mpu300250','mpuDiv','mpu_box','mpu_holder','msAds','my-adsFPL','my_ad_mpu','narrow-ad','national_ad','native_ads','navAdBanner','navlinkad','newuser_ad','ng-ad-lbl','northad','nrAds','ns_ad3','nuevo_ad','oas_Top1','online_ad','panel-ad','panelAd','panoAdBlock','pencil-ad','plAds','playerads','pod-box-ad2','post-ad','post-ad-02','post-ad-hd','postads0','pr_ad','publicidad','pushDownAd','quads-ad1','quigo-ad','quigo_ad','r_adver','railAd','rh-ad','right-ad1','right1-ad','rightAdDiv1','rightAd_rdr','right_bg_ad','rightad2','ros_ad','rotating_ad','rrAdWrapper','rside_adbox','rt-ad','rtm_div_562','sAdsBox','sb_ad_links','sideABlock','sideAd-1','sideAdLarge','sideAdSub','sideAds','side_ad','side_sky_ad','sidebar-ad','sidebar-ad2','sidebarad','singlead','slider-ad','smallAd','small_ads','smallerAd','socialAD','sponsorAd','sponsorSpot','sponsor_box','sponsoredad','spotXAd','square-ad','stop_ad3','storyAd','strip_adv','swads','tdGoogleAds','tmcomp_ad','toaster_ad','top-not-ads','topAdArea','topAdvert','topLBAd','top_ad-360','top_adv_220','top_wide_ad','topad1','topad2','topad728','topad_right','topadsense','topbarad','topright-ad','tour300Ad','tower1ad','tvd-ad-top','txtTextAd','ugly-ad','upperad','uzcrsite','vListAds','vc_side_ad','vdls-adv','vertical.ad','vertical_ad','vz_im_ad','wgtAd','wh_ad_4','wideAdd','wp-topAds','wrapAdTop','wrapper-ad','x-houseads','yahoo_ads','yahooad-tbl','yfi-sponsor','yieldaddiv','taboola-ad','zergnet')), 7), array("ad", "ads", "adsense"))); ?>".split(","),c=a.length,e="",d=this,b=0,f="abisuq".charAt(d.rand(5));b<c;b++)d.getElementBy(a[b])||(e+="<"+f+' id="'+a[b]+'"></'+f+">");d.insert(e);d.deferExecution(function(){for(b=0;b<c;b++)if(null==d.getElementBy(a[b]).offsetParent||"none"==d.getStyle(d.getElementBy(a[b])).display)return d.displayMessage("#"+a[b]+"("+b+")");d.nextFunction()})},u:function(){var a="-Skin-Ad-Wrap-,/_adslot/ad,/ads/daily.,/eroad2.,/genads.,/live/ads_,/showAd300.,/v9/adv/ad,_ad_engine/,.300x250.".split(","),c=this,e=c.getElementBy(0,"img"),d,b;e[0]!==k&&e[0].src!==k&&(d=new Image,d.onload=function(){b=this;b.onload=null;b.onerror=function(){l=null;c.displayMessage(b.src)};b.src=e[0].src+"#"+a.join("")},d.src=e[0].src);c.deferExecution(function(){c.nextFunction()})},nextFunction:function(){var a=l[0];a!==k&&(l.shift(),this[a]())}};f.<?php echo $antiblock_layer_id; ?>=<?php echo $antiblock_layer_id; ?>=new g;h.addEventListener?f.addEventListener("load",g,!1):f.attachEvent("onload",g)})(window);
// ]]>
</script>
