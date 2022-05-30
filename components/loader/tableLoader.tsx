import React from 'react';
import ContentLoader from 'react-content-loader';

export const TableLoader = (props) => (
  <ContentLoader
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
    <rect x="117" y="48" rx="3" ry="3" width="53" height="11" />
    <rect x="185" y="48" rx="3" ry="3" width="72" height="11" />
    <rect x="2" y="47" rx="3" ry="3" width="100" height="11" />
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
    <rect x="1" y="24" rx="3" ry="3" width="140" height="11" />
    <rect x="154" y="22" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
);
