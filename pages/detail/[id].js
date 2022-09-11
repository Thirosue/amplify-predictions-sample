import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { DataStore } from 'aws-amplify';
import { Picture } from '../../src/models';
import { Predictions } from '@aws-amplify/predictions';
import {
    TallCard
} from '../../src/ui-components';

export default function Home() {
    const router = useRouter()
    const { id } = router.query
    const [picture, setPicture] = useState(null)

    useEffect(() => {
        if (id) {
            DataStore.query(Picture, id).then(setPicture)
        }
    }, [id])

    const [labels, setLabels] = useState([]);
    useEffect(() => {
        if (picture && picture.Name) {
            fetch(picture.ImageUrl)
                .then(response => response.blob())
                .then((myBlob) => {
                    Predictions.identify({
                        labels: {
                            source: {
                                file: myBlob,
                            },
                            type: "LABELS"
                        }
                    })
                        .then(({ labels }) => {
                            const entities = labels.map(({ name, metadata }) => ({
                                name: name,
                                confidence: metadata.confidence,
                            }));
                            setLabels(entities)
                        })
                        .catch(err => console.log({ err }));
                });
        }
    }, [picture])

    return (
        <>
            <div className="m-4 text-3xl font-bold">
                id: {id}
            </div>
            <div className="m-12">
                {picture && <TallCard picture={picture} />}
            </div>
            <div className="m-12 text-2xl">
                <ul className="list-disc">
                    {labels.map((label) => <li key={label.name}>{label.name}  適合度: {label.confidence} %</li>)}
                </ul>
            </div>
        </>
    )
}