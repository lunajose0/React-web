import React from 'react';

function Features() {
  return (
    <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-[-10px] transition duration-300">
            <h3 className="text-xl font-bold mb-2">Característica 1</h3>
            <p>Descripción de la característica 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-[-10px] transition duration-300">
            <h3 className="text-xl font-bold mb-2">Característica 2</h3>
            <p>Descripción de la característica 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-[-10px] transition duration-300">
            <h3 className="text-xl font-bold mb-2">Característica 3</h3>
            <p>Descripción de la característica 3.</p>
          </div>
        </div>
      </section>
  );
}

export default Features;