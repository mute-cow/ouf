function processCensor(e) {
  if (e === null || e === undefined)
    return;

  if (e.length === undefined)
    return;

  for (i = 0; i < e.length; i++) {
    let txt = e[i].innerText;

    if (txt == "")
      continue;

    let inHtml = e[i].innerHTML;

    let forbidInd = inHtml.indexOf("<");

    if (forbidInd > -1 && forbidInd < 2)
      continue;

    for (j = 0; j < wordList.length; j++) {
      const regX = new RegExp(wordList[j][0], "gmiu");

      let m = txt.matchAll(regX);

      if (m === null)
        continue;

      for (const row of m) {
        let mTxt = row[0];
        let repWord = mTxt.replaceAll(wordList[j][1], wordList[j][2]);

        let isSkip = false;

        if (mTxt.indexOf("-") > -1) {
          let spWord = mTxt.split("-");

          if (Array.isArray(spWord)) {
            if (spWord.length > 1) {
              isSkip = spWord[0].toLowerCase().indexOf(spWord[1].toLowerCase()) > -1;
            }
          }
        }

        if (isSkip)
          continue;

        for (k = 0; k < exWordList.length; k++) {
          let rExcpList = new RegExp(exWordList[k], "gmiu");

          isSkip = rExcpList.exec(mTxt) !== null;

          if (isSkip)
            break;
        }

        if (isSkip)
          continue;

        let txtL = txt.length;
        let mTxtInd = txt.indexOf(mTxt);

        let preTxt = txt.substring(0, mTxtInd);
        let appTxt = txt.substring(mTxtInd + mTxt.length, txtL);

        txt = preTxt + repWord + appTxt;
      }
    }

    e[i].innerText = txt;
  }
}

let hTitle = document.getElementsByTagName("title");
let pTitle = document.getElementsByClassName("post-title");
let pp = document.getElementsByTagName("p");
let lii = document.getElementsByTagName("li");
let figCapt = document.getElementsByTagName("figcaption");
let strongLbl = document.getElementsByTagName("strong");

processCensor(hTitle);
processCensor(pTitle);
processCensor(pp);
processCensor(lii);
processCensor(figCapt);
processCensor(strongLbl);
