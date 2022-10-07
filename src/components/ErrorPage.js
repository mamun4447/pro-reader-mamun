import React from 'react'
import { useAsyncError } from "react-router-dom";
import Header from './Header'

const ErrorPage = () => {
  const error = useAsyncError();
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p>{error.statusText || error.message}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ErrorPage
