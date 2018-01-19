import React from 'react';
import Link from 'gatsby-link';

export default () =>
  <div style = {{ color: `tomato` }}>
    <h2> Hello world! </h2>
    <p> Hey Ashley </p>
    <img src="https://pbs.twimg.com/profile_images/904117368057503746/0XGZeUUi_400x400.jpg"/>
    <div>
      <Link to="/page-2/">Page Two</Link>
    </div>
  </div>
