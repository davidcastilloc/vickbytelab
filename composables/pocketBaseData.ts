import PocketBase from "pocketbase"

const usePocketBaseData = (collectionName: string) => {
  const pb = new PocketBase("https://gcpocketbase.duckdns.org/")
  const { data, pending, error } = useAsyncData(
    `pocketbase-${collectionName}`,
    async () => {
      const records = await pb.collection(collectionName).getFullList()
      return records
    },
    {
      initialCache: false,
      server: false,
    }
  )
  return { data, pending, error }
}

// export usePocketBaseData 
