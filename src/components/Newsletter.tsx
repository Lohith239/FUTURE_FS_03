import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { database } from '../config/firebase';
import { ref, push } from 'firebase/database';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Save to Firebase
      await push(ref(database, 'newsletter-signups'), {
        email,
        timestamp: new Date().toISOString(),
        source: 'nike-website'
      });

      setIsSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving to Firebase:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new releases, exclusive offers, 
            and athlete stories that inspire.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
              required
            />
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  Subscribed!
                </>
              ) : isSubmitting ? (
                'Subscribing...'
              ) : (
                <>
                  <Send size={20} />
                  Subscribe
                </>
              )}
            </motion.button>
          </motion.form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-400"
            >
              Thanks for subscribing! We'll keep you updated.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;