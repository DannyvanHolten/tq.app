import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import UIInput from '../ui/Input';
import UIButton from '../ui/Button';

export const Search = ({ history: { push } }) => {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (query) {
      push(`/?q=${query}`);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mb-6 flex flex-col md:flex-row"
    >
      <UIInput
        onChange={setQuery}
        autoFocus
        className="mb-2 md:mb-0 md:mr-4"
        name="term"
        placeholder="What are you looking for?"
      />

      <UIButton className="flex items-center flex-none justify-center">
        <img alt="" src="/images/search.svg" height="16" width="16" className="mr-2" />
        <span>search</span>
      </UIButton>
    </form>
  );
};

export default withRouter(Search);

