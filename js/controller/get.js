import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/tabel.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);

// Mengurutkan data dari yang terbaru
data.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

// Memanggil fungsi isiRow untuk setiap data yang sudah diurutkan
for (let i = 0; i < data.length; i++) {
    isiRow(data[i]);
}

}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number ? value.biodata.phone_number : (value.phone_number ? value.phone_number : '#NOHP#'))
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#JAMKERJA#", value.biodata.jam_kerja?value.biodata.jam_kerja[0].durasi: "#JAMKERJA#")
            .replace("#JAMMASUK#", value.biodata.jam_kerja?value.biodata.jam_kerja[0].jam_masuk:"#JAMMASUK#")
            .replace("#JAMKELUAR#", value.biodata.jam_kerja?value.biodata.jam_kerja[0].jam_keluar: "#JAMKELUAR#")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}