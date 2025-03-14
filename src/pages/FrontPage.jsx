import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { DonationCard } from "../components/DonationCard/DonationCard";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MissionBanner } from "../components/MissionBanner/MissionBanner";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Separator } from "../components/Separator/Separator";
import { Wrapper } from "../components/Wrapper/Wrapper";

export function FrontPage() {
  return (
    <>
      <Wrapper>
        <h2 style={{ fontWeight: 400, fontSize: '1.5vw' }}>Udvalgte Produkter</h2>
        <ProductCard />
        <Separator />
        <MissionBanner />
        <Separator />
        <h2 style={{ fontWeight: 400, fontSize: '1.5vw' }}>Populære Kategorier</h2>
        <CategoryCard />
        <GridContainer column={2} gap={1}>
        <DonationCard 
         header="Donationer til Dato"
         subtext="Sammen med dig har vi siden starten indsamlet:"
         sum="452.231,50 kr"
         footertext="Tak fordi du handler brugt, med omtanke for klimaet"
         backgroundImage="src/assets/images/banner_image2.jpg"
        />
        <DonationCard 
         header="Donationer i år"
         subtext="Sammen med dig har vi i år indsamlet:"
         sum="112.452,75 kr"
         footertext="Tak fordi du handler brugt, med omtanke for jorden"
         backgroundImage="src/assets/images/banner_image3.jpg"

        />
        </GridContainer>
      </Wrapper>
    </>
  );
}
