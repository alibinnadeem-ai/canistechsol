import Image from 'next/image';

import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { productImageOverrides } from '@/lib/product-image-overrides';
import { productCategories, productsCatalog } from '@/lib/products-catalog';

const catalogWithOverrides = productsCatalog.map((product) => ({
  ...product,
  image: productImageOverrides[product.name] ?? product.image,
}));

const byCategory = productCategories.map((category) => ({
  category,
  items: catalogWithOverrides.filter((item) => item.category === category),
}));

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <Badge>Products</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Products Catalog</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Explore our complete products catalog by category, including key specifications for each product.</p>
        <p className="mt-2 text-sm text-slate-500">Total products: {catalogWithOverrides.length} • Categories: {productCategories.length}</p>
      </section>

      {byCategory.map(({ category, items }) => (
        <Section key={category}>
          <SectionHeader eyebrow="Category" title={category} description={`${items.length} products`} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map((product) => (
              <Card key={`${category}-${product.name}`} className="overflow-hidden p-0">
                <div className="relative h-40 w-full bg-white p-3">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-3" />
                </div>
                <div className="p-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{product.category}</div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {product.specs.map((spec) => (
                      <li key={`${product.name}-${spec}`}>{spec}</li>
                    ))}
                  </ul>
                  <CardDescription className="mt-3 text-xs">Image: {product.image}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      ))}
    </SiteShell>
  );
}
