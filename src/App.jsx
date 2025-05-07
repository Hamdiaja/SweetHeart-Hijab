import React from 'react';

function App() {
  const products = [
    { id: 1, name: "Hijab Segi Empat", price: 75000, image: "/hijab-segiempat.png" },
    { id: 2, name: "Hijab Pashmina", price: 85000, image: "/hijab-pashmina.png" },
    { id: 3, name: "Hijab Instan", price: 65000, image: "/hijab-instan.png" },
    { id: 4, name: "Hijab Syari", price: 95000, image: "/hijab-syari.png" },
    { id: 5, name: "Hijab Anak", price: 45000, image: "/hijab-anak.png" },
    { id: 6, name: "Hijab Sport", price: 55000, image: "/hijab-sport.png" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-pink-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SweetHeart Hijab</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-pink-200 transition">Home</a>
            <a href="#" className="hover:text-pink-200 transition">Produk</a>
            <a href="#" className="hover:text-pink-200 transition">Kontak</a>
            <a href="#" className="hover:text-pink-200 transition">Keranjang</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700">Koleksi Terbaru Hijab Modis & Syar'i</h2>
            <p className="mt-4 text-gray-600">Dapatkan hijab berkualitas dengan harga terjangkau. Cocok untuk segala aktivitas.</p>
            <button className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
              Belanja Sekarang
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/hero-image.jpg" alt="Hero Banner" className="max-w-xs md:max-w-sm rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Produk Grid */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-pink-700 mb-6">Produk Terlaris</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-pink-600 font-semibold mt-1">Rp{product.price.toLocaleString()}</p>
                <button className="bg-sweet-pink hover:bg-sweet-pink-dark text-white">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-100 text-center py-6 text-sm text-gray-600 mt-12">
        <p>&copy; 2025 SweetHeart Hijab. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;