import React from 'react';
import { Book, Users, Heart, Calendar, Star, TrendingUp } from 'lucide-react';
import { FaCloudSun, FaSun } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';

const Dashboard = () => {
    const stats = [
        {
            label: 'Total Paritta',
            value: '108',
            icon: Book,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            label: 'Pengguna Aktif',
            value: '2,847',
            icon: Users,
            color: 'bg-green-100 text-green-600'
        },
        {
            label: 'Sesi Meditasi',
            value: '15,632',
            icon: Heart,
            color: 'bg-red-100 text-red-600'
        },
        {
            label: 'Hari Berturut',
            value: '23',
            icon: Calendar,
            color: 'bg-purple-100 text-purple-600'
        }
    ];

    const features = [
        {
            title: 'Puja Pagi',
            description: 'Mulai hari dengan puja pagi yang membawa ketenangan dan berkah',
            icon: '🌅',
            color: 'bg-orange-50 border-orange-200'
        },
        {
            title: 'Puja Sore',
            description: 'Tutup hari dengan puja sore untuk refleksi dan syukur',
            icon: '🌅',
            color: 'bg-purple-50 border-purple-200'
        },
        {
            title: 'Meditasi Terpandu',
            description: 'Berbagai teknik meditasi dengan panduan audio dan video',
            icon: '🧘‍♂️',
            color: 'bg-blue-50 border-blue-200'
        },
        {
            title: 'Kelas KDAB',
            description: 'Pelajari ajaran Buddha melalui materi edukatif yang lengkap',
            icon: '📚',
            color: 'bg-green-50 border-green-200'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Stats Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Statistik Platform
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center">
                                        <div className={`p-3 rounded-full ${stat.color}`}>
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-sm text-gray-600">{stat.label}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Fitur Utama
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className={`p-6 rounded-lg border-2 ${feature.color} hover:shadow-lg transition-shadow cursor-pointer`}>
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Mulai Praktik Hari Ini
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
                            <div className="flex items-center justify-center">
                                <FaSun className="h-5 w-5 mr-2" />
                                Puja Pagi
                            </div>
                        </button>
                        <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors">
                            <div className="flex items-center justify-center">
                                <FaCloudSun className="h-5 w-5 mr-2" />
                                Puja Sore
                            </div>
                        </button>
                        <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
                            <div className="flex items-center justify-center">
                                <GiMeditation className="h-5 w-5 mr-2" />
                                Meditasi
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;