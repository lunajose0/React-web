import React from 'react';

function Hero() {
  return (
    <section className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-4 animate-pulse">¡Hola Mundo!</h2>
          <p className="text-2xl text-white mb-8">Coming soon...</p>
          <button className="bg-white text-indigo-500 py-3 px-6 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-indigo-100 hover:text-indigo-700 shadow-md hover:shadow-lg" onClick={() => alert('¡Comienza ahora!')}>
            ¡Comienza ahora!
          </button>
        </div>
      </section>
  );
}

export default Hero;