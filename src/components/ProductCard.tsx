import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-[#f9ebe0] p-4 rounded-lg shadow-lg max-w-sm mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-90 rounded-t-lg mb-4"
      />
      <h3 className="text-[#0d2149] text-xl font-semibold mb-2">
        {product.title}
      </h3>
      {/* <p className="text-[#463f1a] text-sm mb-2">{product.description}</p> */}
      <span className="text-[#208aae] text-lg font-bold">${product.price}</span>
      <div className="mt-4">
        <button className="bg-[#60492c] text-[#f9ebe0] px-4 py-2 rounded-lg hover:bg-[#463f1a] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
