import { UserList } from './components/UserList';
import { UserDefault } from './components/UserDefault';
import { ProductList } from './components/ProductList';
import { useState } from 'react';

const App = () => {
  const [localStorageProducts, setLocalStorageProducts] = useState<string>(
    localStorage.getItem("products") || "[]"
  );

  return (
    <>
      <UserDefault />
    </>
  );
};

export default App;