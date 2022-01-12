import React, {useState} from 'react';


<<<<<<< HEAD
const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value );
=======
const SearchBar = ( onFormSubmit ) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
>>>>>>> 76500dfc68d9c27e03ab72044678cf6caaae7629
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
<<<<<<< HEAD

    return (
=======
  };


return (
>>>>>>> 76500dfc68d9c27e03ab72044678cf6caaae7629
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
<<<<<<< HEAD
              onChange={(event)=> setTerm(event.target.value)}
=======
              onChange={(event) => setTerm(event.target.value)}
>>>>>>> 76500dfc68d9c27e03ab72044678cf6caaae7629
            />
          </div>
        </form>
      </div>
    );
<<<<<<< HEAD

  };
};

=======
};
>>>>>>> 76500dfc68d9c27e03ab72044678cf6caaae7629

export default SearchBar;
