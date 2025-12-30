'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
                <p className="text-xs text-gray-600">Privacy Policy</p>
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
              <Shield className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-emerald-600">CV ENERGI CAHAYA ATAYA</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
              dan melindungi informasi Anda.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Pengumpulan Data */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Database className="w-6 h-6 text-emerald-600 mr-3" />
                  1. Pengumpulan Data Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Informasi Identitas:</strong> Nama lengkap, alamat email, nomor telepon</li>
                    <li><strong>Informasi Profesional:</strong> Nama perusahaan, jabatan, bidang usaha</li>
                    <li><strong>Informasi Kontak:</strong> Alamat kantor, nomor fax, website</li>
                    <li><strong>Informasi Proyek:</strong> Detail kebutuhan konstruksi, lokasi proyek, anggaran</li>
                    <li><strong>Informasi Teknis:</strong> Data penggunaan website, cookies, alamat IP</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cara Pengumpulan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Formulir kontak dan konsultasi di website</li>
                    <li>Komunikasi langsung melalui email atau telepon</li>
                    <li>Meeting dan kunjungan proyek</li>
                    <li>Analisis penggunaan website secara otomatis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Penggunaan Data */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Eye className="w-6 h-6 text-emerald-600 mr-3" />
                  2. Penggunaan Data Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kami menggunakan data Anda untuk:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Layanan Konsultasi:</strong> Merespons pertanyaan dan permintaan informasi</li>
                    <li><strong>Penawaran Proyek:</strong> Menyiapkan proposal dan penawaran harga</li>
                    <li><strong>Komunikasi Bisnis:</strong> Mengirimkan update dan informasi relevan</li>
                    <li><strong>Peningkatan Layanan:</strong> Menganalisis kebutuhan dan preferensi klien</li>
                    <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>Komitmen Kami:</strong> Data Anda hanya akan digunakan untuk tujuan yang 
                    telah disepakati dan tidak akan disalahgunakan untuk kepentingan lain.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Perlindungan Data */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Lock className="w-6 h-6 text-emerald-600 mr-3" />
                  3. Perlindungan dan Keamanan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Langkah Keamanan yang Kami Terapkan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Enkripsi Data:</strong> Menggunakan enkripsi SSL untuk transmisi data</li>
                    <li><strong>Akses Terbatas:</strong> Hanya personel berwenang yang dapat mengakses data</li>
                    <li><strong>Keamanan Server:</strong> Server dengan keamanan berlapis dan firewall</li>
                    <li><strong>Backup Rutin:</strong> Backup data teratur untuk mencegah kehilangan</li>
                    <li><strong>Update Keamanan:</strong> Sistem keamanan yang selalu diperbarui</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Retensi Data:</h3>
                  <p className="text-gray-600">
                    Data pribadi akan disimpan selama diperlukan untuk tujuan bisnis yang sah, 
                    kecuali jika periode penyimpanan yang lebih lama diperlukan atau diizinkan oleh hukum.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hak Pengguna */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <UserCheck className="w-6 h-6 text-emerald-600 mr-3" />
                  4. Hak Anda sebagai Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hak Privasi Anda:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Akses Data:</strong> Meminta salinan data pribadi yang kami simpan</li>
                    <li><strong>Koreksi Data:</strong> Memperbaiki data yang tidak akurat</li>
                    <li><strong>Penghapusan Data:</strong> Meminta penghapusan data pribadi</li>
                    <li><strong>Pembatasan Pengolahan:</strong> Membatasi cara data digunakan</li>
                    <li><strong>Portabilitas Data:</strong> Memindahkan data ke layanan lain</li>
                    <li><strong>Penolakan:</strong> Menolak pengolahan data tertentu</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Cara Menghubungi Kami:</strong> Untuk menggunakan hak privasi Anda, 
                    kirim email ke privacy@energicahayaataya.co.id dengan subjek "Permintaan Privasi Data".
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">5. Kebijakan Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Penggunaan Cookies:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi website dasar</li>
                    <li><strong>Cookies Performa:</strong> Menganalisis penggunaan website</li>
                    <li><strong>Cookies Fungsional:</strong> Mengingat preferensi pengguna</li>
                    <li><strong>Cookies Pemasaran:</strong> Menampilkan konten relevan</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  Anda dapat mengelola preferensi cookies melalui pengaturan browser Anda. 
                  Menonaktifkan cookies tertentu dapat memengaruhi pengalaman penggunaan website.
                </p>
              </CardContent>
            </Card>

            {/* Pihak Ketiga */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">6. Berbagi Data dengan Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda. 
                  Data hanya akan dibagikan dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Partner Bisnis:</strong> Kontraktor dan supplier terpercaya untuk proyek</li>
                  <li><strong>Penyedia Layanan:</strong> Hosting, email, dan layanan teknis</li>
                  <li><strong>Kewajiban Hukum:</strong> Sesuai dengan perintah pengadilan atau hukum</li>
                  <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Perubahan Kebijakan */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">7. Perubahan Kebijakan Privasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kami dapat memperbarui kebijakan privasi ini secara berkala untuk mencerminkan 
                  perubahan dalam praktik bisnis atau peraturan yang berlaku.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Notifikasi Perubahan:</strong> Perubahan signifikan akan diinformasikan 
                    melalui email atau pemberitahuan di website. Versi terbaru selalu tersedia di halaman ini.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card className="border-0 shadow-lg bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">8. Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan privasi kami, 
                  silakan hubungi kami:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">Email Privasi:</p>
                    <p className="text-emerald-600">privacy@energicahayaataya.co.id</p>
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
                    <p className="font-semibold text-gray-900">Waktu Respons:</p>
                    <p className="text-gray-600">1-2 hari kerja</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024 dan merupakan bagian 
              dari komitmen CV ENERGI CAHAYA ATAYA terhadap perlindungan data pribadi klien dan mitra bisnis.
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