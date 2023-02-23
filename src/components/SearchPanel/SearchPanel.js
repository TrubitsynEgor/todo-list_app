import './SearchPanel.css'
import ItemStatusFilter from '../ItemStatusFilter'
const SearchPanel = () => {

	return (
		<div className="search-panel">
			<input className="search-panel__input input-group-text" placeholder='Type here to search' />
			<ItemStatusFilter />
		</div>
	)
}

export default SearchPanel;