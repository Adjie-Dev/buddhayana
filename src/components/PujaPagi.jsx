import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, Video, Book, Clock, Users, Youtube } from 'lucide-react';

const Pujapagi = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [showText, setShowText] = useState(null);
    const audioRef = useRef(null);

    const prayerSections = [
        {
            title: 'Namakāra Gāthā',
            duration: '4:30',
            description: 'Penghormatan kepada Tiratana (Buddha, Dhamma, Sangha)',
            audioUrl: '#',
            paliText: `Arahaṁ sammāsambuddho bhagavā
Buddhaṁ bhagavantaṁ abhivādemi.

Svākkhāto bhagavatā dhammo
Dhammaṁ namassāmi.

Supaṭipanno bhagavato sāvakasaṅgho
Saṅghaṁ namāmi.`,
            translation: `Sang Bhagavā, Yang Maha Suci, Yang telah mencapai penerangan sempurna;
Aku bersujud di hadapan Sang Buddha, Sang Bhagavā.

Dhamma telah sempurna dibabarkan oleh Sang Bhagavā;
Aku bersujud di hadapan Dhamma.

Saṅgha Siswa Sang Bhagavā telah bertindak sempurna;
Aku bersujud di hadapan Saṅgha.`
        },
        {
            title: 'Vandanā & Pūja Gāthā',
            duration: '3:15',
            description: 'Persiapan puja dan penghormatan awal',
            audioUrl: '#',
            paliText: `Namo Sanghyang Ādi Buddhāya (3X)
Namo Tassa Bhagavato Arahato Sammāsambuddhassa (3X)
Namo Sabbe Bodhisattāya-Mahasattāya (3X)`,
            translation: `Terpujilah Sanghyang Ādi Buddha, Tuhan Yang Maha Esa
Terpujilah Sang Bhagavā, Yang Maha Suci, Yang telah mencapai Penerangan Sempurna
Terpujilah para Bodhisatta - Mahasatta`
        },
        {
            title: 'Buddhābhitthutiṁ',
            duration: '5:20',
            description: 'Pujian kepada Buddha',
            audioUrl: '#',
            paliText: `Yo so tathāgato arahaṁ sammāsambuddho,
vijjācaraṇasampanno sugato lokavidū, anuttaro
purisadhammasārathi satthā devamanussānaṁ
buddho bhagavā...`,
            translation: `Beliau Sang Tathāgata, Yang Maha Suci, yang telah mencapai penerangan sempurna, sempurna pengetahuan serta tindak tandukNya, sempurna menempuh Sang Jalan (ke Nibbāna)...`
        },
        {
            title: 'Dhammābhitthutiṁ & Saṅghābhitthutiṁ',
            duration: '4:45',
            description: 'Pujian kepada Dhamma dan Sangha',
            audioUrl: '#',
            paliText: `Yo so svākkhāto bhagavatā dhammo,
sandiṭṭhiko akāliko ehipassiko...

Yo so supaṭipanno bhagavato sāvakasaṅgho,
Ujupaṭipanno bhagavato sāvakasaṅgho...`,
            translation: `Demikianlah Dhamma telah sempurna dibabarkan oleh Sang Bhagavā, berada sangat dekat, tak lapuk oleh waktu...

Demikianlah Saṅgha Siswa Sang Bhagavā telah bertindak baik, telah bertindak lurus...`
        },
        {
            title: 'Ratanattayappaṇāmagāthā',
            duration: '6:10',
            description: 'Syair pemujaan Tiratana dan penghilang ketakutan',
            audioUrl: '#',
            paliText: `Buddho susuddho karuṇāmahaṇṇavo,
Yoccantasuddhabbarañāṇalocano,
Lokassa pāpūpakilesaghātako,
Vandāmi Buddhaṁ ahamādarena taṁ...`,
            translation: `Sang Buddha yang benar-benar murni pemilik kasih sayang seluas samudra,
Pemilik mata kebijaksanaan murni yang tiada taranya,
Penakluk kekotoran batin dan kejahatan di dunia,
Aku memuja dengan penuh keyakinan kepada Buddha...`
        },
        {
            title: 'Perenungan & Pelimpahan Jasa',
            duration: '4:20',
            description: 'Abhiṇhappaccavekkhaṇa dan Uddisanadhiṭṭhāna',
            audioUrl: '#',
            paliText: `Jarādhammomhi, Jaraṁ anatīto.
Byādhidhammomhi, Byādhiṁ anatīto...

Iminā puññakammena
Upajjhāyā guṇuttarā...`,
            translation: `Aku akan mengalami penuaan, Aku belum mengatasi penuaan.
Aku akan menderita sakit, Aku belum mengatasi sakit...

Ku persembahkan kebajikan yang telah ku lakukan untuk
Guru Spiritual tertinggi...`
        }
    ];

    const handlePlayPause = (index) => {
        if(currentTrack === index && isPlaying) {
            setIsPlaying(false);
            setCurrentTrack(null);
        } else {
            setIsPlaying(true);
            setCurrentTrack(index);
        }
    };

    const toggleText = (index) => {
        setShowText(showText === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-orange-100 text-orange-800 px-6 py-2 rounded-full mb-4">
                        <Clock className="h-5 w-5 mr-2" />
                        Waktu Terbaik: 05:00 - 07:00 WIB
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        🌅 Puja Pagi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                        Mulai hari Anda dengan puja pagi yang membawa ketenangan, berkah, dan energi positif untuk menjalani aktivitas sehari-hari.
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">
                                        📺 Video Panduan Puja Pagi Lengkap
                                    </h3>
                                    <p className="text-red-100">
                                        Ikuti panduan lengkap puja pagi dengan video tutorial
                                    </p>
                                </div>
                                <Youtube className="h-12 w-12 text-white opacity-80" />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="text-center text-white">
                                    <Video className="h-16 w-16 mx-auto mb-4 opacity-60" />
                                    <p className="text-lg mb-2">Video Puja Pagi Lengkap</p>
                                    <p className="text-sm opacity-80">Durasi: ~25 menit</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                                    <Play className="h-5 w-5 mr-2" />
                                    Putar Video
                                </button>
                                <button className="flex-1 border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                                    <Book className="h-5 w-5 mr-2" />
                                    Lihat Teks Lengkap
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prayer Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                        <div className="text-gray-600">Bagian Puja</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">~28</div>
                        <div className="text-gray-600">Menit Total</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">1,247</div>
                        <div className="text-gray-600">Praktisi Hari Ini</div>
                    </div>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-4">
                    {prayerSections.map((section, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <div className="flex-1 mb-4 md:mb-0">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600 mb-2">{section.description}</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {section.duration}
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        {/* Audio Player */}
                                        <button
                                            onClick={() => handlePlayPause(index)}
                                            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${currentTrack === index && isPlaying
                                                ? 'bg-orange-600 text-white'
                                                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                                                }`}
                                        >
                                            {currentTrack === index && isPlaying ? (
                                                <Pause className="h-5 w-5 mr-2" />
                                            ) : (
                                                <Play className="h-5 w-5 mr-2" />
                                            )}
                                            Audio
                                        </button>

                                        {/* Text Button */}
                                        <button
                                            onClick={() => toggleText(index)}
                                            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${showText === index
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            <Book className="h-5 w-5 mr-2" />
                                            Teks
                                        </button>
                                    </div>
                                </div>

                                {/* Audio Progress Bar */}
                                {currentTrack === index && isPlaying && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="flex items-center space-x-4">
                                            <Volume2 className="h-5 w-5 text-gray-400" />
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div className="bg-orange-500 h-2 rounded-full w-1/3 transition-all duration-300"></div>
                                            </div>
                                            <span className="text-sm text-gray-500">1:15 / {section.duration}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Text Content */}
                                {showText === index && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 text-center">Teks Pali</h4>
                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                                                        {section.paliText}
                                                    </pre>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 text-center">Terjemahan</h4>
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                                                        {section.translation}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Actions */}
                <div className="mt-12 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Selesaikan Puja Pagi Anda
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Setelah menyelesaikan semua bagian puja, jangan lupa untuk mendedikasikan merit untuk semua makhluk hidup.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                                Tandai Selesai
                            </button>
                            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                                Bagikan Merit
                            </button>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                            <p className="text-sm text-yellow-800 italic">
                                "Sabbe sattā sukhī hontu" - Semoga semua makhluk berbahagia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pujapagi;