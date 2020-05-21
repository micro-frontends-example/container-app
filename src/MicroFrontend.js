import React, { useLayoutEffect } from 'react';

export const MicroFrontend = ({ name, host, history }) => {

  useLayoutEffect(() => {
    const scriptIdExists = document.getElementById(`micro-frontend-script-${name}`) !== null;
    const containerIdExists = document.getElementById(`${name}-container`) !== null;
    if (scriptIdExists && containerIdExists) {
      renderMicroFrontend();
      return;
    }

    const scriptId = `micro-frontend-script-${name}`;
    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.onload = renderMicroFrontend;
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        document.head.appendChild(script);
      });
  });

  const renderMicroFrontend = () => {
    window[`render${name}`](`${name}-container`, history);
  };

  return (
    <main id={`${name}-container`} />
  );
};

MicroFrontend.defaultProps = {
  document,
  window
};