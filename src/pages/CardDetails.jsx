<div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
  <button
    onClick={() => navigate(-1)}
    className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    ← Voltar
  </button>
  <img src={`https://deckofcardsapi.com/static/img/${code}.png`} alt={code} className="w-48 rounded-lg shadow" />
  <p className="mt-4 text-xl font-semibold text-blue-800">Código: {code}</p>
</div>
