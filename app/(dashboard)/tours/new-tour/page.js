import NewTour from '@/components/NewTour'
import TourInfo from '@/components/TourInfo'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

const NewTourPage = () => {
  const queryClient = new QueryClient()

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
      <TourInfo />
    </HydrationBoundary>
  )
}
export default NewTourPage
