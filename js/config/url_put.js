const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd/" + presensiId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message);
    window.location.href = "index.html"
}