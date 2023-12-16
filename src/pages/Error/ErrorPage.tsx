import { ErrorResponse, useRouteError } from 'react-router-dom';
import './errorPage.scss';
interface ErrorProps {}

export function ErrorPage(props: ErrorProps) {
  const error = useRouteError() as ErrorResponse;
  console.log(error);
  return (
    <div className='container_error'>
      <h1>Oops...!</h1>
      <div>
        <p>Sorry, an unxpected error has occurred.</p>
        <p>{error.statusText}</p>
        <p>{error.data}</p>
      </div>
    </div>
  );
}
export default ErrorPage;
