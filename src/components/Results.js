import React from 'react';
import { withRouter } from 'react-router-dom';

import withAPI from './withAPI';

const Results = ({ result }) => {
  if (!result?.length) {
    return null;
  }

  return (
    <ul>
      {result.map(item => (
        <li key={item?.id} className="mb-6">
          <a href={item?.productUrl}>
            <article className="border bg-white flex rounded overflow-hidden">
              <figure className="flex-none">
                <img className="object-cover w-32 md:w-48 h-full" src={item?.image} alt={item?.title} />
              </figure>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h2 className="font-medium text-lg md:text-2xl leading-tight mb-3 line-clamp">{item?.title}</h2>
                <p className="mb-3 line-clamp ">{item?.summary}</p>
                {item.price && <div className="mt-auto text-right font-medium">€ {item?.price?.toFixed(2)}</div>}
              </div>
            </article>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(withAPI(Results));

