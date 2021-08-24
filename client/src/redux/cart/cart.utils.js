export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

    if (existingCartItem) {
      return cartItems.map((cartItem) => {
        return cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    }

    if (!existingCartItem) {
      return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

  //find item in cartItems
  //remove from array
  //return new array

  const cartItemIndex = cartItems.findIndex(item => item.id === cartItemToRemove.id);

  if(cartItemIndex < 0) return [...cartItems];

  if(cartItemIndex > -1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
};



export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
  
  //REDUCE Quantity function
  //find item in cartItems
    //if not in cartItems just return
    //if in cartItems check quantity
    //if quantity greater than 1 reduce quantity by 1
    //if quantity is 1 remove item entirely

    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToReduce.id
    );
  
      if (existingCartItem && cartItemToReduce.quantity > 1) {
        return cartItems.map((cartItem) => {
          return cartItem.id === cartItemToReduce.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        });
      }

      if (existingCartItem && cartItemToReduce.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id);
      }
};