import {
  MissionVision,
  Offer,
  ProductPresentation,
  Team,
  Values,
} from '@/components';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-24 space-y-32">
      {/* Who are we */}
      <Team />

      {/* Mission and Vision */}
      <MissionVision />

      {/* values */}
      <Values />

      {/* Offer */}
      <Offer />

      {/* Product Presentation */}
      <ProductPresentation />
    </main>
  );
}
