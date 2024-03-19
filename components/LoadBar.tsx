import React, {useCallback, useEffect, useRef} from "react";
import "../src/styles/load-bar.module.scss";

interface propTypes {
    widthPercentage: number,
    updatePercentage: (percent: number) => void
}
const LoadBar:React.FC<propTypes> = ({ widthPercentage, updatePercentage }) => {
    let loadBarElement = useRef<HTMLElement | null>(null);

    let incrementPercentage = useCallback(() => {
       setTimeout(function () {
           updatePercentage(widthPercentage + .5)
       }, 150)
    }, [widthPercentage])
    useEffect(() => {
        if (widthPercentage >= 0 && widthPercentage <= 100) {
            incrementPercentage()
        }
    }, [widthPercentage])

    useEffect(function () {
        console.log('Load bar mounted')
    }, [])

    useEffect(() => {
        if (loadBarElement.current ) {
            let parentElement = loadBarElement.current?.parentElement;

            if (parentElement && !parentElement.classList.contains('relative')) {
                parentElement.classList.add('relative')
            }
        }

        return () => {
            if (loadBarElement.current ) {
                let parentElement = loadBarElement.current?.parentElement;

                if (parentElement && parentElement.classList.contains('relative')) {
                    parentElement.classList.remove('relative')
                }
            }

        }

    }, [loadBarElement.current])
    return <div className={'load-bar'}
                ref={el => loadBarElement.current = el}
                style={{
                    width: `${widthPercentage}%`
                }}
    >

    </div>
}

export default LoadBar
