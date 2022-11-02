import CartProvider from './store/CartProvider';


function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    return (
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    );
  }
  
  export default App;