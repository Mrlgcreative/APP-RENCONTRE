export default function ViewGaleryUsers () {
    return ( 
        <>
        <div className="max-w-screen-xl  px-4 mx-auto 2xl:px-0 py-4">

        <div>
 
  <div className="bg-black min-h-screen text-white font-sans">
    
    {/* <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
      <h1 className="text-sm font-semibold">benatardykst</h1>
      <div className="flex gap-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div> */}
    {/* Profile header */}
    <div className="flex flex-col items-center py-4">
      <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-sm">Sabëer</div>
      <h2 className="mt-2 font-bold text-lg">benatardykst</h2>
      <div className="flex gap-2 mt-2">
        <button className="bg-gray-800 px-4 py-1 rounded text-sm">Modifier le profil</button>
        <button className="bg-gray-800 px-4 py-1 rounded text-sm">Voir l'archive</button>
      </div>
    </div>
    {/* Stories section */}
    <div className="flex overflow-x-auto px-4 gap-4 py-2">
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-xs">SB.</div>
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-xs">23.Ota...</div>
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-xs">lettre...</div>
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-xs">sab. f</div>
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-xs">Sabëer.</div>
      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-xs">otaku</div>
    </div>
    {/* Stats */}
    <div className="flex justify-around border-t border-b border-gray-800 py-2 text-center text-sm">
      <div><span className="font-bold">62</span><br />publications</div>
      <div><span className="font-bold">198</span><br />followers</div>
      <div><span className="font-bold">109</span><br />suivi(e)s</div>
    </div>
    {/* Navigation icons */}
    <div className="flex justify-around py-2 border-b border-gray-800 text-gray-400">
      <button className="text-white">▦</button>
      <button>🎞️</button>
      <button>🔖</button>
      <button>👤</button>
    </div>
    {/* Posts Grid */}
    <div className="grid grid-cols-3 gap-1">
      <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover" />
      <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover" />
      <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover" />
      <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover" />
      <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover" />
      <img src="https://via.placeholder.com/150" className="w-full h-32 object-cover" />
    </div>
  </div>
</div>

        </div>
        </>
     )
}