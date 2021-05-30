/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "22.jpg",
    "revision": "55cd1d5d004353a18d5f5d533513545a"
  },
  {
    "url": "404.html",
    "revision": "100e682aaa9117865fbdc12f4cb4ca78"
  },
  {
    "url": "assets/css/0.styles.24b48c83.css",
    "revision": "cfa245b2df037a0c3cbf4b5a9f41f9e7"
  },
  {
    "url": "assets/img/1.94d74847.png",
    "revision": "94d748476ff3a8a524da9f1d8147df3f"
  },
  {
    "url": "assets/img/10.58fba363.png",
    "revision": "58fba363144861b98df8944fcc11239e"
  },
  {
    "url": "assets/img/11.f581e3bb.png",
    "revision": "f581e3bb6fd65c7ccea224edebe04c8c"
  },
  {
    "url": "assets/img/13.8c788342.png",
    "revision": "8c7883424c1ae136c7460c0aea02e4c7"
  },
  {
    "url": "assets/img/14.41830a2b.png",
    "revision": "41830a2b5fec86c38a8daf6983412c0b"
  },
  {
    "url": "assets/img/15.bc969a20.png",
    "revision": "bc969a207898e7dd6060593167e1f5b3"
  },
  {
    "url": "assets/img/16.fbba94ac.png",
    "revision": "fbba94ac4e47d540c2db6a14946b671d"
  },
  {
    "url": "assets/img/17.889e5917.png",
    "revision": "889e591790d162049a3d9622a7cbca0a"
  },
  {
    "url": "assets/img/18.d890616a.png",
    "revision": "d890616af54b2055e7e1cb3119fc49f6"
  },
  {
    "url": "assets/img/2.bc1fde6f.jpg",
    "revision": "bc1fde6f6e4be4692e5ef4966a1778e5"
  },
  {
    "url": "assets/img/20.e2de9bc8.png",
    "revision": "e2de9bc8e5cb1750db32c29ee84ad359"
  },
  {
    "url": "assets/img/21.47f2b028.png",
    "revision": "47f2b028198d70ed4ef04eb92fdefb56"
  },
  {
    "url": "assets/img/22.ecf1fd8e.png",
    "revision": "ecf1fd8e9dd4fe8aa0ee585f5007b6d3"
  },
  {
    "url": "assets/img/23.633a0418.png",
    "revision": "633a0418111f87eff99ab82e150b7d6a"
  },
  {
    "url": "assets/img/24.bfe26031.png",
    "revision": "bfe26031ab785161b1d58f6cf9927aaa"
  },
  {
    "url": "assets/img/26.8ae8e20c.png",
    "revision": "8ae8e20ccf065abb11a4416066f0c00f"
  },
  {
    "url": "assets/img/3.b1d98978.png",
    "revision": "b1d9897889e22ba63030a4c77220d8ad"
  },
  {
    "url": "assets/img/6.152389d1.png",
    "revision": "152389d1ce866aad1c6caf4292e6ec59"
  },
  {
    "url": "assets/img/6.e21624b3.jpg",
    "revision": "e21624b3ca734f63cea01d7457229e68"
  },
  {
    "url": "assets/img/7.e469247d.jpg",
    "revision": "e469247db52f577a8ff7203bb29a66b5"
  },
  {
    "url": "assets/img/8.5a3d2c85.png",
    "revision": "5a3d2c8568851169e460d18b385dcaad"
  },
  {
    "url": "assets/img/8.9ad028b5.png",
    "revision": "9ad028b5439a486adfe35e66db91d791"
  },
  {
    "url": "assets/img/9.01c53e69.jpg",
    "revision": "01c53e6934602313c2eba1e6e700f873"
  },
  {
    "url": "assets/img/9.086e934b.png",
    "revision": "086e934bb97891c180c1f05f0d4e8217"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bgmain.df379673.jpg",
    "revision": "df37967358b05276c82232354ce4c4a8"
  },
  {
    "url": "assets/img/bushu.7d8ab006.png",
    "revision": "7d8ab006a2d68c68f588166e972f7b37"
  },
  {
    "url": "assets/img/core.e2f46c1b.png",
    "revision": "e2f46c1b31c1a2d9582d76e0c2999f80"
  },
  {
    "url": "assets/img/default.081119b7.png",
    "revision": "081119b755f2691b4d949a8f2708c9b3"
  },
  {
    "url": "assets/img/git.ed1b27e2.png",
    "revision": "ed1b27e2436975c5e100187d353dceb7"
  },
  {
    "url": "assets/img/github-settings-pages.d74634f5.png",
    "revision": "d74634f5ea1a771f0dcbf6996c959bd7"
  },
  {
    "url": "assets/img/gzh.461267e1.jpg",
    "revision": "461267e1ba94e712e656d4e5d75ff168"
  },
  {
    "url": "assets/img/icon-super-doc.e17e3173.svg",
    "revision": "e17e3173d97abfa9f1eed4c77ce70cad"
  },
  {
    "url": "assets/img/icon-super-share.d2ece231.svg",
    "revision": "d2ece231b2ea589d21df18503f176ed4"
  },
  {
    "url": "assets/img/icon-svip.6fd4b301.svg",
    "revision": "6fd4b3018f50584aca940e1e6c8020b6"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.64e93583.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "assets/img/knapsacks.22c4f19e.png",
    "revision": "22c4f19e2a23f2ad51f2ef1d62067d8e"
  },
  {
    "url": "assets/img/loading.9111579b.svg",
    "revision": "9111579b51f5dedc91eec1a9b4228a9f"
  },
  {
    "url": "assets/img/log.21d903cb.png",
    "revision": "21d903cb410d4267131ca273e3e849b2"
  },
  {
    "url": "assets/img/new_us.2d9e091d.png",
    "revision": "2d9e091d43fbd1e4009c425163e1e4a6"
  },
  {
    "url": "assets/img/new.d0fd418c.png",
    "revision": "d0fd418ce5a764c7814ad69696862657"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/resend.c5b493be.png",
    "revision": "c5b493becde3617241e3b6c5dd635034"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/img/self_work.c28ec026.png",
    "revision": "c28ec026880fc6cee275dd944266eb89"
  },
  {
    "url": "assets/img/setLogin.8b86a266.png",
    "revision": "8b86a266c09a9ed34c5bf0043b96307a"
  },
  {
    "url": "assets/img/setRule.59a883c3.png",
    "revision": "59a883c3d75dceb6170e80ed43dccf26"
  },
  {
    "url": "assets/img/vue.0f9a2334.png",
    "revision": "0f9a23344c7aa041bbb67e226686b510"
  },
  {
    "url": "assets/img/zz.bc42335a.jpg",
    "revision": "bc42335afc194096d5a0fe429ba9c486"
  },
  {
    "url": "assets/js/1.12d31ecb.js",
    "revision": "7b954fe24ad47c377a740ea11d557532"
  },
  {
    "url": "assets/js/10.386a1e51.js",
    "revision": "c0d2e03a25f361453bc4f8879eed0463"
  },
  {
    "url": "assets/js/11.968a9ee0.js",
    "revision": "70eec5ff9cb0938f73b3ef562187f232"
  },
  {
    "url": "assets/js/12.e50c9705.js",
    "revision": "32473914bcc81a3844b821a4b6dd964d"
  },
  {
    "url": "assets/js/13.bf83d8e9.js",
    "revision": "40ac4e2920d69745e5c5246c891a1879"
  },
  {
    "url": "assets/js/14.88f9acd0.js",
    "revision": "4525859b61db9157089604468b21e9f6"
  },
  {
    "url": "assets/js/15.e7f9b4d5.js",
    "revision": "b4dec6c84dab731d1d3ce360ff0eccdf"
  },
  {
    "url": "assets/js/16.7f2cdc1d.js",
    "revision": "54c4d1254600a759dd04812e5b5d825b"
  },
  {
    "url": "assets/js/17.85fc1d85.js",
    "revision": "4197583401825e392f11207982bb8abd"
  },
  {
    "url": "assets/js/18.4f42cd39.js",
    "revision": "cd69d83f4c166df524c40f5e7cc7221c"
  },
  {
    "url": "assets/js/19.f978cfa2.js",
    "revision": "080d0b0fb5e546c1e8d382b941facd2c"
  },
  {
    "url": "assets/js/2.3d790711.js",
    "revision": "d64b6f0e1fcf55df0d798ce724b99d2f"
  },
  {
    "url": "assets/js/20.8907b8cc.js",
    "revision": "5a4036013ff978cdb43a0debbfd29043"
  },
  {
    "url": "assets/js/21.52754df1.js",
    "revision": "e22752c1c19fc8d0184c4dbb02ac936a"
  },
  {
    "url": "assets/js/22.a015c926.js",
    "revision": "7d02e18d2e91cc0bdd2607b463add03e"
  },
  {
    "url": "assets/js/23.01d11f15.js",
    "revision": "825b9ad87c6be581eb1fa38197f41ee7"
  },
  {
    "url": "assets/js/24.7d95c528.js",
    "revision": "ab6087b3b46cee09a5df240450c4a189"
  },
  {
    "url": "assets/js/25.db6631d1.js",
    "revision": "0fba5c2e48ff520e7226788f37b953c3"
  },
  {
    "url": "assets/js/26.bcdf133f.js",
    "revision": "7884b9e19f1191b2d62a171007503e4c"
  },
  {
    "url": "assets/js/27.8386db8d.js",
    "revision": "3344beb42afec70135f3b2184ad53120"
  },
  {
    "url": "assets/js/28.6cb8e37c.js",
    "revision": "c5bbe8ec15835243c1153958964959b3"
  },
  {
    "url": "assets/js/29.61d87059.js",
    "revision": "647493667daaba9164511ce8999e50cd"
  },
  {
    "url": "assets/js/3.4f607188.js",
    "revision": "d91af6c19688033fcfcbbf6f9ba839ee"
  },
  {
    "url": "assets/js/30.e3dd523e.js",
    "revision": "9fd1eb7b8260d0aebe43fa578e3209f9"
  },
  {
    "url": "assets/js/31.77e7e1c8.js",
    "revision": "016c3aefc8481cb7b53fe966c59f8562"
  },
  {
    "url": "assets/js/32.921c63ad.js",
    "revision": "da514fe5fca88d383ef76d58d4385f0b"
  },
  {
    "url": "assets/js/33.1102f2ae.js",
    "revision": "35756c7e0d1864613cf0271e3b60dcd8"
  },
  {
    "url": "assets/js/34.4c1f98eb.js",
    "revision": "0ec5ba1b59e8f0138ae28c7a45dc6148"
  },
  {
    "url": "assets/js/35.80a05aaf.js",
    "revision": "3c612bc25005c6ab275156db374f3c92"
  },
  {
    "url": "assets/js/36.6aa2a10e.js",
    "revision": "cbda3ad110eb18958e11092e72088967"
  },
  {
    "url": "assets/js/37.4c37e33f.js",
    "revision": "aa055363a6f21e7295792b8a4cb74bb5"
  },
  {
    "url": "assets/js/38.2e24d006.js",
    "revision": "f9ab0eec2a220cd001018b296be304af"
  },
  {
    "url": "assets/js/39.adae2938.js",
    "revision": "ad2ce49e7c064d8bd48bc882881a745d"
  },
  {
    "url": "assets/js/40.0bb89ca4.js",
    "revision": "4c5b6adefdf4fde0b9872fc0fe7771bf"
  },
  {
    "url": "assets/js/41.95441b91.js",
    "revision": "f0a37c40044d15608a822d67470db5f2"
  },
  {
    "url": "assets/js/42.e9e0611d.js",
    "revision": "2b956aac841f89450fcbd3f690915edf"
  },
  {
    "url": "assets/js/43.55ba4990.js",
    "revision": "7679ad8212d1412bef2aba92f67299e6"
  },
  {
    "url": "assets/js/44.8c3f790a.js",
    "revision": "3a58e267f9c798f1b665a0522f391dc2"
  },
  {
    "url": "assets/js/45.6e0e0568.js",
    "revision": "102fedaad61c5c0c59e2964d7b3df248"
  },
  {
    "url": "assets/js/46.52012291.js",
    "revision": "cb7b0c31d45d334484fd8fdded694555"
  },
  {
    "url": "assets/js/47.725a8d70.js",
    "revision": "d633dc6d28a5aa020cef0650a29e87d1"
  },
  {
    "url": "assets/js/48.237ee647.js",
    "revision": "cbc9c4dbfb6f48a4204fa5629382d5d0"
  },
  {
    "url": "assets/js/49.6c00e54b.js",
    "revision": "f89e2141c4e110b67943e3c2bc8e567e"
  },
  {
    "url": "assets/js/50.c0d147c8.js",
    "revision": "287feb633ea23284cae1c23757390469"
  },
  {
    "url": "assets/js/51.b66bc2d7.js",
    "revision": "c3bbc321708e6bdbb7dd85438489d7a0"
  },
  {
    "url": "assets/js/52.d6dba0bf.js",
    "revision": "aa263ee665648f5b3df79142239adab6"
  },
  {
    "url": "assets/js/53.5c62be24.js",
    "revision": "659a01da5d352b5d576599ed8c971c12"
  },
  {
    "url": "assets/js/54.87bf7a25.js",
    "revision": "b837e48336d9ac99bba2d27255a57e1f"
  },
  {
    "url": "assets/js/55.84fb78dc.js",
    "revision": "fbac1c5b2ef9d438edb04b5af426ce42"
  },
  {
    "url": "assets/js/56.de330652.js",
    "revision": "2133961bf732d70082f52bc3167f63ff"
  },
  {
    "url": "assets/js/57.a40f5451.js",
    "revision": "92b4cf7787b0d1019a581599e4d5130e"
  },
  {
    "url": "assets/js/58.a2c05b0e.js",
    "revision": "401cbe57011b0b8ddd54db096cc1e149"
  },
  {
    "url": "assets/js/59.4b1ac0ca.js",
    "revision": "bfd7cdb46eb54a3c4bfb1059b469cba2"
  },
  {
    "url": "assets/js/6.13b54e39.js",
    "revision": "481fa0bc0dfc12e8767f8b695c8f8b3b"
  },
  {
    "url": "assets/js/60.b03a7010.js",
    "revision": "ca789caf379d3d3cfed5d664b8cf051d"
  },
  {
    "url": "assets/js/61.ce20953b.js",
    "revision": "d7ee52ea6592fd5784f6c16ff8a1b37e"
  },
  {
    "url": "assets/js/62.1281ba2a.js",
    "revision": "af073a6d1fa265461db1b4db7f9864ad"
  },
  {
    "url": "assets/js/63.8bbd9bb8.js",
    "revision": "35c410c38152bcc6f3ee95129b1a9c1d"
  },
  {
    "url": "assets/js/64.1f93bd0c.js",
    "revision": "53716c81b611356d6b02d1ad468aafd2"
  },
  {
    "url": "assets/js/65.febe414b.js",
    "revision": "e1caf752a8255c73efc033dd783d571d"
  },
  {
    "url": "assets/js/66.e703bfa1.js",
    "revision": "50fd3f5b220a457add6187ea2edb6cce"
  },
  {
    "url": "assets/js/67.792874bc.js",
    "revision": "ed09b1a3f2a325ca03f27d9709fb8a8c"
  },
  {
    "url": "assets/js/68.1b7248de.js",
    "revision": "e35d3c36a25e33d12c40b834807e649b"
  },
  {
    "url": "assets/js/69.24bb9872.js",
    "revision": "2f8525bc69509024016830683bcdbe1f"
  },
  {
    "url": "assets/js/7.b809a15c.js",
    "revision": "f9a53e5ac92c8c3a5fed917eb4bc91de"
  },
  {
    "url": "assets/js/70.543541d4.js",
    "revision": "ab2b25312425dc564240f664217d3c84"
  },
  {
    "url": "assets/js/71.e071a139.js",
    "revision": "3581dd144de94ce625a4173fcc3c85be"
  },
  {
    "url": "assets/js/72.b555a184.js",
    "revision": "aacf2903b8ecb9d8d223176d4b820425"
  },
  {
    "url": "assets/js/73.54b0be92.js",
    "revision": "01744933ce1ad5cf56cfdacc61ed19e4"
  },
  {
    "url": "assets/js/74.56264a58.js",
    "revision": "edbbeb633c5ca8f9167a4941d4d9a2d2"
  },
  {
    "url": "assets/js/75.447b45e6.js",
    "revision": "687c61ac2cdca197220ff128845f2f54"
  },
  {
    "url": "assets/js/76.bd257da5.js",
    "revision": "05a2bb38d562c54d58f427800d1d0b47"
  },
  {
    "url": "assets/js/77.a0d62def.js",
    "revision": "ef81cdde71b2d485f5c254a6a9eec833"
  },
  {
    "url": "assets/js/78.2c9823c7.js",
    "revision": "7d1d202b5ca0052b7d15d886562d5f13"
  },
  {
    "url": "assets/js/79.6349e795.js",
    "revision": "ab51300e1270b32613df579912b4a918"
  },
  {
    "url": "assets/js/8.f3c84aab.js",
    "revision": "f9a6c35399fcb12d9ee182040274de75"
  },
  {
    "url": "assets/js/80.7edc3ed9.js",
    "revision": "b01965e294da42eb93df0769af794694"
  },
  {
    "url": "assets/js/81.688a9fcc.js",
    "revision": "7c3ecf1d576aa4b3cdba087b489622fe"
  },
  {
    "url": "assets/js/82.ae486025.js",
    "revision": "56295a06d831a32c782b29f02e286a26"
  },
  {
    "url": "assets/js/83.3597824e.js",
    "revision": "e9f0b3a184328676ba51d3a62c5364fa"
  },
  {
    "url": "assets/js/84.ccc6092f.js",
    "revision": "0a820bbd2365985b8b85f418b4a278ca"
  },
  {
    "url": "assets/js/85.fdeeb261.js",
    "revision": "23880108b8d49eb7f3cac76fb9016bb3"
  },
  {
    "url": "assets/js/86.93210b71.js",
    "revision": "9d6f6ba26e7bd37d1b17e3ed9d9ae967"
  },
  {
    "url": "assets/js/87.22645569.js",
    "revision": "41e37add532598ab49063cce9bd44fe2"
  },
  {
    "url": "assets/js/88.3d7a1fbf.js",
    "revision": "14696c2f6b27ec2ebff2537d1de1f540"
  },
  {
    "url": "assets/js/89.b7f0ee37.js",
    "revision": "459668ecc5fec4f89e26c284fa6d4285"
  },
  {
    "url": "assets/js/9.72ba5164.js",
    "revision": "e7db0e95979346ac9e972e289d106f60"
  },
  {
    "url": "assets/js/90.0eb135af.js",
    "revision": "6b866e5807b5880ac19d34e88cfd6b8a"
  },
  {
    "url": "assets/js/91.a9d043c4.js",
    "revision": "7893eceef279367e600257057cbff285"
  },
  {
    "url": "assets/js/92.160a5690.js",
    "revision": "94bc4cf05406fbca156b21e9621c615a"
  },
  {
    "url": "assets/js/93.2d37981c.js",
    "revision": "936170714013cb4d821c8c48510f0d7e"
  },
  {
    "url": "assets/js/94.371fedd5.js",
    "revision": "eb2c4bca5db744e6e3ea04a312edddc2"
  },
  {
    "url": "assets/js/95.88b1a77d.js",
    "revision": "46512e7abc68d007416a9d3d03ef2e3d"
  },
  {
    "url": "assets/js/96.5856e07a.js",
    "revision": "245217bab4bffe11277fdf9fd10aefc0"
  },
  {
    "url": "assets/js/97.743f2a7a.js",
    "revision": "75b01af1bdae7ec4511151464e346d55"
  },
  {
    "url": "assets/js/app.e60a447f.js",
    "revision": "ddae34dffb1d2b1142e9f2cd8f51b3df"
  },
  {
    "url": "assets/js/vendors~flowchart.437a03e9.js",
    "revision": "13dda42bf3ebe99bb963a9ae5debbb40"
  },
  {
    "url": "avatar.gif",
    "revision": "7dad9712ff4bf317dece7faadb71dc40"
  },
  {
    "url": "bgm/gouai.jpg",
    "revision": "183a2c561b8aca91ff90c2abdb51909b"
  },
  {
    "url": "bgm/man.jpg",
    "revision": "3e92acc0394ed2239912689f7a25256a"
  },
  {
    "url": "bgm/wangqi.jpg",
    "revision": "474b0620b55cd5e44e8e6a0abf4ca02b"
  },
  {
    "url": "bgm/xianwang.jpg",
    "revision": "caa1f5f4e92bee2ef47bd1c29f39f3bc"
  },
  {
    "url": "blogImages/caijin.png",
    "revision": "84db6d3333b8a79af764de995e42c283"
  },
  {
    "url": "blogImages/miss.png",
    "revision": "8fac8110476b8e3c66d87ea0592b061f"
  },
  {
    "url": "blogImages/ovo.png",
    "revision": "76997ee6d05b9fa8c424176ff943e077"
  },
  {
    "url": "blogImages/zhan.png",
    "revision": "31b2b9c55ab17e653e6caad05c1379f5"
  },
  {
    "url": "blogImages/zote.png",
    "revision": "1959d8fd06b599b7444f785000a99681"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "7c886a0b4515f40e4b787a62b77ad871"
  },
  {
    "url": "categories/index.html",
    "revision": "5d27cad85d132c07f645bcb5ea0ba959"
  },
  {
    "url": "categories/杂集/index.html",
    "revision": "3e79acea9ec4b3502e233e5d0de7014c"
  },
  {
    "url": "categories/杂集/page/2/index.html",
    "revision": "e5c3fc1c1315a0973e7cab68f1d6d302"
  },
  {
    "url": "comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "favicon.png",
    "revision": "050c81d82b386ad8747e4fc2d074974a"
  },
  {
    "url": "hero.png",
    "revision": "9a811530fbc6dd585239218fcaa706b4"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "1a376ec83161def3645ece2ab08d4cbc"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "eff6f1579e705e08e75af72141488d34"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "45c67179ad46234ab3fdc2bf177162fb"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "79c3c4b734bf516e09f1cc4b306597b4"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "f1a26c16b25d881bc8f4b6de2db2f8b3"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "77cd549789f5bea5429edc2cd3711744"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "e7b85e6e9d3360528ab03d173e460e20"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "466208fd218b68d5e039596e696745ff"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e52da4aee1ebbcf1fbd8956431a6f182"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c0c293a15576cdaa867ccc291cbc1cf6"
  },
  {
    "url": "img/1.jpg",
    "revision": "7da82e266d52929efb51754589a15178"
  },
  {
    "url": "img/10.jpg",
    "revision": "dd0788ca1a37dd422136328824d62cb2"
  },
  {
    "url": "img/11.jpg",
    "revision": "4948bb47a16615e7718bc088e7d467ab"
  },
  {
    "url": "img/12.jpg",
    "revision": "576424636e2ac5ca0513af19f9d8a46b"
  },
  {
    "url": "img/2.jpg",
    "revision": "050875a3467250ca4ddc759f4a30fe04"
  },
  {
    "url": "img/3.jpg",
    "revision": "8e8007b1f9dc007758ee93b4aee6874f"
  },
  {
    "url": "img/4.jpg",
    "revision": "d1f2ad8f258037642df6a542da6d5113"
  },
  {
    "url": "img/5.jpg",
    "revision": "8ed9c07d27b986a7ff0fbfada7dd7723"
  },
  {
    "url": "img/6.jpg",
    "revision": "8df9ffbced5744d31a4f814bdd327479"
  },
  {
    "url": "img/7.jpg",
    "revision": "007a6822cf48596405cb860281baef88"
  },
  {
    "url": "img/8.jpg",
    "revision": "efd9c6ddc3b2a520fe49827e84a98242"
  },
  {
    "url": "img/9.jpg",
    "revision": "7b225a2d442c4360d39a8d964598d229"
  },
  {
    "url": "img/end.gif",
    "revision": "31573f1c2ff5e46eab991dde9e5da724"
  },
  {
    "url": "img/icon_slide_selected.png",
    "revision": "889f653c51fdf07beea3f6e3580d5f4d"
  },
  {
    "url": "img/IMG_7723.gif",
    "revision": "bb301b9b41520621ca33d47472b92cdf"
  },
  {
    "url": "img/me.jpg",
    "revision": "4dcd241c612a05047bc49dd76f105158"
  },
  {
    "url": "img/monica1.jpg",
    "revision": "d69240c97e2ca7157bdd844499d46dfc"
  },
  {
    "url": "img/monica2.jpg",
    "revision": "4128fa297e7188ef6e467c644e5130b1"
  },
  {
    "url": "img/monica4.jpg",
    "revision": "63d81c943ef7a632174c4dfb615cacf1"
  },
  {
    "url": "img/monica5.jpg",
    "revision": "8fc890f1d355dfc34f4c45ab9476c594"
  },
  {
    "url": "index.html",
    "revision": "e4051b60f8864e9d1f69d0f84398e279"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "04d272e12ce867f6f8b1227cbeafa93c"
  },
  {
    "url": "logo.png",
    "revision": "a05aa467af1cb7c87b4341b842ada223"
  },
  {
    "url": "me.png",
    "revision": "ce94049f8b6a76da959f5d6d060ca5dc"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "4cbfd70e204db094d9363310daa8e9d1"
  },
  {
    "url": "tag/index.html",
    "revision": "3fe1873bd7935da59729d3a14565bf39"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9fd90fcc66805f5aa8a7ebb99ce85e38"
  },
  {
    "url": "tag/人生感悟/index.html",
    "revision": "e88c2cff06f9e586105cfb69ff6c69ff"
  },
  {
    "url": "tag/人祸/index.html",
    "revision": "58c6519c9346dcb375fe1c6d5e643416"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "6df552a5b9f635d6a376066fb1641a61"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "cc4131261b53a3bccca500b62cca62f3"
  },
  {
    "url": "tag/反省/index.html",
    "revision": "b51d68cbe358c345207a259028afb351"
  },
  {
    "url": "tag/味道/index.html",
    "revision": "6fff0017500cc282b6822cf84d74aa29"
  },
  {
    "url": "tag/命运/index.html",
    "revision": "7fc93e14afa932e0710419fe427749af"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5e4a695397f50bb25a00cfdc7fc34a32"
  },
  {
    "url": "tag/天灾/index.html",
    "revision": "f57efb8216978df6940785ae761187a9"
  },
  {
    "url": "tag/失调/index.html",
    "revision": "5eb42d155b27241b831f4079885b490b"
  },
  {
    "url": "tag/奈何天运/index.html",
    "revision": "a7372c3669cac2f88c5df682025d3693"
  },
  {
    "url": "tag/奉献/index.html",
    "revision": "fb10fba26332defa35168e855237f248"
  },
  {
    "url": "tag/必会/index.html",
    "revision": "3b0fb2e233bfbd1970ee12e8d1312fe0"
  },
  {
    "url": "tag/快乐/index.html",
    "revision": "6ff6a6854ce572d9f69dc72c09f165e3"
  },
  {
    "url": "tag/思悟/index.html",
    "revision": "089654b2be79710aea462882634247af"
  },
  {
    "url": "tag/恸哭/index.html",
    "revision": "b74a1d3b3e3c476e8b09ca08543f423d"
  },
  {
    "url": "tag/感动/index.html",
    "revision": "1114b83e38aeb0c3783683dbbc04bbeb"
  },
  {
    "url": "tag/承诺/index.html",
    "revision": "4c60d7dc00756724c5a3e117e43d315e"
  },
  {
    "url": "tag/技能/index.html",
    "revision": "ebac2f1e09e0554a44ff1b8d6b4d1a01"
  },
  {
    "url": "tag/无助/index.html",
    "revision": "2e921e4ecd9b901eed334da1681a8c44"
  },
  {
    "url": "tag/无奈/index.html",
    "revision": "5c6238efa48b87be1af20889aa75c24e"
  },
  {
    "url": "tag/无私/index.html",
    "revision": "5772ee471173307d30897bf1225c2879"
  },
  {
    "url": "tag/比例/index.html",
    "revision": "48665a2ff465e4f42dfb376202d38373"
  },
  {
    "url": "tag/热情/index.html",
    "revision": "9d26832c3129bbd0132862b980a0dd2d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "6e17431283b89cbebba47cc9ee5b4cd2"
  },
  {
    "url": "tag/经历/index.html",
    "revision": "2b45dab8b2d3d55eaa3602391a9fa7f9"
  },
  {
    "url": "tag/美文/index.html",
    "revision": "002bc6a31789511aab0f4be46db29d4a"
  },
  {
    "url": "tag/耐心/index.html",
    "revision": "026519cb3f55b9851827671afd5fcd62"
  },
  {
    "url": "tag/茫然/index.html",
    "revision": "9d2622e913f94e697091fb217d37b642"
  },
  {
    "url": "tag/要命/index.html",
    "revision": "4c40043fde13d44828a0021660d55004"
  },
  {
    "url": "tag/邂逅/index.html",
    "revision": "0052843ac66be2913b99b27baf80f861"
  },
  {
    "url": "tag/重点/index.html",
    "revision": "8a996a67e14df3a213a7907d7244424d"
  },
  {
    "url": "tag/重点/page/2/index.html",
    "revision": "dae8aa5dcde9dd1c31c4cdb5e73befa0"
  },
  {
    "url": "tag/随性/index.html",
    "revision": "0b0796044a520d2dc99ad884db0f9202"
  },
  {
    "url": "tag/难受/index.html",
    "revision": "896f884a200b9b6d56e65606e64cbab1"
  },
  {
    "url": "tag/难点/index.html",
    "revision": "b0149cf0aee363183a51d8d5fcc3449d"
  },
  {
    "url": "tag/难点/page/2/index.html",
    "revision": "6a67bb8760450e561a096d01bb700023"
  },
  {
    "url": "tag/默默承受/index.html",
    "revision": "7e9219bebc92dd254dfae23da00da0ac"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a0a1da2294a84c36fad6b06a3da7127"
  },
  {
    "url": "views/blog/3D-introduction.html",
    "revision": "71d20696df58828b2152fd9072874a18"
  },
  {
    "url": "views/blog/algorithm.html",
    "revision": "5b6b840f4353b7a9943787fda2bfa311"
  },
  {
    "url": "views/blog/design-modes.html",
    "revision": "c1508b8a2a0e41a23a30cef10991cdff"
  },
  {
    "url": "views/blog/echarts.html",
    "revision": "ecb35768e6d4b7b97bafe6ec0991e7f6"
  },
  {
    "url": "views/blog/Front-end-optimization.html",
    "revision": "02eb201778d28429fa9c20419cf63de0"
  },
  {
    "url": "views/blog/index.html",
    "revision": "38bf97577bc5c2ff58f25a9eb85bd202"
  },
  {
    "url": "views/blog/leetcode.html",
    "revision": "e194f786298cad8e172027d9bb2d33e8"
  },
  {
    "url": "views/blog/Sao-operation.html",
    "revision": "5c5e68fbca5243463993b1590f4d7875"
  },
  {
    "url": "views/blog/Source-code.html",
    "revision": "77fc34958addd25cabd2c5edd6c7c2b7"
  },
  {
    "url": "views/blog/Vue_performance_optimization.html",
    "revision": "78c0df643497ec2e17750f7489b8235b"
  },
  {
    "url": "views/blog/vuestudy.html",
    "revision": "5f21743109e294c58f1f3e2495c3b5f2"
  },
  {
    "url": "views/blog/vuex.html",
    "revision": "e0fef66ad68d13e00edca6437f22392f"
  },
  {
    "url": "views/blog/webpack-common-extensions.html",
    "revision": "8a4c68fcf945259c4b6603cc1fbe3376"
  },
  {
    "url": "views/blog/webpack-core.html",
    "revision": "d54eb1d9a7dafe864fc17eeaf764ca0e"
  },
  {
    "url": "views/blog/webpack-css-ngineering.html",
    "revision": "ec479cfebc95cce911715acf95809a9d"
  },
  {
    "url": "views/blog/webpack-js-compatibility.html",
    "revision": "fbbcf17453993620634d622a0dff581c"
  },
  {
    "url": "views/blog/webpack-performance-optimization.html",
    "revision": "f07372d6921b9bf3d5c5fe2ba5f14a65"
  },
  {
    "url": "views/demo/index.html",
    "revision": "fb1df69407787c5e8d988813c485bf21"
  },
  {
    "url": "views/deploy.html",
    "revision": "bf37bd05f5a2c98b92a11fa3dbdc1417"
  },
  {
    "url": "views/develop.html",
    "revision": "fbe7da942bcaee9eab90ff0254471b82"
  },
  {
    "url": "views/domain.html",
    "revision": "ec3be89c3c65077cd7223e67f15077fb"
  },
  {
    "url": "views/donate.html",
    "revision": "76d11d07e91f91fe0171ab5c38e8881b"
  },
  {
    "url": "views/essay/2020.html",
    "revision": "fa92638a7af18aec956826e1b53c38aa"
  },
  {
    "url": "views/essay/alone.html",
    "revision": "a9ca71c00f93c82d4f9c17aa92218863"
  },
  {
    "url": "views/essay/enjoy.html",
    "revision": "a020250ff81aa727cf0117e34df586ff"
  },
  {
    "url": "views/essay/failToGet.html",
    "revision": "cd8bcc2a894c7776c1fbd78b6b77d83a"
  },
  {
    "url": "views/essay/flower.html",
    "revision": "dd7c20f4e88f3c0143c822685c581b7f"
  },
  {
    "url": "views/essay/Ganzhi_ chronology.html",
    "revision": "04961ecdc5bb3766d7eb1641bc277d0d"
  },
  {
    "url": "views/essay/long-distance.html",
    "revision": "945cb4f4a857a17ad435cbf8a97be3ad"
  },
  {
    "url": "views/essay/maleMany.html",
    "revision": "de14aa649d28a8b7623bc49948f9edec"
  },
  {
    "url": "views/essay/original.html",
    "revision": "346b773b48edf49f05098d5757a02820"
  },
  {
    "url": "views/essay/passBy.html",
    "revision": "3c46302e8e11534da3ec2b1251b47eae"
  },
  {
    "url": "views/essay/realize.html",
    "revision": "f963d495feb0db6b7a33292f137cd758"
  },
  {
    "url": "views/essay/salute.html",
    "revision": "9141a83dbb5840a15109ea485d0aa78f"
  },
  {
    "url": "views/essay/self-alone.html",
    "revision": "6dc369ab36592217f04e94d5dc3cb185"
  },
  {
    "url": "views/essay/self-aware.html",
    "revision": "09e9a501f29a334362a0f5369c0de887"
  },
  {
    "url": "views/essay/suffering.html",
    "revision": "98992fac5b2c6de89b6c67755fb3b45a"
  },
  {
    "url": "views/essay/taste.html",
    "revision": "600a2438cac2d4d8231004334eb29dcb"
  },
  {
    "url": "views/essay/toothache.html",
    "revision": "c7ef3718f27de98d00e9e6087844e422"
  },
  {
    "url": "views/essay/whoIs.html",
    "revision": "8e6e7e2867675967dec88adeacd9ee58"
  },
  {
    "url": "views/github-actions.html",
    "revision": "dd63715203da6e0da86f556b69109f0a"
  },
  {
    "url": "views/index.html",
    "revision": "e665ae6a6846615c5819a118eb6939f6"
  },
  {
    "url": "views/notice.html",
    "revision": "87a0e361e2d5e2b0a38ca7ceda11f082"
  },
  {
    "url": "views/project.html",
    "revision": "617b7720862b119bdc92a6700fc64ef4"
  },
  {
    "url": "views/pull-request.html",
    "revision": "52c465e7e865f734bfae0a519c6975df"
  },
  {
    "url": "views/sofeware/autocadUse.html",
    "revision": "f2bf1718cb2e8327353ac3bc53214b16"
  },
  {
    "url": "views/sofeware/category.html",
    "revision": "51c3566d4e04ec810c10b2dd3128cec8"
  },
  {
    "url": "views/sofeware/configJs.html",
    "revision": "de181a6594e3d2a76da1d40c9c3ea807"
  },
  {
    "url": "views/sofeware/excelFunction.html",
    "revision": "94c851cdd2a57cb374ad8f4232abb76d"
  },
  {
    "url": "views/sofeware/home.html",
    "revision": "1b969cd4533803389accecee5e416022"
  },
  {
    "url": "views/sofeware/index.html",
    "revision": "4ea24011dfc03e15ad9989b93cf9ba14"
  },
  {
    "url": "views/sofeware/password.html",
    "revision": "63945b9034c873da6f72b113e0ccc3e4"
  },
  {
    "url": "views/sofeware/pptSkills.html",
    "revision": "a2fe561ba334e4048a37eff1f4a7b614"
  },
  {
    "url": "views/sofeware/tag.html",
    "revision": "7f28bb476d087ec5f17db827fe9aa2b3"
  },
  {
    "url": "views/sofeware/valine.html",
    "revision": "9f6fc758cd1812b6702fcf0d3e324fe8"
  },
  {
    "url": "views/sofeware/wordSkills.html",
    "revision": "3748b2987cba926f4bdae95ab434400f"
  },
  {
    "url": "views/theme-example.html",
    "revision": "f0d123473f7f2797287e1447491c3264"
  },
  {
    "url": "views/todoList.html",
    "revision": "8f1715537d9584bd3162dc51272a118a"
  },
  {
    "url": "views/valine-admin.html",
    "revision": "f51ee913919eeb495a588f6ee0c9dd8e"
  },
  {
    "url": "wxf.png",
    "revision": "492f6faeb66bf13a8c5a28e5e424c799"
  },
  {
    "url": "zfb.png",
    "revision": "2b5c69611b24b209072632e90ce1d2eb"
  },
  {
    "url": "zsm.jpg",
    "revision": "9d4c0000788c3b3d5d2f7b1d1ae8647b"
  },
  {
    "url": "创世纪.jpg",
    "revision": "9b0cdb556e80ce76ae1b4bae3a681a8c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
