const moment = require('moment');

const HARGA_MOBIL = 240000000;
const PERSENTASE_DP = 0.20;
const JANGKA_WAKTU_CICILAN = 18;

const downPayment = HARGA_MOBIL * PERSENTASE_DP;

const sisaPinjaman = HARGA_MOBIL - downPayment;

const angsuranPerBulan = sisaPinjaman / JANGKA_WAKTU_CICILAN;

function generateJadwalPembayaran() {
  const jadwalPembayaran = [];
  let dueDate = moment('2024-01-25');

  for (let i = 1; i <= JANGKA_WAKTU_CICILAN; i++) {
    jadwalPembayaran.push({
      kontrakNo: 'AGR00001',
      angsuranKe: i,
      angsuranPerBulan: angsuranPerBulan.toFixed(0),
      tanggalJatuhTempo: dueDate.format('YYYY-MM-DD'),
    });

    dueDate = dueDate.add(1, 'month');
  }

  return jadwalPembayaran;
}

function tampilkanJadwalPembayaran() {
  const jadwal = generateJadwalPembayaran();

  console.log('KONTRAK NO: AGR00001');
  console.log('NAMA KLIEN: SUGUS');
  console.log('HARGA MOBIL: ' + HARGA_MOBIL);
  console.log('DOWN PAYMENT: ' + downPayment.toFixed(0));
  console.log('SISA PINJAMAN: ' + sisaPinjaman.toFixed(0));
  console.log('ANGSURAN PER BULAN: ' + angsuranPerBulan.toFixed(0));
  console.log('\nJADWAL ANGSURAN:');
  console.table(jadwal);
}

tampilkanJadwalPembayaran();
