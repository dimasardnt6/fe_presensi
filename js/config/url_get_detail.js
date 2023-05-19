//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/presensi/' + presensiId;