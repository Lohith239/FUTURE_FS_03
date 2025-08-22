import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

const products = [
  {
    id: 1,
    name: "Air Max 270",
    price: "$150",
    rating: 4.8,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Running"
  },
  {
    id: 2,
    name: "React Infinity",
    price: "$160",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Training"
  },
  {
    id: 3,
    name: "Blazer Mid '77",
    price: "$100",
    rating: 4.7,
    image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Lifestyle"
  },
  {
    id: 4,
    name: "Zoom Pegasus",
    price: "$130",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Running"
  }
];

interface ProductShowcaseProps {
  onAddToCart: (product: Product) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onAddToCart }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest innovations designed to help you perform at your best
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <motion.button
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={18} className="text-gray-600" />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <span className="text-sm text-orange-500 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-black">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-black">
                    {product.price}
                  </span>
                  <motion.button
                    onClick={() => onAddToCart(product)}
                    className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;