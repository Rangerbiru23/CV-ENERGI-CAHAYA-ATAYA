'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Heart, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Shield,
  Clock,
  Wrench
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      icon: Building2,
      title: 'Konstruksi Rumah Sakit',
      description: 'Pembangunan rumah sakit modern dengan standar kesehatan internasional',
      features: ['Desain Ergonomis', 'Sistem Ventilasi Optimal', 'Aksesibilitas Penuh']
    },
    {
      icon: Heart,
      title: 'Klinik & Puskesmas',
      description: 'Konstruksi fasilitas kesehatan primer yang efisien dan nyaman',
      features: ['Layout Efisien', 'Ruang Steril', 'Peralatan Medis']
    },
    {
      icon: Shield,
      title: 'Fasilitas Medis Khusus',
      description: 'Pembangunan laboratorium, radiologi, dan fasilitas diagnostik',
      features: ['Keamanan Tinggi', 'Teknologi Canggih', 'Standar Internasional']
    }
  ];

  const achievements = [
    { number: '50+', label: 'Proyek Selesai' },
    { number: '15+', label: 'Tahun Pengalaman' },
    { number: '100%', label: 'Kepuasan Klien' },
    { number: '24/7', label: 'Dukungan Teknis' }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Kualitas Terjamin',
      description: 'Standar kualitas tertinggi dalam setiap proyek konstruksi'
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Komitmen pada jadwal yang telah disepakati'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Tenaga ahli berpengalaman di bidang konstruksi kesehatan'
    },
    {
      icon: Wrench,
      title: 'Teknologi Modern',
      description: 'Menggunakan teknologi konstruksi terkini'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="CV ENERGI CAHAYA ATAYA" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-emerald-800">CV ENERGI CAHAYA ATAYA</h1>
                <p className="text-sm text-gray-600">Spesialis Konstruksi Gedung Kesehatan</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-900">Beranda</Button>
              <Button variant="ghost" className="text-gray-600 hover:text-emerald-700">Layanan</Button>
              <Button variant="ghost" className="text-gray-600 hover:text-emerald-700">Portofolio</Button>
              <Button variant="ghost" className="text-gray-600 hover:text-emerald-700">Kontak</Button>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-emerald-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90 z-10"></div>
        <div className="absolute inset-0">
          <img src="/hero-construction.jpg" alt="Konstruksi Rumah Sakit Modern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30">
                🏥 Spesialis Konstruksi Kesehatan
              </Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Membangun <span className="text-yellow-300">Masa Depan</span> Kesehatan Indonesia
              </h2>
              <p className="text-xl mb-8 leading-relaxed text-white/90">
                CV ENERGI CAHAYA ATAYA adalah mitra terpercaya dalam pembangunan fasilitas kesehatan 
                yang modern, aman, dan berkelanjutan. Dengan pengalaman lebih dari 15 tahun, kami 
                menghadirkan solusi konstruksi inovatif untuk rumah sakit, klinik, dan fasilitas medis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-emerald-900 px-8 font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Konsultasi Proyek
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700 transform hover:scale-105 transition-all duration-200">
                  Lihat Portofolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-1 text-yellow-300">{achievement.number}</div>
                      <div className="text-sm opacity-90">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proyek <span className="text-emerald-600">Unggulan</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik kami dalam membangun fasilitas kesehatan modern
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rumah Sakit Kelas Internasional
              </h3>
              <p className="text-gray-600 mb-6">
                Proyek terbaru kami dalam membangun rumah sakit dengan teknologi medis terkini, 
                desain ramah lingkungan, dan standar keselamatan tertinggi.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700">Kapasitas 200 tempat tidur</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700">10 ruang operasi modern</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700">Sistem green building certification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700">Selesai dalam 18 bulan</span>
                </div>
              </div>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700">
                Lihat Detail Proyek
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/healthcare-facility.jpg" alt="Fasilitas Kesehatan Modern" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-emerald-600 mb-2">Selesai 2024</Badge>
                  <h4 className="text-xl font-bold">RS. Sehat Sejahtera Balikpapan</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-emerald-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi khusus untuk fasilitas kesehatan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-emerald-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami terhadap kualitas dan kepuasan klien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Membangun Fasilitas Kesehatan Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan proyek konstruksi gedung kesehatan Anda dengan tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 px-8">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700 px-8">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-white border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600 text-sm">
                  Perum. Bukit Permata Indah, Jl. Berlian II Blok E-9, Desa/Kelurahan Sepinggan Baru, 
                  Kec. Balikpapan Selatan, Kota Balikpapan, Provinsi Kalimantan Timur
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                <p className="text-gray-600 text-sm">085285703497</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@energicahayaataya.co.id</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="CV ENERGI CAHAYA ATAYA" className="h-10 w-auto" />
                <h3 className="text-xl font-bold">CV ENERGI CAHAYA ATAYA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Mitra terpercaya dalam pembangunan fasilitas kesehatan yang modern dan berkelanjutan.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-emerald-800 text-white">Konstruksi</Badge>
                <Badge variant="secondary" className="bg-emerald-800 text-white">Kesehatan</Badge>
                <Badge variant="secondary" className="bg-emerald-800 text-white">Profesional</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Konstruksi Rumah Sakit</li>
                <li>Klinik & Puskesmas</li>
                <li>Fasilitas Medis Khusus</li>
                <li>Konsultasi Teknis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Tentang Kami</li>
                <li>Portofolio</li>
                <li>Karir</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CV ENERGI CAHAYA ATAYA. Hak Cipta Dilindungi.</p>
            <div className="mt-2 space-x-4">
              <Link href="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-emerald-400">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}