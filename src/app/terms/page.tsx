'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Building } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="CV ENERGI CAHAYA ATAYA" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-emerald-800">CV ENERGI CAHAYA ATAYA</h1>
                <p className="text-xs text-gray-600">Terms and Conditions</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan <span className="text-emerald-600">CV ENERGI CAHAYA ATAYA</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan dan website CV ENERGI CAHAYA ATAYA. 
              Dengan mengakses atau menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Informasi Perusahaan */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Building className="w-6 h-6 text-emerald-600 mr-3" />
                  1. Informasi Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Identitas Perusahaan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Nama Perusahaan:</strong> CV ENERGI CAHAYA ATAYA</li>
                    <li><strong>Bidang Usaha:</strong> Konstruksi Gedung Kesehatan</li>
                    <li><strong>Alamat:</strong> Perum. Bukit Permata Indah, Jl. Berlian II Blok E-9, Desa/Kelurahan Sepinggan Baru, Kec. Balikpapan Selatan, Kota Balikpapan, Provinsi Kalimantan Timur</li>
                    <li><strong>Telepon:</strong> 085285703497</li>
                    <li><strong>Email:</strong> info@energicahayaataya.co.id</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>Lisensi dan Sertifikasi:</strong> Perusahaan kami telah memiliki izin usaha konstruksi 
                    yang sah dan tersertifikasi sesuai standar industri konstruksi Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Layanan */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Users className="w-6 h-6 text-emerald-600 mr-3" />
                  2. Layanan yang Ditawarkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ruang Lingkup Layanan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Konstruksi Rumah Sakit:</strong> Pembangunan rumah sakit baru dan renovasi</li>
                    <li><strong>Klinik dan Puskesmas:</strong> Konstruksi fasilitas kesehatan primer</li>
                    <li><strong>Fasilitas Medis Khusus:</strong> Laboratorium, radiologi, dan fasilitas diagnostik</li>
                    <li><strong>Konsultasi Teknis:</strong> Perencanaan dan desain fasilitas kesehatan</li>
                    <li><strong>Manajemen Proyek:</strong> Koordinasi dan supervisi konstruksi</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Standar Layanan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Mengikuti standar konstruksi nasional (SNI)</li>
                    <li>Kepatuhan terhadap peraturan kesehatan dan keselamatan kerja</li>
                    <li>Menggunakan material berkualitas tinggi</li>
                    <li>Garansi konstruksi sesuai ketentuan perundangan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Kewajiban Klien */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Scale className="w-6 h-6 text-emerald-600 mr-3" />
                  3. Kewajiban dan Tanggung Jawab Klien
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kewajiban Klien:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Informasi Akurat:</strong> Memberikan informasi proyek yang lengkap dan akurat</li>
                    <li><strong>Dokumen Lengkap:</strong> Menyediakan izin dan dokumen yang diperlukan</li>
                    <li><strong>Pembayaran Tepat Waktu:</strong> Memenuhi kewajiban pembayaran sesuai kontrak</li>
                    <li><strong>Akses Lokasi:</strong> Memberikan akses yang memadai ke lokasi proyek</li>
                    <li><strong>Koordinasi:</strong> Bekerja sama dalam koordinasi pelaksanaan proyek</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tanggung Jawab Klien:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Memastikan kelayakan lahan untuk konstruksi</li>
                    <li>Memperoleh izin konstruksi dari pemerintah setempat</li>
                    <li>Menyediakan utilitas dasar (listrik, air, dll)</li>
                    <li>Menangani perpajakan terkait proyek</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Kewajiban Perusahaan */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Building className="w-6 h-6 text-emerald-600 mr-3" />
                  4. Kewajiban dan Tanggung Jawab Perusahaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kewajiban Perusahaan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Profesionalisme:</strong> Menyediakan tenaga ahli yang berkompeten</li>
                    <li><strong>Kualitas:</strong> Menjamin kualitas konstruksi sesuai standar</li>
                    <li><strong>Waktu:</strong> Menyelesaikan proyek sesuai jadwal yang disepakati</li>
                    <li><strong>Keamanan:</strong> Memastikan keselamatan kerja di lokasi proyek</li>
                    <li><strong>Laporan:</strong> Memberikan laporan kemajuan proyek secara berkala</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jaminan Perusahaan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Garansi konstruksi sesuai ketentuan perundangan</li>
                    <li>Asuransi proyek untuk perlindungan bersama</li>
                    <li>Pemeliharaan pasca-konstruksi sesuai kesepakatan</li>
                    <li>Dukungan teknis setelah serah terima proyek</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pembayaran */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">5. Syarat Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Struktur Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Uang Muka (DP):</strong> 30-50% dari total nilai kontrak</li>
                    <li><strong>Progress Payment:</strong> Pembayaran bertahap sesuai kemajuan proyek</li>
                    <li><strong>Retensi:</strong> 5-10% ditahan selama masa pemeliharaan</li>
                    <li><strong>Pelunasan:</strong> Setelah masa pemeliharaan berakhir</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Transfer bank ke rekening perusahaan</li>
                    <li>Bank garansi untuk proyek besar</li>
                    <li>Pembayaran dalam mata uang Rupiah (IDR)</li>
                    <li>Pajak PPN 11% sesuai peraturan berlaku</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Perhatian:</strong> Keterlambatan pembayaran dapat dikenakan denda 
                    sebesar 0.1% per hari dari total nilai yang terhutang.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Jangka Waktu dan Penyelesaian */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">6. Jangka Waktu dan Penyelesaian Proyek</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Perhitungan Waktu:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Waktu kerja efektif (hari kerja)</li>
                    <li>Tidak termasuk hari libur nasional</li>
                    <li>Penyesuaian untuk cuaca ekstrem</li>
                    <li>Perpanjangan waktu untuk perubahan desain</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keterlambatan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Force Majeure:</strong> Bencana alam, kebijakan pemerintah, dll</li>
                    <li><strong>Kesalahan Klien:</strong> Keterlambatan pembayaran atau perubahan mendadak</li>
                    <li><strong>Kesalahan Perusahaan:</strong> Dikenakan denda sesuai kontrak</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Kekayaan Intelektual */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">7. Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Cipta Desain:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Desain dan rencana konstruksi milik CV ENERGI CAHAYA ATAYA</li>
                    <li>Tidak boleh digunakan untuk proyek lain tanpa izin</li>
                    <li>Klien mendapatkan hak penggunaan untuk proyek bersangkutan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Konfidensialitas:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Informasi proyek bersifat rahasia</li>
                    <li>Tidak boleh dibagikan ke pihak ketiga</li>
                    <li>Berlaku selama dan setelah proyek selesai</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pembatalan dan Penghentian */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <AlertTriangle className="w-6 h-6 text-emerald-600 mr-3" />
                  8. Pembatalan dan Penghentian Kontrak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pembatalan oleh Klien:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Dapat dilakukan dengan pemberitahuan tertulis 30 hari</li>
                    <li>Membayar biaya yang telah dikeluarkan</li>
                    <li>Membayar compensasi sesuai kesepakatan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Penghentian oleh Perusahaan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Keterlambatan pembayaran lebih dari 30 hari</li>
                    <li>Pelanggaran ketentuan kontrak</li>
                    <li>Keadaan force majeure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Penyelesaian Sengketa */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">9. Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prosedur Penyelesaian:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Negosiasi:</strong> Musyawarah untuk mencapai kesepakatan</li>
                    <li><strong>Mediasi:</strong> Menggunakan mediator netral</li>
                    <li><strong>Arbitrase:</strong> Badan Arbitrase Nasional Indonesia (BANI)</li>
                    <li><strong>Pengadilan:</strong> Pengadilan Negeri Balikpapan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Yurisdiksi:</h3>
                  <p className="text-gray-600">
                    Semua sengketa akan diselesaikan berdasarkan hukum Republik Indonesia 
                    dan berada dalam yurisdiksi Pengadilan Negeri Balikpapan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Perubahan Syarat */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">10. Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  CV ENERGI CAHAYA ATAYA berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                  Perubahan akan diberitahukan melalui website atau email.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Pemberitahuan Perubahan:</strong> Perubahan signifikan akan diberitahukan 
                    minimal 30 hari sebelum berlaku efektif. Penggunaan layanan setelah perubahan 
                    dianggap sebagai persetujuan terhadap syarat dan ketentuan yang baru.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card className="border-0 shadow-lg bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">11. Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">Email Legal:</p>
                    <p className="text-emerald-600">legal@energicahayaataya.co.id</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon:</p>
                    <p className="text-emerald-600">085285703497</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat:</p>
                    <p className="text-gray-600 text-sm">
                      Perum. Bukit Permata Indah, Jl. Berlian II Blok E-9, 
                      Sepinggan Baru, Balikpapan Selatan, Balikpapan, Kalimantan Timur
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jam Operasional:</p>
                    <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00 WITA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Syarat dan Ketentuan ini berlaku efektif sejak 1 Januari 2024 dan merupakan 
              kesepakatan yang mengikat antara CV ENERGI CAHAYA ATAYA dan klien/pengguna layanan.
            </p>
            <div className="mt-6">
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}