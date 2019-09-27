module.exports = function check(str, bracketsConfig) {

  if(str.length%2 != 0)
    return false

      let c;
      let txt;
      let t;
      do
      {
        c = str.length;
        bracketsConfig.forEach(function(item, i, arr) {
          txt = str;
          t = item[0]+item[1];
          str = txt.replace(t,"");
        });
      }while (c > str.length)

    if(str.length>0)
      return false;
    else
      return true;
}
