import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <div className="m-4 text-3xl font-bold">
                id: {id}
            </div>
        </>
    )
}