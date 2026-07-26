import CartHeader from "../../components/cart/CartHeader";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";
import RecommendedProducts from "../../components/cart/RecommendedProducts";
import TrustStrip from "../../components/cart/TrustStrip";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const CartPage = () => {
  const {
    cart,
    totalItems,
    loading,
    handleUpdateQuantity,
    handleRemoveItem,
  } = useCart();

  const { products = [] } = useProducts();

  const handleIncrease = (item) => {
    handleUpdateQuantity(item._id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) return;
    handleUpdateQuantity(item._id, item.quantity - 1);
  };

  const handleRemove = (item) => {
    handleRemoveItem(item._id);
  };

  return (
    <main className="min-h-screen bg-[#050505] px-4 pb-20 pt-28 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <CartHeader totalItems={totalItems} />

        {cart.length === 0 && !loading ? (
          <EmptyCart />
        ) : (
          <>
            <section className="grid gap-8 xl:grid-cols-[1.7fr_420px]">
              <div className="space-y-6">
                {cart.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              <CartSummary cart={cart} loading={loading} />
            </section>

            <RecommendedProducts
              products={products.slice(0, 4)}
              loading={false}
            />

            <TrustStrip />
          </>
        )}
      </div>
    </main>
  );
};

export default CartPage;