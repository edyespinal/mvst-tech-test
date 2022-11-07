import React from 'react';
import { fetchCoffeeService } from '../app/coffees/application/fetchCoffeeService';
import { CoffeeMapper } from '../app/coffees/infrastructure/coffee.mapper';
import { CoffeePage } from '../app/coffees/presentation/pages/CoffeePage';

export async function getStaticProps() {
  const data = await fetchCoffeeService();
  return {
    props: {
      data,
    },
  };
}

export default function Index({ data }: any): JSX.Element {
  const domainData = data.map(CoffeeMapper.toDomain);
  return <CoffeePage data={domainData} />;
}
