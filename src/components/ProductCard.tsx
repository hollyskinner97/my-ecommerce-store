import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-orange-50 p-4 rounded-lg shadow-lg max-w-sm mx-auto flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-80 h-90 rounded-t-lg mb-4"
      />
      <h3 className="mt-1">{product.title}</h3>

      {/* Spacer to push footer to bottom */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-1 mb-1">
        <p className="text-sky-700 text-lg font-bold">${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
