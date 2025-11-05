"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/types/product";
import { ColorSwatch } from "@/components/common/color-swatch";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductShowcaseProps {
  product: Product;
  index: number;
}

export function ProductShowcase({ product, index }: ProductShowcaseProps) {
  const [activeColorId, setActiveColorId] = useState(product.colors[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeColor = product.colors.find((c) => c.id === activeColorId) || product.colors[0];
  const isReverse = index % 2 !== 0;

  return (
    <section
      ref={ref}
      id={product.id}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-2 lg:gap-16 items-center",
            isReverse && "lg:grid-flow-dense"
          )}
        >
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("relative", isReverse && "lg:col-start-2")}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-2xl">
              {/* Placeholder Image */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: activeColor.hex }}
              >
                <div className="text-center p-8">
                  <p className="text-2xl font-bold text-white/80 drop-shadow-lg">
                    {product.name}
                  </p>
                  <p className="text-lg text-white/60 mt-2 drop-shadow">
                    {activeColor.name}
                  </p>
                  <p className="text-sm text-white/40 mt-4">
                    Placeholder for product image
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -right-4 -top-4 rounded-full bg-white px-4 py-2 shadow-lg"
            >
              <p className="text-sm font-semibold text-stone-900">
                {product.priceRange}
              </p>
            </motion.div>
          </motion.div>

          {/* Product Content */}
          <motion.div
            initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={cn(isReverse && "lg:col-start-1 lg:row-start-1")}
          >
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <h2 className="text-5xl font-bold tracking-tight text-stone-900 lg:text-6xl">
                  {product.name}
                </h2>
                <p className="mt-4 text-2xl text-stone-600">{product.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-lg text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color Swatches */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-stone-900">
                  Available Colors
                </p>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color) => (
                    <ColorSwatch
                      key={color.id}
                      color={color}
                      isActive={color.id === activeColorId}
                      onClick={() => setActiveColorId(color.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-stone-600"
                  >
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg">Get Free Sample</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper function to conditionally join classnames
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
