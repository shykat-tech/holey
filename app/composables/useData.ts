// type BlockKey = "category" | "header" | "footer" | "featured_items"

import type {BlockDataMap, BlockKey} from "~~/public/data";

export const useData = <K extends BlockKey>(block: K) => {
    const {data, pending, error} = useAsyncData<BlockDataMap>(
        `page-3-${block}`,
        () => $fetch("http://localhost:8000/api/v2/pages/3/")
    )

    const result = computed<BlockDataMap[K] | null>(
        () => data.value?.[block] ?? null
    )

    return {
        result,
        pending,
        error,
    }
}

