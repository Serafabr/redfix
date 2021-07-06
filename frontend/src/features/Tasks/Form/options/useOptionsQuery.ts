import { useQuery } from '@apollo/client'
// Graphql
import { CATEGORY_OPTIONS } from './graphql';

export const useOptionsQuery = () => {
  
  const { loading, error, data } = useQuery(CATEGORY_OPTIONS);
  
  console.log('loading');
  console.log(loading);
  console.log('data');
  console.log(data);
  console.log('error');
  console.log(error);
}
