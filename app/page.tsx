import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { HowItWorks } from "@/components/sections/how-it-works";
import { products } from "@/lib/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Product Showcases */}
        <div id="products">
          {products.map((product, index) => (
            <ProductShowcase key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Feature Highlights */}
        <FeatureHighlights />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* How It Works */}
        <HowItWorks />

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-wood-700 to-wood-900 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 text-xl text-wood-100">
              Get started with free samples or request a quote today
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-wood-900 shadow-lg transition-all hover:bg-cream-50">
                Order Free Samples
              </button>
              <button className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/10">
                Request a Quote
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
