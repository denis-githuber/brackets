module.exports = function check(str, bracketsConfig) {
  let strReuslt = str;
    
  let configArr = bracketsConfig.map(element => {
    return element.join('');
  })


  while (strReuslt.includes('()') || strReuslt.includes('[]') || strReuslt.includes('{}') || strReuslt.includes('||') || strReuslt.includes('12') || strReuslt.includes('34') || strReuslt.includes('56') || strReuslt.includes('77') || strReuslt.includes('88')) {
    configArr.forEach(element => {
      strReuslt = strReuslt.replace(element, '')
  })
  } 

  return strReuslt == '';
}


