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
    "url": "404.html",
    "revision": "4e7f295c47da562c2960bebff3a7d2a8"
  },
  {
    "url": "assets/css/0.styles.006e4046.css",
    "revision": "67ad5f98719cc30264fcbccde0d0de16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.25a67af1.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.a9f17132.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.d8262438.js",
    "revision": "24c2ce03ff71694280ebdbcc7e850ac4"
  },
  {
    "url": "assets/js/24.e5da4ff1.js",
    "revision": "f8f0cb6c3c6796df329403b6d03f719f"
  },
  {
    "url": "assets/js/25.63077962.js",
    "revision": "3fbb1d88b3474c47d4f1a7bc521e589a"
  },
  {
    "url": "assets/js/26.c3c2d762.js",
    "revision": "0213803c42ee035577343a499939858d"
  },
  {
    "url": "assets/js/27.3fa2cea1.js",
    "revision": "aee03b76740ec6a27ca59efac7871159"
  },
  {
    "url": "assets/js/28.be5b1b31.js",
    "revision": "adaa215241e1b8a56ecae119308a7d76"
  },
  {
    "url": "assets/js/29.4bd78fbe.js",
    "revision": "a915140a59a5db0bbcb2eda0122422c2"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.ec172c43.js",
    "revision": "847737075352defb9b6297073c7b4b8d"
  },
  {
    "url": "assets/js/31.a00252dc.js",
    "revision": "b37cd4778f57542324af4c761fd421c8"
  },
  {
    "url": "assets/js/32.3c5395a2.js",
    "revision": "731ee7d2a2e1f15f5d7315ff3122c49d"
  },
  {
    "url": "assets/js/33.38af4ce2.js",
    "revision": "b3c32f57cb0a2cdf3d627bb022f6cd8b"
  },
  {
    "url": "assets/js/34.8b79e8b7.js",
    "revision": "aa8544c999c29659f07d4ea6b424fb20"
  },
  {
    "url": "assets/js/35.319cae51.js",
    "revision": "87a4ee911be25e63d83a7b1ca51b7dcb"
  },
  {
    "url": "assets/js/36.4d2e9359.js",
    "revision": "b2390afdc0f9cedfcb90dc5d72d37f94"
  },
  {
    "url": "assets/js/37.c00712d1.js",
    "revision": "553bb34bbf982b8863752bfe95c9bd59"
  },
  {
    "url": "assets/js/38.0559500d.js",
    "revision": "6ad203536cfb717a45a3e7a706e973f5"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.cf5f5731.js",
    "revision": "59fd87e2c28de9374b815c4416285863"
  },
  {
    "url": "assets/js/41.c876baff.js",
    "revision": "99e7d76e5e70d730bb852e39416cf62c"
  },
  {
    "url": "assets/js/42.03413c6b.js",
    "revision": "7fbff33cc90906cdc2ced33b78c6faa0"
  },
  {
    "url": "assets/js/43.84ea0430.js",
    "revision": "d93fc5703f5b15b4ba88a96fb4434887"
  },
  {
    "url": "assets/js/44.8ef171e2.js",
    "revision": "0f9a06a46b428b8d5463c54f44a32c7e"
  },
  {
    "url": "assets/js/45.91bf4574.js",
    "revision": "c824771690dc684f745c5a08fc2bdc40"
  },
  {
    "url": "assets/js/46.12af7684.js",
    "revision": "04be3d12b5b08ff4f5f3f9a7cd5d185a"
  },
  {
    "url": "assets/js/47.abda3cad.js",
    "revision": "c8ec362dab064a10c6b2b6a766a9b8e8"
  },
  {
    "url": "assets/js/48.d2c3776f.js",
    "revision": "8faf750db3a5e5591b460c7b83a150db"
  },
  {
    "url": "assets/js/49.fc2684cb.js",
    "revision": "93d2fc8de7ec40bcf2325bdc91b87716"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.13ac3a08.js",
    "revision": "70dfe0ffd802156b90fb0dad65180091"
  },
  {
    "url": "assets/js/51.7e94bb9d.js",
    "revision": "ceb61d067d422b0639081f74dbe89480"
  },
  {
    "url": "assets/js/52.16d85764.js",
    "revision": "cc31a64e4433bfa57f0f0371527605d0"
  },
  {
    "url": "assets/js/53.078aef56.js",
    "revision": "08883aa7435598452e5932542179d1e4"
  },
  {
    "url": "assets/js/54.5629a31d.js",
    "revision": "bdc1daa533a4a62fa5b32495b60304c2"
  },
  {
    "url": "assets/js/55.97ae11ad.js",
    "revision": "28fc5a5ae93bc0d05a0b972e31694a4f"
  },
  {
    "url": "assets/js/56.bc206002.js",
    "revision": "fe8f65f94e60bd40f798f0cef04ad86d"
  },
  {
    "url": "assets/js/57.1734bded.js",
    "revision": "3e1f0ae0605bb4ab8c2fede7d2a13431"
  },
  {
    "url": "assets/js/58.34c8f1a3.js",
    "revision": "102035fc4e67d9e20c58e298df53e8c2"
  },
  {
    "url": "assets/js/59.df5d027b.js",
    "revision": "b5b7a0ac43c0fff4de69559a7a5918c0"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.e7d3782a.js",
    "revision": "b032b203959743ef235b2ed643caa817"
  },
  {
    "url": "assets/js/61.4c208d7b.js",
    "revision": "170e81190f7aee90624838288b3bd05a"
  },
  {
    "url": "assets/js/62.eeb015e0.js",
    "revision": "94582e4c19e4223ebdffebcf9d7709d1"
  },
  {
    "url": "assets/js/63.aac0f1fa.js",
    "revision": "6e5395621481adac18b982102fcb9917"
  },
  {
    "url": "assets/js/64.f9f1fe8f.js",
    "revision": "bc03c59b465d48a642c9a5d3c9864201"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.caca2551.js",
    "revision": "047ba2553dac6790fe5ddf13da7c62e1"
  },
  {
    "url": "assets/js/67.0e6820d5.js",
    "revision": "46df62a63a6cf44b3a498888aa10548e"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.5860df3a.js",
    "revision": "3172ee90253ba1f6cdab0f1c84124bf4"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "6156a4c9bc1f9ab6591ee4b078aa6208"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "c11d1e0972525b72d89701b09d3aa166"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "db0801bb934afd53a02e5909e50abdfa"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "8b837b6f54ce7bd9ef3bafe105f9af51"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "def78441efd2622306d370fc92a50e1d"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "6ac3756e68fcb1263cc8808da4d7de46"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "bcb59a8a11581d7057f1afb4562c0604"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "140c59c65494151da677493c25f90f1f"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "9232d945f54abd8f6ced6cf7d56d08bb"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "396c2b9bba9f1ec82fb0e208d13dacab"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "cb105bc704a87c8a743e9119d739bacf"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "eb13b7819d1abf68c499192376f23dcf"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "f00c8114df9d392ca5de9faac2d3752e"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "117f07c9127aac3235d9079b2903eee7"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "a70cef0fb2ca96577a1c62809539d60c"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "b95065fad622e199e7775297553c4e83"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "8830e6a267d77ecbf7335cdfdb5025df"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "0e49e2ffcd48283594472f769f0a47f3"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "1d4e8231c41edfc245937c1feab421d7"
  },
  {
    "url": "base/practice/test.html",
    "revision": "6aa12aec55c8f4b4f7f98e074a4b8f57"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "cb8b8b9014efe8e37f0e9d216d67491a"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "cc32875bec96eb53a057e020ff5da395"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "fbbb190f7f9dfc373af7c48d61c70df3"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "d976c0efafd5c1e6db48e0afdd5f728d"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "7e5eefa2fe0542194c1aa288b54714f0"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "73e6c43f0ed937b09388fa90587a733b"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "5c6ede6e5610dd676304a6641b47d33f"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "6ebacc682212b0998e928df1e1ea93b4"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "0d3326a23b2a6e6cdf577a2602d35f79"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "83387d0d9407fb2b2319190a2ee5a0a9"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "72fd558487574aeb8f22e136f9866476"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "7bb1a30c734a2ef9d6e4b0269a067e43"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "c97d3dab7e726bd2542704ce80641f8f"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "215415ae5fc098827c285a2028d38974"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "6c497f4b1c9bd29b3ae90c9bdc6c50e6"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0ad844ca938a043fa3f6aa6f039eb056"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f8d2556c9d8bcfa9fbf6eb5db1acd9e6"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "02aab09f205925183de03f6b6522fefb"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "5904498cab5f27665ec27a1e27ab8c15"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "a39d8cbb09789b00a74b68ade061ad7d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "d20c2c5bb53b8eb5e2f96a1cfc5e5047"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "6dc99a8344350155b44cb74f60d805fb"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "26b7ea44c0de4a257aa606794fafcc53"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "74ff688a5d0fcb2f36aea9d81bd462ea"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "f72882e07016650d3a65b99df195fd5e"
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
