import React from 'react'

export default function getListings(pageNo = 1) {
  const [listings, setListings] = React.useState(undefined)
  const [page, setPage] = React.useState(1)
  console.log('fetching data')
  const getData = (pageNo, signal) => fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${pageNo}`, {signal})
    .then((res) => res.json())
    .then((res) => setListings(res))

  React.useEffect(() => {
    const controller = new AbortController()
    getData(pageNo, controller.signal)
    return () => {
      controller.abort()
    }
  }, [page])

  console.log(listings)
  return {
    listings,
    setListings,
    page,
    setPage
  }
}