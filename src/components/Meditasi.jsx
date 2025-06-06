import { Book, Play, Video, Youtube } from "lucide-react";

const Meditasi = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        🌅 Meditasi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                        Mulai hari Anda dengan Meditasi yang membawa ketenangan, berkah, dan energi positif untuk menjalani aktivitas sehari-hari.
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">
                                        📺 Video Panduan Meditasi Lengkap
                                    </h3>
                                    <p className="text-red-100">
                                        Ikuti panduan lengkap Meditasi dengan video tutorial
                                    </p>
                                </div>
                                <Youtube className="h-12 w-12 text-white opacity-80" />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                                <div className="text-center text-white">
                                    <Video className="h-16 w-16 mx-auto mb-4 opacity-60" />
                                    <p className="text-lg mb-2">Video Meditasi Lengkap</p>
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
                        <div className="text-gray-600">Bagian Meditasi</div>
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


                {/* Footer Actions */}
                <div className="mt-12 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Selesaikan meditasi Anda
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
}

export default Meditasi;