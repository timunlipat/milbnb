export const dynamic = 'force-dynamic';

import Container from "./Components/Container";
import EmptyState from "./Components/EmptyState";
import getListings, { IListingParams } from "./actions/getListings";
import ListingCard from "./Components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingParams
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState showReset/>
    )
  }

  return (
    <Container>
      <div 
        className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing) =>{
          return (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          )
        })}
      </div>
    </Container>

  );
}

export default Home;