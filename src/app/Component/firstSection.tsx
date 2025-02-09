
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { allProducts } from "../../sanity/lib/queries";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const FirstSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        console.log("Fetched Products:", fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchproduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    if (!product || !product.productName) {
      console.error("Product data is incomplete:", product);
      return;
    }

    Swal.fire({
      position: "top-start",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });

    addToCart(product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Best of Air Max</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
              {product.image ? (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName || "Product Image"}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
                  No Image
                </div>
              )}
              <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
              <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;


