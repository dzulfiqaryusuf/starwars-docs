import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Star Wars Docs
        </Link>
      </h1>
    </div>
  );
}
