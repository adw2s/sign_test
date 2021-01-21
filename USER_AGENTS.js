const USER_AGENTS = [
//   "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36",
//   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
//   "Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2309.372 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2117.157 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36",
//   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
//   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.517 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36",
//   "Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1467.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1464.0 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1500.55 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.90 Safari/537.36",
//   "Mozilla/5.0 (X11; NetBSD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36",
//   "Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36",
//   "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.60 Safari/537.17",
//   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1309.0 Safari/537.17",
//   "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/24.0.1295.0 Safari/537.15",
//   "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.14 (KHTML, like Gecko) Chrome/24.0.1292.0 Safari/537.14",
//   "JD4iPhone/167490 (iPhone; iOS 14.3; Scale/2.00)",
  "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
  "jdapp;iPhone;9.3.2;13.7;f61599cbb519ddfe1f16a75af8046854673014d5;network/wifi;ADID/DA2E5EE5-2FE0-4DF8-A50E-2341BE4A5B3B;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,2;addressid/2814702385;supportBestPay/0;appBuild/167490;app_device/IOS;pap/JA2015_311210|9.3.2|IOS 13.7;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.3.5;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/138709979;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/86390;partner/jingdong;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.3.4;10;6373266693734646-9333237343536353;network/wifi;model/MIX 2S;addressid/2814702385;aid/67bf97dd93274565;oaid/f52de55614e72f31;osVer/29;appBuild/86388;partner/xiaomi001;eufv/1;Mozilla/5.0 (Linux; Android 10; MIX 2S Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
  "jdapp;iPhone;9.3.4;14.3;88732f840b77821b345bf07fd71f609e6ff12f43;network/4g;ADID/1C141FDD-C62F-425B-8033-9AAB7E4AE6A3;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/2005183373;supportBestPay/0;appBuild/167502;jdSupportDarkMode/0;pv/414.19;apprpd/Babel_Native;ref/TTTChannelViewContoller;psq/5;ads/;psn/88732f840b77821b345bf07fd71f609e6ff12f43|1701;jdv/0|iosapp|t_335139774|appshare|CopyURL|1610885480412|1610885486;adk/;app_device/IOS;pap/JA2015_311210|9.3.4|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;android;9.3.4;9;D266436653462-6665326466626;network/4g;model/Mi Note 3;addressid/137888479;aid/15225879b8538ee7;oaid/f3157082db9da676;osVer/28;appBuild/86388;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
  "jdapp;android;9.3.4;10;5353235373364666-4693734373436656;network/wifi;model/GM1910;addressid/993893557;aid/55257cdfd97474fe;oaid/;osVer/29;appBuild/86388;partner/oppo;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.3.6;9;8363538313830343131373538363-93D2134313639356631333737346;network/wifi;model/16T;addressid/1312262776;aid/afba6ae53ef2cece;oaid/;osVer/28;appBuild/86560;partner/meizu;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;iPhone;9.3.1;13.6;4be30ed80cc93279b20b3511b0e6f6e2d41d8cd9;network/wifi;ADID/82EBC38A-22C9-7832-2854-ECD760EFDF03;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/7326117e0c;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/4be30ed80cc93279b20b3511b0e6f6e2d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|94238f5e91534eff26963c550a0844a9|1611133787;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.6;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.6;c6da5a938942c27b2634d3a6e090a97fd41d8cd9;network/wifi;ADID/5A517546-F045-7A96-18EC-7317E0C421AF;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/be6eafa49d;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/c6da5a938942c27b2634d3a6e090a97fd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|54d27456fc7f2bd400e62be20379cf7f|1611133813;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.6;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.5;ee2a7f972ca063afcad4a5f72fcfab08d41d8cd9;network/wifi;ADID/DF67F172-D6E8-5902-2632-3E15BF5750B9;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/6149dbfa94;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/ee2a7f972ca063afcad4a5f72fcfab08d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|a51546972a7bb617fdc68eb06fee5741|1611133838;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;14.1;25b72f51edbd1ffd2a44851e43e701ddd41d8cd9;network/wifi;ADID/AA9A9C35-145C-F479-5E79-B90BE7575387;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/eef38d6f5a;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/25b72f51edbd1ffd2a44851e43e701ddd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|23aadc6f6678b717e3074c2e18216e4b|1611133863;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.3;8fa5153535d8162d149576903ef83f60d41d8cd9;network/wifi;ADID/6BD621BD-56D2-8D41-5992-612C9B47AE31;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/6ef0458b3e;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/8fa5153535d8162d149576903ef83f60d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|7c7cccc08e3ad1133fab7a5d55594778|1611133878;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.3;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.7;570e3fe0ac1f9ec37594db4150defda8d41d8cd9;network/wifi;ADID/81259E93-4BD6-EEE0-5940-38488EE9CD8C;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/0c7e39ea95;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/570e3fe0ac1f9ec37594db4150defda8d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|6af58e2b8306030829a2c7263dde5fbf|1611133889;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.7;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;14.1;ee5c7a30c9ecf6403d3a51e21256b0a3d41d8cd9;network/wifi;ADID/FD2E3F22-568C-1272-BB67-337E9ADA87A9;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/bd62f241d6;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/ee5c7a30c9ecf6403d3a51e21256b0a3d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|8b7418a46668301083f645ee8cfd1665|1611133902;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.3;bab8095131dce3fce92e517b3768f656d41d8cd9;network/wifi;ADID/29357F7E-E207-8125-5230-618217D502FB;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/c6f851e123;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/bab8095131dce3fce92e517b3768f656d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|9049d276d487231ca48418fb1c065568|1611135259;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.3;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.4;bccf1a9e60a5387006a7a429c1da737bd41d8cd9;network/wifi;ADID/66286A8A-AC77-621C-0FC3-DD50D883F335;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/0260059994;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/bccf1a9e60a5387006a7a429c1da737bd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|6e5caa6534e7e568e0d805a892e465e3|1611135309;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.4;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
]

/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
