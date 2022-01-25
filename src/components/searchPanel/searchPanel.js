
//styles
import './searchPanel.scss'
import inputStyle from '../../scssModule/input.module.scss'


const SearchPanel = ({ setTerm }) => {
    return(
        <div className="search">
            <input
                className={`search__input ${inputStyle.input}`}
                type="text" 
                placeholder='search post by username' 
                onChange={(e) => setTerm(e.target.value)}
                name="search"
                autoComplete="off"
            />
        </div>
    )
}  

export default SearchPanel