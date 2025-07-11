fetch('https://nsmd.uplus.co.kr/ptl/loginMgmt/v1/updateNsmdUserPswdRset', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nsmdUserPswd: 'test1234!',
    nsmdUserPswdCnfm: 'test1234!'
  })
});
