fetch('https://nsmd.uplus.co.kr/ptl/loginMgmt/v1/updateNsmdUserPswdRset', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nsmdUserPswd: 'AHNlab2507!',
    nsmdUserPswdCnfm: 'AHNlab2507!'
  })
});
