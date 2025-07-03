import { useState } from 'react';
import './ShoppingCart.css'; // CSS 파일 import (아래 제공)

// 상품 목록 컴포넌트
function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <button onClick={() => onAddToCart(product)}>추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 장바구니 컴포넌트
function Cart({ cartItems, onIncrease, onDecrease }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}원 x {item.quantity}
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button onClick={() => onDecrease(item.id)}>-</button>
              </li>
            ))}
          </ul>
          <p className="total">총액: {totalPrice}원</p>
        </>
      )}
    </div>
  );
}

// 부모 컴포넌트
function ShoppingCart() {
  const products = [
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 1500 },
    { id: 3, name: '오렌지', price: 2000 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="shopping-cart">
      <h1>장바구니</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

export default ShoppingCart;