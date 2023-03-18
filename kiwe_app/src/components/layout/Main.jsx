/* eslint-disable react/prop-types */
import React from 'react';

export default function Main(props) {
  return (
    <main className="w-full h-screen">
      <section>{props.children}</section>
    </main>
  );
}
