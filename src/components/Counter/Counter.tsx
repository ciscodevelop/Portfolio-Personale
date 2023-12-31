import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUser, decrement, fetchUsers, increment, incrementBy, reset } from '../../features/counter/countSlice';
// import './Counter.scss';
interface CounterProps {}

export function Counter(props: CounterProps) {
  const dispatch = useAppDispatch();
  function handlerAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    dispatch(addUser({ id: crypto.randomUUID(), name: 'francesco papa', email: 'cisco@gmail.com' }));
  }
  const counter = useAppSelector((state) => state.counter.value);
  const users = useAppSelector((state) => state.counter.user);
  const pending = useAppSelector((state) => state.counter.pending);
  const error = useAppSelector((state) => state.counter.error);

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(props);
  return (
    <div className='container_counter'>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Incrementa</button>
      <button onClick={() => dispatch(decrement())}>Decrementa</button>
      <button onClick={() => dispatch(incrementBy(10))}>Incrementa di 10</button>
      <button onClick={() => dispatch(reset())}>Resetta</button>
      <button onClick={handlerAdd}>Aggiungi user</button>
      {pending ? (
        <i
          className='fa-solid fa-spinner fa-spin-pulse fa-spin-reverse'
          style={{ fontWeight: '900', fontSize: '50px', display: 'block' }}></i>
      ) : (
        users
          ?.map((u) => (
            <h3 key={u.id}>
              {u.id} - {u.name} - {u.email} - {u.address?.city}, {u.address?.zipcode}
            </h3>
          ))
          .reverse()
      )}
      {error && <h3>Errore nel caricamento dei Dati...!</h3>}
    </div>
  );
}
export default Counter;
