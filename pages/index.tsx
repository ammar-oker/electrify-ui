import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/layouts/DashboardLayout';
import { NextPageWithLayout } from '@/pages/_app';
import Home from '@/containers/Home';
import { APIPagination, APISort, ChargingLocation } from '@/api/types';
import { fetchChargingLocations } from '@/api';

interface IndexPageProps {
  locations: ChargingLocation[];
  pagination: APIPagination['Response'];
  sort?: APISort;
}

const IndexPage: NextPageWithLayout<IndexPageProps> = ({
  locations,
  sort,
  pagination,
}) => {
  return (
    <>
      <Head>
        <title>Electrify - Charging Locations</title>
      </Head>

      <Home pagination={pagination} sort={sort} locations={locations} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { by, type, page, perPage } = query;

  if (!page || !perPage) {
    return {
      redirect: {
        destination: `/?page=${1}&perPage=${10}`,
        permanent: false,
      },
    };
  }

  const { data, sort, pagination } = await fetchChargingLocations({
    by: by as string,
    type: type as string,
    page: page as string,
    perPage: perPage as string,
  });

  return {
    props: { locations: data, pagination, sort },
  };
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default IndexPage;
