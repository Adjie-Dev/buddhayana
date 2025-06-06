import React from 'react';
import HeroImage from "../assets/img/candi-borobudur.webp"


const HeroSection = () => {
    return (
        <div
            className="relative min-h-96"
            style={{
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay gelap untuk meningkatkan keterbacaan teks */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Selamat Datang di Buddhayana Digital
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Platform edukasi Buddhist untuk memperdalam praktik spiritual Anda melalui puja, meditasi, dan pembelajaran Dharma
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                            Mulai Belajar
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                            Lihat Panduan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;