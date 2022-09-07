if(inputs.input1.url.includes('localhost/callback?code')){
  var code = inputs.input1.url.split('code=')[1].split('&state')[0];
  return { code : code, codeAvailable: true, error:false } 
} else if(inputs.input1.url.includes('localhost/callback?error')) {
  var errorcode = inputs.input1.url.split('error=')[1].split('&error_description')[0];
  return { code: inputs.input1.url, codeAvailable: false, error:true } 
} else {
  return { codeAvailable: false, error:false } 
}
