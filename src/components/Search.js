import React from 'react'

function Search ({ recherche, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Recherche un film" 
				className="searchbox" 
				onChange={recherche}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search
