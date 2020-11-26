import React from 'react';
import { Link } from 'bisheng/router';

export default function Header(props) {
  return (
    <header {...props} id="header">
      <Link id="logo">
        <img alt="logo" src="https://toneandrhythem.s3.us-east-2.amazonaws.com/logo.png" />
        <img alt="Ant Design" src="https://toneandrhythem.s3.us-east-2.amazonaws.com/logo.png" />
      </Link>
    </header>
  );
}
